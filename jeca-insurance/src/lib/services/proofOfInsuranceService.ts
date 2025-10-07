import { api } from '../api';

export interface ProofOfInsuranceRequest {
  proofType: string;
  firstName: string;
  lastName: string;
  insuranceCarrier: string;
  policyNumber: string;
  requestDescription: string;
  email: string;
  phoneNumber: string;
  informationSecure: boolean;
}

export interface ProofOfInsuranceResponse {
  id: string;
  requestNumber: string;
  status: string;
  message: string;
}

export interface ProofOfInsurance {
  id: string;
  requestNumber: string;
  proofType: string;
  firstName: string;
  lastName: string;
  insuranceCarrier: string;
  policyNumber: string;
  requestDescription: string;
  email: string;
  phoneNumber: string;
  informationSecure: boolean;
  createdDate: string;
  updatedDate: string;
  status: string;
  processedDate?: string;
  processingNotes?: string;
  documentPath?: string;
}

export interface ProofOfInsurancesResponse {
  proofRequests: ProofOfInsurance[];
  totalCount: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export const proofOfInsuranceService = {
  async submitProofOfInsurance(proofData: ProofOfInsuranceRequest): Promise<ProofOfInsuranceResponse> {
    try {
      console.log('Submitting proof of insurance data:', proofData);
      
      const response = await api.post('/ProofOfInsurance', proofData);
      
      console.log('Proof of insurance submitted successfully:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error submitting proof of insurance:', error);
      throw error;
    }
  },

  async getProofOfInsurance(id: string): Promise<ProofOfInsurance> {
    try {
      const response = await api.get(`/ProofOfInsurance/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching proof of insurance:', error);
      throw error;
    }
  },

  async getProofOfInsurances(
    page: number = 1,
    pageSize: number = 10,
    status?: string,
    proofType?: string
  ): Promise<ProofOfInsurancesResponse> {
    try {
      const params = new URLSearchParams({
        page: page.toString(),
        pageSize: pageSize.toString(),
      });

      if (status) {
        params.append('status', status);
      }

      if (proofType) {
        params.append('proofType', proofType);
      }

      const response = await api.get(`/ProofOfInsurance?${params.toString()}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching proof of insurance requests:', error);
      throw error;
    }
  },

  async updateProofOfInsurance(
    id: string,
    updateData: {
      status?: string;
      processingNotes?: string;
      documentPath?: string;
    }
  ): Promise<void> {
    try {
      await api.put(`/ProofOfInsurance/${id}`, updateData);
    } catch (error) {
      console.error('Error updating proof of insurance:', error);
      throw error;
    }
  },

  async deleteProofOfInsurance(id: string): Promise<void> {
    try {
      await api.delete(`/ProofOfInsurance/${id}`);
    } catch (error) {
      console.error('Error deleting proof of insurance:', error);
      throw error;
    }
  }
};
