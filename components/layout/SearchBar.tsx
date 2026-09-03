'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FiSearch, FiX } from 'react-icons/fi';
import { searchSite, type SearchResult } from '@/data/search/index';

/**
 * Site search: filters a static index of nav pages, faculty, and majors/minors
 * as the visitor types. There's no backend (the site is a static export), so
 * this is a client-side match against data already bundled for the page.
 */
interface SearchBarProps {
  /** 'dark' sits on the navy header bar; 'light' sits on a white background (e.g. the mobile menu). */
  variant?: 'dark' | 'light';
}

const SearchBar = ({ variant = 'dark' }: SearchBarProps) => {
  const isDark = variant === 'dark';
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();

  const results = useMemo(() => searchSite(query), [query]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const closeAndReset = () => {
    setOpen(false);
    setQuery('');
    setActiveIndex(-1);
  };

  const goTo = (entry: SearchResult) => {
    closeAndReset();
    router.push(entry.href);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Escape') {
      closeAndReset();
      inputRef.current?.blur();
      return;
    }
    if (results.length === 0) return;

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setActiveIndex((prev) => (prev + 1) % results.length);
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      setActiveIndex((prev) => (prev - 1 + results.length) % results.length);
    } else if (event.key === 'Enter') {
      event.preventDefault();
      const chosen = results[activeIndex] ?? results[0];
      if (chosen) goTo(chosen);
    }
  };

  return (
    <div ref={containerRef} className={`relative w-full ${isDark ? 'max-w-xs' : ''}`}>
      <div
        className={`flex items-center rounded-full px-3 py-1.5 ${
          isDark
            ? 'bg-white/10 focus-within:bg-white/20'
            : 'border border-gray-300 bg-gray-50 focus-within:border-byu-navy'
        }`}
      >
        <FiSearch
          className={`h-4 w-4 ${isDark ? 'text-white/70' : 'text-gray-400'}`}
          aria-hidden="true"
        />
        <input
          ref={inputRef}
          type="search"
          role="combobox"
          aria-expanded={open && results.length > 0}
          aria-controls="site-search-results"
          aria-autocomplete="list"
          placeholder="Search"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setActiveIndex(-1);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={handleKeyDown}
          className={`ml-2 w-full bg-transparent text-sm focus:outline-none ${
            isDark ? 'text-white placeholder-white/60' : 'text-byu-navy placeholder-gray-400'
          }`}
        />
        {query && (
          <button
            type="button"
            aria-label="Clear search"
            onClick={closeAndReset}
            className={isDark ? 'text-white/70 hover:text-white' : 'text-gray-400 hover:text-gray-600'}
          >
            <FiX className="h-4 w-4" />
          </button>
        )}
      </div>

      {open && query.trim() && (
        <div
          id="site-search-results"
          role="listbox"
          className="text-byu-navy absolute top-full left-0 z-50 mt-2 w-full min-w-72 rounded-lg border border-gray-200 bg-white py-2 shadow-lg"
        >
          {results.length === 0 ? (
            <p className="px-4 py-3 text-sm text-gray-500">No results for &ldquo;{query}&rdquo;.</p>
          ) : (
            results.map((entry, index) => (
              <Link
                key={entry.href}
                href={entry.href}
                role="option"
                aria-selected={index === activeIndex}
                onClick={closeAndReset}
                onMouseEnter={() => setActiveIndex(index)}
                className={`block px-4 py-2 text-sm hover:bg-gray-50 ${
                  index === activeIndex ? 'bg-gray-50' : ''
                }`}
              >
                <span className="font-medium">{entry.label}</span>
                {entry.description && (
                  <span className="block text-xs text-gray-500">{entry.description}</span>
                )}
                {entry.snippet && (
                  <span className="mt-0.5 block text-xs text-gray-500">
                    {entry.snippet.text.slice(0, entry.snippet.matchStart)}
                    <mark className="bg-byu-royal/20 text-byu-navy rounded-sm font-medium">
                      {entry.snippet.text.slice(entry.snippet.matchStart, entry.snippet.matchEnd)}
                    </mark>
                    {entry.snippet.text.slice(entry.snippet.matchEnd)}
                  </span>
                )}
              </Link>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
