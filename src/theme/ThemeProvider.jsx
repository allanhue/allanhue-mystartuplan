import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
import { applyTheme, getThemeColor, themeConfig } from './theme-utils';

// Theme context
export const ThemeContext = createContext({

  theme: 'dark', 
  toggleTheme: () => {},
  isDarkMode: true,
  colors: themeConfig.colors.dark,
  getColor: (path) => getThemeColor('dark', path),
});

// Theme provider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');
  const [isMounted, setIsMounted] = useState(false);

  // Get system preference
  const prefersDarkMode = useCallback(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }, []);

  // Set theme on initial load
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || (prefersDarkMode() ? 'dark' : 'light');
    setTheme(savedTheme);
    applyTheme(savedTheme);
    setIsMounted(true);
  }, [prefersDarkMode]);

  // Toggle between light and dark theme
  const toggleTheme = useCallback(() => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
  }, [theme]);

  // Set up theme change listener for system preference
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = () => {
      if (localStorage.getItem('theme') === null) {
        const newTheme = mediaQuery.matches ? 'dark' : 'light';
        setTheme(newTheme);
        applyTheme(newTheme);
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Memoize context value to prevent unnecessary re-renders
  const themeContextValue = useMemo(() => ({
    theme,
    toggleTheme,
    isDarkMode: theme === 'dark',
    colors: themeConfig.colors[theme],
    getColor: (path) => getThemeColor(theme, path),
  }), [theme, toggleTheme]);

  // Move conditional rendering after all hooks
  if (!isMounted) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-bg-primary">
        <div className="w-12 h-12 border-4 border-primary rounded-full border-t-transparent animate-spin"></div>
      </div>
    );
  }

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <div className={`theme-${theme} min-h-screen bg-bg-primary text-text-primary transition-colors duration-200`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Theme wrapper component for easy usage
export const withTheme = (Component) => {
  const WithTheme = (props) => (
    <ThemeProvider>
      <Component {...props} />
    </ThemeProvider>
  );
  
  WithTheme.displayName = `WithTheme(${Component.displayName || Component.name || 'Component'})`;
  return WithTheme;
};

export default ThemeProvider;
