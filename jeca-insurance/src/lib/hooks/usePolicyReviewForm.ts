import { useState, useCallback } from 'react';
import { policyReviewService, PolicyReviewRequest, PolicyReviewResponse } from '../services/policyReviewService';

export interface UsePolicyReviewFormOptions {
  onSuccess?: (policyReview: PolicyReviewResponse) => void;
  onError?: (error: string) => void;
}

export interface UsePolicyReviewFormReturn {
  submitting: boolean;
  error: string | null;
  success: boolean;
  submitPolicyReview: (data: PolicyReviewRequest) => Promise<PolicyReviewResponse | null>;
  reset: () => void;
  clearError: () => void;
}

export function usePolicyReviewForm(
  options: UsePolicyReviewFormOptions = {}
): UsePolicyReviewFormReturn {
  const { onSuccess, onError } = options;

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const submitPolicyReview = useCallback(async (data: PolicyReviewRequest): Promise<PolicyReviewResponse | null> => {
    try {
      setSubmitting(true);
      setError(null);
      setSuccess(false);

      // Validate required fields
      if (!data.reviewMethod) {
        throw new Error('Please select a review method');
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

      // Submit the policy review
      const newPolicyReview = await policyReviewService.submitPolicyReview(data);
      
      setSuccess(true);
      onSuccess?.(newPolicyReview);
      
      return newPolicyReview;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to submit policy review request';
      setError(errorMessage);
      onError?.(errorMessage);
      console.error('Error submitting policy review:', err);
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
    submitPolicyReview,
    reset,
    clearError
  };
}
