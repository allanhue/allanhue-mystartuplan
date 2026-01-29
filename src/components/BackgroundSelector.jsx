import React, { useState } from 'react';
import { useTheme } from '../theme/ThemeProvider';

const BackgroundSelector = () => {
  const { isDarkMode } = useTheme();
  const [selectedBackground, setSelectedBackground] = useState('solid');

  const backgrounds = [
    {
      id: 'solid',
      name: 'Solid',
      lightClass: 'bg-white',
      darkClass: 'bg-neutral-900',
      preview: 'linear-gradient(45deg, #ffffff 50%, #000000 50%)'
    },
    {
      id: 'gradient',
      name: 'Gradient',
      lightClass: 'bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-100',
      darkClass: 'bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900',
      preview: 'linear-gradient(135deg, #67e8f9 0%, #3b82f6 50%, #6366f1 100%)'
    },
    {
      id: 'subtle',
      name: 'Subtle',
      lightClass: 'bg-gray-50',
      darkClass: 'bg-neutral-950',
      preview: 'linear-gradient(45deg, #f9fafb 50%, #030712 50%)'
    },
    {
      id: 'pattern',
      name: 'Pattern',
      lightClass: 'bg-white [background-image:url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23000000" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")]',
      darkClass: 'bg-neutral-900 [background-image:url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")]',
      preview: 'radial-gradient(circle, #00000010 2px, transparent 2px)'
    },
    {
      id: 'animated',
      name: 'Animated',
      lightClass: 'bg-gradient-to-r from-cyan-100 via-blue-100 to-purple-100 animate-gradient-shift',
      darkClass: 'bg-gradient-to-r from-neutral-800 via-neutral-700 to-neutral-800 animate-gradient-shift',
      preview: 'linear-gradient(90deg, #67e8f9 0%, #3b82f6 50%, #a855f7 100%)'
    }
  ];

  const applyBackground = (bgId) => {
    setSelectedBackground(bgId);
    const background = backgrounds.find(bg => bg.id === bgId);
    
    // Remove all background classes
    document.body.className = document.body.className.replace(/bg-\S+/g, '').replace(/\[background-image:[^\]]+\]/g, '').trim();
    
    // Apply new background
    if (isDarkMode) {
      document.body.classList.add(...background.darkClass.split(' '));
    } else {
      document.body.classList.add(...background.lightClass.split(' '));
    }
    
    localStorage.setItem('selectedBackground', bgId);
  };

  React.useEffect(() => {
    const savedBackground = localStorage.getItem('selectedBackground');
    if (savedBackground) {
      applyBackground(savedBackground);
    }
  }, []);

  React.useEffect(() => {
    // Re-apply background when theme changes
    if (selectedBackground) {
      applyBackground(selectedBackground);
    }
  }, [isDarkMode]);

  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium">Background Style</label>
      <div className="grid grid-cols-3 gap-2">
        {backgrounds.map((bg) => (
          <button
            key={bg.id}
            onClick={() => applyBackground(bg.id)}
            className={`relative p-3 rounded-lg border-2 transition-all duration-200 group ${
              selectedBackground === bg.id
                ? isDarkMode
                  ? 'border-cyan-400 ring-2 ring-cyan-400/20'
                  : 'border-cyan-500 ring-2 ring-cyan-500/20'
                : isDarkMode
                  ? 'border-neutral-600 hover:border-neutral-500'
                  : 'border-gray-300 hover:border-gray-400'
            }`}
            title={bg.name}
          >
            <div 
              className="w-full h-8 rounded-sm mb-1"
              style={{ background: bg.preview }}
            />
            <span className="text-xs font-medium">{bg.name}</span>
            {selectedBackground === bg.id && (
              <div className="absolute top-1 right-1 w-2 h-2 bg-cyan-500 rounded-full" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BackgroundSelector;
