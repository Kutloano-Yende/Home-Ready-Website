# ⚡ QUICK START - Copy & Paste Commands

## 🚀 Start in 3 Steps (2 minutes)

### Step 1: Install Node.js
Download from: https://nodejs.org (LTS version)

### Step 2: Create Project Folder & Navigate
```bash
mkdir homeready-landing
cd homeready-landing
```

### Step 3: Copy All Files Here
Copy these files into your `homeready-landing` folder:
- `package.json`
- `tailwind.config.js`
- `postcss.config.js`
- `vite.config.js`
- `index.html`
- `.gitignore`
- Create `src/` folder with:
  - `main.jsx`
  - `App.jsx`
  - `index.css`
  - `HomeReadyLanding.jsx`

### Step 4: Install Dependencies
```bash
npm install
```

### Step 5: Start Development Server
```bash
npm run dev
```

✅ **DONE!** Site opens at http://localhost:3000

---

## 📝 File Organization

```
homeready-landing/
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css
│   └── HomeReadyLanding.jsx
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── index.html
├── .gitignore
└── README.md
```

---

## 🔧 Quick Customizations

### Change Phone Number
In `HomeReadyLanding.jsx`, find:
```jsx
href="tel:0871507207"
```
Replace with your number.

### Change WhatsApp Number
Find:
```jsx
href="https://wa.me/27722048877"
```
Replace `27722048877` with your number (include country code).

### Change Email
Find:
```jsx
href="mailto:Admin@homereadyfinance.co.za"
```
Replace with your email.

### Change Company Name
Find `HomeReady` and replace with your brand name.

---

## 🚀 Deploy to Production

### Option 1: Vercel (Easiest - 1 Click)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

You get a free domain like: `homeready.vercel.app`

### Option 2: Netlify (Also Easy)

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy
```

### Option 3: GitHub Pages

```bash
# Initialize git
git init
git add .
git commit -m "Initial commit"

# Push to GitHub
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/homeready.git
git push -u origin main

# Then enable GitHub Pages in repo settings
```

---

## ✅ Common Issues & Fixes

### "npm: command not found"
→ Install Node.js from https://nodejs.org

### "Port 3000 already in use"
→ Kill process or use different port:
```bash
npm run dev -- --port 3001
```

### "Tailwind styles not showing"
→ Rebuild CSS:
```bash
rm -rf node_modules
npm install
npm run dev
```

### "Module not found" error
→ Reinstall dependencies:
```bash
npm install
```

---

## 📞 Contact Form Setup (Important!)

The contact form needs a backend to send emails.

### Quick Fix: Use Formspree

1. Go to: https://formspree.io
2. Create account
3. Create new form
4. Copy your **Form ID**
5. Find this in `HomeReadyLanding.jsx`:
```jsx
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```
6. Replace `YOUR_FORM_ID` with your actual ID

**That's it!** Emails now work automatically.

---

## 📊 Check If It Works

1. **Local Testing**
   - Open http://localhost:3000
   - Click all buttons
   - Test contact form
   - Check mobile view (F12 → Device Toolbar)

2. **Before Deploying**
   - Build: `npm run build`
   - Preview: `npm run preview`
   - Check all sections scroll smoothly
   - Test WhatsApp button

3. **After Deploying**
   - Visit your live URL
   - Test contact form
   - Check mobile responsiveness
   - Submit to Google Search Console

---

## 🎯 Next Steps

1. ✅ Copy all files
2. ✅ Run `npm install`
3. ✅ Run `npm run dev`
4. ✅ Customize phone/email/WhatsApp
5. ✅ Set up contact form (Formspree)
6. ✅ Test locally
7. ✅ Deploy (Vercel/Netlify)
8. ✅ Connect custom domain
9. ✅ Set up Google Analytics
10. ✅ Launch! 🚀

---

## 💡 Pro Tips

- Tailwind colors: Use `text-amber-500`, `bg-amber-600`, etc.
- Edit testimonials in `testimonials` array
- Edit services in `services` array
- Edit FAQ in `faqs` array
- Animations use Framer Motion (already configured)

---

## 📱 Test on Mobile

While running `npm run dev`:
1. Find your computer IP: `ipconfig getifaddr en0` (Mac) or `ipconfig` (Windows)
2. On phone, visit: `http://YOUR_IP:3000`
3. Test all buttons and forms

---

**You're all set! Run these commands NOW:**

```bash
npm install
npm run dev
```

Then open http://localhost:3000 in your browser! 🎉
