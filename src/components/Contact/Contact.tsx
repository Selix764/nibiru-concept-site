import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ContactSection = styled.section`
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
      radial-gradient(circle at 30% 30%, rgba(255, 0, 128, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 70% 70%, rgba(0, 255, 255, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const ContactContainer = styled.div`
  position: relative;
  z-index: 2;
`;

const ContactHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 4rem;
`;

const ContactTitle = styled.h2`
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

const ContactSubtitle = styled.p`
  font-size: 1.3rem;
  color: var(--gray);
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.8;
`;

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const ContactInfo = styled(motion.div)`
  @media (max-width: 768px) {
    order: 2;
  }
`;

const ContactDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 3rem;
  color: var(--gray);
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ContactItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(10px);
    border-color: var(--neon-pink);
    box-shadow: 0 10px 30px rgba(255, 0, 128, 0.2);
  }

  i {
    color: var(--neon-pink);
    font-size: 1.5rem;
    width: 30px;
    text-align: center;
  }

  span {
    color: var(--white);
    font-size: 1.1rem;
    font-weight: 500;
  }
`;

const ContactForm = styled(motion.form)`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 25px;
  padding: 3rem;
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
    transition: left 0.6s ease;
  }

  &:hover::before {
    left: 100%;
  }

  @media (max-width: 768px) {
    order: 1;
    padding: 2rem;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 2rem;
  position: relative;
`;

const FormLabel = styled.label`
  display: block;
  color: var(--white);
  font-weight: 500;
  margin-bottom: 0.5rem;
  font-size: 1rem;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 1rem 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  color: var(--white);
  font-size: 1rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:focus {
    outline: none;
    border-color: var(--neon-pink);
    box-shadow: 0 0 20px rgba(255, 0, 128, 0.3);
    transform: translateY(-2px);
  }

  &::placeholder {
    color: var(--gray);
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 1rem 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  color: var(--white);
  font-size: 1rem;
  transition: all 0.3s ease;
  resize: vertical;
  min-height: 120px;
  backdrop-filter: blur(10px);

  &:focus {
    outline: none;
    border-color: var(--neon-pink);
    box-shadow: 0 0 20px rgba(255, 0, 128, 0.3);
    transform: translateY(-2px);
  }

  &::placeholder {
    color: var(--gray);
  }
`;

const SubmitButton = styled(motion.button)`
  width: 100%;
  padding: 1rem 2rem;
  background: linear-gradient(45deg, var(--neon-pink), var(--neon-violet));
  color: var(--white);
  border: none;
  border-radius: 15px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 0 30px rgba(255, 0, 128, 0.3);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.6s ease;
  }

  &:hover::before {
    left: 100%;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 40px rgba(255, 0, 128, 0.5);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const Notification = styled(motion.div)<{ type: 'success' | 'error' }>`
  position: fixed;
  top: 100px;
  right: 20px;
  background: ${props => props.type === 'success' ? 'rgba(0, 255, 0, 0.9)' : 'rgba(255, 0, 0, 0.9)'};
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 15px;
  z-index: 10000;
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  max-width: 350px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
`;

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState<{
    show: boolean;
    type: 'success' | 'error';
    message: string;
  }>({ show: false, type: 'success', message: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setNotification({
        show: true,
        type: 'error',
        message: 'Te rugăm să completezi toate câmpurile obligatorii.'
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setNotification({
        show: true,
        type: 'success',
        message: 'Mesajul tău a fost trimis cu succes! Te vom contacta în curând.'
      });
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: 'fas fa-phone',
      text: '+40 123 456 789'
    },
    {
      icon: 'fas fa-envelope',
      text: 'info@nibiru.ro'
    },
    {
      icon: 'fas fa-map-marker-alt',
      text: 'Promenada Mamaia, Constanța'
    },
    {
      icon: 'fas fa-clock',
      text: 'Deschis: 22:00 - 06:00'
    }
  ];

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
  };

  const formVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  } as const;

  return (
    <ContactSection id="contact">
      <ContactContainer className="container">
        <ContactHeader
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <ContactTitle>Contactează-ne</ContactTitle>
          <ContactSubtitle>
            Rezervă-ți locul în cel mai exclusivist club de noapte din Mamaia. 
            Experiența Nibiru te așteaptă cu atmosferă futuristă și energie cosmică.
          </ContactSubtitle>
        </ContactHeader>

        <ContactContent ref={ref}>
          <ContactInfo
            variants={textVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <ContactDescription>
              Suntem aici să îți oferim cea mai bună experiență de petreceri. 
              Contactează-ne pentru rezervări, evenimente private sau orice întrebări ai avea.
            </ContactDescription>
            
            <ContactDetails>
              {contactInfo.map((info, index) => (
                <ContactItem
                  key={index}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                >
                  <i className={info.icon}></i>
                  <span>{info.text}</span>
                </ContactItem>
              ))}
            </ContactDetails>
          </ContactInfo>
          
          <ContactForm
            variants={formVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            onSubmit={handleSubmit}
          >
            <FormGroup>
              <FormLabel>Numele tău *</FormLabel>
              <FormInput
                type="text"
                name="name"
                placeholder="Introdu numele tău"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel>Email *</FormLabel>
              <FormInput
                type="email"
                name="email"
                placeholder="Introdu adresa de email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel>Telefon</FormLabel>
              <FormInput
                type="tel"
                name="phone"
                placeholder="Introdu numărul de telefon"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel>Mesajul tău *</FormLabel>
              <FormTextarea
                name="message"
                placeholder="Scrie mesajul tău aici..."
                value={formData.message}
                onChange={handleInputChange}
                required
              />
            </FormGroup>
            
            <SubmitButton
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? 'Se trimite...' : 'Trimite Mesaj'}
            </SubmitButton>
          </ContactForm>
        </ContactContent>
      </ContactContainer>

      {notification.show && (
        <Notification
          type={notification.type}
          initial={{ x: 400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 400, opacity: 0 }}
          onAnimationComplete={() => {
            setTimeout(() => {
              setNotification(prev => ({ ...prev, show: false }));
            }, 5000);
          }}
        >
          {notification.message}
        </Notification>
      )}
    </ContactSection>
  );
};

export default Contact; 