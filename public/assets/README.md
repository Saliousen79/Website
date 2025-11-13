# Assets Folder

Speichern Sie Ihre lokalen Bilder hier:
- **profile.png** - Ihr Profilbild (für Hero Section)
- Andere Bilder für die Website

## How to Use

### 1. Profile Picture (Profilbild)
1. Speichern Sie Ihr Profilbild im `public/assets/` Ordner
2. Beispiel: `profile.png`
3. Öffnen Sie [components/Hero.tsx](../../components/Hero.tsx) und ändern Sie:

```typescript
const profileImage = '/assets/profile.png';
```

### 2. Background Image (Hintergrundbild)
Öffnen Sie [components/Hero.tsx](../../components/Hero.tsx) und ändern Sie:

```typescript
const backgroundImage = '/assets/background.jpg';
```

## Unterstützte Formate
- PNG (.png)
- JPG/JPEG (.jpg, .jpeg)
- WebP (.webp)
- SVG (.svg)

## Externe Bilder
Sie können auch externe URLs verwenden:
```typescript
const profileImage = 'https://example.com/profile.jpg';
```
