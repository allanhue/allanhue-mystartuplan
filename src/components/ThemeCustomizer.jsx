import React, { useState } from 'react';
import { useTheme } from '../theme/ThemeProvider';
import { FiSettings, FiX, FiSun, FiMoon, FiMonitor } from 'react-icons/fi';

const ThemeCustomizer = () => {
  const { theme, setTheme, isDarkMode } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState('base');
  const [reducedMotion, setReducedMotion] = useState(false);
  const [highContrast, setHighContrast] = useState(false);

  const themeOptions = [
    { value: 'light', label: 'Light', icon: FiSun },
    { value: 'dark', label: 'Dark', icon: FiMoon },
    { value: 'system', label: 'System', icon: FiMonitor }
  ];

  const fontSizes = [
    { value: 'sm', label: 'Small', class: 'text-sm' },
    { value: 'base', label: 'Base', class: 'text-base' },
    { value: 'lg', label: 'Large', class: 'text-lg' },
    { value: 'xl', label: 'Extra Large', class: 'text-xl' }
  ];

  const applyFontSize = (size) => {
    setFontSize(size);
    document.documentElement.style.fontSize = size === 'sm' ? '14px' : size === 'lg' ? '18px' : size === 'xl' ? '20px' : '16px';
    localStorage.setItem('fontSize', size);
  };

  const applyReducedMotion = (enabled) => {
    setReducedMotion(enabled);
    if (enabled) {
      document.documentElement.style.setProperty('--transition-duration', '0ms');
    } else {
      document.documentElement.style.removeProperty('--transition-duration');
    }
    localStorage.setItem('reducedMotion', enabled);
  };

  const applyHighContrast = (enabled) => {
    setHighContrast(enabled);
    if (enabled) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
    localStorage.setItem('highContrast', enabled);
  };

  // Load saved preferences on mount
  React.useEffect(() => {
    const savedFontSize = localStorage.getItem('fontSize');
    const savedReducedMotion = localStorage.getItem('reducedMotion') === 'true';
    const savedHighContrast = localStorage.getItem('highContrast') === 'true';

    if (savedFontSize) applyFontSize(savedFontSize);
    if (savedReducedMotion) applyReducedMotion(true);
    if (savedHighContrast) applyHighContrast(true);
  }, []);

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed right-4 top-20 z-50 p-3 rounded-lg shadow-lg transition-all duration-200 ${
          isDarkMode 
            ? 'bg-neutral-800 text-white hover:bg-neutral-700' 
            : 'bg-white text-gray-800 hover:bg-gray-100'
        } ${isOpen ? 'scale-90' : 'hover:scale-105'}`}
        aria-label="Customize theme"
      >
        {isOpen ? <FiX className="w-5 h-5" /> : <FiSettings className="w-5 h-5" />}
      </button>

      {/* Customizer Panel */}
      <div className={`fixed right-4 top-20 z-40 w-80 rounded-lg shadow-2xl transition-all duration-300 transform ${
        isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
      }`}>
        <div className={`p-6 rounded-lg ${
          isDarkMode ? 'bg-neutral-800 text-white' : 'bg-white text-gray-800'
        }`}>
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <FiSettings className="w-5 h-5" />
            Customize Theme
          </h2>

          {/* Theme Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-3">Theme Mode</label>
            <div className="grid grid-cols-3 gap-2">
              {themeOptions.map(({ value, label, icon: Icon }) => (
                <button
                  key={value}
                  onClick={() => setTheme(value)}
                  className={`p-3 rounded-lg border-2 transition-all duration-200 flex flex-col items-center gap-1 ${
                    (theme === value || (value === 'system' && theme === null))
                      ? isDarkMode 
                        ? 'border-cyan-400 bg-cyan-900/20 text-cyan-400'
                        : 'border-cyan-500 bg-cyan-50 text-cyan-600'
                      : isDarkMode
                        ? 'border-neutral-600 hover:border-neutral-500'
                        : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-xs">{label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Font Size */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-3">Font Size</label>
            <div className="grid grid-cols-2 gap-2">
              {fontSizes.map(({ value, label }) => (
                <button
                  key={value}
                  onClick={() => applyFontSize(value)}
                  className={`p-2 rounded-lg border-2 transition-all duration-200 ${
                    fontSize === value
                      ? isDarkMode
                        ? 'border-cyan-400 bg-cyan-900/20 text-cyan-400'
                        : 'border-cyan-500 bg-cyan-50 text-cyan-600'
                      : isDarkMode
                        ? 'border-neutral-600 hover:border-neutral-500'
                        : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Accessibility Options */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-3">Accessibility</label>
            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={reducedMotion}
                  onChange={(e) => applyReducedMotion(e.target.checked)}
                  className="w-4 h-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                />
                <span className="text-sm">Reduced Motion</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={highContrast}
                  onChange={(e) => applyHighContrast(e.target.checked)}
                  className="w-4 h-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                />
                <span className="text-sm">High Contrast</span>
              </label>
            </div>
          </div>

          {/* Reset Button */}
          <button
            onClick={() => {
              setTheme('system');
              applyFontSize('base');
              applyReducedMotion(false);
              applyHighContrast(false);
            }}
            className={`w-full py-2 px-4 rounded-lg font-medium transition-all duration-200 ${
              isDarkMode
                ? 'bg-neutral-700 hover:bg-neutral-600 text-white'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
            }`}
          >
            Reset to Defaults
          </button>
        </div>
      </div>
    </>
  );
};

export default ThemeCustomizer;
