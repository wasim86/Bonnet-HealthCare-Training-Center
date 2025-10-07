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
  create: (data: any) => quoteService.createQuote('Auto', data),
  getAll: (params?: PaginationParams) => quoteService.getQuotes('Auto', params),
  getById: (id: string) => quoteService.getQuote('Auto', id),
  update: (id: string, data: any) => quoteService.updateQuote('Auto', id, data),
  delete: (id: string) => quoteService.deleteQuote('Auto', id),
};

export const homeQuoteService = {
  create: (data: any) => quoteService.createQuote('Home', data),
  getAll: (params?: PaginationParams) => quoteService.getQuotes('Home', params),
  getById: (id: string) => quoteService.getQuote('Home', id),
  update: (id: string, data: any) => quoteService.updateQuote('Home', id, data),
  delete: (id: string) => quoteService.deleteQuote('Home', id),
};

export const healthQuoteService = {
  create: (data: any) => quoteService.createQuote('Health', data),
  getAll: (params?: PaginationParams) => quoteService.getQuotes('Health', params),
  getById: (id: string) => quoteService.getQuote('Health', id),
  update: (id: string, data: any) => quoteService.updateQuote('Health', id, data),
  delete: (id: string) => quoteService.deleteQuote('Health', id),
};

export const businessQuoteService = {
  create: (data: any) => quoteService.createQuote('Business', data),
  getAll: (params?: PaginationParams) => quoteService.getQuotes('Business', params),
  getById: (id: string) => quoteService.getQuote('Business', id),
  update: (id: string, data: any) => quoteService.updateQuote('Business', id, data),
  delete: (id: string) => quoteService.deleteQuote('Business', id),
};

export const lifeInsuranceQuoteService = {
  create: (data: any) => quoteService.createQuote('LifeInsurance', data),
  getAll: (params?: PaginationParams) => quoteService.getQuotes('LifeInsurance', params),
  getById: (id: string) => quoteService.getQuote('LifeInsurance', id),
  update: (id: string, data: any) => quoteService.updateQuote('LifeInsurance', id, data),
  delete: (id: string) => quoteService.deleteQuote('LifeInsurance', id),
};

export const motorcycleQuoteService = {
  create: (data: any) => quoteService.createQuote('Motorcycle', data),
  getAll: (params?: PaginationParams) => quoteService.getQuotes('Motorcycle', params),
  getById: (id: string) => quoteService.getQuote('Motorcycle', id),
  update: (id: string, data: any) => quoteService.updateQuote('Motorcycle', id, data),
  delete: (id: string) => quoteService.deleteQuote('Motorcycle', id),
};
