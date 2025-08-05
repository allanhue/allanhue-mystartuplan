import React from 'react';
import { useTheme } from '../theme/ThemeProvider';
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeToggle = ({ className = '' }) => {
  const { theme, toggleTheme, isDarkMode } = useTheme();
  
  return (
    <button
      onClick={toggleTheme}
      className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 ${className}`}
      aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
    >
      <span className="sr-only">
        {isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      </span>
      <span
        className={`${
          isDarkMode ? 'translate-x-6 bg-neutral-800' : 'translate-x-1 bg-yellow-300'
        } inline-block w-4 h-4 transform rounded-full transition-transform duration-200 ease-in-out flex items-center justify-center`}
      >
        {isDarkMode ? (
          <FiMoon className="w-3 h-3 text-yellow-200" />
        ) : (
          <FiSun className="w-3 h-3 text-yellow-600" />
        )}
      </span>
      <span className="sr-only" aria-live="polite">
        {isDarkMode ? 'Dark mode' : 'Light mode'}
      </span>
    </button>
  );
};

export default ThemeToggle;
