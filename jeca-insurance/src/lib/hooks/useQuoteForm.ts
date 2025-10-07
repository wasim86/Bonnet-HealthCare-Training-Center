import { useState, useCallback } from 'react';
import { quoteService } from '../services/quoteService';
import { BaseQuote, QuoteType } from '../types';

interface UseQuoteFormOptions {
  onSuccess?: (quote: BaseQuote) => void;
  onError?: (error: string) => void;
}

interface UseQuoteFormReturn {
  submitting: boolean;
  error: string | null;
  success: boolean;
  submitQuote: (data: BaseQuote) => Promise<BaseQuote | null>;
  reset: () => void;
  clearError: () => void;
}

export function useQuoteForm(
  quoteType: QuoteType,
  options: UseQuoteFormOptions = {}
): UseQuoteFormReturn {
  const { onSuccess, onError } = options;

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const submitQuote = useCallback(async (data: BaseQuote): Promise<BaseQuote | null> => {
    try {
      setSubmitting(true);
      setError(null);
      setSuccess(false);

      // Validate required fields
      if (!data.firstName || !data.lastName || !data.email || !data.phoneNumber) {
        throw new Error('Please fill in all required fields');
      }

      if (!data.informationSecure) {
        throw new Error('Please confirm that your information is secure');
      }

      // Submit the quote
      const newQuote = await quoteService.createQuote(quoteType, data);
      
      setSuccess(true);
      onSuccess?.(newQuote);
      
      return newQuote;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to submit quote';
      setError(errorMessage);
      onError?.(errorMessage);
      console.error('Error submitting quote:', err);
      return null;
    } finally {
      setSubmitting(false);
    }
  }, [quoteType, onSuccess, onError]);

  const reset = useCallback(() => {
    setSubmitting(false);
    setError(null);
    setSuccess(false);
  }, []);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return {
    submitting,
    error,
    success,
    submitQuote,
    reset,
    clearError,
  };
}

// Specific hooks for common quote types
export const useAutoQuoteForm = (options?: UseQuoteFormOptions) =>
  useQuoteForm('Auto', options);

export const useHomeQuoteForm = (options?: UseQuoteFormOptions) =>
  useQuoteForm('Home', options);

export const useHealthQuoteForm = (options?: UseQuoteFormOptions) =>
  useQuoteForm('Health', options);

export const useBusinessQuoteForm = (options?: UseQuoteFormOptions) =>
  useQuoteForm('Business', options);

export const useLifeInsuranceQuoteForm = (options?: UseQuoteFormOptions) =>
  useQuoteForm('LifeInsurance', options);

// Additional quote form hooks
export const useBoatQuoteForm = (options?: UseQuoteFormOptions) =>
  useQuoteForm('Boat', options);

export const useMotorcycleQuoteForm = (options?: UseQuoteFormOptions) =>
  useQuoteForm('Motorcycle', options);

export const useRentersQuoteForm = (options?: UseQuoteFormOptions) =>
  useQuoteForm('Renters', options);

export const useDentalQuoteForm = (options?: UseQuoteFormOptions) =>
  useQuoteForm('Dental', options);

export const useVisionQuoteForm = (options?: UseQuoteFormOptions) =>
  useQuoteForm('Vision', options);

export const useDisabilityInsuranceQuoteForm = (options?: UseQuoteFormOptions) =>
  useQuoteForm('DisabilityInsurance', options);

export const useUmbrellaInsuranceQuoteForm = (options?: UseQuoteFormOptions) =>
  useQuoteForm('UmbrellaInsurance', options);

export const useFloodQuoteForm = (options?: UseQuoteFormOptions) =>
  useQuoteForm('Flood', options);

export const useLandlordsQuoteForm = (options?: UseQuoteFormOptions) =>
  useQuoteForm('Landlords', options);

export const useWorkersCompQuoteForm = (options?: UseQuoteFormOptions) =>
  useQuoteForm('WorkersComp', options);

export const useBOPQuoteForm = (options?: UseQuoteFormOptions) =>
  useQuoteForm('BOP', options);

export const useMedicareAdvantageQuoteForm = (options?: UseQuoteFormOptions) =>
  useQuoteForm('MedicareAdvantage', options);

export const useMedicareSupplementQuoteForm = (options?: UseQuoteFormOptions) =>
  useQuoteForm('MedicareSupplement', options);

export const useAnnuityQuoteForm = (options?: UseQuoteFormOptions) =>
  useQuoteForm('Annuity', options);
