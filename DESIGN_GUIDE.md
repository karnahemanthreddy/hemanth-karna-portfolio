# 🎨 Visual Design Guide

This document explains the design decisions and visual language of your portfolio.

---

## 🎯 Design Philosophy

**Inspiration**: Apple, Vercel, Linear  
**Style**: Minimal, Premium, Futuristic  
**Tone**: Confident, Professional, Enterprise-Grade  

---

## 🎨 Color System

### Dark Mode (Default)
```css
Background:    #0a0a0a (Deep Black)
Foreground:    #fafafa (Soft White)
Primary:       #fafafa (White)
Muted:         #27272a (Dark Gray)
Border:        #27272a (Subtle)
```

### Light Mode
```css
Background:    #ffffff (Pure White)
Foreground:    #0a0a0a (Deep Black)
Primary:       #0a0a0a (Black)
Muted:         #f4f4f5 (Light Gray)
Border:        #e4e4e7 (Soft Gray)
```

### Gradients
```css
Primary Gradient:   Blue → Purple → Pink
  #3B82F6 (Blue)
  #A855F7 (Purple)
  #EC4899 (Pink)

Skill Gradients:
  Frontend:  Blue → Cyan
  Backend:   Green → Emerald
  Database:  Purple → Pink
  Cloud:     Orange → Red
  Tools:     Yellow → Amber
```

---

## 📐 Spacing System

### Container Width
- **Max Width**: 1280px (7xl)
- **Padding**: 16px mobile, 32px desktop

### Section Spacing
- **Mobile**: 80px (py-20)
- **Desktop**: 128px (py-32)

### Card Spacing
- **Padding**: 24px mobile, 32px desktop
- **Gap**: 24px (gap-6)
- **Border Radius**: 16px (rounded-2xl)

---

## 🔤 Typography

### Font Family
**Inter** - Modern, clean, professional

### Font Sizes
```css
Headings:
  H1: 80px-128px (text-5xl to text-8xl)
  H2: 48px-60px  (text-4xl to text-5xl)
  H3: 24px-32px  (text-2xl)
  H4: 20px       (text-xl)

Body:
  Large:  20px-24px (text-xl)
  Base:   16px      (text-base)
  Small:  14px      (text-sm)
  Tiny:   12px      (text-xs)
```

### Font Weights
- **Bold**: 700 (headings)
- **Semibold**: 600 (subheadings)
- **Medium**: 500 (body)
- **Regular**: 400 (muted text)

---

## 🎭 Effects & Polish

### Glassmorphism
```css
backdrop-blur-md
bg-white/10 (dark mode)
bg-black/10 (light mode)
border: 1px solid white/20
```

### Shadows
```css
Card Hover: shadow-lg shadow-primary/5
Button: shadow-lg shadow-primary/25
```

### Transitions
```css
Duration: 300ms (default)
Easing: cubic-bezier(0.21, 0.47, 0.32, 0.98)
```

### Animations
```css
Fade In:    0.6s ease-out
Slide Up:   0.6s ease-out
Scale In:   0.5s ease-out
Stagger:    0.1s delay between items
```

---

## 🎬 Animation Patterns

### Scroll Animations
- **Trigger**: When element is 100px from viewport
- **Once**: Animation plays once only
- **Direction**: Up, Down, Left, Right
- **Stagger**: 0.1s between children

### Hover Effects
```css
Cards:     translate-y: -5px (lift up)
Buttons:   scale: 1.02
Links:     color change + underline
Icons:     scale: 1.1
```

### Theme Toggle
```css
Sun Icon:  rotate-0 → rotate-90, scale 1 → 0
Moon Icon: rotate-90 → rotate-0, scale 0 → 1
Duration:  300ms smooth
```

---

## 🧩 Component Anatomy

### Card Component
```
┌─────────────────────────────┐
│ ┌─────┐                     │
│ │Icon │  Title              │  ← Header
│ └─────┘                     │
│                             │
│ Description text here...    │  ← Body
│                             │
│ ▸ Feature 1                 │  ← List
│ ▸ Feature 2                 │
│                             │
│ [Badge] [Badge] [Badge]     │  ← Footer
└─────────────────────────────┘

Padding:  24px-32px
Border:   1px solid border
Radius:   16px
Hover:    Lift 5px, border glow
```

### Button Component
```
Primary:
  Background: Black (light) / White (dark)
  Text:       White (light) / Black (dark)
  Shadow:     Large with primary glow
  Hover:      Scale 1.02

Secondary:
  Background: Gray
  Text:       Foreground
  Hover:      Darken

Outline:
  Border:     2px solid
  Background: Transparent
  Hover:      Fill with accent
```

### Badge Component
```
Default:
  Background: Muted
  Text:       Muted Foreground
  Padding:    12px 16px
  Radius:     9999px (full)

Primary:
  Background: Primary/10
  Border:     Primary/20
  Text:       Primary
```

---

## 📱 Responsive Breakpoints

```css
Mobile:     < 768px   (default, mobile-first)
Tablet:     768px     (md:)
Desktop:    1024px    (lg:)
Large:      1280px    (xl:)
```

### Responsive Patterns
```css
Grid Columns:
  Mobile:   1 column
  Tablet:   2 columns (md:grid-cols-2)
  Desktop:  3 columns (lg:grid-cols-3)

Text Size:
  Mobile:   text-4xl
  Desktop:  text-7xl

Padding:
  Mobile:   px-4 py-20
  Desktop:  px-8 py-32
```

---

## 🎯 Visual Hierarchy

### Level 1 (Most Important)
- Large bold headlines (text-7xl)
- Primary CTAs (filled buttons)
- Text gradients on key phrases

### Level 2 (Important)
- Section headings (text-5xl)
- Icon badges with gradients
- Card titles (text-2xl)

### Level 3 (Supporting)
- Body text (text-base)
- Muted descriptions
- Secondary badges

### Level 4 (Metadata)
- Small labels (text-sm)
- Footer text (text-xs)
- Timestamps, locations

---

## 🌈 Gradient Usage

### When to Use
✅ Hero section backgrounds  
✅ Section heading text  
✅ Skill category icons  
✅ Divider lines  
✅ Accent elements  

### When NOT to Use
❌ Body text  
❌ Entire cards  
❌ Navigation  
❌ Form inputs  

---

## 🎨 Visual Examples

### Hero Section
```
Background: Animated gradient blobs
Text:       White (dark) / Black (light)
Accent:     Blue → Purple → Pink gradient
Animation:  Blob pulse, text reveal
```

### Skills Cards
```
Icon:       Category gradient background
Title:      Bold, foreground color
Progress:   Animated bar with gradient fill
Hover:      Card lifts, border glows
```

### Timeline
```
Structure:  Vertical line with dots
Line:       Gradient (blue → purple → pink)
Dots:       Primary color, 4px border
Cards:      Alternating left/right (desktop)
```

---

## ✨ Polish Details

### Micro-Interactions
1. **Availability Badge**: Pulsing green dot
2. **Scroll Indicator**: Bouncing mouse icon
3. **Social Icons**: Scale on hover
4. **Form Inputs**: Ring on focus
5. **Tech Chips**: Border glow on hover

### Background Effects
1. **Noise Texture**: 3% opacity overlay
2. **Gradient Blobs**: Soft, slow pulse
3. **Section Dividers**: 1px gradient lines

### Loading States
- Smooth fade-in on mount
- Skeleton states for dynamic content
- Progressive image loading

---

## 🎯 Brand Consistency

### Logo/Initials: "HK"
- Style: Bold, gradient
- Placement: Top left navbar
- Size: 20px (text-xl)

### Color Usage
- **Blue**: Technology, trust
- **Purple**: Innovation, creativity
- **Pink**: Modern, dynamic
- **Green**: Success, achievement

### Voice & Tone
- **Headlines**: Bold, confident
- **Body**: Professional, clear
- **CTAs**: Action-oriented
- **Metrics**: Specific, impressive

---

## 🚀 Performance Notes

### Animation Performance
- Uses `transform` and `opacity` (GPU-accelerated)
- Avoids layout thrashing
- `will-change` on animated elements
- Respects `prefers-reduced-motion`

### Image Optimization
- Next.js Image component
- Lazy loading by default
- Responsive images
- WebP format support

### Font Loading
- System font fallback
- Font display: swap
- Preload critical fonts
- No FOUT/FOIT

---

## 📐 Design Tokens

```css
/* Radii */
--radius-sm:  0.5rem   (8px)
--radius-md:  0.75rem  (12px)
--radius-lg:  1rem     (16px)
--radius-xl:  1.5rem   (24px)

/* Shadows */
--shadow-sm:  0 1px 2px rgba(0,0,0,0.05)
--shadow-md:  0 4px 6px rgba(0,0,0,0.1)
--shadow-lg:  0 10px 15px rgba(0,0,0,0.1)

/* Z-Index */
--z-navbar:   50
--z-modal:    100
--z-tooltip:  200
```

---

## 🎨 Accessibility

### Color Contrast
- **AA**: Minimum 4.5:1 (body text)
- **AAA**: Minimum 7:1 (headings)
- Dark mode optimized for readability

### Focus States
- Visible focus rings (2px primary color)
- Skip to content link
- Keyboard navigation

### Screen Readers
- ARIA labels on interactive elements
- Semantic HTML (nav, main, section)
- Alt text ready for images

---

**This design system ensures your portfolio is:**
- ✅ Visually stunning
- ✅ Brand consistent
- ✅ Performance optimized
- ✅ Accessible to all

---

Built with attention to every pixel 🎨
