import { useState, useCallback } from 'react';
import { claimService, ClaimRequest, ClaimResponse } from '../services/claimService';

interface UseClaimFormOptions {
  onSuccess?: (claim: ClaimResponse) => void;
  onError?: (error: string) => void;
}

interface UseClaimFormReturn {
  submitting: boolean;
  error: string | null;
  success: boolean;
  submitClaim: (data: ClaimRequest) => Promise<ClaimResponse | null>;
  reset: () => void;
  clearError: () => void;
}

export function useClaimForm(
  options: UseClaimFormOptions = {}
): UseClaimFormReturn {
  const { onSuccess, onError } = options;

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const submitClaim = useCallback(async (data: ClaimRequest): Promise<ClaimResponse | null> => {
    try {
      setSubmitting(true);
      setError(null);
      setSuccess(false);

      // Validate required fields
      if (!data.claimType) {
        throw new Error('Please select a type of insurance claim');
      }

      if (!data.incidentDescription) {
        throw new Error('Please describe what happened');
      }

      if (!data.insuranceCarrier) {
        throw new Error('Please enter your insurance carrier');
      }

      if (!data.policyNumber) {
        throw new Error('Please enter your policy number');
      }

      if (!data.firstName || !data.lastName || !data.email || !data.phoneNumber) {
        throw new Error('Please fill in all required contact information');
      }

      if (!data.informationSecure) {
        throw new Error('Please confirm that your information is secure');
      }

      // Submit the claim
      const newClaim = await claimService.submitClaim(data);
      
      setSuccess(true);
      onSuccess?.(newClaim);
      
      return newClaim;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to submit claim';
      setError(errorMessage);
      onError?.(errorMessage);
      console.error('Error submitting claim:', err);
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
    submitClaim,
    reset,
    clearError,
  };
}
