# Portfolio Setup & Deployment Guide

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000)

### 3. Build for Production
```bash
npm run build
npm start
```

## 📝 Customization Checklist

### Essential Updates
- [ ] Update personal info in `app/layout.tsx` (SEO metadata)
- [ ] Replace contact email in `components/sections/contact.tsx`
- [ ] Update social media links in `components/sections/footer.tsx`
- [ ] Add your profile image (create `public/profile.jpg`)
- [ ] Update resume download link in `components/sections/hero.tsx`
- [ ] Customize domain in `app/layout.tsx` and `public/sitemap.xml`

### Content Updates
- [ ] Edit bio in `components/sections/about.tsx`
- [ ] Update metrics (customers, devices, performance)
- [ ] Modify skills and proficiency levels in `components/sections/skills.tsx`
- [ ] Update work experience in `components/sections/experience.tsx`
- [ ] Edit project details in `components/sections/projects.tsx`
- [ ] Update architecture skills in `components/sections/architecture.tsx`

### Optional Enhancements
- [ ] Add Google Analytics (create `app/analytics.tsx`)
- [ ] Set up contact form backend (EmailJS, Formspree, etc.)
- [ ] Add project screenshots to `public/projects/`
- [ ] Create custom 404 page (`app/not-found.tsx`)
- [ ] Add blog section if needed

## 🎨 Theme Customization

### Colors
Edit `app/globals.css` to change theme colors:
```css
:root {
  --primary: your-color;
  --background: your-color;
  /* ... */
}
```

### Fonts
Update in `app/layout.tsx`:
```typescript
import { YourFont } from "next/font/google";
```

## 📦 Deployment

### Deploy to Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Netlify
```bash
# Build
npm run build

# Deploy to Netlify (connect your repo)
```

### Environment Variables
For production, set:
- `NEXT_PUBLIC_SITE_URL` - Your domain
- `NEXT_PUBLIC_GA_ID` - Google Analytics ID (optional)

## 🔧 Performance Optimization

### Before Deploying
- [ ] Run Lighthouse audit (aim for 95+ scores)
- [ ] Test on mobile devices
- [ ] Check accessibility with screen readers
- [ ] Test dark/light mode transitions
- [ ] Verify all links work
- [ ] Test contact form
- [ ] Check SEO meta tags

### Performance Tips
- Enable Next.js Image Optimization
- Use `loading="lazy"` for images
- Minimize third-party scripts
- Use Vercel Analytics for monitoring

## 🐛 Troubleshooting

### Common Issues

**Build fails:**
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

**Hydration errors:**
- Check for client/server mismatches
- Ensure `suppressHydrationWarning` is on `<html>` tag

**Theme not working:**
- Verify `next-themes` is properly installed
- Check ThemeProvider wraps your app

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Vercel Deployment Guide](https://vercel.com/docs)

## 🎯 SEO Checklist

- [ ] Update all meta tags with your info
- [ ] Add Open Graph images (1200x630px)
- [ ] Submit sitemap to Google Search Console
- [ ] Verify robots.txt is accessible
- [ ] Add structured data (JSON-LD) if needed
- [ ] Set up Google Analytics
- [ ] Configure canonical URLs

## 📧 Contact Form Setup (Optional)

### Using EmailJS
1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Get your service ID, template ID, and public key
3. Add to `components/sections/contact.tsx`

### Using Formspree
1. Sign up at [Formspree](https://formspree.io/)
2. Get your form endpoint
3. Update form action

## 🚀 Going Live

1. Purchase domain (Namecheap, Google Domains, etc.)
2. Deploy to Vercel/Netlify
3. Configure custom domain
4. Enable HTTPS (automatic on Vercel/Netlify)
5. Submit to Google Search Console
6. Share on LinkedIn, Twitter, etc.

---

**Need help?** Feel free to reach out or check the documentation links above.

Built with ❤️ by Hemanth Karna
