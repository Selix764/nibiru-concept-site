# 🚀 NIBIRU Development Guide

## Development Server

### Quick Start

```bash
# Navighează în directorul proiectului
cd nibiru-react

# Pornește serverul de dezvoltare
./dev-server.sh

# SAU
npm start
```

### Server Status

- **Local URL**: http://localhost:3000
- **Network URL**: http://192.168.1.131:3000
- **Status**: ✅ Running

### Scripts Disponibile

#### Pornire Server
```bash
./dev-server.sh
```
- Verifică dependențele
- Oprește procesele existente pe portul 3000
- Pornește serverul de dezvoltare

#### Oprire Server
```bash
./stop-server.sh
```
- Oprește toate procesele pe portul 3000
- Oprește procesele react-scripts

#### Comenzi NPM
```bash
npm start          # Pornește serverul de dezvoltare
npm run build      # Construiește pentru producție
npm test           # Rulează testele
npm run eject      # Ejectează configurația (ireversibil)
```

## Structura Proiectului

```
nibiru-react/
├── src/
│   ├── components/          # Componente React
│   │   ├── Navbar/         # Navigare
│   │   ├── Hero/           # Secțiunea principală
│   │   ├── Competitors/    # Comparație cu alte destinații
│   │   ├── Location/       # Informații despre locație
│   │   ├── Partners/       # Parteneri
│   │   ├── Contact/        # Formular de contact
│   │   └── Footer/         # Footer
│   ├── styles/
│   │   └── GlobalStyles.ts # Stiluri globale
│   └── App.tsx             # Componenta principală
├── public/
│   └── index.html          # Template HTML
├── dev-server.sh           # Script pentru pornire server
├── stop-server.sh          # Script pentru oprire server
└── package.json            # Dependențe și scripturi
```

## Tehnologii Utilizate

- **React 18** - Biblioteca principală
- **TypeScript** - Tipizare statică
- **styled-components** - CSS-in-JS
- **framer-motion** - Animații
- **react-intersection-observer** - Detectare scroll

## Dezvoltare

### Hot Reload
Serverul de dezvoltare suportă hot reload - modificările în cod se reflectă automat în browser.

### Debugging
- Deschide Developer Tools în browser
- Folosește React Developer Tools pentru debugging componente
- Verifică console-ul pentru erori

### Logs
```bash
# Verifică logurile serverului
tail -f dev-server.log

# Verifică procesele
lsof -i :3000
```

## Build pentru Producție

```bash
# Construiește aplicația
npm run build

# Servește build-ul local
npx serve -s build
```

## Troubleshooting

### Port 3000 ocupat
```bash
# Oprește procesele pe portul 3000
./stop-server.sh

# SAU
lsof -ti:3000 | xargs kill -9
```

### Dependențe lipsă
```bash
npm install
```

### Erori de compilare
```bash
# Verifică logurile
tail -f dev-server.log

# Restart server
./stop-server.sh && ./dev-server.sh
```

## Acces la Site

- **Local**: http://localhost:3000
- **Network**: http://192.168.1.131:3000
- **Mobile Testing**: Accesează URL-ul de network de pe dispozitivul mobil

## Caracteristici Implementate

✅ **Design Futurist** - Paletă neon, efecte cosmice  
✅ **Responsive Design** - Desktop, tablet, mobile  
✅ **Animații Avansate** - Framer Motion, CSS animations  
✅ **Formular Contact** - Validare, notificări  
✅ **Navigare Smooth** - Scroll între secțiuni  
✅ **Optimizare SEO** - Meta tags, Open Graph  

---

**NIBIRU** - Destinația cosmică de petreceri din Mamaia 🌟 