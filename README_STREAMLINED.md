# Staten Island Wash Kings - Streamlined Homepage

## 🚀 Ultra-Fast, Single-Screen Conversion Experience

This is a **streamlined, DoorDash/Uber Eats-style** homepage designed for **instant conversion**. Everything happens on a single full-screen viewport—no scrolling, no fluff, just pure speed.

---

## 📋 Quick Customization Guide

### 1. **Update Jobber Booking URL**

Edit `config/site_config.json`:
```json
{
  "jobberUrl": "https://your-new-jobber-url-here",
  ...
}
```

### 2. **Change Phone Number**

Edit `config/site_config.json`:
```json
{
  "phoneNumber": "(917) 397-0128",
  "phoneTel": "tel:19173970128",
  ...
}
```

### 3. **Switch Seasonal Theme**

Edit `config/site_config.json`:
```json
{
  "seasonalTheme": "christmas",  // or "default"
  ...
}
```

**Available themes:**
- `"default"` - Neutral work image
- `"christmas"` - Festive background with optional music

### 4. **Update Background Images**

#### Default Theme:
1. Add your image to `/public/hero-background.jpg`
2. Or update the URL in `config/site_config.json` → `themes.default.backgroundImage`

#### Christmas Theme:
1. Add your image to `/public/hero-background-christmas.jpg`
2. Or update the URL in `config/site_config.json` → `themes.christmas.backgroundImage`

**Recommended image specs:**
- Resolution: 1920x1080 or higher
- Format: JPG or WebP
- Optimized for web (compressed)

### 5. **Add Seasonal Background Music (Optional)**

1. Add your audio file to `/public/christmas-music-loop.mp3`
2. Update path in `config/site_config.json` → `themes.christmas.audio`
3. Music auto-plays (muted) when theme is set to "christmas"
4. Users can toggle mute/unmute via button in bottom-left

**Audio requirements:**
- Format: MP3 (recommended) or OGG
- Short loop (30-60 seconds recommended)
- File size: Keep under 500KB for fast loading

### 6. **Update Brand Colors**

Edit `config/brand_tokens.json`:
```json
{
  "colors": {
    "primary": "#1B5377",
    "blueTeal": {
      "blue": "#0066CC",
      "cyan": "#06B6D4",
      "teal": "#14B8A6"
    }
  }
}
```

### 7. **Update SEO & Meta**

Edit `config/site_config.json`:
```json
{
  "seo": {
    "title": "Your Page Title",
    "description": "Your meta description",
    "siteName": "Your Site Name"
  }
}
```

---

## 🎨 Design Philosophy

### **Single Full-Screen Experience**
- No scrolling required
- Everything visible in viewport
- Instant decision-making (Book or Call)

### **Minimal Header**
- Logo on left
- Call Now + Book Now buttons on right
- Glassmorphism effect (transparent with blur)

### **Hero Section**
- Full-screen background image
- Blue-teal gradient overlay
- Glassmorphism content panel
- Large, prominent CTAs
- Inline compact service buttons

### **Floating Action Buttons**
- Mobile-first design
- Always accessible
- Bottom-right corner
- Call (white) + Book (gradient)

---

## 📁 Project Structure

```
washkings-site/
├── app/
│   ├── page.tsx          # Single full-screen homepage
│   ├── layout.tsx        # Root layout with SEO
│   └── globals.css       # Global styles
├── components/
│   ├── Header.tsx        # Minimal header
│   ├── Hero.tsx          # Full-screen hero
│   ├── ServiceButtons.tsx # Inline service buttons
│   ├── FloatingCallButton.tsx
│   ├── FloatingBookButton.tsx
│   └── ThemeAudioToggle.tsx # Seasonal music toggle
├── config/
│   ├── brand_tokens.json # Colors, fonts, design tokens
│   └── site_config.json  # Jobber URL, phone, themes, SEO
└── public/
    ├── hero-background.jpg           # Default theme image
    ├── hero-background-christmas.jpg # Christmas theme image
    └── christmas-music-loop.mp3      # Optional audio
```

---

## 🔧 Technical Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Next/Image** for optimized images

---

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect repo to Vercel
3. Deploy automatically

### Manual Build

```bash
npm install
npm run build
npm start
```

---

## 📱 Mobile Optimization

- **Mobile-first design**
- **Touch-optimized buttons**
- **Floating action buttons** always accessible
- **Responsive typography**
- **Fast loading** (optimized images, minimal JS)

---

## 🎯 Conversion Features

1. **Primary CTA**: "⚡ Book Now" (Jobber link)
2. **Secondary CTA**: "Call Now" (tel: link)
3. **Service Buttons**: Quick service selection
4. **Floating Buttons**: Always visible on mobile
5. **Trust Signal**: "Licensed & Insured • 80+ Reviews"

---

## 🔄 Seasonal Themes

### Default Theme
- Professional work image
- No audio
- Standard branding

### Christmas Theme
- Festive background image
- Optional background music (muted by default)
- Toggle button in bottom-left
- State persisted in localStorage

**To switch themes:**
Edit `config/site_config.json` → `seasonalTheme`

---

## ⚡ Performance

- **LCP (Largest Contentful Paint)**: < 2.5s target
- **Minimal JavaScript**: Only essential interactivity
- **Optimized images**: Next/Image with priority loading
- **Fast navigation**: Instant booking links

---

## 🐛 Troubleshooting

### Images not loading?
- Check file paths in `config/site_config.json`
- Ensure images are in `/public/` folder
- Verify image URLs are correct

### Audio not playing?
- Check browser autoplay policies
- User may need to interact first (click button)
- Verify audio file path in config

### Service buttons not working?
- Check `jobberUrl` in `config/site_config.json`
- Verify all links are valid
- Check browser console for errors

---

## 📞 Support

For questions or issues, contact:
- **Phone**: (917) 397-0128
- **Email**: statenislandwashkings@gmail.com

---

## ✅ Checklist for Launch

- [ ] Update Jobber booking URL
- [ ] Verify phone number
- [ ] Add/update background images
- [ ] Update SEO meta tags
- [ ] Test on mobile devices
- [ ] Verify all CTAs work
- [ ] Test seasonal theme switch
- [ ] Add audio files (if using)
- [ ] Deploy to production
- [ ] Test conversion flow

---

**Built for speed. Designed for conversion. 🚀**


