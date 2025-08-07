import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;400;500;600;700&display=swap');

  :root {
    --neon-pink: #ff0080;
    --neon-violet: #8a2be2;
    --neon-blue: #00ffff;
    --dark-bg: #0a0a0a;
    --darker-bg: #050505;
    --white: #ffffff;
    --gray: #888888;
    --glass-bg: rgba(255, 255, 255, 0.1);
    --glass-border: rgba(255, 255, 255, 0.2);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Rajdhani', sans-serif;
    background: var(--dark-bg);
    color: var(--white);
    line-height: 1.6;
    overflow-x: hidden;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--dark-bg);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--neon-pink);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--neon-violet);
  }

  /* Typography */
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Orbitron', monospace;
    font-weight: 900;
  }

  /* Utility classes */
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .section-title {
    font-family: 'Orbitron', monospace;
    font-size: 3rem;
    font-weight: 900;
    text-align: center;
    margin-bottom: 1rem;
    background: linear-gradient(45deg, var(--neon-pink), var(--neon-violet), var(--neon-blue));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-shadow: 0 0 30px rgba(255, 0, 128, 0.5);

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  .section-subtitle {
    font-size: 1.2rem;
    text-align: center;
    color: var(--gray);
    margin-bottom: 3rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  /* Button styles */
  .btn {
    padding: 15px 30px;
    border: none;
    border-radius: 50px;
    font-size: 1.1rem;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    display: inline-block;
  }

  .btn-primary {
    background: linear-gradient(45deg, var(--neon-pink), var(--neon-violet));
    color: var(--white);
    box-shadow: 0 0 20px rgba(255, 0, 128, 0.5);

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 0 30px rgba(255, 0, 128, 0.8);
    }
  }

  .btn-secondary {
    background: transparent;
    color: var(--white);
    border: 2px solid var(--neon-blue);
    box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);

    &:hover {
      background: var(--neon-blue);
      color: var(--dark-bg);
      transform: translateY(-3px);
      box-shadow: 0 0 30px rgba(0, 255, 255, 0.6);
    }
  }

  /* Animations */
  @keyframes neon-glow {
    0% { text-shadow: 0 0 20px var(--neon-pink); }
    100% { text-shadow: 0 0 30px var(--neon-pink), 0 0 40px var(--neon-pink); }
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
  }

  @keyframes twinkle {
    0%, 100% { opacity: 0.8; }
    50% { opacity: 1; }
  }

  @keyframes title-glow {
    0% { text-shadow: 0 0 20px var(--neon-pink), 0 0 40px var(--neon-pink); }
    100% { text-shadow: 0 0 30px var(--neon-pink), 0 0 60px var(--neon-pink), 0 0 80px var(--neon-pink); }
  }

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
    40% { transform: translateX(-50%) translateY(-10px); }
    60% { transform: translateX(-50%) translateY(-5px); }
  }

  @keyframes particle-float {
    0% {
      transform: translateY(0) rotate(0deg);
      opacity: 1;
    }
    100% {
      transform: translateY(-100vh) rotate(360deg);
      opacity: 0;
    }
  }

  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }

  /* Cursor trail animation */
  @keyframes cursor-trail {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(0);
      opacity: 0;
    }
  }

  /* Planet rotation */
  @keyframes planet-rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* Saturn ring rotation */
  @keyframes saturn-ring-rotate {
    0% { transform: rotateX(75deg) rotate(0deg); }
    100% { transform: rotateX(75deg) rotate(360deg); }
  }

  /* Fade in up animation */
  @keyframes fadeInUp {
    to { 
      opacity: 1; 
      transform: translateY(0); 
    }
  }

  /* Title slide in animation */
  @keyframes titleSlideIn {
    to { 
      opacity: 1; 
      transform: translateY(0) scale(1); 
    }
  }

  /* Subtitle slide in from left */
  @keyframes subtitleSlideIn {
    to { 
      opacity: 1; 
      transform: translateX(0); 
    }
  }

  /* Description slide in from right */
  @keyframes descriptionSlideIn {
    to { 
      opacity: 1; 
      transform: translateX(0); 
    }
  }

  /* Buttons scale in animation */
  @keyframes buttonsScaleIn {
    to { 
      opacity: 1; 
      transform: scale(1); 
    }
  }
`; 