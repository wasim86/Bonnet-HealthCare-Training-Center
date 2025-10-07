import { api } from '../api';

export interface ClaimRequest {
  claimType: string;
  incidentDescription: string;
  insuranceCarrier: string;
  policyNumber: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  additionalComments?: string;
  informationSecure: boolean;
}

export interface ClaimResponse {
  id: string;
  claimNumber: string;
  status: string;
  message: string;
}

export interface Claim {
  id: string;
  claimNumber: string;
  claimType: string;
  incidentDescription: string;
  insuranceCarrier: string;
  policyNumber: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  additionalComments?: string;
  informationSecure: boolean;
  createdDate: string;
  updatedDate: string;
  status: string;
}

export const claimService = {
  async submitClaim(claimData: ClaimRequest): Promise<ClaimResponse> {
    try {
      console.log('Submitting claim data:', claimData);
      
      const response = await api.post('/Claim', claimData);
      
      console.log('Claim submitted successfully:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error submitting claim:', error);
      throw error;
    }
  },

  async getClaim(id: string): Promise<Claim> {
    try {
      const response = await api.get(`/Claim/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching claim:', error);
      throw error;
    }
  },

  async getClaims(page: number = 1, pageSize: number = 10): Promise<{
    claims: Claim[];
    totalCount: number;
    page: number;
    pageSize: number;
  }> {
    try {
      const response = await api.get(`/Claim?page=${page}&pageSize=${pageSize}`);
      
      return {
        claims: response.data,
        totalCount: parseInt(response.headers['x-total-count'] || '0'),
        page: parseInt(response.headers['x-page'] || '1'),
        pageSize: parseInt(response.headers['x-page-size'] || '10')
      };
    } catch (error) {
      console.error('Error fetching claims:', error);
      throw error;
    }
  }
};
