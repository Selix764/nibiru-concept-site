import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const NavContainer = styled(motion.nav)`
  position: fixed;
  top: 0;
  width: 100%;
  background: transparent;
  backdrop-filter: blur(15px);
  border-bottom: 1px solid transparent;
  z-index: 1000;
  transition: all 0.3s ease;
`;

const NavWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  height: 80px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0.5rem;
  border-radius: 15px;
  background: transparent;
  justify-self: start;

  &:hover {
    background: rgba(255, 0, 128, 0.1);
    transform: scale(1.05);
  }
`;

const LogoImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0 0 20px rgba(255, 0, 128, 0.6);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 0 30px rgba(255, 0, 128, 0.8);
    transform: scale(1.05);
  }
`;

const LogoText = styled.div`
  font-family: 'Orbitron', monospace;
  font-size: 1.6rem;
  font-weight: 900;
  color: var(--white);
  text-shadow: 0 0 15px var(--neon-pink), 0 0 25px var(--neon-pink);
  letter-spacing: 2px;
`;

const NavMenu = styled.ul<{ isOpen: boolean }>`
  display: flex;
  list-style: none;
  gap: 3rem;
  justify-self: center;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    position: fixed;
    left: ${props => props.isOpen ? '0' : '-100%'};
    top: 80px;
    flex-direction: column;
    background-color: rgba(10, 10, 10, 0.95);
    width: 100%;
    text-align: center;
    transition: 0.3s;
    backdrop-filter: blur(15px);
    padding: 2rem 0;
    gap: 1rem;
  }
`;

const NavItem = styled.li`
  @media (max-width: 768px) {
    margin: 0.5rem 0;
  }
`;

const NavLink = styled.a<{ scrolled: boolean }>`
  color: var(--white);
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  position: relative;
  cursor: pointer;
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  background: transparent;

  &:hover {
    color: var(--white);
    background: ${props => props.scrolled ? 'transparent' : 'linear-gradient(135deg, var(--neon-pink), var(--neon-violet))'};
    box-shadow: ${props => props.scrolled ? 'none' : '0 0 20px rgba(255, 0, 128, 0.3)'};
    transform: ${props => props.scrolled ? 'none' : 'translateY(-2px)'};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, var(--neon-pink), var(--neon-violet));
    transition: all 0.3s ease;
    transform: translateX(-50%);
    box-shadow: 0 0 10px var(--neon-pink);
    opacity: ${props => props.scrolled ? '1' : '0'};
  }

  &:hover::after {
    width: ${props => props.scrolled ? '100%' : '0'};
  }
`;

const Hamburger = styled.div<{ isOpen: boolean }>`
  display: none;
  flex-direction: column;
  cursor: pointer;
  justify-self: end;

  @media (max-width: 768px) {
    display: flex;
  }

  span {
    width: 25px;
    height: 3px;
    background: var(--white);
    margin: 3px 0;
    transition: 0.3s;
    transform-origin: center;

    &:nth-child(1) {
      transform: ${props => props.isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      opacity: ${props => props.isOpen ? '0' : '1'};
    }

    &:nth-child(3) {
      transform: ${props => props.isOpen ? 'rotate(-45deg) translate(7px, -6px)' : 'rotate(0)'};
    }
  }
`;

const navItems = [
  { href: '#home', label: 'Acasă' },
  { href: '#services', label: 'Servicii' },
  { href: '#location', label: 'Locație' },
  { href: '#partners', label: 'Parteneri' },
  { href: '#contact', label: 'Contact' }
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <NavContainer
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        background: scrolled ? 'rgba(5, 5, 5, 0.95)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--glass-border)' : '1px solid transparent',
        boxShadow: scrolled ? '0 2px 20px rgba(255, 0, 128, 0.1)' : 'none'
      }}
    >
      <NavWrapper>
        <Logo onClick={() => handleNavClick('#home')}>
          <LogoImage src="/nibiru-logo.jpg" alt="NIBIRU Logo" />
        </Logo>
        
        <NavMenu isOpen={isOpen}>
          {navItems.map((item, index) => (
            <NavItem key={index}>
              <NavLink scrolled={scrolled} onClick={() => handleNavClick(item.href)}>
                {item.label}
              </NavLink>
            </NavItem>
          ))}
        </NavMenu>

        <Hamburger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </Hamburger>
      </NavWrapper>
    </NavContainer>
  );
};

export default Navbar; 