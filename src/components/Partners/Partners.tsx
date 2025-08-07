import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const PartnersSection = styled.section`
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
      radial-gradient(circle at 20% 20%, rgba(255, 0, 128, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(138, 43, 226, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const PartnersContainer = styled.div`
  position: relative;
  z-index: 2;
`;

const PartnersHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 4rem;
`;

const PartnersTitle = styled.h2`
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

const PartnersSubtitle = styled.p`
  font-size: 1.3rem;
  color: var(--gray);
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.8;
`;

const PartnersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.5rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const PartnerCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2.5rem 2rem;
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
    transform: translateY(-10px) scale(1.02);
    border-color: var(--neon-pink);
    box-shadow: 
      0 20px 40px rgba(255, 0, 128, 0.2),
      0 0 30px rgba(255, 0, 128, 0.3);
  }
`;

const PartnerLogo = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: bold;
  position: relative;
  background: linear-gradient(135deg, var(--neon-pink), var(--neon-violet));
  box-shadow: 0 0 20px rgba(255, 0, 128, 0.5);

  &::before {
    content: '';
    position: absolute;
    inset: 2px;
    background: var(--dark-bg);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  span {
    position: relative;
    z-index: 2;
    background: linear-gradient(45deg, var(--neon-pink), var(--neon-violet));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const PartnerName = styled.h3`
  font-family: 'Orbitron', monospace;
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--white);
  margin-bottom: 0.5rem;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
`;

const PartnerDescription = styled.p`
  color: var(--gray);
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const PartnerCategory = styled.span`
  display: inline-block;
  padding: 0.3rem 1rem;
  background: linear-gradient(45deg, var(--neon-blue), var(--neon-violet));
  color: var(--white);
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.3);
`;

const partners = [
  {
    id: 1,
    name: 'La Terasa',
    description: 'Restaurant premium cu vedere panoramică asupra mării',
    category: 'Restaurant',
    icon: '🍽️'
  },
  {
    id: 2,
    name: 'Sky Lounge',
    description: 'Bar de lux cu atmosferă sofisticată și cocktail-uri exclusive',
    category: 'Bar',
    icon: '🍸'
  },
  {
    id: 3,
    name: 'Ocean Club',
    description: 'Club VIP cu cele mai noi tendințe în muzică electronică',
    category: 'Club',
    icon: '🎵'
  },
  {
    id: 4,
    name: 'Crystal Lounge',
    description: 'Lounge exclusiv cu design modern și servicii premium',
    category: 'Lounge',
    icon: '💎'
  },
  {
    id: 5,
    name: 'Sunset Terrace',
    description: 'Terasă panoramică cu cea mai frumoasă priveliște asupra apusului',
    category: 'Terasă',
    icon: '🌅'
  },
  {
    id: 6,
    name: 'Elite Catering',
    description: 'Servicii de catering de top pentru evenimente exclusive',
    category: 'Catering',
    icon: '👨‍🍳'
  }
];

const Partners: React.FC = () => {
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
        ease: "easeOut"
      }
    }
  } as const;

  return (
    <PartnersSection id="partners">
      <PartnersContainer className="container">
        <PartnersHeader
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <PartnersTitle>Parteneri Confirmați</PartnersTitle>
          <PartnersSubtitle>
            Colaborăm cu cele mai prestigioase restaurante, baruri și cluburi din Mamaia pentru a oferi o experiență completă și memorabilă
          </PartnersSubtitle>
        </PartnersHeader>

        <PartnersGrid
          ref={ref}
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {partners.map((partner) => (
            <PartnerCard
              key={partner.id}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <PartnerLogo>
                <span>{partner.icon}</span>
              </PartnerLogo>
              <PartnerName>{partner.name}</PartnerName>
              <PartnerDescription>{partner.description}</PartnerDescription>
              <PartnerCategory>{partner.category}</PartnerCategory>
            </PartnerCard>
          ))}
        </PartnersGrid>
      </PartnersContainer>
    </PartnersSection>
  );
};

export default Partners; 