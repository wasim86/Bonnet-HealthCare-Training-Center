import { api } from '../api';

export interface ContactUpdateRequest {
  firstName: string;
  lastName: string;
  changeType: string;
  changeDescription: string;
  email: string;
  phoneNumber: string;
  informationSecure: boolean;
}

export interface ContactUpdateResponse {
  id: string;
  updateNumber: string;
  status: string;
  message: string;
}

export interface ContactUpdate {
  id: string;
  updateNumber: string;
  firstName: string;
  lastName: string;
  changeType: string;
  changeDescription: string;
  email: string;
  phoneNumber: string;
  informationSecure: boolean;
  createdDate: string;
  updatedDate: string;
  status: string;
  processedDate?: string;
  processingNotes?: string;
}

export interface ContactUpdatesResponse {
  data: ContactUpdate[];
  totalCount: number;
  page: number;
  pageSize: number;
}

export const contactUpdateService = {
  async submitContactUpdate(updateData: ContactUpdateRequest): Promise<ContactUpdateResponse> {
    try {
      console.log('Submitting contact update data:', updateData);
      
      const response = await api.post('/ContactUpdate', updateData);
      
      console.log('Contact update submitted successfully:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error submitting contact update:', error);
      throw error;
    }
  },

  async getContactUpdate(id: string): Promise<ContactUpdate> {
    try {
      const response = await api.get(`/ContactUpdate/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching contact update:', error);
      throw error;
    }
  },

  async getContactUpdates(page: number = 1, pageSize: number = 10): Promise<ContactUpdatesResponse> {
    try {
      const response = await api.get(`/ContactUpdate?page=${page}&pageSize=${pageSize}`);
      
      return {
        data: response.data,
        totalCount: parseInt(response.headers['x-total-count'] || '0'),
        page: parseInt(response.headers['x-page'] || '1'),
        pageSize: parseInt(response.headers['x-page-size'] || '10')
      };
    } catch (error) {
      console.error('Error fetching contact updates:', error);
      throw error;
    }
  }
};
