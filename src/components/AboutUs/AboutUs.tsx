import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutUsSection = styled.section`
  padding: 140px 0;
  background: linear-gradient(135deg, #000000 0%, #0a0a0a 25%, #1a0a1a 50%, #0a0a0a 75%, #000000 100%);
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
      radial-gradient(circle at 20% 20%, rgba(255, 0, 128, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(138, 43, 226, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 40% 60%, rgba(0, 255, 255, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 60% 40%, rgba(255, 215, 0, 0.08) 0%, transparent 50%);
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="stars" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="0.5" fill="rgba(255,255,255,0.3)"/></pattern></defs><rect width="100" height="100" fill="url(%23stars)"/></svg>');
    opacity: 0.3;
    pointer-events: none;
  }
`;

const AboutUsContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 30px;
  position: relative;
  z-index: 2;
`;

const AboutUsHeader = styled.div`
  text-align: center;
  margin-bottom: 6rem;
`;

const AboutUsTitle = styled(motion.h2)`
  font-family: 'Montserrat', sans-serif;
  font-size: 4.5rem;
  font-weight: 900;
  background: linear-gradient(135deg, #FF7DDC 0%, #8A2BE2 50%, #00FFFF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  text-shadow: 0 0 30px rgba(255, 125, 220, 0.5);

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const AboutUsSubtitle = styled(motion.p)`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5rem;
  color: var(--neon-blue);
  text-shadow: 0 0 20px var(--neon-blue);
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const AboutUsContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
`;

const AboutUsText = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const AboutUsCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 30px;
  padding: 3rem;
  backdrop-filter: blur(20px);
  position: relative;
  overflow: hidden;
  transition: all 0.4s ease;

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

  &:hover {
    transform: translateY(-10px);
    border-color: rgba(255, 125, 220, 0.3);
    box-shadow: 
      0 20px 40px rgba(0, 0, 0, 0.3),
      0 0 30px rgba(255, 125, 220, 0.2);
  }

  &:hover::before {
    left: 100%;
  }

  h3 {
    font-family: 'Montserrat', sans-serif;
    font-size: 2rem;
    font-weight: 700;
    background: linear-gradient(135deg, #FF7DDC, #8A2BE2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 1.5rem;
    text-shadow: 0 0 20px rgba(255, 125, 220, 0.3);
  }

  p {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.1rem;
    line-height: 1.8;
    color: var(--gray);
    margin-bottom: 1.5rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .highlight {
    color: var(--neon-pink);
    font-weight: 600;
  }
`;

const AboutUsStats = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled(motion.div)`
  background: linear-gradient(135deg, rgba(255, 125, 220, 0.1), rgba(138, 43, 226, 0.1));
  border: 1px solid rgba(255, 125, 220, 0.2);
  border-radius: 25px;
  padding: 2.5rem 2rem;
  text-align: center;
  backdrop-filter: blur(15px);
  position: relative;
  overflow: hidden;
  transition: all 0.4s ease;

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

  &:hover {
    transform: translateY(-8px) scale(1.02);
    border-color: rgba(255, 125, 220, 0.4);
    box-shadow: 
      0 15px 30px rgba(0, 0, 0, 0.3),
      0 0 25px rgba(255, 125, 220, 0.3);
  }

  &:hover::before {
    left: 100%;
  }

  .stat-number {
    font-family: 'Montserrat', sans-serif;
    font-size: 3.5rem;
    font-weight: 900;
    background: linear-gradient(135deg, #FF7DDC, #8A2BE2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 0.8rem;
    text-shadow: 0 0 20px rgba(255, 125, 220, 0.5);
  }

  .stat-label {
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    font-weight: 500;
    color: var(--gray);
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }
`;

const AboutUsVisual = styled(motion.div)`
  position: relative;
  height: 600px;
  background: linear-gradient(135deg, 
    rgba(255, 0, 128, 0.1) 0%, 
    rgba(138, 43, 226, 0.1) 25%,
    rgba(0, 255, 255, 0.1) 50%,
    rgba(255, 215, 0, 0.1) 75%,
    rgba(255, 0, 128, 0.1) 100%);
  border-radius: 40px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
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
    transition: left 0.8s ease;
  }

  &:hover::before {
    left: 100%;
  }

  .visual-content {
    text-align: center;
    z-index: 2;
  }

  .cosmic-icon {
    font-size: 4rem;
    margin-bottom: 2rem;
    animation: cosmicFloat 6s ease-in-out infinite;
  }

  .visual-title {
    font-family: 'Montserrat', sans-serif;
    font-size: 2rem;
    font-weight: 700;
    color: var(--neon-pink);
    margin-bottom: 1rem;
    text-shadow: 0 0 20px rgba(255, 125, 220, 0.5);
  }

  .visual-subtitle {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.2rem;
    color: var(--neon-blue);
    margin-bottom: 1rem;
    text-shadow: 0 0 15px var(--neon-blue);
  }

  .visual-description {
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    color: var(--gray);
    line-height: 1.6;
  }

  .floating-elements {
    position: absolute;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  .floating-element {
    position: absolute;
    width: 6px;
    height: 6px;
    background: var(--neon-pink);
    border-radius: 50%;
    animation: float 8s ease-in-out infinite;
    box-shadow: 0 0 10px var(--neon-pink);
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
    background: var(--neon-blue);
    box-shadow: 0 0 10px var(--neon-blue);
  }

  .floating-element:nth-child(3) {
    top: 80%;
    left: 30%;
    animation-delay: 4s;
    background: var(--neon-violet);
    box-shadow: 0 0 10px var(--neon-violet);
  }

  .floating-element:nth-child(4) {
    top: 30%;
    left: 70%;
    animation-delay: 1s;
    background: #FFD700;
    box-shadow: 0 0 10px #FFD700;
  }

  .floating-element:nth-child(5) {
    top: 70%;
    left: 60%;
    animation-delay: 3s;
    background: #00FFFF;
    box-shadow: 0 0 10px #00FFFF;
  }

  @keyframes cosmicFloat {
    0%, 100% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
      transform: translateY(-20px) rotate(180deg);
    }
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0px) scale(1);
      opacity: 0.7;
    }
    50% {
      transform: translateY(-30px) scale(1.2);
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
    hidden: { opacity: 0, y: 50 },
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
            initial={{ opacity: 0, y: -50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Despre Nibiru
          </AboutUsTitle>
          <AboutUsSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            Unde cosmosul întâlnește luxul, iar petrecerile devin experiențe cosmice
          </AboutUsSubtitle>
        </AboutUsHeader>

        <AboutUsContent>
          <AboutUsText
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <AboutUsCard variants={itemVariants}>
              <h3>Viziunea Cosmică</h3>
              <p>
                <span className="highlight">Nibiru</span> nu este doar un club de noapte - este o 
                <span className="highlight"> destinație cosmică</span> care redefinește conceptul de viață de noapte premium. 
                Inspirat din atmosfera exclusivistă a <span className="highlight">Mykonos</span> și 
                <span className="highlight"> St. Tropez</span>, am creat un univers unde luxul întâlnește energia cosmică.
              </p>
              <p>
                Fiecare element al designului nostru a fost gândit pentru a transporta oaspeții 
                într-o dimensiune paralelă, unde petrecerile devin <span className="highlight">ritualuri cosmice</span> 
                și fiecare moment este o experiență memorabilă.
              </p>
            </AboutUsCard>

            <AboutUsCard variants={itemVariants}>
              <h3>Experiența Premium</h3>
              <p>
                Situat în inima <span className="highlight">Promenadei Mamaia</span>, Nibiru oferă o combinație perfectă 
                între locația de lux și atmosfera futuristă. Cu o capacitate de până la 
                <span className="highlight"> 500 de oaspeți</span>, clubul nostru oferă spații multiple pentru fiecare tip de experiență.
              </p>
              <p>
                De la zona <span className="highlight">VIP exclusivă</span> până la terasa cosmică cu vedere la mare, 
                fiecare colț al Nibiru a fost proiectat pentru a crea momente de neuitat.
              </p>
            </AboutUsCard>

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

          <AboutUsVisual
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          >
            <div className="floating-elements">
              <div className="floating-element"></div>
              <div className="floating-element"></div>
              <div className="floating-element"></div>
              <div className="floating-element"></div>
              <div className="floating-element"></div>
            </div>
            <div className="visual-content">
              <div className="cosmic-icon">🌟</div>
              <div className="visual-title">Experiența Nibiru</div>
              <div className="visual-subtitle">Atmosferă Cosmică Premium</div>
              <div className="visual-description">
                Fiecare seară la Nibiru este o călătorie în cosmos,<br />
                unde realitatea se împlește cu visul și<br />
                petrecerile devin experiențe de neuitat.
              </div>
            </div>
          </AboutUsVisual>
        </AboutUsContent>
      </AboutUsContainer>
    </AboutUsSection>
  );
};

export default AboutUs; 