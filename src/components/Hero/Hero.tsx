import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const Planet = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  animation: float 6s ease-in-out infinite;
`;

const NibiruPlanet = styled(Planet)`
  background: radial-gradient(circle at 30% 30%, 
    #ff69b4 0%, 
    #ff1493 20%, 
    #ff0080 40%, 
    #c71585 60%, 
    #8b008b 80%, 
    #4b0082 100%);
  box-shadow: 
    0 0 60px rgba(255, 0, 128, 0.8),
    0 0 120px rgba(255, 0, 128, 0.4),
    inset 0 0 50px rgba(255, 255, 255, 0.1);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 15%;
    left: 25%;
    width: 20%;
    height: 15%;
    background: radial-gradient(ellipse, rgba(255, 255, 255, 0.3), transparent);
    border-radius: 50%;
    filter: blur(2px);
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 20%;
    right: 30%;
    width: 15%;
    height: 10%;
    background: radial-gradient(ellipse, rgba(255, 255, 255, 0.2), transparent);
    border-radius: 50%;
    filter: blur(1px);
  }
`;

const SaturnPlanet = styled(Planet)`
  background: radial-gradient(circle at 40% 40%, 
    #ffd700 0%, 
    #ffa500 30%, 
    #ff8c00 60%, 
    #ff4500 80%, 
    #8b4513 100%);
  box-shadow: 
    0 0 50px rgba(255, 215, 0, 0.6),
    0 0 100px rgba(255, 165, 0, 0.3),
    inset 0 0 40px rgba(255, 255, 255, 0.1);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 20%;
    left: 30%;
    width: 25%;
    height: 20%;
    background: radial-gradient(ellipse, rgba(255, 255, 255, 0.4), transparent);
    border-radius: 50%;
    filter: blur(3px);
  }
`;

const SaturnRings = styled.div`
  position: absolute;
  width: 200%;
  height: 200%;
  top: -50%;
  left: -50%;
  border-radius: 50%;
  border: 4px solid transparent;
  border-top: 4px solid rgba(255, 215, 0, 0.8);
  border-bottom: 4px solid rgba(255, 165, 0, 0.6);
  transform: rotateX(75deg);
  animation: saturn-ring-rotate 20s linear infinite;
  
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 2px solid transparent;
    border-top: 2px solid rgba(255, 215, 0, 0.4);
    border-bottom: 2px solid rgba(255, 165, 0, 0.3);
    transform: scale(0.7);
  }
  
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 1px solid transparent;
    border-top: 1px solid rgba(255, 215, 0, 0.2);
    border-bottom: 1px solid rgba(255, 165, 0, 0.2);
    transform: scale(1.3);
  }
`;

const VioletPlanet = styled(Planet)`
  background: radial-gradient(circle at 35% 35%, 
    #9370db 0%, 
    #8a2be2 30%, 
    #7b68ee 60%, 
    #6a5acd 80%, 
    #483d8b 100%);
  box-shadow: 
    0 0 40px rgba(138, 43, 226, 0.7),
    0 0 80px rgba(138, 43, 226, 0.3),
    inset 0 0 30px rgba(255, 255, 255, 0.1);
  
  &::before {
    content: '';
    position: absolute;
    top: 25%;
    left: 35%;
    width: 18%;
    height: 12%;
    background: radial-gradient(ellipse, rgba(255, 255, 255, 0.3), transparent);
    border-radius: 50%;
    filter: blur(2px);
  }
`;

const Planet1 = styled(NibiruPlanet)`
  width: 180px;
  height: 180px;
  top: 15%;
  right: 15%;
  animation-delay: 0s;
`;

const Planet2 = styled(SaturnPlanet)`
  width: 160px;
  height: 160px;
  bottom: 50%;
  left: 15%;
  animation-delay: 3s;
`;

const Planet3 = styled(VioletPlanet)`
  width: 100px;
  height: 100px;
  top: 50%;
  right: 25%;
  animation-delay: 1.5s;
`;

const Stars = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(2px 2px at 20px 30px, #eee, transparent),
    radial-gradient(2px 2px at 40px 70px, rgba(255,255,255,0.8), transparent),
    radial-gradient(1px 1px at 90px 40px, #fff, transparent),
    radial-gradient(1px 1px at 130px 80px, rgba(255,255,255,0.6), transparent),
    radial-gradient(2px 2px at 160px 30px, #ddd, transparent),
    radial-gradient(1px 1px at 180px 60px, rgba(255,255,255,0.7), transparent),
    radial-gradient(2px 2px at 220px 20px, #ccc, transparent),
    radial-gradient(1px 1px at 250px 90px, rgba(255,255,255,0.5), transparent),
    radial-gradient(2px 2px at 280px 50px, #eee, transparent),
    radial-gradient(1px 1px at 300px 10px, rgba(255,255,255,0.9), transparent);
  background-repeat: repeat;
  background-size: 300px 150px;
  animation: twinkle 4s ease-in-out infinite;
`;

const HeroContent = styled(motion.div)`
  text-align: center;
  z-index: 2;
  max-width: 800px;
  padding: 0 20px;
`;

const HeroTitle = styled(motion.h1)`
  font-family: 'Orbitron', monospace;
  font-size: 5rem;
  font-weight: 900;
  color: var(--white);
  text-shadow: 
    0 0 20px var(--neon-pink),
    0 0 40px var(--neon-pink),
    0 0 60px var(--neon-pink);
  margin-bottom: 1rem;
  animation: title-glow 3s ease-in-out infinite alternate;

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled(motion.div)`
  font-size: 1.5rem;
  color: var(--neon-blue);
  margin-bottom: 2rem;
  text-shadow: 0 0 15px var(--neon-blue);
`;

const HeroDescription = styled(motion.p)`
  font-size: 1.2rem;
  color: var(--gray);
  margin-bottom: 3rem;
  line-height: 1.8;
`;

const HeroButtons = styled(motion.div)`
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  animation: bounce 2s infinite;
`;

const ScrollArrow = styled.div`
  width: 30px;
  height: 30px;
  border-right: 2px solid var(--neon-pink);
  border-bottom: 2px solid var(--neon-pink);
  transform: rotate(45deg);
`;

const Particle = styled(motion.div)`
  position: absolute;
  width: 2px;
  height: 2px;
  background: var(--neon-blue);
  border-radius: 50%;
  pointer-events: none;
  z-index: 1;
`;

const CursorTrail = styled(motion.div)`
  position: fixed;
  width: 8px;
  height: 8px;
  background: var(--neon-pink);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: screen;
  animation: cursor-trail 0.6s ease-out forwards;
`;

const Hero: React.FC = () => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const [cursorTrails, setCursorTrails] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const createParticle = () => {
      const newParticle = {
        id: Date.now(),
        x: Math.random() * 100,
        y: Math.random() * 100
      };
      setParticles(prev => [...prev, newParticle]);

      setTimeout(() => {
        setParticles(prev => prev.filter(p => p.id !== newParticle.id));
      }, 8000);
    };

    const handleMouseMove = (e: MouseEvent) => {
      // Check if mouse is over navbar
      const navbar = document.querySelector('nav');
      if (navbar) {
        const navbarRect = navbar.getBoundingClientRect();
        const isOverNavbar = e.clientY <= navbarRect.bottom;
        
        if (!isOverNavbar) {
          const newTrail = {
            id: Date.now(),
            x: e.clientX,
            y: e.clientY
          };
          setCursorTrails(prev => [...prev, newTrail]);

          setTimeout(() => {
            setCursorTrails(prev => prev.filter(t => t.id !== newTrail.id));
          }, 600);
        }
      }
    };

    const interval = setInterval(createParticle, 2000);
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearInterval(interval);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleContactClick = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleEventsClick = () => {
    const element = document.querySelector('#events');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <HeroSection id="home" ref={sectionRef}>
      <HeroBackground>
        <Planet1 />
        <Planet2>
          <SaturnRings />
        </Planet2>
        <Planet3 />
        <Stars />
        {particles.map(particle => (
          <Particle
            key={particle.id}
            initial={{ 
              x: `${particle.x}%`, 
              y: `${particle.y}%`,
              opacity: 1,
              scale: 1
            }}
            animate={{
              y: '-100vh',
              opacity: 0,
              scale: 0,
              rotate: 360
            }}
            transition={{
              duration: 8,
              ease: 'linear'
            }}
          />
        ))}
      </HeroBackground>

      {/* Cursor trail effect */}
      {cursorTrails.map(trail => (
        <CursorTrail
          key={trail.id}
          style={{
            left: trail.x - 4,
            top: trail.y - 4
          }}
        />
      ))}

      <HeroContent
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <HeroTitle
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
        >
          NIBIRU
        </HeroTitle>
        
        <HeroSubtitle
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          Destinația Cosmică de Petreceri
        </HeroSubtitle>
        
        <HeroDescription
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          Experiența premium de viață de noapte din Mamaia.<br />
          Atmosferă futuristă, energie cosmică, exclusivitate absolută.
        </HeroDescription>
        
        <HeroButtons
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          <motion.a
            href="#contact"
            className="btn btn-primary"
            onClick={handleContactClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Rezervă Acum
          </motion.a>
          <motion.a
            href="#events"
            className="btn btn-secondary"
            onClick={handleEventsClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Evenimente
          </motion.a>
        </HeroButtons>
      </HeroContent>

      <ScrollIndicator
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3 }}
      >
        <ScrollArrow />
      </ScrollIndicator>
    </HeroSection>
  );
};

export default Hero; 