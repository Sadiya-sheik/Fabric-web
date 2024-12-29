import { useState, useEffect } from 'react';
import { useDebounce } from './useDebounce';

export function useSearch(query: string) {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const debouncedQuery = useDebounce(query, 300);

  useEffect(() => {
    if (!debouncedQuery) {
      setSuggestions([]);
      return;
    }

    async function fetchSuggestions() {
      setIsLoading(true);
      try {
        // Simulate API call with mock data
        await new Promise(resolve => setTimeout(resolve, 500));
        const mockSuggestions = [
          `${debouncedQuery} in Men's`,
          `${debouncedQuery} in Women's`,
          `${debouncedQuery} in Children's`,
          `${debouncedQuery} Accessories`,
          `${debouncedQuery} Sale Items`
        ];
        setSuggestions(mockSuggestions);
      } catch (error) {
        console.error('Error fetching suggestions:', error);
        setSuggestions([]);
      } finally {
        setIsLoading(false);
      }
    }

    fetchSuggestions();
  }, [debouncedQuery]);

  return { suggestions, isLoading };
}