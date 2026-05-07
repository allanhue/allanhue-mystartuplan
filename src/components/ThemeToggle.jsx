import React from 'react';
import { useTheme } from '../theme/ThemeProvider';
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeToggle = ({ className = '' }) => {
  const { theme, toggleTheme, isDarkMode } = useTheme();
  
  return (
    <button>

    </button>
  );
};

export default ThemeToggle;
