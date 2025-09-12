module.exports = async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  if (req.method !== 'POST') return res.status(405).send('Method not allowed');
  const { name, email, company, phone, message } = req.body || {};
  if (!email || !message) return res.status(400).json({ error: 'Missing fields' });

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

  try {
    const resp = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
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
      })
    });
    
    if (!resp.ok) {
      const text = await resp.text();
      console.error('Resend API error:', {
        status: resp.status,
        statusText: resp.statusText,
        responseBody: text,
        requestPayload: { from: fromEmail, to: toEmail, subject: `Ny henvendelse fra ${name || 'Ukjent'} - Bandos` }
      });
      return res.status(502).json({ 
        error: 'Failed to send email', 
        detail: `Email service responded with ${resp.status}: ${text}` 
      });
    }
    
    const result = await resp.json();
    console.log('Email sent successfully:', result);
    return res.status(200).json({ ok: true, messageId: result.id });
  } catch (err) {
    console.error('Server error:', {
      message: err.message,
      stack: err.stack,
      name: err.name
    });
    return res.status(500).json({ 
      error: 'Internal server error', 
      detail: process.env.NODE_ENV === 'development' ? err.message : 'Please try again later'
    });
  }
}
