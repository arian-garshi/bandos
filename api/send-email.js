module.exports = async (req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, company, phone, message } = req.body || {};
    
    if (!email || !message) {
      return res.status(400).json({ error: 'Missing required fields: email and message' });
    }

    // Get environment variables
    const resendApiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.FROM_EMAIL;
    const toEmail = process.env.TO_EMAIL;
    
    if (!resendApiKey) {
      console.error('RESEND_API_KEY is not set');
      return res.status(500).json({ error: 'Email service not configured. Missing API key.' });
    }
    
    if (!fromEmail || !toEmail) {
      console.error('FROM_EMAIL or TO_EMAIL is not set', { fromEmail: !!fromEmail, toEmail: !!toEmail });
      return res.status(500).json({ error: 'Email service not configured. Missing email addresses.' });
    }
    
    console.log('Environment check:', {
      hasApiKey: !!resendApiKey,
      fromEmail,
      toEmail,
      requestBody: { name, email, company, phone, message }
    });

    const emailPayload = {
      from: fromEmail,
      to: toEmail,
      subject: `Ny henvendelse fra ${name || 'Ukjent'} - Bandos`,
      html: `
        <h2>Ny henvendelse fra kontaktskjema</h2>
        <p><strong>Navn:</strong> ${name || 'Ikke oppgitt'}</p>
        <p><strong>E-post:</strong> ${email}</p>
        ${company ? `<p><strong>Bedrift:</strong> ${company}</p>` : ''}
        ${phone ? `<p><strong>Telefon:</strong> ${phone}</p>` : ''}
        <p><strong>Melding:</strong></p>
        <p>${(message || '').replace(/\n/g,'<br>')}</p>
        <hr>
        <p><small>Sendt fra Bandos kontaktskjema</small></p>
      `
    };

    // Use dynamic import for fetch if not available
    let fetchFn = globalThis.fetch;
    if (!fetchFn) {
      const { default: fetch } = await import('node-fetch');
      fetchFn = fetch;
    }

    const response = await fetchFn('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(emailPayload)
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Resend API error:', {
        status: response.status,
        statusText: response.statusText,
        responseBody: errorText,
        requestPayload: emailPayload
      });
      return res.status(502).json({ 
        error: 'Failed to send email', 
        detail: `Email service responded with ${response.status}: ${errorText}` 
      });
    }
    
    const result = await response.json();
    console.log('Email sent successfully:', result);
    return res.status(200).json({ ok: true, messageId: result.id });
    
  } catch (error) {
    console.error('Server error:', {
      message: error.message,
      stack: error.stack,
      name: error.name
    });
    return res.status(500).json({ 
      error: 'Internal server error', 
      detail: process.env.NODE_ENV === 'development' ? error.message : 'Please try again later'
    });
  }
};