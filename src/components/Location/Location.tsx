import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const LocationSection = styled.section`
  padding: 120px 0;
  background: linear-gradient(135deg, var(--dark-bg) 0%, var(--darker-bg) 100%);
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
      radial-gradient(circle at 20% 80%, rgba(0, 255, 255, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(138, 43, 226, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const LocationContainer = styled.div`
  position: relative;
  z-index: 2;
`;

const LocationHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 4rem;
`;

const LocationTitle = styled.h2`
  font-family: 'Orbitron', monospace;
  font-size: 3.5rem;
  font-weight: 900;
  background: linear-gradient(45deg, var(--neon-blue), var(--neon-violet), var(--neon-pink));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
  text-shadow: 0 0 30px rgba(0, 255, 255, 0.5);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const LocationSubtitle = styled.p`
  font-size: 1.3rem;
  color: var(--gray);
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.8;
`;

const LocationContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-top: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const LocationText = styled(motion.div)`
  @media (max-width: 768px) {
    order: 2;
  }
`;

const LocationName = styled.h3`
  font-family: 'Orbitron', monospace;
  font-size: 2.5rem;
  color: var(--neon-blue);
  margin-bottom: 1.5rem;
  text-shadow: 0 0 20px rgba(0, 255, 255, 0.6);
`;

const LocationDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 2.5rem;
  color: var(--gray);
`;

const LocationFeatures = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    transform: translateY(-5px);
    border-color: var(--neon-blue);
    box-shadow: 0 10px 30px rgba(0, 255, 255, 0.2);
  }
`;

const FeatureIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--neon-blue), var(--neon-violet));
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
`;

const FeatureTitle = styled.h4`
  font-family: 'Orbitron', monospace;
  font-size: 1.1rem;
  color: var(--white);
  margin-bottom: 0.5rem;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
`;

const FeatureDescription = styled.p`
  color: var(--gray);
  font-size: 0.9rem;
  line-height: 1.6;
`;

const LocationImage = styled(motion.div)`
  position: relative;

  @media (max-width: 768px) {
    order: 1;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  border-radius: 25px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
`;

const ImagePlaceholder = styled.div`
  height: 500px;
  background: linear-gradient(135deg, var(--neon-blue), var(--neon-violet), var(--neon-pink));
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  font-weight: bold;
  font-size: 1.8rem;
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
      radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 70% 70%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    animation: shimmer 3s infinite;
  }
`;

const LocationBadge = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  background: rgba(0, 0, 0, 0.8);
  color: var(--neon-blue);
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: bold;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 255, 255, 0.3);
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.2);
`;

const features = [
  {
    icon: '📍',
    title: 'Locație Strategică',
    description: 'În inima Promenadei Mamaia, cu acces ușor și vizibilitate maximă'
  },
  {
    icon: '🌊',
    title: 'Vedere Panoramică',
    description: 'Priveliști spectaculoase asupra Mării Negre și a promenadei'
  },
  {
    icon: '🚗',
    title: 'Parcare VIP',
    description: 'Parcare dedicată pentru clienții noștri premium'
  },
  {
    icon: '🎵',
    title: 'Acustică Perfectă',
    description: 'Sistem audio de ultimă generație pentru experiența sonică optimă'
  },
  {
    icon: '🌟',
    title: 'Atmosferă Premium',
    description: 'Design futurist și servicii de top pentru o experiență memorabilă'
  },
  {
    icon: '🍸',
    title: 'Bar de Lux',
    description: 'Cocktail-uri exclusive și băuturi premium de la cel mai bun barman'
  }
];

const Location: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  } as const;

  const imageVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  } as const;

  const featureVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  } as const;

  return (
    <LocationSection id="location">
      <LocationContainer className="container">
        <LocationHeader
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <LocationTitle>Locația Perfectă</LocationTitle>
          <LocationSubtitle>
            Descoperă de ce NIBIRU este locația de top pentru experiențe de petreceri premium în Mamaia
          </LocationSubtitle>
        </LocationHeader>

        <LocationContent ref={ref}>
          <LocationText
            variants={textVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <LocationName>Faleza - Promenada Mamaia</LocationName>
            
            <LocationDescription>
              Situat în inima Promenadei Mamaia, Nibiru oferă o experiență de petreceri incomparabilă 
              cu priveliști spectaculoase asupra Mării Negre. Locația strategică asigură accesul ușor 
              și vizibilitatea maximă pentru cei care caută distracția de top în cel mai exclusiv 
              complex de divertisment din România.
            </LocationDescription>
            
            <LocationFeatures>
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  variants={featureVariants}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                >
                  <FeatureIcon>{feature.icon}</FeatureIcon>
                  <FeatureTitle>{feature.title}</FeatureTitle>
                  <FeatureDescription>{feature.description}</FeatureDescription>
                </FeatureCard>
              ))}
            </LocationFeatures>
          </LocationText>
          
          <LocationImage
            variants={imageVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <ImageContainer>
              <ImagePlaceholder>
                Promenada Mamaia
              </ImagePlaceholder>
              <LocationBadge>📍 Locație Premium</LocationBadge>
            </ImageContainer>
          </LocationImage>
        </LocationContent>
      </LocationContainer>
    </LocationSection>
  );
};

export default Location; 