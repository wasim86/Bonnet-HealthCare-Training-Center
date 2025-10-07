import { useState, useEffect, useCallback } from 'react';
import { quoteService } from '../services/quoteService';
import { BaseQuote, QuoteType, PaginationParams, ApiResponse } from '../types';

interface UseQuotesOptions {
  autoFetch?: boolean;
  initialPage?: number;
  initialPageSize?: number;
}

interface UseQuotesReturn {
  quotes: BaseQuote[];
  loading: boolean;
  error: string | null;
  totalCount: number;
  page: number;
  pageSize: number;
  totalPages: number;
  fetchQuotes: () => Promise<void>;
  createQuote: (data: BaseQuote) => Promise<BaseQuote | null>;
  updateQuote: (id: string, data: BaseQuote) => Promise<boolean>;
  deleteQuote: (id: string) => Promise<boolean>;
  setPage: (page: number) => void;
  setPageSize: (pageSize: number) => void;
  refresh: () => Promise<void>;
}

export function useQuotes(
  quoteType: QuoteType,
  options: UseQuotesOptions = {}
): UseQuotesReturn {
  const {
    autoFetch = true,
    initialPage = 1,
    initialPageSize = 10
  } = options;

  const [quotes, setQuotes] = useState<BaseQuote[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(initialPage);
  const [pageSize, setPageSize] = useState(initialPageSize);

  const totalPages = Math.ceil(totalCount / pageSize);

  const fetchQuotes = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await quoteService.getQuotes(quoteType, { page, pageSize });
      
      setQuotes(response.data);
      setTotalCount(response.totalCount);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch quotes';
      setError(errorMessage);
      console.error('Error fetching quotes:', err);
    } finally {
      setLoading(false);
    }
  }, [quoteType, page, pageSize]);

  const createQuote = useCallback(async (data: BaseQuote): Promise<BaseQuote | null> => {
    try {
      setError(null);
      const newQuote = await quoteService.createQuote(quoteType, data);
      
      // Refresh the list to include the new quote
      await fetchQuotes();
      
      return newQuote;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to create quote';
      setError(errorMessage);
      console.error('Error creating quote:', err);
      return null;
    }
  }, [quoteType, fetchQuotes]);

  const updateQuote = useCallback(async (id: string, data: BaseQuote): Promise<boolean> => {
    try {
      setError(null);
      await quoteService.updateQuote(quoteType, id, data);
      
      // Update the local state
      setQuotes(prev => prev.map(quote => 
        quote.id === id ? { ...quote, ...data } : quote
      ));
      
      return true;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to update quote';
      setError(errorMessage);
      console.error('Error updating quote:', err);
      return false;
    }
  }, [quoteType]);

  const deleteQuote = useCallback(async (id: string): Promise<boolean> => {
    try {
      setError(null);
      await quoteService.deleteQuote(quoteType, id);
      
      // Remove from local state
      setQuotes(prev => prev.filter(quote => quote.id !== id));
      setTotalCount(prev => prev - 1);
      
      return true;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to delete quote';
      setError(errorMessage);
      console.error('Error deleting quote:', err);
      return false;
    }
  }, [quoteType]);

  const handleSetPage = useCallback((newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  }, [totalPages]);

  const handleSetPageSize = useCallback((newPageSize: number) => {
    setPageSize(newPageSize);
    setPage(1); // Reset to first page when changing page size
  }, []);

  const refresh = useCallback(async () => {
    await fetchQuotes();
  }, [fetchQuotes]);

  // Auto-fetch on mount and when dependencies change
  useEffect(() => {
    if (autoFetch) {
      fetchQuotes();
    }
  }, [fetchQuotes, autoFetch]);

  return {
    quotes,
    loading,
    error,
    totalCount,
    page,
    pageSize,
    totalPages,
    fetchQuotes,
    createQuote,
    updateQuote,
    deleteQuote,
    setPage: handleSetPage,
    setPageSize: handleSetPageSize,
    refresh,
  };
}

// Specific hooks for common quote types
export const useAutoQuotes = (options?: UseQuotesOptions) =>
  useQuotes('Auto', options);

export const useHomeQuotes = (options?: UseQuotesOptions) =>
  useQuotes('Home', options);

export const useHealthQuotes = (options?: UseQuotesOptions) =>
  useQuotes('Health', options);

export const useBusinessQuotes = (options?: UseQuotesOptions) =>
  useQuotes('Business', options);

export const useLifeInsuranceQuotes = (options?: UseQuotesOptions) =>
  useQuotes('LifeInsurance', options);
