/**
 * Helper hook for resolving browser search query parameters.
 *
 * @returns {URLSearchParams}
 */

// npm install @types/react-router-dom

import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

const useQueryParams = (): URLSearchParams => {
  const location = useLocation();

  return useMemo(() => {
    const { search, hash } = location;

    const completeSearch = [search, hash.replace('#', '')].join('&');
    return new URLSearchParams(completeSearch);
  }, [location]);
};

export default useQueryParams;

