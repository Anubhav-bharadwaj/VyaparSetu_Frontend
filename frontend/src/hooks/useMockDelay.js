import { useState, useCallback } from 'react';

export function useMockDelay(delayMs = 800) {
  const [isLoading, setIsLoading] = useState(false);

  const runWithDelay = useCallback(async (callback) => {
    setIsLoading(true);
    return new Promise(resolve => {
      setTimeout(() => {
        setIsLoading(false);
        if (callback) {
          resolve(callback());
        } else {
          resolve();
        }
      }, delayMs);
    });
  }, [delayMs]);

  return { isLoading, runWithDelay };
}
