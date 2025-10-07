import { api } from '../api';
import { BaseQuote, ApiResponse, PaginationParams, QuoteType } from '../types';

export class QuoteService {
  /**
   * Create a new quote
   */
  async createQuote<T extends BaseQuote>(quoteType: QuoteType, data: T): Promise<T> {
    try {
      const response = await api.post(`/${quoteType}`, data);
      return response.data;
    } catch (error) {
      console.error(`Error creating ${quoteType}:`, error);
      throw error;
    }
  }

  /**
   * Get quotes with pagination
   */
  async getQuotes(
    quoteType: QuoteType, 
    params: PaginationParams = {}
  ): Promise<ApiResponse<BaseQuote[]>> {
    try {
      const { page = 1, pageSize = 10 } = params;
      const response = await api.get(`/${quoteType}`, {
        params: { page, pageSize }
      });

      return {
        data: response.data,
        totalCount: parseInt(response.headers['x-total-count'] || '0'),
        page: parseInt(response.headers['x-page'] || '1'),
        pageSize: parseInt(response.headers['x-page-size'] || '10'),
      };
    } catch (error) {
      console.error(`Error fetching ${quoteType} quotes:`, error);
      throw error;
    }
  }

  /**
   * Get a specific quote by ID
   */
  async getQuote<T extends BaseQuote>(quoteType: QuoteType, id: string): Promise<T> {
    try {
      const response = await api.get(`/${quoteType}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching ${quoteType} quote ${id}:`, error);
      throw error;
    }
  }

  /**
   * Update an existing quote
   */
  async updateQuote<T extends BaseQuote>(
    quoteType: QuoteType, 
    id: string, 
    data: T
  ): Promise<void> {
    try {
      await api.put(`/${quoteType}/${id}`, data);
    } catch (error) {
      console.error(`Error updating ${quoteType} quote ${id}:`, error);
      throw error;
    }
  }

  /**
   * Delete a quote
   */
  async deleteQuote(quoteType: QuoteType, id: string): Promise<void> {
    try {
      await api.delete(`/${quoteType}/${id}`);
    } catch (error) {
      console.error(`Error deleting ${quoteType} quote ${id}:`, error);
      throw error;
    }
  }

  /**
   * Search quotes (if backend supports it)
   */
  async searchQuotes(
    quoteType: QuoteType,
    searchTerm: string,
    params: PaginationParams = {}
  ): Promise<ApiResponse<BaseQuote[]>> {
    try {
      const { page = 1, pageSize = 10 } = params;
      const response = await api.get(`/${quoteType}`, {
        params: { 
          page, 
          pageSize,
          search: searchTerm 
        }
      });

      return {
        data: response.data,
        totalCount: parseInt(response.headers['x-total-count'] || '0'),
        page: parseInt(response.headers['x-page'] || '1'),
        pageSize: parseInt(response.headers['x-page-size'] || '10'),
      };
    } catch (error) {
      console.error(`Error searching ${quoteType} quotes:`, error);
      throw error;
    }
  }

  /**
   * Get quote statistics (if backend supports it)
   */
  async getQuoteStats(quoteType: QuoteType): Promise<any> {
    try {
      const response = await api.get(`/${quoteType}/stats`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching ${quoteType} stats:`, error);
      // Return empty stats if endpoint doesn't exist
      return {
        total: 0,
        active: 0,
        pending: 0,
        completed: 0
      };
    }
  }
}

// Create singleton instance
export const quoteService = new QuoteService();

// Export specific quote type services for convenience
export const autoQuoteService = {
  create: (data: any) => quoteService.createQuote('AutoQuote', data),
  getAll: (params?: PaginationParams) => quoteService.getQuotes('AutoQuote', params),
  getById: (id: string) => quoteService.getQuote('AutoQuote', id),
  update: (id: string, data: any) => quoteService.updateQuote('AutoQuote', id, data),
  delete: (id: string) => quoteService.deleteQuote('AutoQuote', id),
};

export const homeQuoteService = {
  create: (data: any) => quoteService.createQuote('HomeQuote', data),
  getAll: (params?: PaginationParams) => quoteService.getQuotes('HomeQuote', params),
  getById: (id: string) => quoteService.getQuote('HomeQuote', id),
  update: (id: string, data: any) => quoteService.updateQuote('HomeQuote', id, data),
  delete: (id: string) => quoteService.deleteQuote('HomeQuote', id),
};

export const healthQuoteService = {
  create: (data: any) => quoteService.createQuote('HealthQuote', data),
  getAll: (params?: PaginationParams) => quoteService.getQuotes('HealthQuote', params),
  getById: (id: string) => quoteService.getQuote('HealthQuote', id),
  update: (id: string, data: any) => quoteService.updateQuote('HealthQuote', id, data),
  delete: (id: string) => quoteService.deleteQuote('HealthQuote', id),
};

export const businessQuoteService = {
  create: (data: any) => quoteService.createQuote('BusinessQuote', data),
  getAll: (params?: PaginationParams) => quoteService.getQuotes('BusinessQuote', params),
  getById: (id: string) => quoteService.getQuote('BusinessQuote', id),
  update: (id: string, data: any) => quoteService.updateQuote('BusinessQuote', id, data),
  delete: (id: string) => quoteService.deleteQuote('BusinessQuote', id),
};

export const lifeInsuranceQuoteService = {
  create: (data: any) => quoteService.createQuote('LifeInsuranceQuote', data),
  getAll: (params?: PaginationParams) => quoteService.getQuotes('LifeInsuranceQuote', params),
  getById: (id: string) => quoteService.getQuote('LifeInsuranceQuote', id),
  update: (id: string, data: any) => quoteService.updateQuote('LifeInsuranceQuote', id, data),
  delete: (id: string) => quoteService.deleteQuote('LifeInsuranceQuote', id),
};

export const motorcycleQuoteService = {
  create: (data: any) => quoteService.createQuote('MotorcycleQuote', data),
  getAll: (params?: PaginationParams) => quoteService.getQuotes('MotorcycleQuote', params),
  getById: (id: string) => quoteService.getQuote('MotorcycleQuote', id),
  update: (id: string, data: any) => quoteService.updateQuote('MotorcycleQuote', id, data),
  delete: (id: string) => quoteService.deleteQuote('MotorcycleQuote', id),
};
