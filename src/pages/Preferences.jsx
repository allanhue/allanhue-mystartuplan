import React, { useState } from 'react';
import { useTheme } from '../theme/ThemeProvider';
import ThemeCustomizer from '../components/ThemeCustomizer';
import BackgroundSelector from '../components/BackgroundSelector';
import StyleVariantSelector from '../components/StyleVariantSelector';
import ThemePreview from '../components/ThemePreview';
import { FiDownload, FiUpload, FiRotateCcw, FiSave } from 'react-icons/fi';

const Preferences = () => {
  const { isDarkMode } = useTheme();
  const [activeTab, setActiveTab] = useState('appearance');

  const exportTheme = () => {
    const preferences = {
      theme: localStorage.getItem('theme'),
      fontSize: localStorage.getItem('fontSize'),
      reducedMotion: localStorage.getItem('reducedMotion'),
      highContrast: localStorage.getItem('highContrast'),
      selectedBackground: localStorage.getItem('selectedBackground'),
      styleVariant: localStorage.getItem('styleVariant'),
      timestamp: new Date().toISOString()
    };

    const blob = new Blob([JSON.stringify(preferences, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'theme-preferences.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const importTheme = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const preferences = JSON.parse(e.target.result);
          
          // Apply imported preferences
          if (preferences.theme) {
            localStorage.setItem('theme', preferences.theme);
            window.location.reload(); // Reload to apply theme
          }
          if (preferences.fontSize) {
            localStorage.setItem('fontSize', preferences.fontSize);
          }
          if (preferences.reducedMotion !== undefined) {
            localStorage.setItem('reducedMotion', preferences.reducedMotion);
          }
          if (preferences.highContrast !== undefined) {
            localStorage.setItem('highContrast', preferences.highContrast);
          }
          if (preferences.selectedBackground) {
            localStorage.setItem('selectedBackground', preferences.selectedBackground);
          }
          if (preferences.styleVariant) {
            localStorage.setItem('styleVariant', preferences.styleVariant);
          }
          
          alert('Theme preferences imported successfully! Page will reload to apply changes.');
          setTimeout(() => window.location.reload(), 1000);
        } catch (error) {
          alert('Error importing theme preferences. Please check the file format.');
        }
      };
      reader.readAsText(file);
    }
  };

  const resetAllPreferences = () => {
    if (confirm('Are you sure you want to reset all theme preferences to defaults?')) {
      const keysToRemove = [
        'theme', 'fontSize', 'reducedMotion', 'highContrast',
        'selectedBackground', 'styleVariant'
      ];
      keysToRemove.forEach(key => localStorage.removeItem(key));
      window.location.reload();
    }
  };

  const tabs = [
    { id: 'appearance', label: 'Appearance', icon: '🎨' },
    { id: 'accessibility', label: 'Accessibility', icon: '♿' },
    { id: 'advanced', label: 'Advanced', icon: '⚙️' },
    { id: 'preview', label: 'Preview', icon: '👁️' }
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-neutral-900' : 'bg-white'}`}>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Customize Your Experience
            </h1>
            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Personalize your interface with themes, fonts, and accessibility options
            </p>
          </div>

          {/* Theme Customizer */}
          <ThemeCustomizer />

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Tabs */}
              <div className={`mb-6 border-b ${isDarkMode ? 'border-neutral-700' : 'border-gray-200'}`}>
                <div className="flex space-x-8">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`pb-4 px-1 font-medium transition-colors border-b-2 ${
                        activeTab === tab.id
                          ? 'border-cyan-500 text-cyan-500'
                          : isDarkMode
                            ? 'border-transparent text-gray-400 hover:text-gray-300'
                            : 'border-transparent text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      <span className="mr-2">{tab.icon}</span>
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tab Content */}
              <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-neutral-800' : 'bg-white'}`}>
                {activeTab === 'appearance' && (
                  <div className="space-y-8">
                    <BackgroundSelector />
                    <StyleVariantSelector />
                  </div>
                )}

                {activeTab === 'accessibility' && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold mb-4">Accessibility Options</h3>
                    <div className="space-y-4">
                      <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-neutral-700' : 'bg-gray-50'}`}>
                        <h4 className="font-medium mb-2">Screen Reader Support</h4>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          All components include proper ARIA labels and semantic HTML for screen reader compatibility.
                        </p>
                      </div>
                      <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-neutral-700' : 'bg-gray-50'}`}>
                        <h4 className="font-medium mb-2">Keyboard Navigation</h4>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          Full keyboard navigation support with visible focus indicators.
                        </p>
                      </div>
                      <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-neutral-700' : 'bg-gray-50'}`}>
                        <h4 className="font-medium mb-2">Color Contrast</h4>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          High contrast mode available for improved readability.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'advanced' && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold mb-4">Advanced Options</h3>
                    
                    {/* Import/Export */}
                    <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-neutral-700' : 'bg-gray-50'}`}>
                      <h4 className="font-medium mb-4">Backup & Restore</h4>
                      <div className="flex flex-wrap gap-3">
                        <button
                          onClick={exportTheme}
                          className="flex items-center gap-2 px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
                        >
                          <FiDownload className="w-4 h-4" />
                          Export Settings
                        </button>
                        
                        <label className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors cursor-pointer">
                          <FiUpload className="w-4 h-4" />
                          Import Settings
                          <input
                            type="file"
                            accept=".json"
                            onChange={importTheme}
                            className="hidden"
                          />
                        </label>
                        
                        <button
                          onClick={resetAllPreferences}
                          className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                        >
                          <FiRotateCcw className="w-4 h-4" />
                          Reset All
                        </button>
                      </div>
                    </div>

                    {/* Performance */}
                    <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-neutral-700' : 'bg-gray-50'}`}>
                      <h4 className="font-medium mb-2">Performance</h4>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        Theme settings are optimized for performance with minimal impact on page load times.
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === 'preview' && (
                  <ThemePreview />
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-neutral-800' : 'bg-white'}`}>
                <h3 className="text-lg font-semibold mb-4">Quick Tips</h3>
                <div className="space-y-4">
                  <div className={`p-3 rounded-lg ${isDarkMode ? 'bg-neutral-700' : 'bg-gray-50'}`}>
                    <h4 className="font-medium mb-1">💡 Pro Tip</h4>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      Use the floating settings button to quickly access theme options from any page.
                    </p>
                  </div>
                  <div className={`p-3 rounded-lg ${isDarkMode ? 'bg-neutral-700' : 'bg-gray-50'}`}>
                    <h4 className="font-medium mb-1">🎨 Customization</h4>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      Combine different themes, backgrounds, and styles to create your perfect look.
                    </p>
                  </div>
                  <div className={`p-3 rounded-lg ${isDarkMode ? 'bg-neutral-700' : 'bg-gray-50'}`}>
                    <h4 className="font-medium mb-1">💾 Save Your Work</h4>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      Export your settings to backup your customizations or share them with others.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preferences;
