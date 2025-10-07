# JECA INSURANCE - EXAMPLE REACT COMPONENTS

## 🔧 **Basic Auto Quote Form Component**

```typescript
// components/AutoQuoteForm.tsx
import React, { useState } from 'react';
import { quoteService } from '../services/quoteService';

interface AutoQuoteFormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  informationSecure: boolean;
  vehicles: Array<{
    isPrimary: boolean;
    year: string;
    make: string;
    model: string;
    driveToWorkSchool: string;
    isLeased: string;
  }>;
  drivers: Array<{
    name: string;
    gender: string;
    dateOfBirth: Date;
    married: string;
  }>;
}

export const AutoQuoteForm: React.FC = () => {
  const [formData, setFormData] = useState<AutoQuoteFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    informationSecure: false,
    vehicles: [{
      isPrimary: true,
      year: '',
      make: '',
      model: '',
      driveToWorkSchool: '',
      isLeased: '',
    }],
    drivers: [{
      name: '',
      gender: '',
      dateOfBirth: new Date(),
      married: '',
    }],
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const result = await quoteService.createQuote('AutoQuote', formData);
      console.log('Quote created:', result);
      setSuccess(true);
    } catch (err) {
      setError('Failed to create quote. Please try again.');
      console.error('Error creating quote:', err);
    } finally {
      setLoading(false);
    }
  };

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const updateVehicle = (index: number, field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      vehicles: prev.vehicles.map((vehicle, i) => 
        i === index ? { ...vehicle, [field]: value } : vehicle
      )
    }));
  };

  const updateDriver = (index: number, field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      drivers: prev.drivers.map((driver, i) => 
        i === index ? { ...driver, [field]: value } : driver
      )
    }));
  };

  if (success) {
    return (
      <div className="success-message">
        <h2>Quote Submitted Successfully!</h2>
        <p>We'll contact you soon with your auto insurance quote.</p>
        <button onClick={() => setSuccess(false)}>Submit Another Quote</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="auto-quote-form">
      <h2>Auto Insurance Quote</h2>
      
      {error && <div className="error-message">{error}</div>}

      {/* Personal Information */}
      <section>
        <h3>Personal Information</h3>
        <div className="form-row">
          <input
            type="text"
            placeholder="First Name"
            value={formData.firstName}
            onChange={(e) => updateFormData('firstName', e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={(e) => updateFormData('lastName', e.target.value)}
            required
          />
        </div>
        <div className="form-row">
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => updateFormData('email', e.target.value)}
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={(e) => updateFormData('phoneNumber', e.target.value)}
            required
          />
        </div>
        <input
          type="text"
          placeholder="Address"
          value={formData.address}
          onChange={(e) => updateFormData('address', e.target.value)}
        />
        <div className="form-row">
          <input
            type="text"
            placeholder="City"
            value={formData.city}
            onChange={(e) => updateFormData('city', e.target.value)}
          />
          <input
            type="text"
            placeholder="State"
            value={formData.state}
            onChange={(e) => updateFormData('state', e.target.value)}
          />
          <input
            type="text"
            placeholder="Zip Code"
            value={formData.zipCode}
            onChange={(e) => updateFormData('zipCode', e.target.value)}
          />
        </div>
      </section>

      {/* Vehicle Information */}
      <section>
        <h3>Vehicle Information</h3>
        {formData.vehicles.map((vehicle, index) => (
          <div key={index} className="vehicle-section">
            <h4>Vehicle {index + 1}</h4>
            <div className="form-row">
              <input
                type="text"
                placeholder="Year"
                value={vehicle.year}
                onChange={(e) => updateVehicle(index, 'year', e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Make"
                value={vehicle.make}
                onChange={(e) => updateVehicle(index, 'make', e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Model"
                value={vehicle.model}
                onChange={(e) => updateVehicle(index, 'model', e.target.value)}
                required
              />
            </div>
            <div className="form-row">
              <select
                value={vehicle.driveToWorkSchool}
                onChange={(e) => updateVehicle(index, 'driveToWorkSchool', e.target.value)}
              >
                <option value="">Drive to Work/School?</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
              <select
                value={vehicle.isLeased}
                onChange={(e) => updateVehicle(index, 'isLeased', e.target.value)}
              >
                <option value="">Is Leased?</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>
        ))}
      </section>

      {/* Driver Information */}
      <section>
        <h3>Driver Information</h3>
        {formData.drivers.map((driver, index) => (
          <div key={index} className="driver-section">
            <h4>Driver {index + 1}</h4>
            <div className="form-row">
              <input
                type="text"
                placeholder="Full Name"
                value={driver.name}
                onChange={(e) => updateDriver(index, 'name', e.target.value)}
                required
              />
              <select
                value={driver.gender}
                onChange={(e) => updateDriver(index, 'gender', e.target.value)}
              >
                <option value="">Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="form-row">
              <input
                type="date"
                value={driver.dateOfBirth.toISOString().split('T')[0]}
                onChange={(e) => updateDriver(index, 'dateOfBirth', new Date(e.target.value))}
                required
              />
              <select
                value={driver.married}
                onChange={(e) => updateDriver(index, 'married', e.target.value)}
              >
                <option value="">Marital Status</option>
                <option value="Yes">Married</option>
                <option value="No">Single</option>
              </select>
            </div>
          </div>
        ))}
      </section>

      {/* Information Security Checkbox */}
      <div className="checkbox-section">
        <label>
          <input
            type="checkbox"
            checked={formData.informationSecure}
            onChange={(e) => updateFormData('informationSecure', e.target.checked)}
            required
          />
          I agree that my information is secure and can be used for quote purposes
        </label>
      </div>

      <button type="submit" disabled={loading}>
        {loading ? 'Submitting...' : 'Get Quote'}
      </button>
    </form>
  );
};
```

## 🎯 **Quote List Component**

```typescript
// components/QuotesList.tsx
import React, { useState, useEffect } from 'react';
import { quoteService } from '../services/quoteService';

interface Quote {
  id: string;
  quoteNumber: string;
  firstName: string;
  lastName: string;
  email: string;
  createdDate: string;
  status: string;
}

export const QuotesList: React.FC<{ quoteType: string }> = ({ quoteType }) => {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const pageSize = 10;

  useEffect(() => {
    loadQuotes();
  }, [page, quoteType]);

  const loadQuotes = async () => {
    try {
      setLoading(true);
      const result = await quoteService.getQuotes(quoteType, page, pageSize);
      setQuotes(result.data);
      setTotalCount(result.totalCount);
    } catch (error) {
      console.error('Error loading quotes:', error);
    } finally {
      setLoading(false);
    }
  };

  const totalPages = Math.ceil(totalCount / pageSize);

  if (loading) {
    return <div>Loading quotes...</div>;
  }

  return (
    <div className="quotes-list">
      <h2>{quoteType} Quotes ({totalCount})</h2>
      
      {quotes.length === 0 ? (
        <p>No quotes found.</p>
      ) : (
        <>
          <table>
            <thead>
              <tr>
                <th>Quote #</th>
                <th>Name</th>
                <th>Email</th>
                <th>Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {quotes.map((quote) => (
                <tr key={quote.id}>
                  <td>{quote.quoteNumber}</td>
                  <td>{quote.firstName} {quote.lastName}</td>
                  <td>{quote.email}</td>
                  <td>{new Date(quote.createdDate).toLocaleDateString()}</td>
                  <td>{quote.status}</td>
                  <td>
                    <button onClick={() => console.log('View quote:', quote.id)}>
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="pagination">
            <button 
              onClick={() => setPage(p => Math.max(1, p - 1))}
              disabled={page === 1}
            >
              Previous
            </button>
            <span>Page {page} of {totalPages}</span>
            <button 
              onClick={() => setPage(p => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};
```

## 📱 **Usage in Next.js Page**

```typescript
// pages/quotes/auto.tsx
import { AutoQuoteForm } from '../../components/AutoQuoteForm';
import { QuotesList } from '../../components/QuotesList';

export default function AutoQuotePage() {
  return (
    <div className="container">
      <h1>Auto Insurance</h1>
      <div className="grid">
        <div className="form-section">
          <AutoQuoteForm />
        </div>
        <div className="list-section">
          <QuotesList quoteType="AutoQuote" />
        </div>
      </div>
    </div>
  );
}
```

## 🎨 **Basic CSS Styles**

```css
/* styles/quotes.css */
.auto-quote-form {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.form-row {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
}

.form-row input,
.form-row select {
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.vehicle-section,
.driver-section {
  border: 1px solid #eee;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 4px;
}

.checkbox-section {
  margin: 20px 0;
}

.success-message {
  text-align: center;
  padding: 40px;
  background: #f0f8f0;
  border-radius: 8px;
}

.error-message {
  background: #ffe6e6;
  color: #d00;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 15px;
}

.quotes-list table {
  width: 100%;
  border-collapse: collapse;
}

.quotes-list th,
.quotes-list td {
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-top: 20px;
}
```

## 🚀 **Ready to Use!**

These components provide a complete working example of:
- ✅ Form submission to the API
- ✅ Data fetching with pagination  
- ✅ Error handling
- ✅ Loading states
- ✅ TypeScript integration

Copy these components to your Next.js project and customize as needed!
