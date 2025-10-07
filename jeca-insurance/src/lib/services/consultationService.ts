import { api } from '../api';

export interface ConsultationRequest {
  consultationType: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  discussionTopics: string;
  informationSecure: boolean;
}

export interface ConsultationResponse {
  id: string;
  consultationNumber: string;
  status: string;
  message: string;
}

export interface Consultation {
  id: string;
  consultationNumber: string;
  consultationType: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  discussionTopics: string;
  informationSecure: boolean;
  createdDate: string;
  updatedDate: string;
  status: string;
  scheduledDate?: string;
  completedDate?: string;
  notes?: string;
  assignedAgent?: string;
}

export interface ConsultationsResponse {
  consultations: Consultation[];
  totalCount: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export const consultationService = {
  async submitConsultation(consultationData: ConsultationRequest): Promise<ConsultationResponse> {
    try {
      console.log('Submitting consultation data:', consultationData);
      
      const response = await api.post('/Consultation', consultationData);
      
      console.log('Consultation submitted successfully:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error submitting consultation:', error);
      throw error;
    }
  },

  async getConsultation(id: string): Promise<Consultation> {
    try {
      const response = await api.get(`/Consultation/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching consultation:', error);
      throw error;
    }
  },

  async getConsultations(
    page: number = 1,
    pageSize: number = 10,
    status?: string,
    consultationType?: string
  ): Promise<ConsultationsResponse> {
    try {
      const params = new URLSearchParams({
        page: page.toString(),
        pageSize: pageSize.toString(),
      });

      if (status) {
        params.append('status', status);
      }

      if (consultationType) {
        params.append('consultationType', consultationType);
      }

      const response = await api.get(`/Consultation?${params.toString()}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching consultations:', error);
      throw error;
    }
  },

  async updateConsultation(
    id: string,
    updateData: {
      status?: string;
      notes?: string;
      assignedAgent?: string;
      scheduledDate?: string;
    }
  ): Promise<void> {
    try {
      await api.put(`/Consultation/${id}`, updateData);
    } catch (error) {
      console.error('Error updating consultation:', error);
      throw error;
    }
  },

  async deleteConsultation(id: string): Promise<void> {
    try {
      await api.delete(`/Consultation/${id}`);
    } catch (error) {
      console.error('Error deleting consultation:', error);
      throw error;
    }
  }
};
