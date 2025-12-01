# Portfolio - Mykola Rudnev

A modern, responsive portfolio website showcasing the work and skills of Mykola Rudnev, a Senior Front-End Developer specializing in React.js, Next.js, TypeScript, and Magento 2.

## 🚀 Features

- **Modern UI/UX**: Glass morphism design with smooth animations and transitions
- **Performance Optimized**: Lazy loading for components, optimized bundle size
- **Fully Responsive**: Mobile-first design that works seamlessly across all devices
- **Interactive Sections**:
  - Hero section with profile and quick links
  - Work experience timeline
  - Projects showcase (20+ projects)
  - Technical and soft skills display
  - Professional recommendations
  - Contact information
- **Smooth Navigation**: Sticky navbar with active section highlighting
- **Animations**: Powered by Framer Motion for engaging user experience

## 🛠️ Tech Stack

- **React** 19.2.0 - UI library
- **TypeScript** 5.8.2 - Type safety
- **Vite** 6.2.0 - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework (via CDN)
- **Framer Motion** 12.23.25 - Animation library
- **React Icons** 5.5.0 - Icon library

## 📁 Project Structure

```
portfolio-mykola-rudnev/
├── components/
│   ├── ui/
│   │   └── GlassCard.tsx      # Reusable glass morphism card component
│   ├── About.tsx               # About section component
│   ├── Contact.tsx             # Contact section component
│   ├── Experience.tsx          # Work experience timeline
│   ├── Footer.tsx              # Footer component
│   ├── Hero.tsx                # Hero section with profile
│   ├── Navbar.tsx              # Navigation bar
│   ├── Projects.tsx            # Projects showcase
│   ├── Recommendations.tsx     # Professional recommendations
│   └── Skills.tsx              # Skills display
├── public/
│   ├── images/                 # Project images and assets
│   └── CV-Front-end__Developer_Mykola_Rudnev.pdf
├── App.tsx                     # Main application component
├── constants.tsx               # Data constants (projects, skills, etc.)
├── index.tsx                   # Application entry point
├── types.ts                    # TypeScript type definitions
├── vite.config.ts             # Vite configuration
└── tsconfig.json              # TypeScript configuration
```

## 🚦 Getting Started

### Prerequisites

- **Node.js** (v18 or higher recommended)
- **npm** or **yarn**

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-mykola-rudnev
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The production build will be generated in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🎨 Key Components

### Hero Section
- Profile image with hover effects
- Professional introduction
- Quick access buttons (Resume, GitHub, LinkedIn)
- About me card with glass morphism effect

### Experience Section
- Timeline of work experience
- Company logos and details
- Responsibilities and achievements

### Projects Section
- Showcase of 20+ projects
- Project images, descriptions, and links
- Technology stack for each project
- Categories: E-commerce (Magento 2), React/Next.js websites, and more

### Skills Section
- Technical skills with icons and color coding
- Soft skills display
- Interactive hover effects

### Recommendations Section
- Professional recommendations from colleagues
- LinkedIn profile links
- Testimonials highlighting professional qualities

## 🎯 Performance Optimizations

- **Lazy Loading**: Heavy components (Experience, Projects, Skills, Recommendations, Contact) are lazy-loaded to improve initial page load
- **Code Splitting**: Automatic code splitting via Vite
- **Optimized Images**: Images stored in public directory for efficient serving
- **Suspense Boundaries**: Custom loading fallbacks for better UX

## 🎨 Design Features

- **Glass Morphism**: Modern glassmorphic UI elements
- **Gradient Backgrounds**: Animated gradient blobs for visual interest
- **Smooth Scrolling**: Native smooth scroll behavior
- **Responsive Typography**: Fluid typography that adapts to screen size
- **Dark Theme**: Professional dark color scheme

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1440px+)

## 🔧 Configuration

### Vite Configuration
- Development server runs on port 3000
- Path alias `@` configured for root directory
- React plugin enabled

### TypeScript Configuration
- ES2022 target
- React JSX transform
- Strict type checking
- Path mapping support

## 📄 License

This project is private and proprietary.

## 👤 Author

**Mykola Rudnev**
- Front-End Developer with 5+ years of experience
- Specialized in React.js, Next.js, TypeScript, and Magento 2
- [LinkedIn](https://www.linkedin.com/in/mykola-rudnev-1525a5145/)
- [GitHub](https://github.com/MykolaRudnev)

## 🌟 Highlights

- **20+ Projects**: Showcasing diverse experience in e-commerce and web development
- **Modern Stack**: Built with latest React and TypeScript
- **Performance First**: Optimized for fast loading and smooth interactions
- **Professional Design**: Clean, modern UI that reflects professional standards

---

Built with ❤️ using React, TypeScript, and Vite
