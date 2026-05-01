# Ontario Incorporated - Professional Roofing & Home Services Website

A modern, responsive website built for Ontario Incorporated, a professional roofing and home services company serving the Greater Toronto Area.

## 🎯 Features

### 🎨 Design & UX
- **Modern UI**: Clean, professional design with brand colors (Red, Black, White)
- **Responsive Design**: Mobile-first approach, works perfectly on all devices
- **Smooth Animations**: Framer Motion animations throughout for engaging experience
- **Professional Typography**: Optimized fonts and spacing

### 📱 Pages & Sections
1. **Home (Hero)** - Eye-catching hero section with animations and CTA buttons
2. **Services** - Showcase of all 4 main services with animated cards
3. **Gallery** - Video showcase section for project demonstrations
4. **Testimonials** - Customer reviews and trust badges
5. **Contact** - Lead capture form with toast notifications
6. **Navigation** - Sticky navbar with mobile menu
7. **Footer** - Comprehensive footer with links and contact info

### ⚙️ Tech Stack
- **React** - Component-based UI library
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Hot Toast** - Toast notifications
- **Lucide React** - Icon library

### 🔔 Features
- **Toast Notifications** - Success/error messages for form submissions
- **Smooth Transitions** - Page scrolling and animations
- **Hamburger Menu** - Mobile-responsive navigation
- **Video Support** - Ready for video galleries
- **Lead Generation** - Forms optimized for conversions
- **SEO Ready** - Meta tags and structured data

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone or navigate to the repository**
```bash
cd ontario-roofing-incoparatedwebsite
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

The website will open at `http://localhost:3000`

4. **Build for production**
```bash
npm run build
```

## 📂 Project Structure

```
src/
├── components/
│   ├── Hero.jsx           # Landing hero section
│   ├── Services.jsx       # Services showcase
│   ├── Gallery.jsx        # Video gallery
│   ├── Testimonials.jsx   # Customer reviews
│   ├── Contact.jsx        # Contact form
│   ├── Navbar.jsx         # Navigation
│   └── Footer.jsx         # Footer section
├── App.jsx                # Main app component
├── main.jsx               # React entry point
└── index.css              # Global styles
├── tailwind.config.js     # Tailwind configuration
├── postcss.config.js      # PostCSS configuration
├── vite.config.js         # Vite configuration
└── package.json           # Project dependencies
```

## 🎬 Adding Videos

To add your project videos to the gallery:

1. Create a `public/videos/` directory in your project root
2. Add your video files:
   - `roof-install.mp4`
   - `gutter-work.mp4`
   - `siding.mp4`
   - `windows.mp4`
   - `before-after.mp4`
   - `testimonial.mp4`

3. Update the `videos` array in `src/components/Gallery.jsx` with your video paths

## 🎨 Customization

### Brand Colors
Update brand colors in `tailwind.config.js`:
- Primary Red: `#DC143C`
- Primary Dark: `#1a1a1a`
- Primary Light: `#f9f9f9`

### Contact Information
Update these in components:
- Phone: `437-533-5279`
- Instagram: `@ontario_incorporated_roofing`
- Location: `Toronto, Canada`
- Email: `info@ontarioincorporated.com`

### Services
Edit the services array in `src/components/Services.jsx` to modify service offerings.

## 🚀 Deployment

### Netlify
1. Push code to GitHub
2. Connect repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### Vercel
1. Import project from GitHub
2. Vercel auto-detects Vite setup
3. Deploy automatically

### Traditional Hosting
1. Run `npm run build`
2. Upload the `dist` folder to your hosting provider

## 📧 Contact Form Backend

The contact form currently logs data to console. To enable email notifications:

1. Set up a backend service (Firebase, Sendgrid, custom API)
2. Update the `handleSubmit` function in `src/components/Contact.jsx`
3. Replace console.log with API call

## 🔍 SEO Optimization

- Meta tags in `index.html`
- Semantic HTML structure
- Optimized image loading
- Mobile responsive
- Fast performance (Vite)

## 📱 Mobile Responsive

All components are fully responsive with:
- Hamburger menu on mobile
- Touch-optimized buttons
- Flexible layouts
- Optimized images

## 🎯 Lead Generation Features

- **Prominent CTAs**: "Call Now" buttons throughout
- **Free Estimate Offer**: Highlighted across all pages
- **Contact Form**: Easy-to-use lead capture
- **Social Links**: Instagram integration
- **Phone Integration**: Direct calling on mobile

## 📝 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 🤝 Contributing

Feel free to modify and customize this website for your specific needs.

## 📄 License

This project is created for Ontario Incorporated.

## 📞 Support

For questions or technical support, contact the development team.

---

**Built with ❤️ using React, Tailwind CSS, and Framer Motion**
