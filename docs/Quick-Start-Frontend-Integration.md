# JECA INSURANCE - QUICK START FRONTEND INTEGRATION

## 🚀 **IMMEDIATE SETUP**

### **1. Install Dependencies**
```bash
npm install axios
# or
yarn add axios
```

### **2. API Client Setup**
```typescript
// lib/api.ts
import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:5149/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);
```

### **3. Basic Quote Service**
```typescript
// services/quoteService.ts
import { api } from '../lib/api';

export interface BaseQuote {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  informationSecure: boolean;
}

export const quoteService = {
  // Generic quote operations
  async createQuote<T extends BaseQuote>(quoteType: string, data: T) {
    const response = await api.post(`/${quoteType}`, data);
    return response.data;
  },

  async getQuotes(quoteType: string, page = 1, pageSize = 10) {
    const response = await api.get(`/${quoteType}?page=${page}&pageSize=${pageSize}`);
    return {
      data: response.data,
      totalCount: parseInt(response.headers['x-total-count'] || '0'),
      page: parseInt(response.headers['x-page'] || '1'),
      pageSize: parseInt(response.headers['x-page-size'] || '10'),
    };
  },

  async getQuote(quoteType: string, id: string) {
    const response = await api.get(`/${quoteType}/${id}`);
    return response.data;
  },

  async updateQuote<T extends BaseQuote>(quoteType: string, id: string, data: T) {
    const response = await api.put(`/${quoteType}/${id}`, data);
    return response.data;
  },

  async deleteQuote(quoteType: string, id: string) {
    await api.delete(`/${quoteType}/${id}`);
  },
};
```

## 📋 **ALL 19 QUOTE TYPES READY**

### **Quick Reference - Quote Types:**
```typescript
// Available quote endpoints:
const QUOTE_TYPES = {
  // Vehicle Insurance
  AUTO: 'AutoQuote',
  BOAT: 'BoatQuote', 
  MOTORCYCLE: 'MotorcycleQuote',
  
  // Property Insurance
  HOME: 'HomeQuote',
  FLOOD: 'FloodQuote',
  RENTERS: 'RentersQuote',
  LANDLORDS: 'LandlordsQuote',
  
  // Business Insurance
  BUSINESS: 'BusinessQuote',
  BOP: 'BOPQuote',
  WORKERS_COMP: 'WorkersCompQuote',
  
  // Health Insurance
  HEALTH: 'HealthQuote',
  DENTAL: 'DentalQuote',
  VISION: 'VisionQuote',
  
  // Life & Specialty
  LIFE: 'LifeInsuranceQuote',
  DISABILITY: 'DisabilityInsuranceQuote',
  UMBRELLA: 'UmbrellaInsuranceQuote',
  ANNUITY: 'AnnuityQuote',
  
  // Medicare
  MEDICARE_ADVANTAGE: 'MedicareAdvantageQuote',
  MEDICARE_SUPPLEMENT: 'MedicareSupplementQuote',
} as const;
```

## 🔧 **EXAMPLE USAGE**

### **Create Auto Quote**
```typescript
// Example: Create auto insurance quote
const autoQuoteData = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@example.com',
  phoneNumber: '555-1234',
  address: '123 Main St',
  city: 'Anytown',
  state: 'CA',
  zipCode: '12345',
  informationSecure: true,
  vehicles: [{
    isPrimary: true,
    year: '2020',
    make: 'Toyota',
    model: 'Camry',
    driveToWorkSchool: 'Yes',
    isLeased: 'No',
  }],
  drivers: [{
    name: 'John Doe',
    gender: 'Male',
    dateOfBirth: new Date('1990-01-01'),
    married: 'Yes',
  }],
};

const newQuote = await quoteService.createQuote(QUOTE_TYPES.AUTO, autoQuoteData);
```

### **Get All Quotes with Pagination**
```typescript
// Get quotes with pagination
const quotesResult = await quoteService.getQuotes(QUOTE_TYPES.AUTO, 1, 10);
console.log(`Total quotes: ${quotesResult.totalCount}`);
console.log(`Current page: ${quotesResult.page}`);
console.log(`Quotes:`, quotesResult.data);
```

## 🎯 **NEXT STEPS**

1. **Copy the API client setup** to your Next.js project
2. **Use the quote service** for all quote operations
3. **Build your forms** using the base quote interface
4. **Add validation** using your preferred validation library
5. **Style components** with your design system

## 📚 **FULL DOCUMENTATION**

For complete implementation details, see:
- **Frontend Integration Guide**: `docs/Frontend-Integration-Guide.md`
- **Backend Implementation Guide**: `docs/JECA-Insurance-Backend-Implementation-Guide.md`
- **Swagger Documentation**: `http://localhost:5149/`

## ✅ **BACKEND STATUS**

- **✅ API Running**: `http://localhost:5149`
- **✅ All 19 Controllers**: Implemented and tested
- **✅ Database**: Schema complete with migrations
- **✅ CORS**: Enabled for frontend integration
- **✅ Error Handling**: Consistent across all endpoints
- **✅ Logging**: Structured logging with Serilog

**Ready for immediate frontend development!** 🚀
