import { useState, useEffect } from 'react';

export const useTypography = () => {
  const [fontSize, setFontSize] = useState('base');
  const [fontFamily, setFontFamily] = useState('inter');
  const [lineHeight, setLineHeight] = useState('normal');

  const fontSizes = {
    xs: { value: 'xs', label: 'Extra Small', class: 'text-xs', size: '12px' },
    sm: { value: 'sm', label: 'Small', class: 'text-sm', size: '14px' },
    base: { value: 'base', label: 'Base', class: 'text-base', size: '16px' },
    lg: { value: 'lg', label: 'Large', class: 'text-lg', size: '18px' },
    xl: { value: 'xl', label: 'Extra Large', class: 'text-xl', size: '20px' },
    '2xl': { value: '2xl', label: '2X Large', class: 'text-2xl', size: '24px' },
    '3xl': { value: '3xl', label: '3X Large', class: 'text-3xl', size: '30px' }
  };

  const fontFamilies = {
    inter: { value: 'inter', label: 'Inter', class: 'font-inter' },
    roboto: { value: 'roboto', label: 'Roboto', class: 'font-roboto' },
    openSans: { value: 'openSans', label: 'Open Sans', class: 'font-open-sans' },
    lato: { value: 'lato', label: 'Lato', class: 'font-lato' },
    montserrat: { value: 'montserrat', label: 'Montserrat', class: 'font-montserrat' },
    playfair: { value: 'playfair', label: 'Playfair Display', class: 'font-playfair' },
    mono: { value: 'mono', label: 'Monospace', class: 'font-mono' }
  };

  const lineHeights = {
    tight: { value: 'tight', label: 'Tight', class: 'leading-tight', ratio: '1.25' },
    normal: { value: 'normal', label: 'Normal', class: 'leading-normal', ratio: '1.5' },
    relaxed: { value: 'relaxed', label: 'Relaxed', class: 'leading-relaxed', ratio: '1.625' },
    loose: { value: 'loose', label: 'Loose', class: 'leading-loose', ratio: '2' }
  };

  const applyFontSize = (size) => {
    setFontSize(size);
    const selectedSize = fontSizes[size];
    if (selectedSize) {
      document.documentElement.style.fontSize = selectedSize.size;
      localStorage.setItem('fontSize', size);
    }
  };

  const applyFontFamily = (family) => {
    setFontFamily(family);
    const selectedFamily = fontFamilies[family];
    if (selectedFamily) {
      // Remove existing font classes
      document.body.className = document.body.className.replace(/font-\S+/g, '').trim();
      // Add new font class
      document.body.classList.add(selectedFamily.class);
      localStorage.setItem('fontFamily', family);
    }
  };

  const applyLineHeight = (height) => {
    setLineHeight(height);
    const selectedHeight = lineHeights[height];
    if (selectedHeight) {
      document.documentElement.style.setProperty('--line-height', selectedHeight.ratio);
      localStorage.setItem('lineHeight', height);
    }
  };

  const resetTypography = () => {
    applyFontSize('base');
    applyFontFamily('inter');
    applyLineHeight('normal');
  };

  // Load saved preferences on mount
  useEffect(() => {
    const savedFontSize = localStorage.getItem('fontSize');
    const savedFontFamily = localStorage.getItem('fontFamily');
    const savedLineHeight = localStorage.getItem('lineHeight');

    if (savedFontSize && fontSizes[savedFontSize]) {
      applyFontSize(savedFontSize);
    }
    if (savedFontFamily && fontFamilies[savedFontFamily]) {
      applyFontFamily(savedFontFamily);
    }
    if (savedLineHeight && lineHeights[savedLineHeight]) {
      applyLineHeight(savedLineHeight);
    }
  }, []);

  return {
    fontSize,
    setFontSize: applyFontSize,
    fontFamily,
    setFontFamily: applyFontFamily,
    lineHeight,
    setLineHeight: applyLineHeight,
    fontSizes,
    fontFamilies,
    lineHeights,
    resetTypography
  };
};
