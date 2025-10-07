import { useState, useCallback } from 'react';
import { contactUpdateService, ContactUpdateRequest, ContactUpdateResponse } from '../services/contactUpdateService';

export interface UseContactUpdateFormOptions {
  onSuccess?: (contactUpdate: ContactUpdateResponse) => void;
  onError?: (error: string) => void;
}

export interface UseContactUpdateFormReturn {
  submitting: boolean;
  error: string | null;
  success: boolean;
  submitContactUpdate: (data: ContactUpdateRequest) => Promise<ContactUpdateResponse | null>;
  reset: () => void;
  clearError: () => void;
}

export function useContactUpdateForm(
  options: UseContactUpdateFormOptions = {}
): UseContactUpdateFormReturn {
  const { onSuccess, onError } = options;

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const submitContactUpdate = useCallback(async (data: ContactUpdateRequest): Promise<ContactUpdateResponse | null> => {
    try {
      setSubmitting(true);
      setError(null);
      setSuccess(false);

      // Validate required fields
      if (!data.firstName?.trim()) {
        throw new Error('Please enter your first name');
      }
      if (!data.lastName?.trim()) {
        throw new Error('Please enter your last name');
      }
      if (!data.changeType) {
        throw new Error('Please select what information changed');
      }
      if (!data.changeDescription?.trim()) {
        throw new Error('Please explain what needs to be updated');
      }
      if (!data.email?.trim()) {
        throw new Error('Please enter your email address');
      }
      if (!data.phoneNumber?.trim()) {
        throw new Error('Please enter your phone number');
      }
      if (!data.informationSecure) {
        throw new Error('Please confirm that your information is secure');
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        throw new Error('Please enter a valid email address');
      }

      // Submit the contact update
      const newContactUpdate = await contactUpdateService.submitContactUpdate(data);
      
      setSuccess(true);
      onSuccess?.(newContactUpdate);
      
      return newContactUpdate;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to submit contact update request';
      setError(errorMessage);
      onError?.(errorMessage);
      console.error('Error submitting contact update:', err);
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
    submitContactUpdate,
    reset,
    clearError
  };
}
