/**
 * Simple value debounce function as a hook.
 * @function
 * @param {string} value - Value which should be debounced.
 * @param {number} delay - Delay during which changes should not be triggered.
 * @return {string} Debounced value.
 */
import { useState, useEffect } from 'react';

function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;

