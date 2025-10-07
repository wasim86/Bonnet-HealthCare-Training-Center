// Test script to verify API integration
import { autoQuoteService } from './services/quoteService';
import { AutoQuote } from './types';

export async function testAutoQuoteAPI() {
  try {
    console.log('Testing Auto Quote API...');

    // Create a test auto quote
    const testQuote: AutoQuote = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      phoneNumber: '555-123-4567',
      address: '123 Main St',
      city: 'Anytown',
      state: 'CA',
      zipCode: '12345',
      country: 'United States',
      currentInsuranceCompany: 'State Farm',
      continuousCoverage: 'Yes',
      policyExpiresIn: '1-3 months',
      claimsIn3Years: 'No',
      ticketsIn3Years: 'No',
      coverageDesired: 'Full Coverage',
      whenToStart: 'Immediately',
      additionalComments: 'Test quote from frontend integration',
      informationSecure: true,
      vehicles: [
        {
          isPrimary: true,
          year: '2020',
          make: 'Toyota',
          model: 'Camry',
          driveToWorkSchool: 'Yes',
          isLeased: 'No',
          workSchoolDistance: '10-25 miles',
          collisionDeductible: '$500',
          annualMileage: '12,000-15,000',
          comprehensiveDeductible: '$500',
          moreThanTwoVehicles: 'No',
        }
      ],
      drivers: [
        {
          name: 'John Doe',
          gender: 'Male',
          dateOfBirth: new Date('1990-01-01'),
          married: 'Yes',
          accidentsTickets: 'No',
          status: 'Primary',
        }
      ],
    };

    // Test creating a quote
    console.log('Creating test quote...');
    const createdQuote = await autoQuoteService.create(testQuote);
    console.log('Quote created successfully:', createdQuote);

    // Test getting all quotes
    console.log('Fetching all quotes...');
    const quotesResponse = await autoQuoteService.getAll({ page: 1, pageSize: 10 });
    console.log('Quotes fetched:', quotesResponse);

    // Test getting specific quote
    if (createdQuote.id) {
      console.log('Fetching specific quote...');
      const specificQuote = await autoQuoteService.getById(createdQuote.id);
      console.log('Specific quote fetched:', specificQuote);
    }

    return {
      success: true,
      createdQuote,
      quotesResponse,
    };
  } catch (error) {
    console.error('API Test failed:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

// Test function for browser console
if (typeof window !== 'undefined') {
  (window as any).testAutoQuoteAPI = testAutoQuoteAPI;
}
