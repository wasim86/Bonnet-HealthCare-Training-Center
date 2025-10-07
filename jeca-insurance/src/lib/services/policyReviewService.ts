import { api } from '../api';

export interface PolicyReviewRequest {
  reviewMethod: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  discussionTopics?: string;
  informationSecure: boolean;
}

export interface PolicyReviewResponse {
  id: string;
  reviewNumber: string;
  status: string;
  message: string;
}

export interface PolicyReview {
  id: string;
  reviewNumber: string;
  reviewMethod: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  discussionTopics?: string;
  informationSecure: boolean;
  createdDate: string;
  updatedDate: string;
  status: string;
  scheduledDate?: string;
  notes?: string;
}

export interface PolicyReviewsResponse {
  data: PolicyReview[];
  totalCount: number;
  page: number;
  pageSize: number;
}

export const policyReviewService = {
  async submitPolicyReview(reviewData: PolicyReviewRequest): Promise<PolicyReviewResponse> {
    try {
      console.log('Submitting policy review data:', reviewData);
      
      const response = await api.post('/PolicyReview', reviewData);
      
      console.log('Policy review submitted successfully:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error submitting policy review:', error);
      throw error;
    }
  },

  async getPolicyReview(id: string): Promise<PolicyReview> {
    try {
      const response = await api.get(`/PolicyReview/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching policy review:', error);
      throw error;
    }
  },

  async getPolicyReviews(page: number = 1, pageSize: number = 10): Promise<PolicyReviewsResponse> {
    try {
      const response = await api.get(`/PolicyReview?page=${page}&pageSize=${pageSize}`);
      
      return {
        data: response.data,
        totalCount: parseInt(response.headers['x-total-count'] || '0'),
        page: parseInt(response.headers['x-page'] || '1'),
        pageSize: parseInt(response.headers['x-page-size'] || '10')
      };
    } catch (error) {
      console.error('Error fetching policy reviews:', error);
      throw error;
    }
  }
};
