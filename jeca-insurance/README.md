# JECA Insurance Website

A modern, responsive insurance website built with Next.js, React, TypeScript, and Tailwind CSS. JECA Insurance provides comprehensive coverage for auto, home, life, and business insurance with an innovative and user-friendly interface.

## 🚀 Features

### Frontend Features
- **Modern Design**: Clean, professional design with responsive layout
- **Interactive Components**: Dynamic quote calculators and forms
- **Multi-step Forms**: Comprehensive quote forms with validation
- **Customer Portal**: Login and dashboard for policy management
- **Mobile Responsive**: Optimized for all device sizes
- **Accessibility**: Built with accessibility best practices

### Insurance Services
- **Auto Insurance**: Comprehensive vehicle coverage with competitive rates
- **Home Insurance**: Complete homeowners protection
- **Life Insurance**: Flexible life insurance options
- **Business Insurance**: Commercial coverage solutions

### Key Pages
- **Homepage**: Hero section, services overview, testimonials, and CTAs
- **Insurance Pages**: Detailed information for each insurance type
- **Quote Calculator**: Multi-step quote forms with validation
- **Customer Portal**: Login and dashboard functionality
- **Contact**: Multiple contact methods and office locations
- **About**: Company information and leadership team

## 🛠 Tech Stack

### Frontend
- **Framework**: Next.js 15.4.6 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Heroicons
- **Forms**: React Hook Form with Zod validation
- **Animations**: Framer Motion (ready for implementation)

### Planned Backend (Future Implementation)
- **Backend**: ASP.NET Core (C#) REST API
- **Database**: SQL Server
- **Caching**: Redis
- **Authentication**: JWT tokens
- **API Documentation**: Swagger/OpenAPI

## 📁 Project Structure

```
jeca-insurance/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── about/             # About page
│   │   ├── contact/           # Contact page
│   │   ├── dashboard/         # Customer dashboard
│   │   ├── insurance/         # Insurance service pages
│   │   │   ├── auto/         # Auto insurance
│   │   │   └── home/         # Home insurance
│   │   ├── login/            # Customer login
│   │   ├── quote/            # Quote pages
│   │   │   └── auto/         # Auto quote form
│   │   ├── globals.css       # Global styles
│   │   ├── layout.tsx        # Root layout
│   │   └── page.tsx          # Homepage
│   ├── components/            # Reusable components
│   │   ├── home/             # Homepage components
│   │   │   ├── HeroSection.tsx
│   │   │   ├── ServicesSection.tsx
│   │   │   ├── TestimonialsSection.tsx
│   │   │   └── CTASection.tsx
│   │   ├── layout/           # Layout components
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   └── quote/            # Quote components
│   │       └── AutoQuoteForm.tsx
│   └── lib/                  # Utility functions
│       └── utils.ts          # Common utilities
├── public/                   # Static assets
├── package.json             # Dependencies
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── README.md               # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd jeca-insurance
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📱 Key Features Implemented

### 1. Homepage
- **Hero Section**: Compelling headline with quick quote selector
- **Services Overview**: Insurance types with features and pricing
- **Testimonials**: Customer reviews with interactive carousel
- **Call-to-Action**: Multiple contact methods and quick access

### 2. Insurance Pages
- **Auto Insurance**: Comprehensive coverage details and benefits
- **Home Insurance**: Property protection information
- **Detailed Coverage**: What's included and pricing information
- **Benefits**: Additional features and discounts

### 3. Quote System
- **Multi-step Forms**: Progressive form completion
- **Form Validation**: Real-time validation with Zod schema
- **Auto Quote**: Personal info, address, vehicle, and coverage steps
- **Responsive Design**: Mobile-optimized form experience

### 4. Customer Portal
- **Login Page**: Secure authentication interface
- **Dashboard**: Policy overview and account management
- **Quick Actions**: Payment, claims, documents, and contact
- **Account Summary**: Policy status and upcoming payments

### 5. Contact & Support
- **Multiple Contact Methods**: Phone, email, chat, and claims support
- **Contact Form**: Comprehensive inquiry form
- **Office Locations**: Physical office information
- **Emergency Support**: 24/7 claims hotline

## 🎨 Design System

### Colors
- **Primary**: Blue (#2563eb)
- **Secondary**: Green (#059669)
- **Accent**: Red (#dc2626) for emergency/claims
- **Neutral**: Gray scale for text and backgrounds

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold, large sizes for impact
- **Body**: Readable sizes with proper line height

### Components
- **Buttons**: Consistent styling with hover states
- **Forms**: Clean inputs with validation feedback
- **Cards**: Subtle shadows and rounded corners
- **Icons**: Heroicons for consistency

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Quality
- **TypeScript**: Full type safety
- **ESLint**: Code linting and formatting
- **Tailwind CSS**: Utility-first styling
- **Component Architecture**: Reusable, modular components

## 🚀 Future Enhancements

### Backend Integration
- ASP.NET Core API development
- SQL Server database setup
- Redis caching implementation
- Authentication system
- Real quote calculations
- Policy management system

### Additional Features
- **Live Chat**: Real-time customer support
- **Mobile App**: React Native companion app
- **Advanced Analytics**: User behavior tracking
- **A/B Testing**: Conversion optimization
- **Multi-language**: Internationalization support
- **Payment Gateway**: Online payment processing

### Performance Optimizations
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Lazy loading components
- **SEO Optimization**: Meta tags and structured data
- **PWA Features**: Offline functionality
- **Performance Monitoring**: Real user metrics

## 📄 License

This project is proprietary software developed for JECA Insurance Company.

## 🤝 Contributing

This is a private project. For internal development guidelines, please refer to the company development standards.

## 📞 Support

For technical support or questions about this project:
- **Email**: dev-team@jecainsurance.com
- **Internal Chat**: #jeca-web-dev
- **Documentation**: Internal wiki

---

**JECA Insurance** - Protecting what matters most since 1974.
