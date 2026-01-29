# NibbleMaps Assets Preparation Guide

Complete guide to creating and optimizing all visual assets for your website.

## Required Assets Overview

```
assets/
├── logo.svg                    # Main logo (required)
├── logo-light.svg             # Light version for dark backgrounds
├── favicon.ico                # Browser tab icon (required)
├── favicon-16x16.png         # Small favicon
├── favicon-32x32.png         # Medium favicon
├── apple-touch-icon.png      # iOS home screen icon (required)
├── og-image.jpg              # Social media share image (required)
├── twitter-card.jpg          # Twitter-specific card
├── app-screenshot-1.png      # Hero mockup screenshot (required)
├── app-screenshot-2.png      # Map view screenshot
├── app-screenshot-3.png      # Profile view screenshot
├── app-screenshot-4.png      # Group passport screenshot
└── feature-icons/            # Custom feature icons (optional)
    ├── passport-icon.svg
    ├── map-icon.svg
    └── social-icon.svg
```

## Logo Files

### Primary Logo (logo.svg)

**Specifications:**
- Format: SVG (scalable vector)
- Dimensions: Minimum 32x32px artboard
- Style: Full color, horizontal layout
- Text: "NibbleMaps" or just icon if recognizable
- Export: Optimize for web (remove unnecessary code)

**Design Guidelines:**
- Keep it simple and recognizable at small sizes
- Use a maximum of 2-3 colors
- Ensure it works on white backgrounds
- Test at 16px, 32px, and 64px sizes

**Creating the Logo:**

If you don't have a logo yet:

1. **DIY Options:**
   - Canva (free): Use "Logo" template
   - Looka.com: AI-generated logos ($20)
   - Hatchful by Shopify: Free logo maker

2. **Professional Options:**
   - Fiverr: $50-200
   - 99designs: $299+
   - Hire designer on Dribbble

3. **Logo Elements to Consider:**
   - Food-related icon (fork/knife, map pin, passport stamp)
   - Modern sans-serif font
   - Warm color palette (red, orange, or coral)

**Example Logo Concept:**
```
[Map Pin Icon] NibbleMaps
  (with small bite mark in the pin)
```

### Light Logo (logo-light.svg)

**When to Use:**
- Footer (dark background)
- Future dark mode
- Marketing materials

**Specifications:**
- Same as primary logo
- All colors converted to white (#FFFFFF)
- Maintain transparency

**Quick Creation:**
Open logo.svg in editor, change all fill colors to white, save as logo-light.svg.

## Favicon Files

### favicon.ico

**Specifications:**
- Format: ICO
- Size: 32x32px
- File size: Under 10KB
- Background: Transparent or brand color

**How to Create:**

**Method 1: Online Generator (Easiest)**
1. Go to [favicon.io](https://favicon.io)
2. Upload your logo
3. Download the complete package
4. Use the favicon.ico file

**Method 2: From Existing Image**
1. Open logo in Photoshop/GIMP
2. Resize to 32x32px
3. Export as PNG
4. Convert to ICO at [convertico.com](https://convertico.com)

**Design Tips:**
- Use simplified version of logo (remove text if needed)
- High contrast colors
- Avoid fine details (won't be visible)
- Test at actual size before finalizing

### PNG Favicons

**favicon-16x16.png**
- Exact dimensions: 16x16px
- Use for older browsers
- Very simple design (icon only)

**favicon-32x32.png**
- Exact dimensions: 32x32px
- Standard favicon size
- Can include minimal text

**apple-touch-icon.png**
- Exact dimensions: 180x180px
- Used when users add to iOS home screen
- Include padding (20px on each side)
- No transparency (use solid background)
- Test on actual iPhone

**HTML Implementation:**
```html
<link rel="icon" type="image/x-icon" href="assets/favicon.ico">
<link rel="icon" type="image/png" sizes="16x16" href="assets/favicon-16x16.png">
<link rel="icon" type="image/png" sizes="32x32" href="assets/favicon-32x32.png">
<link rel="apple-touch-icon" href="assets/apple-touch-icon.png">
```

## Social Media Images

### Open Graph Image (og-image.jpg)

**Specifications:**
- Dimensions: 1200x630px (exact)
- Format: JPG (better compression)
- File size: Under 300KB (ideally under 200KB)
- Safe zone: Keep important content in center 1200x600px

**What to Include:**
1. NibbleMaps logo (top left or center)
2. Key headline or tagline
3. App screenshot mockup
4. Brand colors
5. Simple, uncluttered design

**Template Layout:**
```
┌─────────────────────────────┐
│  [Logo]                     │
│                             │
│    Your Social Food         │
│    Passport                 │
│                             │
│    [Phone Mockup]           │
│                             │
│    Download for iOS         │
└─────────────────────────────┘
```

**Design Tools:**
- Canva: Use "Facebook Post" template (1200x630)
- Figma: Create custom frame
- Photoshop: New document 1200x630px

**Best Practices:**
- Use high-quality images (not pixelated)
- Readable text (minimum 48px font size)
- High contrast between text and background
- Test on Facebook, Twitter, and LinkedIn
- Include clear branding

**Testing:**
- Facebook Sharing Debugger: [developers.facebook.com/tools/debug](https://developers.facebook.com/tools/debug)
- Twitter Card Validator: [cards-dev.twitter.com/validator](https://cards-dev.twitter.com/validator)
- LinkedIn Post Inspector: [linkedin.com/post-inspector](https://linkedin.com/post-inspector)

### Twitter Card (twitter-card.jpg)

**Specifications:**
- Dimensions: 1200x600px
- Format: JPG
- File size: Under 5MB (aim for under 1MB)
- Aspect ratio: 2:1

**Difference from OG Image:**
Slightly shorter vertically, so adjust text placement if needed.

## App Screenshots

### Screenshot 1: Hero Mockup (app-screenshot-1.png)

**Purpose:** Primary hero section phone mockup

**Specifications:**
- Dimensions: 1170x2532px (iPhone 14 Pro)
- Format: PNG (transparency needed)
- File size: Under 500KB
- Shows: Home screen or map view

**What to Display:**
- Clean, organized interface
- Real or realistic data (not lorem ipsum)
- Multiple stamps visible
- Beautiful food photos
- Active/engaged state (not empty)

**How to Capture:**

**Method 1: From App Store Connect**
1. Export screenshots from App Store listing
2. Use highest resolution available
3. Already optimized dimensions

**Method 2: iOS Simulator**
1. Run app in Xcode simulator
2. Set device to iPhone 14 Pro
3. Cmd+S to save screenshot
4. Automatically correct dimensions

**Method 3: Real Device**
1. Take screenshot on iPhone 14 Pro
2. Transfer via AirDrop
3. Verify dimensions (should be 1170x2532)

**Editing for Web:**
1. Open in Photoshop
2. Make any needed adjustments
3. Export as PNG with transparency
4. Optimize with TinyPNG

### Screenshot 2: Map View (app-screenshot-2.png)

**Shows:**
- Interactive map with pins
- Multiple locations
- Engaging, colorful map
- UI elements visible

**Best Practices:**
- Use interesting location (NYC, SF, etc.)
- Show variety of pins
- Zoom level that shows detail
- Clear, uncluttered view

### Screenshot 3: Profile View (app-screenshot-3.png)

**Shows:**
- User profile with stats
- Food passport stamps
- Achievement badges
- Friend connections

**Purpose:**
Use in "Why NibbleMaps" section or features carousel.

### Screenshot 4: Group Passport (app-screenshot-4.png)

**Shows:**
- Group passport interface
- Multiple users' contributions
- Collaborative features
- Shared experiences

**Purpose:**
Highlight social features, use in testimonials section.

## Image Optimization

### Compression Tools

**Online (Free):**
- TinyPNG: [tinypng.com](https://tinypng.com) (Best for PNG)
- Squoosh: [squoosh.app](https://squoosh.app) (Google tool)
- Compressor.io: [compressor.io](https://compressor.io)

**Desktop (Free):**
- ImageOptim (Mac): Drag and drop compression
- FileOptimizer (Windows): Batch optimization

**Recommended Compression:**
- PNG screenshots: 70-80% quality
- JPG images: 75-85% quality
- SVG files: Remove unnecessary code

### WebP Conversion

Modern format with better compression:

**Online Converter:**
- [cloudconvert.com/webp-converter](https://cloudconvert.com/webp-converter)

**Implementation:**
```html
<picture>
  <source srcset="assets/og-image.webp" type="image/webp">
  <img src="assets/og-image.jpg" alt="NibbleMaps social card">
</picture>
```

### Target File Sizes

- Logos (SVG): 5-10KB
- Favicons: Under 10KB each
- App screenshots: 200-500KB each
- Social images: 150-300KB
- Total page weight: Under 2MB

## Stock Photos (If Needed)

If you need additional imagery:

### Free Stock Photo Sites

**High Quality:**
- Unsplash: [unsplash.com](https://unsplash.com)
- Pexels: [pexels.com](https://pexels.com)
- Pixabay: [pixabay.com](https://pixabay.com)

**Search Terms:**
- "food photography"
- "restaurant dining"
- "friends eating"
- "phone food photo"
- "coffee shop"
- "dining table"

**Selection Criteria:**
- High resolution (minimum 2000px wide)
- Good lighting and composition
- Authentic (not overly staged)
- Matches your brand colors
- No competing brand logos visible

**Where to Use:**
- Background images for sections
- Testimonial section backgrounds
- Blog post headers (future)
- Email newsletter headers

## Design Consistency Checklist

Ensure all assets follow these guidelines:

### Colors
- [ ] Match primary brand color (#FF6B6B)
- [ ] Use consistent accent colors
- [ ] High contrast for accessibility
- [ ] Test in grayscale

### Typography
- [ ] Use brand fonts (Inter, Playfair Display)
- [ ] Consistent text sizes
- [ ] Readable at all sizes
- [ ] No more than 2 font families

### Style
- [ ] Consistent corner radius (rounded vs sharp)
- [ ] Similar shadow styles
- [ ] Matching illustration style (if used)
- [ ] Cohesive visual language

### Technical
- [ ] All images optimized
- [ ] Correct dimensions
- [ ] Appropriate file formats
- [ ] Transparency where needed
- [ ] Descriptive file names

## Asset Naming Convention

Use clear, descriptive names:

**Good:**
- `nibblemaps-logo-primary.svg`
- `app-screenshot-map-view.png`
- `og-image-homepage.jpg`

**Bad:**
- `logo1.svg`
- `screenshot.png`
- `image.jpg`

**Format:**
`[category]-[description]-[version].[extension]`

## Asset Management

### File Organization

```
assets/
├── branding/
│   ├── logo.svg
│   ├── logo-light.svg
│   └── brand-guidelines.pdf
├── favicons/
│   ├── favicon.ico
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   └── apple-touch-icon.png
├── screenshots/
│   ├── app-screenshot-1.png
│   ├── app-screenshot-2.png
│   └── source/ (full resolution originals)
├── social/
│   ├── og-image.jpg
│   └── twitter-card.jpg
└── stock/
    └── (any stock photos used)
```

### Version Control

Keep original, uncompressed versions:

```
assets/
└── source/ (never deploy to web)
    ├── logo-master.ai (Adobe Illustrator)
    ├── screenshots-original.sketch
    └── og-image-source.psd
```

## Quality Checklist

Before deploying any asset:

- [ ] Optimized file size
- [ ] Correct dimensions
- [ ] Appropriate format
- [ ] No compression artifacts
- [ ] Tested at actual display size
- [ ] Descriptive alt text prepared
- [ ] Backup copy saved

## Third-Party Asset Services

If you need professional help:

### Logo Design
- Fiverr: $50-200
- 99designs: $299+ (multiple options)
- Looka: $20 (AI-generated)

### Screenshots
- Placeit: $29/month (app mockups)
- Mockuuups Studio: $49 (lifetime)
- Smartmockups: Free tier available

### Image Editing
- Remove.bg: Free background removal
- Canva Pro: $12.99/month
- Adobe Creative Cloud: $54.99/month

## Asset Delivery Timeline

**Week 1:**
- [ ] Logo created
- [ ] Favicons generated
- [ ] Color palette finalized

**Week 2:**
- [ ] App screenshots captured
- [ ] Social media images designed
- [ ] All assets optimized

**Week 3:**
- [ ] Assets implemented on site
- [ ] Testing across devices
- [ ] Final adjustments

## Troubleshooting

### Logo appears blurry
- Ensure using SVG format
- Check if image is upscaled
- Verify file isn't corrupted

### Favicon not showing
- Clear browser cache
- Verify file path is correct
- Check file format (use ICO)
- Wait 24 hours for propagation

### Social image not displaying
- Validate with Facebook debugger
- Check dimensions are exact
- Verify file size under 8MB
- Ensure absolute URL (not relative)

### Screenshots too large
- Compress with TinyPNG
- Convert to WebP format
- Use lazy loading
- Implement responsive images

---

**Remember:** Quality assets make the difference between a professional site and an amateur one. Invest time in creating or sourcing excellent visuals—they're often the first thing visitors notice.

Your app is beautiful. Your website should be too.
