# JECA Insurance - Complete Insurance Management Platform

A comprehensive insurance management platform built with Next.js 15 and .NET Core 8.0, featuring a modern frontend and robust backend API.

## 🚀 Project Overview

JECA Insurance is a full-stack insurance platform that provides:
- **Frontend**: Modern React/Next.js application with responsive design
- **Backend**: .NET Core 8.0 Web API with Entity Framework Core
- **Database**: SQL Server with Entity Framework migrations
- **Features**: Quote management, contact forms, blog system, and comprehensive insurance services

## 📁 Project Structure

```
├── jeca-insurance/          # Frontend (Next.js 15.4.6)
│   ├── src/
│   │   ├── app/            # Next.js App Router pages
│   │   ├── components/     # React components
│   │   └── lib/           # Utilities and services
│   ├── public/            # Static assets
│   └── package.json       # Frontend dependencies
├── JecaInsurance.API/      # Backend (.NET Core 8.0)
│   ├── Controllers/       # API controllers
│   ├── Models/           # Data models
│   ├── Data/             # DbContext and migrations
│   └── Scripts/          # SQL scripts
└── docs/                 # Documentation
```

## 🛠️ Technology Stack

### Frontend
- **Framework**: Next.js 15.4.6 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: Heroicons, Custom components
- **Forms**: React Hook Form with validation
- **Image Optimization**: Next.js Image with Unsplash integration

### Backend
- **Framework**: .NET Core 8.0
- **Database**: SQL Server with Entity Framework Core
- **API**: RESTful Web API with Swagger documentation
- **Authentication**: Ready for JWT implementation
- **Validation**: Data annotations and custom validators

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- .NET 8.0 SDK
- SQL Server (LocalDB or full instance)

### Frontend Setup
```bash
cd jeca-insurance
npm install
npm run dev
```
Frontend will be available at `http://localhost:3000`

### Backend Setup
```bash
cd JecaInsurance.API
dotnet restore
dotnet ef database update
dotnet run
```
API will be available at `http://localhost:5149`

## 📋 Features

### ✅ Implemented Features
- **Contact Form**: Fully functional with database integration
- **Quote System**: Multiple insurance types (Auto, Home, Life, Business, etc.)
- **Blog System**: 6 comprehensive blog posts with SEO optimization
- **Responsive Design**: Mobile-first approach
- **Database Integration**: Entity Framework with migrations
- **API Documentation**: Swagger/OpenAPI integration

### 🎯 Insurance Types Supported
- Auto Insurance
- Home Insurance
- Life Insurance
- Health Insurance (Individual, Medicare, Dental, Vision)
- Business Insurance (General Liability, BOP, Workers Comp)
- Property Insurance (Renters, Landlords, Flood)
- Specialty Insurance (Boat, Motorcycle, Umbrella, Disability)

### 📝 Blog Content
- Auto Insurance Premium Reduction Tips
- Life Insurance Comparison Guide
- Home Insurance Claims Process
- Business Insurance Essentials
- Health Insurance Networks Guide
- Flood Insurance Importance

## 🗄️ Database Schema

### Key Tables
- `ContactMessages`: Contact form submissions
- `AutoQuotes`: Auto insurance quotes
- `HomeQuotes`: Home insurance quotes
- `LifeInsuranceQuotes`: Life insurance quotes
- `BusinessQuotes`: Business insurance quotes
- And more for each insurance type...

## 🔧 Configuration

### Environment Variables
Create `.env.local` in the frontend directory:
```env
NEXT_PUBLIC_API_URL=http://localhost:5149
```

### Database Connection
Update `appsettings.json` in the API project:
```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=(localdb)\\mssqllocaldb;Database=JecaInsuranceDb;Trusted_Connection=true;"
  }
}
```

## 📚 API Documentation

The API includes comprehensive Swagger documentation available at:
`http://localhost:5149/swagger`

### Key Endpoints
- `POST /api/contact` - Submit contact form
- `POST /api/quotes/auto` - Submit auto quote
- `POST /api/quotes/home` - Submit home quote
- `GET /api/quotes` - Retrieve quotes
- And many more...

## 🧪 Testing

### Frontend Testing
```bash
cd jeca-insurance
npm run test
npm run build  # Production build test
```

### Backend Testing
```bash
cd JecaInsurance.API
dotnet test
dotnet build  # Build verification
```

## 🚀 Deployment

### Frontend (Vercel/Netlify)
```bash
npm run build
npm run export  # For static export if needed
```

### Backend (Azure/IIS)
```bash
dotnet publish -c Release
```

## 📈 Performance

- **Frontend**: Optimized with Next.js 15 features
- **Backend**: Efficient Entity Framework queries
- **Images**: Next.js Image optimization with Unsplash CDN
- **SEO**: Comprehensive metadata and structured data

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is private and proprietary to JECA Insurance.

## 📞 Support

For support and questions, please contact the development team.

---

**Built with ❤️ for JECA Insurance**
