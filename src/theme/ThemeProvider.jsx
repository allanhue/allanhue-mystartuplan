import React, { createContext, useContext, useState, useEffect } from 'react';

// Theme context
export const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
  isDarkMode: false,
});

// Theme provider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [isMounted, setIsMounted] = useState(false);

  // Set theme on initial load
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
    setIsMounted(true);
  }, []);

  // Toggle between light and dark theme
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  // Prevent flash of unstyled content
  if (!isMounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDarkMode: theme === 'dark' }}>
      <div className={`theme-${theme} min-h-screen bg-white dark:bg-neutral-900 transition-colors duration-200`}>
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
