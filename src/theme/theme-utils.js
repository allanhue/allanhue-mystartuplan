// Theme configuration and utilities

export const themeConfig = {
  // Color palette
  colors: {
    // Light theme
    light: {
      bg: {
        primary: '#ffffff',
        secondary: '#f8fafc',
        tertiary: '#f1f5f9',
      },
      text: {
        primary: '#0f172a',
        secondary: '#475569',
        disabled: '#94a3b8',
      },
      border: {
        light: '#e2e8f0',
        DEFAULT: '#cbd5e1',
        dark: '#94a3b8',
      },
      primary: {
        light: '#38bdf8',
        DEFAULT: '#0ea5e9',
        dark: '#0284c7',
      },
      secondary: {
        light: '#a78bfa',
        DEFAULT: '#8b5cf6',
        dark: '#7c3aed',
      },
      accent: {
        light: '#4ade80',
        DEFAULT: '#22c55e',
        dark: '#16a34a',
      },
      error: {
        light: '#f87171',
        DEFAULT: '#ef4444',
        dark: '#dc2626',
      },
      success: {
        light: '#4ade80',
        DEFAULT: '#22c55e',
        dark: '#16a34a',
      },
      warning: {
        light: '#fbbf24',
        DEFAULT: '#f59e0b',
        dark: '#d97706',
      },
      info: {
        light: '#60a5fa',
        DEFAULT: '#3b82f6',
        dark: '#2563eb',
      },
    },
    // Dark theme
    dark: {
      bg: {
        primary: '#0f172a',
        secondary: '#1e293b',
        tertiary: '#334155',
      },
      text: {
        primary: '#f8fafc',
        secondary: '#cbd5e1',
        disabled: '#94a3b8',
      },
      border: {
        light: '#334155',
        DEFAULT: '#475569',
        dark: '#64748b',
      },
      primary: {
        light: '#7dd3fc',
        DEFAULT: '#38bdf8',
        dark: '#0ea5e9',
      },
      secondary: {
        light: '#c4b5fd',
        DEFAULT: '#a78bfa',
        dark: '#8b5cf6',
      },
      accent: {
        light: '#86efac',
        DEFAULT: '#4ade80',
        dark: '#22c55e',
      },
      error: {
        light: '#fca5a5',
        DEFAULT: '#f87171',
        dark: '#ef4444',
      },
      success: {
        light: '#86efac',
        DEFAULT: '#4ade80',
        dark: '#22c55e',
      },
      warning: {
        light: '#fcd34d',
        DEFAULT: '#fbbf24',
        dark: '#f59e0b',
      },
      info: {
        light: '#93c5fd',
        DEFAULT: '#60a5fa',
        dark: '#3b82f6',
      },
    },
  },
  // Typography
  typography: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      display: ['Poppins', 'sans-serif'],
      mono: ['Fira Code', 'monospace'],
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
    },
    lineHeight: {
      none: '1',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
    },
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
  },
  // Spacing
  spacing: {
    px: '1px',
    0: '0',
    0.5: '0.125rem',
    1: '0.25rem',
    1.5: '0.375rem',
    2: '0.5rem',
    2.5: '0.625rem',
    3: '0.75rem',
    3.5: '0.875rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
    11: '2.75rem',
    12: '3rem',
    14: '3.5rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    28: '7rem',
    32: '8rem',
    36: '9rem',
    40: '10rem',
    44: '11rem',
    48: '12rem',
    52: '13rem',
    56: '14rem',
    60: '15rem',
    64: '16rem',
    72: '18rem',
    80: '20rem',
    96: '24rem',
  },
  // Border radius
  borderRadius: {
    none: '0',
    sm: '0.125rem',
    DEFAULT: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px',
  },
  // Box shadow
  boxShadow: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    none: 'none',
  },
  // Z-index
  zIndex: {
    auto: 'auto',
    0: '0',
    10: '10',
    20: '20',
    30: '30',
    40: '40',
    50: '50',
  },
  // Transitions
  transition: {
    DEFAULT: 'all 0.2s ease-in-out',
    fast: 'all 0.1s ease-in-out',
    slow: 'all 0.3s ease-in-out',
  },
};

/**
 * Get theme color by path
 * @param {string} theme - 'light' or 'dark'
 * @param {string} path - Path to the color (e.g., 'primary.DEFAULT')
 * @returns {string} Color value
 */
export const getThemeColor = (theme, path) => {
  const parts = path.split('.');
  let value = themeConfig.colors[theme];
  
  for (const part of parts) {
    if (value[part] === undefined) {
      console.warn(`Theme color not found: ${path}`);
      return theme === 'light' ? '#000000' : '#ffffff';
    }
    value = value[part];
  }
  
  return value;
};

/**
 * Get CSS variables for a theme
 * @param {'light' | 'dark'} theme - Theme name
 * @returns {Object} CSS variables object
 */
export const getThemeVars = (theme) => {
  const colors = themeConfig.colors[theme];
  const vars = {};
  
  // Flatten the colors object
  const flattenColors = (obj, prefix = '') => {
    return Object.keys(obj).reduce((acc, key) => {
      const prefixedKey = prefix ? `${prefix}-${key}` : key;
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        return { ...acc, ...flattenColors(obj[key], prefixedKey) };
      }
      return { ...acc, [prefixedKey]: obj[key] };
    }, {});
  };
  
  const flatColors = flattenColors(colors);
  
  // Convert to CSS variables
  Object.entries(flatColors).forEach(([key, value]) => {
    vars[`--color-${key}`] = value;
  });
  
  return vars;
};

/**
 * Apply theme to document
 * @param {'light' | 'dark'} theme - Theme to apply
 */
export const applyTheme = (theme) => {
  const root = document.documentElement;
  const themeVars = getThemeVars(theme);
  
  // Apply CSS variables
  Object.entries(themeVars).forEach(([key, value]) => {
    root.style.setProperty(key, value);
  });
  
  // Set theme attribute
  root.setAttribute('data-theme', theme);
  
  // Add/remove dark class for Tailwind
  if (theme === 'dark') {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }
};

/**
 * Generate CSS variables for both themes
 * @returns {string} CSS string with theme variables
 */
export const generateThemeCSS = () => {
  const lightVars = getThemeVars('light');
  const darkVars = getThemeVars('dark');
  
  let css = ':root {';
  
  // Light theme variables
  Object.entries(lightVars).forEach(([key, value]) => {
    css += `${key}: ${value};`;
  });
  
  css += '}';
  
  // Dark theme variables
  css += 'html.dark, [data-theme="dark"] {';
  Object.entries(darkVars).forEach(([key, value]) => {
    css += `${key}: ${value};`;
  });
  css += '}';
  
  return css;
};

export default themeConfig;
