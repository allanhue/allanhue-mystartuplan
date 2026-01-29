import React, { useState } from 'react';
import { useTheme } from '../theme/ThemeProvider';

const StyleVariantSelector = () => {
  const { isDarkMode } = useTheme();
  const [variant, setVariant] = useState('modern');

  const variants = {
    modern: {
      name: 'Modern',
      description: 'Clean with rounded corners and shadows',
      button: 'rounded-lg shadow-md hover:shadow-lg transition-all duration-200',
      card: 'rounded-xl border border-gray-200 dark:border-neutral-700 shadow-sm hover:shadow-md',
      input: 'rounded-lg border border-gray-300 dark:border-neutral-600 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20'
    },
    minimal: {
      name: 'Minimal',
      description: 'Clean lines with minimal decoration',
      button: 'border-b-2 border-transparent hover:border-cyan-500 transition-all duration-200 px-1 py-2',
      card: 'border-l-4 border-cyan-500 bg-transparent',
      input: 'border-b-2 border-gray-300 dark:border-neutral-600 focus:border-cyan-500 bg-transparent px-0'
    },
    bold: {
      name: 'Bold',
      description: 'Strong borders and high contrast',
      button: 'border-2 border-black dark:border-white bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200',
      card: 'border-4 border-black dark:border-white',
      input: 'border-2 border-black dark:border-white focus:border-cyan-500'
    },
    soft: {
      name: 'Soft',
      description: 'Gentle curves and pastel colors',
      button: 'rounded-full bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-900/20 dark:to-blue-900/20 hover:from-cyan-200 hover:to-blue-200',
      card: 'rounded-2xl bg-gradient-to-br from-gray-50 to-white dark:from-neutral-800 dark:to-neutral-900',
      input: 'rounded-full bg-gray-50 dark:bg-neutral-800 border-0 focus:ring-2 focus:ring-cyan-500/20'
    }
  };

  const applyVariant = (variantId) => {
    setVariant(variantId);
    const selectedVariant = variants[variantId];
    
    // Store variant preference
    localStorage.setItem('styleVariant', variantId);
    
    // Apply CSS custom properties for the variant
    const root = document.documentElement;
    root.style.setProperty('--button-style', selectedVariant.button);
    root.style.setProperty('--card-style', selectedVariant.card);
    root.style.setProperty('--input-style', selectedVariant.input);
    
    // Add variant class to body for CSS targeting
    document.body.className = document.body.className.replace(/variant-\S+/g, '').trim();
    document.body.classList.add(`variant-${variantId}`);
  };

  React.useEffect(() => {
    const savedVariant = localStorage.getItem('styleVariant');
    if (savedVariant && variants[savedVariant]) {
      applyVariant(savedVariant);
    }
  }, []);

  return (
    <div className="space-y-4">
      <label className="block text-sm font-medium">Style Variant</label>
      <div className="space-y-3">
        {Object.entries(variants).map(([key, variant]) => (
          <button
            key={key}
            onClick={() => applyVariant(key)}
            className={`w-full p-4 rounded-lg border-2 transition-all duration-200 text-left ${
              variant === key
                ? isDarkMode
                  ? 'border-cyan-400 bg-cyan-900/20 text-cyan-400'
                  : 'border-cyan-500 bg-cyan-50 text-cyan-600'
                : isDarkMode
                  ? 'border-neutral-600 hover:border-neutral-500 hover:bg-neutral-800/50'
                  : 'border-gray-300 hover:border-gray-400 hover:bg-gray-50'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold">{variant.name}</h3>
              {variant === key && (
                <div className="w-2 h-2 bg-cyan-500 rounded-full" />
              )}
            </div>
            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {variant.description}
            </p>
            
            {/* Preview Elements */}
            <div className="mt-3 space-y-2">
              <div className={`inline-block px-3 py-1 text-xs ${variant.button}`}>
                Button
              </div>
              <div className={`inline-block p-2 text-xs ${variant.card}`}>
                Card
              </div>
              <div className={`inline-block px-2 py-1 text-xs ${variant.input}`}>
                Input
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default StyleVariantSelector;
