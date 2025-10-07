import { useState, useCallback } from 'react';
import { proofOfInsuranceService, ProofOfInsuranceRequest, ProofOfInsuranceResponse } from '../services/proofOfInsuranceService';

interface UseProofOfInsuranceFormOptions {
  onSuccess?: (proofRequest: ProofOfInsuranceResponse) => void;
  onError?: (error: string) => void;
}

interface UseProofOfInsuranceFormReturn {
  submitting: boolean;
  error: string | null;
  success: boolean;
  submitProofOfInsurance: (data: ProofOfInsuranceRequest) => Promise<ProofOfInsuranceResponse | null>;
  reset: () => void;
  clearError: () => void;
}

export function useProofOfInsuranceForm(
  options: UseProofOfInsuranceFormOptions = {}
): UseProofOfInsuranceFormReturn {
  const { onSuccess, onError } = options;

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const submitProofOfInsurance = useCallback(async (data: ProofOfInsuranceRequest): Promise<ProofOfInsuranceResponse | null> => {
    try {
      setSubmitting(true);
      setError(null);
      setSuccess(false);

      // Validate required fields
      if (!data.proofType?.trim()) {
        throw new Error('Please select the type of proof required');
      }

      if (!data.firstName?.trim()) {
        throw new Error('Please enter your first name');
      }

      if (!data.lastName?.trim()) {
        throw new Error('Please enter your last name');
      }

      if (!data.insuranceCarrier?.trim()) {
        throw new Error('Please enter your insurance carrier');
      }

      if (!data.policyNumber?.trim()) {
        throw new Error('Please enter your policy number');
      }

      if (!data.requestDescription?.trim()) {
        throw new Error('Please describe what you need from us');
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

      if (!data.informationSecure) {
        throw new Error('Please confirm that your information is secure');
      }

      // Submit the proof of insurance request
      const newProofRequest = await proofOfInsuranceService.submitProofOfInsurance(data);
      
      setSuccess(true);
      onSuccess?.(newProofRequest);
      
      return newProofRequest;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to submit proof of insurance request';
      setError(errorMessage);
      onError?.(errorMessage);
      console.error('Error submitting proof of insurance:', err);
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
    submitProofOfInsurance,
    reset,
    clearError
  };
}
