# NibbleMaps Website Deployment Guide

Complete step-by-step guide to launch your NibbleMaps marketing website.

## Pre-Deployment Checklist

### 1. Content Preparation

- [ ] Replace all placeholder content with actual copy
- [ ] Verify App Store link is correct
- [ ] Update copyright year if needed
- [ ] Review all text for typos and accuracy
- [ ] Confirm contact email addresses

### 2. Assets Required

Create and add these files to `/assets` folder:

#### Logo Files
- `logo.svg` - Main logo (32x32px minimum, scalable)
- `logo-light.svg` - White version for dark backgrounds (optional)

#### Favicons
- `favicon.ico` - 32x32px
- `apple-touch-icon.png` - 180x180px
- `favicon-16x16.png` - 16x16px
- `favicon-32x32.png` - 32x32px

#### App Screenshots
- `app-screenshot-1.png` - Hero phone mockup (1170x2532px)
- `app-screenshot-2.png` - Additional feature showcase (optional)
- `app-screenshot-3.png` - Map view (optional)

#### Social Media
- `og-image.jpg` - Open Graph image (1200x630px)
- `twitter-card.jpg` - Twitter card image (1200x600px)

### 3. Configuration Updates

#### Update Meta Tags (index.html)

```html
<!-- Update line 10 with your domain -->
<meta property="og:url" content="https://nibblemaps.com">

<!-- Update line 9 with full URL to OG image -->
<meta property="og:image" content="https://nibblemaps.com/assets/og-image.jpg">
```

#### Update App Store Link

Find and replace all instances of:
```html
href="https://apps.apple.com/app/nibblemaps"
```

With your actual App Store URL:
```html
href="https://apps.apple.com/app/your-actual-app-id"
```

#### Add Real Logo

In `index.html`, replace the SVG logo placeholder:

```html
<!-- Line 35 - Replace entire SVG block with -->
<img src="assets/logo.svg" alt="NibbleMaps" width="32" height="32">
```

And in footer (line 325):
```html
<!-- Replace footer SVG with same -->
<img src="assets/logo.svg" alt="NibbleMaps" width="32" height="32">
```

## Deployment Methods

### Method 1: Netlify (Recommended for Beginners)

**Why Netlify?**
- Free SSL certificate
- Automatic deployments
- Custom domain support
- Built-in CDN
- Continuous deployment from Git

**Steps:**

1. **Create Netlify Account**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with GitHub, GitLab, or email

2. **Deploy**

   **Option A: Drag & Drop**
   - Click "Add new site" → "Deploy manually"
   - Drag the entire `NibbleMaps` folder
   - Site goes live instantly

   **Option B: Git Integration (Recommended)**
   - Push code to GitHub repository
   - Click "Add new site" → "Import from Git"
   - Select your repository
   - Click "Deploy site"

3. **Custom Domain**
   - Click "Domain settings"
   - Add custom domain (e.g., nibblemaps.com)
   - Update DNS at your domain registrar:
     ```
     Type: A
     Name: @
     Value: 75.2.60.5

     Type: CNAME
     Name: www
     Value: your-site.netlify.app
     ```

4. **SSL Certificate**
   - Automatically provisioned
   - Forces HTTPS redirect

**Netlify Configuration File (Optional)**

Create `netlify.toml` in root:

```toml
[build]
  publish = "."

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "no-referrer-when-downgrade"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Method 2: Vercel

**Why Vercel?**
- Lightning fast
- Excellent developer experience
- Free SSL and custom domains
- Built-in analytics

**Steps:**

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Navigate to Project**
   ```bash
   cd /Users/jonahkroll/Downloads/NibbleMaps
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Answer Prompts**
   ```
   Set up and deploy? Y
   Which scope? (Your account)
   Link to existing project? N
   Project name? nibblemaps
   In which directory is your code? ./
   Auto-detected settings okay? Y
   ```

5. **Custom Domain**
   ```bash
   vercel domains add nibblemaps.com
   ```

### Method 3: GitHub Pages

**Why GitHub Pages?**
- Free hosting
- Direct Git integration
- Good for open source projects

**Steps:**

1. **Create GitHub Repository**
   ```bash
   cd /Users/jonahkroll/Downloads/NibbleMaps
   git init
   git add .
   git commit -m "Initial commit: NibbleMaps marketing site"
   ```

2. **Push to GitHub**
   ```bash
   # Create repository on GitHub first
   git remote add origin https://github.com/yourusername/nibblemaps.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll to "Pages" section
   - Source: Deploy from a branch
   - Branch: main / (root)
   - Click Save

4. **Custom Domain**
   - Add `CNAME` file with your domain:
     ```bash
     echo "nibblemaps.com" > CNAME
     git add CNAME
     git commit -m "Add custom domain"
     git push
     ```
   - Update DNS at registrar:
     ```
     Type: A
     Name: @
     Values:
       185.199.108.153
       185.199.109.153
       185.199.110.153
       185.199.111.153

     Type: CNAME
     Name: www
     Value: yourusername.github.io
     ```

### Method 4: Traditional Web Host

**Compatible with:**
- Bluehost
- SiteGround
- HostGator
- DreamHost
- Any cPanel hosting

**Steps:**

1. **Connect via FTP**
   - Use FileZilla, Cyberduck, or host's file manager
   - Host: ftp.yourdomain.com
   - Username: Your hosting username
   - Password: Your hosting password

2. **Upload Files**
   - Navigate to `public_html` or `www` directory
   - Upload all files from NibbleMaps folder
   - Ensure `index.html` is in root

3. **Set Permissions**
   - Files: 644
   - Folders: 755

4. **SSL Certificate**
   - Most hosts offer free Let's Encrypt SSL
   - Enable in cPanel under "SSL/TLS"

## Post-Deployment Setup

### 1. Google Analytics

1. **Create GA4 Property**
   - Go to [analytics.google.com](https://analytics.google.com)
   - Click "Admin" → "Create Property"
   - Name: NibbleMaps
   - Get Measurement ID (G-XXXXXXXXXX)

2. **Add Tracking Code**

   Add to `index.html` before `</head>`:

   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

3. **Verify Installation**
   - Visit your site
   - Check real-time reports in GA4
   - Should see 1 active user (you)

### 2. Google Search Console

1. **Verify Ownership**
   - Go to [search.google.com/search-console](https://search.google.com/search-console)
   - Add property: nibblemaps.com
   - Verify via HTML file upload or DNS record

2. **Submit Sitemap**

   Create `sitemap.xml` in root:

   ```xml
   <?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://nibblemaps.com/</loc>
       <lastmod>2026-01-29</lastmod>
       <priority>1.0</priority>
     </url>
   </urlset>
   ```

   Submit at: Search Console → Sitemaps → Add new sitemap

3. **Request Indexing**
   - Enter homepage URL
   - Click "Request Indexing"
   - Repeat for important pages

### 3. Performance Testing

**Run These Tests:**

1. **Google PageSpeed Insights**
   - [pagespeed.web.dev](https://pagespeed.web.dev)
   - Enter your URL
   - Aim for 90+ on mobile and desktop

2. **GTmetrix**
   - [gtmetrix.com](https://gtmetrix.com)
   - Test from multiple locations
   - Aim for Grade A

3. **WebPageTest**
   - [webpagetest.org](https://webpagetest.org)
   - Test with 3G connection
   - Aim for under 3s load time

**Common Issues & Fixes:**

- **Slow image loading**: Compress images with TinyPNG
- **No HTTPS**: Enable SSL certificate in hosting
- **Render blocking**: Already optimized with async scripts
- **Unused CSS**: Already minimal, no frameworks used

### 4. Mobile Testing

**Test on Real Devices:**

- [ ] iPhone (Safari)
- [ ] Android phone (Chrome)
- [ ] iPad (Safari)
- [ ] Android tablet (Chrome)

**Use Browser Dev Tools:**

1. Open Chrome DevTools (F12)
2. Click device icon (Ctrl+Shift+M)
3. Test these viewports:
   - iPhone SE (375px)
   - iPhone 14 Pro (393px)
   - iPad (768px)
   - Desktop (1440px)

**Check:**
- [ ] All text is readable
- [ ] Buttons are easy to tap (44px minimum)
- [ ] Images scale properly
- [ ] Navigation works
- [ ] Forms are usable
- [ ] No horizontal scroll

### 5. Cross-Browser Testing

**Minimum Browsers to Test:**

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile Safari iOS
- Chrome Android

**Use BrowserStack:**
- Free trial: [browserstack.com](https://browserstack.com)
- Test all major browsers quickly

### 6. SEO Validation

**Use This Checklist:**

- [ ] Title tag is 50-60 characters
- [ ] Meta description is 150-160 characters
- [ ] H1 tag exists and is unique
- [ ] Images have alt text
- [ ] URLs are descriptive
- [ ] SSL is enabled (HTTPS)
- [ ] Mobile-friendly (Google test)
- [ ] Page loads under 3 seconds
- [ ] No broken links
- [ ] Sitemap submitted

**SEO Testing Tools:**

- Google Mobile-Friendly Test
- Lighthouse SEO audit
- Screaming Frog (free version)

## Domain Setup

### Purchase Domain

**Recommended Registrars:**
- Namecheap (cheapest)
- Google Domains (easiest)
- Cloudflare (best features)

**Costs:**
- .com domain: $10-15/year
- .app domain: $15-20/year
- .io domain: $30-40/year

### DNS Configuration

**For Netlify:**
```
Type: A
Name: @
Value: 75.2.60.5

Type: CNAME
Name: www
Value: your-site.netlify.app
```

**For Vercel:**
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**Propagation Time:** 1-48 hours (usually under 4 hours)

## Ongoing Maintenance

### Weekly Tasks
- [ ] Check analytics for traffic spikes/drops
- [ ] Monitor uptime (use UptimeRobot.com)
- [ ] Respond to user feedback

### Monthly Tasks
- [ ] Update stats (downloads, ratings)
- [ ] Check for broken links
- [ ] Review and update testimonials
- [ ] Monitor page speed

### Quarterly Tasks
- [ ] Update app screenshots
- [ ] Refresh feature descriptions
- [ ] Review and update copy
- [ ] Analyze conversion rates

### As Needed
- [ ] Add blog posts
- [ ] Update for major app releases
- [ ] Fix bugs reported by users
- [ ] A/B test different CTAs

## Troubleshooting

### Site Won't Load

**Check:**
1. DNS propagated? (Use whatsmydns.net)
2. Files uploaded correctly?
3. index.html in root directory?
4. File permissions correct? (644 for files, 755 for folders)

### Images Not Showing

**Fix:**
1. Check file paths are correct
2. Verify images uploaded to /assets folder
3. Check case sensitivity (image.jpg vs Image.jpg)
4. Test image URLs directly in browser

### Analytics Not Working

**Fix:**
1. Verify tracking code installed
2. Check Measurement ID is correct
3. Disable ad blockers
4. Wait 24 hours for data to appear
5. Test in Incognito mode

### Mobile Layout Broken

**Fix:**
1. Check viewport meta tag exists
2. Test with browser dev tools
3. Clear browser cache
4. Verify responsive CSS is loading

### SSL Certificate Issues

**Fix:**
1. Force HTTPS redirect in hosting settings
2. Wait for DNS propagation
3. Clear browser cache
4. Check mixed content warnings

## Support Resources

- **Netlify**: [docs.netlify.com](https://docs.netlify.com)
- **Vercel**: [vercel.com/docs](https://vercel.com/docs)
- **GitHub Pages**: [pages.github.com](https://pages.github.com)
- **Google Analytics**: [support.google.com/analytics](https://support.google.com/analytics)

## Emergency Contacts

If site goes down:
1. Check hosting status page
2. Verify DNS settings unchanged
3. Check domain registration status
4. Contact hosting support
5. Rollback to previous version if needed

---

**Deployment Completed?** Great! Now focus on driving traffic and monitoring conversions.

Remember: A website is never "done" - keep iterating based on user feedback and analytics data.
