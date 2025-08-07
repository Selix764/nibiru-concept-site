import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ServicesSection = styled.section`
  padding: 120px 0;
  background: linear-gradient(135deg, var(--darker-bg) 0%, var(--dark-bg) 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 30% 30%, rgba(255, 0, 128, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 70% 70%, rgba(0, 255, 255, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const ServicesContainer = styled.div`
  position: relative;
  z-index: 2;
`;

const ServicesHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 4rem;
`;

const ServicesTitle = styled.h2`
  font-family: 'Orbitron', monospace;
  font-size: 3.5rem;
  font-weight: 900;
  background: linear-gradient(45deg, var(--neon-pink), var(--neon-violet), var(--neon-blue));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
  text-shadow: 0 0 30px rgba(255, 0, 128, 0.5);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const ServicesSubtitle = styled.p`
  font-size: 1.3rem;
  color: var(--gray);
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.8;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ServiceCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 25px;
  padding: 3rem 2rem;
  text-align: center;
  transition: all 0.4s ease;
  backdrop-filter: blur(15px);
  position: relative;
  overflow: hidden;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transition: left 0.6s ease;
  }

  &:hover::before {
    left: 100%;
  }

  &:hover {
    transform: translateY(-15px) scale(1.02);
    border-color: var(--neon-pink);
    box-shadow: 
      0 25px 50px rgba(255, 0, 128, 0.2),
      0 0 40px rgba(255, 0, 128, 0.3);
  }
`;

const ServiceIcon = styled.div`
  width: 100px;
  height: 100px;
  margin: 0 auto 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  position: relative;
  background: linear-gradient(135deg, var(--neon-pink), var(--neon-violet));
  box-shadow: 0 0 30px rgba(255, 0, 128, 0.5);

  &::before {
    content: '';
    position: absolute;
    inset: 3px;
    background: var(--dark-bg);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  span {
    position: relative;
    z-index: 2;
  }
`;

const ServiceTitle = styled.h3`
  font-family: 'Orbitron', monospace;
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--white);
  margin-bottom: 1rem;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
`;

const ServiceDescription = styled.p`
  color: var(--gray);
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;
`;

const ServiceFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;
`;

const ServiceFeature = styled.li`
  color: var(--white);
  font-size: 1rem;
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;

  &::before {
    content: '✦';
    position: absolute;
    left: 0;
    color: var(--neon-pink);
    font-weight: bold;
  }
`;

const PremiumBadge = styled.span`
  display: inline-block;
  padding: 0.4rem 1.2rem;
  background: linear-gradient(45deg, var(--neon-pink), var(--neon-violet));
  color: var(--white);
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 0 20px rgba(255, 0, 128, 0.4);
  margin-top: 1rem;
`;

const services = [
  {
    id: 1,
    title: 'Club de Noapte Premium',
    description: 'Experiența ultimate de viață de noapte cu cele mai noi tendințe în muzică electronică',
    icon: '🎵',
    features: [
      'DJ-uri internaționali',
      'Sistem audio de ultimă generație',
      'Atmosferă futuristă',
      'Parcare VIP'
    ],
    premium: true
  },
  {
    id: 2,
    title: 'Restaurant Gourmet',
    description: 'Bucătărie de top cu ingrediente premium și preparate exclusive',
    icon: '🍽️',
    features: [
      'Chef internațional',
      'Ingrediente fresh',
      'Meniu sezonier',
      'Vinuri premium'
    ],
    premium: true
  },
  {
    id: 3,
    title: 'Lounge Exclusiv',
    description: 'Spațiu privat pentru evenimente corporative și petreceri private',
    icon: '💎',
    features: [
      'Capacitate 50-100 persoane',
      'Servicii de catering',
      'Decor personalizat',
      'Staff dedicat'
    ],
    premium: false
  },
  {
    id: 4,
    title: 'Terasă Panoramică',
    description: 'Vedere spectaculoasă asupra mării cu atmosferă relaxantă',
    icon: '🌅',
    features: [
      'Vedere 360°',
      'Cocktail-uri exclusive',
      'Atmosferă romantică',
      'Rezervări private'
    ],
    premium: false
  },
  {
    id: 5,
    title: 'Spațiu Evenimente',
    description: 'Organizăm evenimente de toate tipurile cu servicii complete',
    icon: '🎉',
    features: [
      'Nunți și botezuri',
      'Evenimente corporative',
      'Petreceri private',
      'Servicii complete'
    ],
    premium: true
  },
  {
    id: 6,
    title: 'Servicii VIP',
    description: 'Experiență personalizată pentru clienții noștri premium',
    icon: '👑',
    features: [
      'Concierge personal',
      'Rezervări prioritare',
      'Servicii exclusive',
      'Acces VIP'
    ],
    premium: true
  }
];

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  } as const;

  return (
    <ServicesSection id="services">
      <ServicesContainer className="container">
        <ServicesHeader
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <ServicesTitle>Ce Oferim</ServicesTitle>
          <ServicesSubtitle>
            Descoperă gama completă de servicii premium și experiențe exclusive pe care le oferim la NIBIRU
          </ServicesSubtitle>
        </ServicesHeader>

        <ServicesGrid
          ref={ref}
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <ServiceIcon>
                <span>{service.icon}</span>
              </ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
              <ServiceFeatures>
                {service.features.map((feature, index) => (
                  <ServiceFeature key={index}>{feature}</ServiceFeature>
                ))}
              </ServiceFeatures>
              {service.premium && <PremiumBadge>Premium</PremiumBadge>}
            </ServiceCard>
          ))}
        </ServicesGrid>
      </ServicesContainer>
    </ServicesSection>
  );
};

export default Services; 