// theme-utils.js
export const themeConfig = {
  colors: {
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
      accent: {
        light: '#7dd3fc',
        DEFAULT: '#38bdf8',
        dark: '#0ea5e9',
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
    dark: {
      bg: {
        primary: '#000000',
        secondary: '#111111',
        tertiary: '#1a1a1a',
      },
      text: {
        primary: '#ffffff',
        secondary: '#e5e5e5',
        disabled: '#a3a3a3',
      },
      border: {
        light: '#2a2a2a',
        DEFAULT: '#3a3a3a',
        dark: '#4a4a4a',
      },
      primary: {
        light: '#262626',
        DEFAULT: '#0d0d0d',
        dark: '#000000',
      },
      accent: {
        light: '#d4d4d4',
        DEFAULT: '#ffffff',
        dark: '#f5f5f5',
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
};

export const applyTheme = (theme) => {
  if (typeof document === 'undefined') return;
  const root = document.documentElement;
  root.classList.remove('dark');
  root.removeAttribute('data-theme');
  if (theme === 'dark') {
    root.classList.add('dark');
    root.setAttribute('data-theme', 'dark');
  } else {
    root.setAttribute('data-theme', 'light');
  }
};

export const getThemeColor = (theme, path) => {
  const themeColors = themeConfig.colors[theme] || themeConfig.colors.dark;
  return path.split('.').reduce((acc, key) => (
    acc && Object.prototype.hasOwnProperty.call(acc, key) ? acc[key] : undefined
  ), themeColors);
};