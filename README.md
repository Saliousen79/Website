# Moderne Portfolio-Website

Eine moderne, responsive Portfolio-Website erstellt mit **Next.js 14**, **TypeScript** und **Tailwind CSS**.

## Features

- **Single-Page-Application** mit smooth scroll Navigation
- **Modulares Component-System** für einfache Wartung
- **Responsive Design** - optimiert für Desktop, Tablet und Mobile
- **Dark Mode Support** - automatische Erkennung des System-Themes
- **Animationen** - sanfte Übergänge und Scroll-Animationen
- **TypeScript** - typsichere Entwicklung
- **Tailwind CSS** - moderne, utility-first CSS-Framework

## Sektionen

1. **Hero** - Willkommensbereich mit Call-to-Action
2. **Über mich** - Persönliche Vorstellung und Skills
3. **Projekte** - Portfolio-Projekte mit Beschreibungen
4. **Lebenslauf** - Berufserfahrung und Ausbildung
5. **Kontakt** - Kontaktformular und Kontaktinformationen

## Installation

1. **Node.js installieren** (falls noch nicht installiert):
   - Download: https://nodejs.org/
   - Version 18.x oder höher empfohlen

2. **Dependencies installieren**:
   ```bash
   npm install
   ```

## Development

Starten Sie den Development-Server:

```bash
npm run dev
```

Die Website ist dann unter [http://localhost:3000](http://localhost:3000) erreichbar.

## Production Build

Erstellen Sie einen optimierten Production-Build:

```bash
npm run build
```

Starten Sie den Production-Server:

```bash
npm start
```

## Projektstruktur

```
├── app/
│   ├── layout.tsx          # Root-Layout mit Metadata
│   ├── page.tsx            # Hauptseite mit allen Sektionen
│   └── globals.css         # Globale Styles und Tailwind
├── components/
│   ├── Navigation.tsx      # Navigation mit smooth scroll
│   ├── Hero.tsx           # Hero-Sektion
│   ├── About.tsx          # Über mich-Sektion
│   ├── Projects.tsx       # Projekte-Sektion
│   ├── Resume.tsx         # Lebenslauf-Sektion
│   ├── Contact.tsx        # Kontakt-Sektion
│   └── Footer.tsx         # Footer
├── public/                 # Statische Assets
├── package.json           # Dependencies und Scripts
├── tsconfig.json          # TypeScript-Konfiguration
├── tailwind.config.ts     # Tailwind-Konfiguration
└── next.config.js         # Next.js-Konfiguration
```

## Anpassungen

### Persönliche Informationen ändern

1. **Hero-Sektion** ([components/Hero.tsx](components/Hero.tsx)):
   - Name, Titel und Beschreibung
   - Social-Media-Links

2. **Über mich** ([components/About.tsx](components/About.tsx)):
   - Beschreibungstext
   - Skills und deren Level
   - Statistiken

3. **Projekte** ([components/Projects.tsx](components/Projects.tsx)):
   - Projektliste mit Titel, Beschreibung und Technologien
   - Links zu Live-Demos und GitHub

4. **Lebenslauf** ([components/Resume.tsx](components/Resume.tsx)):
   - Berufserfahrung
   - Ausbildung

5. **Kontakt** ([components/Contact.tsx](components/Contact.tsx)):
   - Email, Telefon und Standort
   - Social-Media-Links

### Farben und Design anpassen

Bearbeiten Sie [tailwind.config.ts](tailwind.config.ts) für:
- Farbschema
- Animationen
- Responsive Breakpoints

Bearbeiten Sie [app/globals.css](app/globals.css) für:
- CSS-Variablen
- Globale Styles
- Custom Scrollbar

## Technologien

- **[Next.js 14](https://nextjs.org/)** - React-Framework mit App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Typsichere Programmierung
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS
- **[React](https://react.dev/)** - UI-Bibliothek

## Deployment

### Vercel (Empfohlen)

1. Repository auf GitHub pushen
2. Mit [Vercel](https://vercel.com) verbinden
3. Automatisches Deployment bei jedem Push

### Andere Plattformen

- **Netlify**: Unterstützt Next.js
- **AWS Amplify**: Full-Stack Deployment
- **Docker**: Containerisierung möglich

## Browser-Unterstützung

- Chrome (neueste Version)
- Firefox (neueste Version)
- Safari (neueste Version)
- Edge (neueste Version)

## Performance-Optimierungen

- **Image Optimization** - Next.js Image Component
- **Code Splitting** - Automatisch durch Next.js
- **Lazy Loading** - Intersection Observer für Animationen
- **CSS Purging** - Tailwind entfernt ungenutztes CSS
- **Static Generation** - Optimierte Build-Zeiten

## Lizenz

Dieses Projekt steht zur freien Verfügung. Passen Sie es nach Ihren Wünschen an!

## Support

Bei Fragen oder Problemen:
- Erstellen Sie ein Issue auf GitHub
- Kontaktieren Sie mich über das Kontaktformular

---

**Viel Erfolg mit Ihrer Portfolio-Website!** 🚀
