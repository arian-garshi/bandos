import { Target, Palette, TrendingUp } from 'lucide-react';
import PageSection from './shared/PageSection';
import IconTextItem from './shared/IconTextItem';

// All styled components replaced with reusable components!

const HvaViGjorSection = () => {
  const processes = [
    {
      icon: Target,
      title: "Fra idé til første versjon",
      description: "Vi starter med målet ditt og oversetter det til en smal første versjon som kan testes raskt. Unødvendig kompleksitet venter til vi ser effekt."
    },
    {
      icon: Palette,
      title: "Design og utvikling",
      description: "Vi designer klare brukerflyter og grensesnitt, bygger på moderne rammeverk og kobler til et enkelt CMS når det trengs. Hastighet, sikkerhet og tilgjengelighet er standard."
    },
    {
      icon: TrendingUp,
      title: "Lansering og forbedring",
      description: "Etter lansering følger vi tallene, fikser feil raskt og prioriterer endringer som faktisk flytter nålen. AI brukes der det gir bedre resultat, ikke for pynt."
    }
  ];

  return (
    <PageSection title="Hva vi gjør" maxWidth={800}>
      {processes.map((process, index) => (
        <IconTextItem
          key={index}
          icon={process.icon}
          title={process.title}
          description={process.description}
          layout="horizontal"
          iconStyle="simple"
        />
      ))}
    </PageSection>
  );
};

export default HvaViGjorSection;
