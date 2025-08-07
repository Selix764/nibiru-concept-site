import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, var(--darker-bg) 0%, var(--dark-bg) 100%);
  border-top: 1px solid var(--glass-border);
  padding: 40px 0 20px;
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
      radial-gradient(circle at 20% 20%, rgba(255, 0, 128, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(0, 255, 255, 0.05) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const FooterContent = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 2rem;
`;

const FooterLogo = styled.div`
  margin-bottom: 1.5rem;

  .logo-text {
    font-family: 'Orbitron', monospace;
    font-size: 2rem;
    font-weight: 900;
    color: var(--neon-pink);
    text-shadow: 0 0 20px var(--neon-pink);
    margin-bottom: 0.5rem;
  }

  p {
    color: var(--gray);
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
`;

const FooterNav = styled.nav`
  margin-bottom: 2rem;
`;

const FooterNavList = styled.ul`
  display: flex;
  list-style: none;
  gap: 3rem;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 2rem;
    flex-direction: column;
    align-items: center;
  }
`;

const FooterNavItem = styled.li`
  margin: 0;
`;

const FooterNavLink = styled.a`
  color: var(--white);
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  position: relative;
  cursor: pointer;
  padding: 0.5rem 0;

  &:hover {
    color: var(--neon-pink);
    text-shadow: 0 0 10px var(--neon-pink);
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
  }

  &:hover::after {
    width: 100%;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--gray);
  font-size: 1rem;

  i {
    color: var(--neon-blue);
    font-size: 1.2rem;
  }

  a {
    color: var(--gray);
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: var(--neon-blue);
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
  justify-content: center;
`;

const SocialLink = styled(motion.a)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  text-decoration: none;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    background: var(--neon-pink);
    border-color: var(--neon-pink);
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(255, 0, 128, 0.3);
  }

  i {
    font-size: 1.1rem;
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  padding-top: 1.5rem;
  border-top: 1px solid var(--glass-border);
  color: var(--gray);
  position: relative;
  z-index: 2;
`;

const footerNavItems = [
  { href: '#home', label: 'Acasă' },
  { href: '#services', label: 'Servicii' },
  { href: '#location', label: 'Locație' },
  { href: '#partners', label: 'Parteneri' },
  { href: '#contact', label: 'Contact' }
];

const contactInfo = [
  { icon: 'fas fa-phone', href: 'tel:+40123456789', label: '+40 123 456 789' },
  { icon: 'fas fa-envelope', href: 'mailto:info@nibiru.ro', label: 'info@nibiru.ro' },
  { icon: 'fas fa-map-marker-alt', href: '#location', label: 'Promenada Mamaia' }
];

const socialLinks = [
  { href: '#', icon: 'fab fa-facebook-f', label: 'Facebook' },
  { href: '#', icon: 'fab fa-instagram', label: 'Instagram' },
  { href: '#', icon: 'fab fa-twitter', label: 'Twitter' },
  { href: '#', icon: 'fab fa-youtube', label: 'YouTube' }
];

const Footer: React.FC = () => {
  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <FooterContainer>
      <div className="container">
        <FooterContent>
          <FooterLogo>
            <div className="logo-text">NIBIRU</div>
            <p>Destinația cosmică de petreceri din Mamaia</p>
          </FooterLogo>
          
          <FooterNav>
            <FooterNavList>
              {footerNavItems.map((item, index) => (
                <FooterNavItem key={index}>
                  <FooterNavLink 
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                  >
                    {item.label}
                  </FooterNavLink>
                </FooterNavItem>
              ))}
            </FooterNavList>
          </FooterNav>

          <ContactInfo>
            {contactInfo.map((contact, index) => (
              <ContactItem key={index}>
                <i className={contact.icon}></i>
                <a 
                  href={contact.href}
                  onClick={(e) => {
                    if (contact.href.startsWith('#')) {
                      e.preventDefault();
                      handleNavClick(contact.href);
                    }
                  }}
                >
                  {contact.label}
                </a>
              </ContactItem>
            ))}
          </ContactInfo>

          <SocialLinks>
            {socialLinks.map((social, index) => (
              <SocialLink
                key={index}
                href={social.href}
                aria-label={social.label}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className={social.icon}></i>
              </SocialLink>
            ))}
          </SocialLinks>
        </FooterContent>
        
        <FooterBottom>
          <p>&copy; 2024 Nibiru. Toate drepturile rezervate. | Destinația cosmică de petreceri din Mamaia</p>
        </FooterBottom>
      </div>
    </FooterContainer>
  );
};

export default Footer; 