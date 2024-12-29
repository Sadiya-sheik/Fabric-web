import React from 'react';
import { Loader } from 'lucide-react';

interface SearchSuggestionsProps {
  suggestions: string[];
  isLoading: boolean;
  onSelect: (suggestion: string) => void;
}

export function SearchSuggestions({ suggestions, isLoading, onSelect }: SearchSuggestionsProps) {
  if (!suggestions.length && !isLoading) return null;

  return (
    <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 max-h-96 overflow-y-auto z-50">
      {isLoading ? (
        <div className="flex items-center justify-center p-4">
          <Loader className="h-5 w-5 animate-spin text-gray-400" />
        </div>
      ) : (
        <ul>
          {suggestions.map((suggestion, index) => (
            <li key={index}>
              <button
                onClick={() => onSelect(suggestion)}
                className="w-full text-left px-4 py-2 hover:bg-gray-50"
              >
                {suggestion}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}