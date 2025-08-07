import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutUsSection = styled.section`
  padding: 120px 0;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a0a1a 50%, #0a0a0a 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 20% 80%, rgba(255, 0, 128, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(138, 43, 226, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 40% 40%, rgba(0, 255, 255, 0.05) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const AboutUsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 2;
`;

const AboutUsHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const AboutUsTitle = styled(motion.h2)`
  font-family: 'Montserrat', sans-serif;
  font-size: 3.5rem;
  font-weight: 800;
  color: var(--neon-pink);
  text-shadow: 0 0 20px rgba(255, 0, 128, 0.5);
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const AboutUsSubtitle = styled(motion.p)`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.3rem;
  color: var(--neon-blue);
  text-shadow: 0 0 15px var(--neon-blue);
  opacity: 0.9;
`;

const AboutUsContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const AboutUsText = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const AboutUsParagraph = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  backdrop-filter: blur(15px);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transition: left 0.5s ease;
  }

  &:hover::before {
    left: 100%;
  }

  h3 {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--neon-pink);
    margin-bottom: 1rem;
    text-shadow: 0 0 10px rgba(255, 0, 128, 0.3);
  }

  p {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.1rem;
    line-height: 1.8;
    color: var(--gray);
    margin-bottom: 1rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const AboutUsStats = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  backdrop-filter: blur(15px);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transition: left 0.5s ease;
  }

  &:hover::before {
    left: 100%;
  }

  .stat-number {
    font-family: 'Montserrat', sans-serif;
    font-size: 3rem;
    font-weight: 800;
    color: var(--neon-pink);
    text-shadow: 0 0 15px rgba(255, 0, 128, 0.5);
    margin-bottom: 0.5rem;
  }

  .stat-label {
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    color: var(--gray);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
`;

const AboutUsImage = styled(motion.div)`
  position: relative;
  height: 500px;
  background: linear-gradient(135deg, 
    rgba(255, 0, 128, 0.1) 0%, 
    rgba(138, 43, 226, 0.1) 50%, 
    rgba(0, 255, 255, 0.1) 100%);
  border-radius: 25px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transition: left 0.5s ease;
  }

  &:hover::before {
    left: 100%;
  }

  .image-placeholder {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.2rem;
    color: var(--gray);
    text-align: center;
    z-index: 2;
  }

  .cosmic-elements {
    position: absolute;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  .floating-element {
    position: absolute;
    width: 4px;
    height: 4px;
    background: var(--neon-pink);
    border-radius: 50%;
    animation: float 6s ease-in-out infinite;
  }

  .floating-element:nth-child(1) {
    top: 20%;
    left: 20%;
    animation-delay: 0s;
  }

  .floating-element:nth-child(2) {
    top: 60%;
    left: 80%;
    animation-delay: 2s;
  }

  .floating-element:nth-child(3) {
    top: 80%;
    left: 30%;
    animation-delay: 4s;
  }

  .floating-element:nth-child(4) {
    top: 30%;
    left: 70%;
    animation-delay: 1s;
  }

  .floating-element:nth-child(5) {
    top: 70%;
    left: 60%;
    animation-delay: 3s;
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0px) scale(1);
      opacity: 0.7;
    }
    50% {
      transform: translateY(-20px) scale(1.2);
      opacity: 1;
    }
  }
`;

const AboutUs: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <AboutUsSection id="about">
      <AboutUsContainer ref={ref}>
        <AboutUsHeader>
          <AboutUsTitle
            initial={{ opacity: 0, y: -30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Despre Nibiru
          </AboutUsTitle>
          <AboutUsSubtitle
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Destinația cosmică de petreceri din Mamaia
          </AboutUsSubtitle>
        </AboutUsHeader>

        <AboutUsContent>
          <AboutUsText
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <AboutUsParagraph variants={itemVariants}>
              <h3>Viziunea Noastră</h3>
              <p>
                Nibiru nu este doar un club de noapte - este o experiență cosmică care redefinește 
                conceptul de viață de noapte premium. Inspirat din atmosfera exclusivistă a Mykonos 
                și St. Tropez, am creat un univers unde luxul întâlnește energia cosmică.
              </p>
              <p>
                Fiecare element al designului nostru a fost gândit pentru a transporta oaspeții 
                într-o dimensiune paralelă, unde petrecerile devin ritualuri cosmice și fiecare 
                moment este o experiență memorabilă.
              </p>
            </AboutUsParagraph>

            <AboutUsParagraph variants={itemVariants}>
              <h3>Experiența Nibiru</h3>
              <p>
                Situat în inima Promenadei Mamaia, Nibiru oferă o combinație perfectă între 
                locația de lux și atmosfera futuristă. Cu o capacitate de până la 500 de oaspeți, 
                clubul nostru oferă spații multiple pentru fiecare tip de experiență.
              </p>
              <p>
                De la zona VIP exclusivă până la terasa cosmică cu vedere la mare, fiecare 
                colț al Nibiru a fost proiectat pentru a crea momente de neuitat.
              </p>
            </AboutUsParagraph>

            <AboutUsStats
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <StatCard variants={statsVariants}>
                <div className="stat-number">500+</div>
                <div className="stat-label">Oaspeți Capacitate</div>
              </StatCard>
              <StatCard variants={statsVariants}>
                <div className="stat-number">24/7</div>
                <div className="stat-label">Experiență Cosmică</div>
              </StatCard>
              <StatCard variants={statsVariants}>
                <div className="stat-number">50+</div>
                <div className="stat-label">Evenimente Anual</div>
              </StatCard>
              <StatCard variants={statsVariants}>
                <div className="stat-number">100%</div>
                <div className="stat-label">Satisfacție Garantată</div>
              </StatCard>
            </AboutUsStats>
          </AboutUsText>

          <AboutUsImage
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <div className="cosmic-elements">
              <div className="floating-element"></div>
              <div className="floating-element"></div>
              <div className="floating-element"></div>
              <div className="floating-element"></div>
              <div className="floating-element"></div>
            </div>
            <div className="image-placeholder">
              <div>🌟</div>
              <div>Experiența Nibiru</div>
              <div>Atmosferă Cosmică Premium</div>
            </div>
          </AboutUsImage>
        </AboutUsContent>
      </AboutUsContainer>
    </AboutUsSection>
  );
};

export default AboutUs; 