export const exportTheme = () => {
  const preferences = {
    theme: localStorage.getItem('theme'),
    fontSize: localStorage.getItem('fontSize'),
    fontFamily: localStorage.getItem('fontFamily'),
    lineHeight: localStorage.getItem('lineHeight'),
    reducedMotion: localStorage.getItem('reducedMotion'),
    highContrast: localStorage.getItem('highContrast'),
    selectedBackground: localStorage.getItem('selectedBackground'),
    styleVariant: localStorage.getItem('styleVariant'),
    timestamp: new Date().toISOString(),
    version: '1.0'
  };

  try {
    const blob = new Blob([JSON.stringify(preferences, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `theme-settings-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    return true;
  } catch (error) {
    console.error('Error exporting theme:', error);
    return false;
  }
};

export const importTheme = (file) => {
  return new Promise((resolve, reject) => {
    if (!file) {
      reject(new Error('No file provided'));
      return;
    }

    if (!file.name.endsWith('.json')) {
      reject(new Error('Invalid file format. Please select a JSON file.'));
      return;
    }

    const reader = new FileReader();
    
    reader.onload = (e) => {
      try {
        const preferences = JSON.parse(e.target.result);
        
        // Validate the imported data
        if (!preferences.version) {
          reject(new Error('Invalid theme file format'));
          return;
        }

        // Apply imported preferences
        const updates = [];

        if (preferences.theme !== undefined) {
          localStorage.setItem('theme', preferences.theme);
          updates.push('Theme mode');
        }

        if (preferences.fontSize) {
          localStorage.setItem('fontSize', preferences.fontSize);
          updates.push('Font size');
        }

        if (preferences.fontFamily) {
          localStorage.setItem('fontFamily', preferences.fontFamily);
          updates.push('Font family');
        }

        if (preferences.lineHeight) {
          localStorage.setItem('lineHeight', preferences.lineHeight);
          updates.push('Line height');
        }

        if (preferences.reducedMotion !== undefined) {
          localStorage.setItem('reducedMotion', preferences.reducedMotion);
          updates.push('Motion settings');
        }

        if (preferences.highContrast !== undefined) {
          localStorage.setItem('highContrast', preferences.highContrast);
          updates.push('Contrast settings');
        }

        if (preferences.selectedBackground) {
          localStorage.setItem('selectedBackground', preferences.selectedBackground);
          updates.push('Background');
        }

        if (preferences.styleVariant) {
          localStorage.setItem('styleVariant', preferences.styleVariant);
          updates.push('Style variant');
        }

        resolve({
          success: true,
          message: `Successfully imported theme settings: ${updates.join(', ')}`,
          updates,
          preferences
        });

      } catch (error) {
        reject(new Error('Error parsing theme file: ' + error.message));
      }
    };

    reader.onerror = () => {
      reject(new Error('Error reading file'));
    };

    reader.readAsText(file);
  });
};

export const resetAllPreferences = () => {
  const keysToRemove = [
    'theme',
    'fontSize',
    'fontFamily',
    'lineHeight',
    'reducedMotion',
    'highContrast',
    'selectedBackground',
    'styleVariant'
  ];

  keysToRemove.forEach(key => {
    localStorage.removeItem(key);
  });

  // Reset CSS custom properties
  const root = document.documentElement;
  root.style.removeProperty('--line-height');
  root.style.removeProperty('--transition-duration');
  root.style.fontSize = '';

  // Reset body classes
  document.body.className = document.body.className
    .replace(/variant-\S+/g, '')
    .replace(/font-\S+/g, '')
    .trim();

  return true;
};

export const getThemeSummary = () => {
  const preferences = {
    theme: localStorage.getItem('theme') || 'system',
    fontSize: localStorage.getItem('fontSize') || 'base',
    fontFamily: localStorage.getItem('fontFamily') || 'inter',
    lineHeight: localStorage.getItem('lineHeight') || 'normal',
    reducedMotion: localStorage.getItem('reducedMotion') === 'true',
    highContrast: localStorage.getItem('highContrast') === 'true',
    selectedBackground: localStorage.getItem('selectedBackground') || 'solid',
    styleVariant: localStorage.getItem('styleVariant') || 'modern'
  };

  return preferences;
};

export const validateThemeFile = (file) => {
  return new Promise((resolve, reject) => {
    if (!file || !file.name.endsWith('.json')) {
      reject(new Error('Please select a valid JSON file'));
      return;
    }

    const reader = new FileReader();
    
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target.result);
        
        // Basic validation
        if (!data.version) {
          reject(new Error('Invalid theme file: missing version'));
          return;
        }

        // Check for valid theme properties
        const validProperties = [
          'theme', 'fontSize', 'fontFamily', 'lineHeight',
          'reducedMotion', 'highContrast', 'selectedBackground', 'styleVariant'
        ];

        const hasValidProperties = Object.keys(data).some(key => 
          validProperties.includes(key)
        );

        if (!hasValidProperties) {
          reject(new Error('Invalid theme file: no valid theme properties found'));
          return;
        }

        resolve({
          valid: true,
          preview: getThemeSummary(),
          importedData: data
        });

      } catch (error) {
        reject(new Error('Invalid JSON file: ' + error.message));
      }
    };

    reader.readAsText(file);
  });
};
