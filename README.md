# Magnificent Retreat Website

A luxurious, mobile-first website for the Magnificent Women's Renewal Retreat in Kenya.

## 🌟 About the Project

This is a single-page React application designed for a 3-day transformative retreat for women leaders. The website features elegant design, smooth animations, and complete booking functionality.

### Live Demo
🔗 [View Live Site](https://paskaliaa.github.io/magnificent-retreat/)

## 🎨 Features

- **Mobile-First Responsive Design** - Looks perfect on all devices
- **Luxurious UI/UX** - Elegant design with gold, purple, and red color scheme
- **Interactive Components** - Smooth scroll, accordions, pricing toggles
- **Complete Booking System** - Registration form with payment plans
- **SEO Optimized** - Meta tags and structured content

## 🚀 Quick Start

### Option 1: Direct Browser (Simplest)
1. Download the files
2. Open `index.html` in any modern browser
3. That's it! The website will load

### Option 2: Local Server (Recommended)
1. Install [VS Code](https://code.visualstudio.com/)
2. Install the "Live Server" extension
3. Right-click on `index.html` and select "Open with Live Server"

## 📁 Project Structure

```
magnificent-retreat/
│
├── index.html              # Main HTML file
├── magnificent-retreat.jsx # React component with all functionality
└── README.md              # Project documentation
```

## 🛠️ Technologies Used

- **React 18** - For dynamic user interface
- **Tailwind CSS** - For styling
- **Lucide Icons** - For beautiful icons
- **Google Fonts** - Playfair Display & Poppins fonts
- **Babel** - For JSX transformation (runs in browser)

## 📝 Customization Guide

### Changing Colors
In the `index.html` file, find the Tailwind config and update:
```javascript
colors: {
    gold: '#c49356',      // Change your gold color
    purple: '#46215f',    // Change your purple color
    red: '#8b1d1d'       // Change your red color
}
```

### Updating Content
All content is in the `magnificent-retreat.jsx` file. Look for these sections:
- **Hero Section** - Lines containing "HeroSection"
- **About Section** - Lines containing "AboutSection"
- **Pricing** - Lines containing "PricingSection"
- **FAQ** - Update the `faqs` array

### Adding Images
Replace placeholder image references:
1. Hero background: Add your image URL in the Hero Section CSS
2. Facilitator photo: Replace the placeholder div with an `<img>` tag

## 🌐 Deployment to GitHub Pages

Follow the setup instructions in `github-setup-guide.md` for detailed deployment steps.

## 📧 Form Integration

To connect forms to your Zoho email:
1. Sign up for a form service like [Formspree](https://formspree.io) or [EmailJS](https://www.emailjs.com)
2. Update the form action URLs in the React component
3. Add your service credentials

## 🔗 Important Links

- **Facilitator**: Laimani Bidali - Alabastron Network Trust
- **Location**: Hotel Brackenhurst, Limuru, Kenya
- **Duration**: 3 Days Transformative Retreat

## 📞 Support

For questions about the website setup, please create an issue in this repository.

## 📄 License

This project is proprietary to Magnificent Retreat. All rights reserved.

---

**Built with 💜 for empowering women leaders across Africa**
# magnificent-retreat
Website for Magnificent Women's Renewal Retrea
