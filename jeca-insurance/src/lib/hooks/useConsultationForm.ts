import { useState, useCallback } from 'react';
import { consultationService, ConsultationRequest, ConsultationResponse } from '../services/consultationService';

interface UseConsultationFormOptions {
  onSuccess?: (consultation: ConsultationResponse) => void;
  onError?: (error: string) => void;
}

interface UseConsultationFormReturn {
  submitting: boolean;
  error: string | null;
  success: boolean;
  submitConsultation: (data: ConsultationRequest) => Promise<ConsultationResponse | null>;
  reset: () => void;
  clearError: () => void;
}

export function useConsultationForm(
  options: UseConsultationFormOptions = {}
): UseConsultationFormReturn {
  const { onSuccess, onError } = options;

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const submitConsultation = useCallback(async (data: ConsultationRequest): Promise<ConsultationResponse | null> => {
    try {
      setSubmitting(true);
      setError(null);
      setSuccess(false);

      // Validate required fields
      if (!data.consultationType?.trim()) {
        throw new Error('Please select the type of consultation you would like');
      }

      if (!data.firstName?.trim()) {
        throw new Error('Please enter your first name');
      }

      if (!data.lastName?.trim()) {
        throw new Error('Please enter your last name');
      }

      if (!data.email?.trim()) {
        throw new Error('Please enter your email address');
      }

      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        throw new Error('Please enter a valid email address');
      }

      if (!data.phoneNumber?.trim()) {
        throw new Error('Please enter your phone number');
      }

      if (!data.discussionTopics?.trim()) {
        throw new Error('Please describe what you would like to discuss');
      }

      if (!data.informationSecure) {
        throw new Error('Please confirm that your information is secure');
      }

      // Submit the consultation request
      const newConsultation = await consultationService.submitConsultation(data);
      
      setSuccess(true);
      onSuccess?.(newConsultation);
      
      return newConsultation;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to submit consultation request';
      setError(errorMessage);
      onError?.(errorMessage);
      console.error('Error submitting consultation:', err);
      return null;
    } finally {
      setSubmitting(false);
    }
  }, [onSuccess, onError]);

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
    submitConsultation,
    reset,
    clearError
  };
}
