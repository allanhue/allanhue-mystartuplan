import React from 'react';
import { useTheme } from '../theme/ThemeProvider';
import { FiMail, FiUser, FiLock } from 'react-icons/fi';

const ThemePreview = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`p-6 rounded-lg ${
      isDarkMode ? 'bg-neutral-800' : 'bg-white'
    }`}>
      <h3 className="text-lg font-semibold mb-4">Live Preview</h3>
      
      <div className="space-y-4">
        {/* Buttons Preview */}
        <div className="space-y-2">
          <p className="text-sm font-medium">Buttons</p>
          <div className="flex flex-wrap gap-2">
            <button className="px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors">
              Primary
            </button>
            <button className={`px-4 py-2 rounded-lg border-2 transition-colors ${
              isDarkMode 
                ? 'border-neutral-600 hover:border-neutral-500 text-white' 
                : 'border-gray-300 hover:border-gray-400 text-gray-800'
            }`}>
              Secondary
            </button>
            <button className="px-4 py-2 text-cyan-500 hover:text-cyan-600 font-medium">
              Text Button
            </button>
          </div>
        </div>

        {/* Cards Preview */}
        <div className="space-y-2">
          <p className="text-sm font-medium">Cards</p>
          <div className={`p-4 rounded-lg border ${
            isDarkMode 
              ? 'border-neutral-700 bg-neutral-900' 
              : 'border-gray-200 bg-gray-50'
          }`}>
            <h4 className="font-semibold mb-2">Sample Card</h4>
            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              This is how card components will appear with the current theme settings.
            </p>
          </div>
        </div>

        {/* Form Elements Preview */}
        <div className="space-y-2">
          <p className="text-sm font-medium">Form Elements</p>
          <div className="space-y-3">
            <div className="relative">
              <FiUser className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-500'
              }`} />
              <input
                type="text"
                placeholder="Username"
                className={`w-full pl-10 pr-4 py-2 rounded-lg border transition-colors ${
                  isDarkMode
                    ? 'bg-neutral-900 border-neutral-700 text-white placeholder-gray-500 focus:border-cyan-500'
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-cyan-500'
                }`}
              />
            </div>
            
            <div className="relative">
              <FiMail className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-500'
              }`} />
              <input
                type="email"
                placeholder="Email"
                className={`w-full pl-10 pr-4 py-2 rounded-lg border transition-colors ${
                  isDarkMode
                    ? 'bg-neutral-900 border-neutral-700 text-white placeholder-gray-500 focus:border-cyan-500'
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-cyan-500'
                }`}
              />
            </div>
            
            <div className="relative">
              <FiLock className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-500'
              }`} />
              <input
                type="password"
                placeholder="Password"
                className={`w-full pl-10 pr-4 py-2 rounded-lg border transition-colors ${
                  isDarkMode
                    ? 'bg-neutral-900 border-neutral-700 text-white placeholder-gray-500 focus:border-cyan-500'
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-cyan-500'
                }`}
              />
            </div>
          </div>
        </div>

        {/* Typography Preview */}
        <div className="space-y-2">
          <p className="text-sm font-medium">Typography</p>
          <div className={`p-4 rounded-lg ${
            isDarkMode ? 'bg-neutral-900' : 'bg-gray-50'
          }`}>
            <h1 className="text-2xl font-bold mb-2">Heading 1</h1>
            <h2 className="text-xl font-semibold mb-2">Heading 2</h2>
            <h3 className="text-lg font-medium mb-2">Heading 3</h3>
            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Regular paragraph text with the current theme settings.
            </p>
          </div>
        </div>

        {/* Status Colors Preview */}
        <div className="space-y-2">
          <p className="text-sm font-medium">Status Colors</p>
          <div className="grid grid-cols-2 gap-2">
            <div className="px-3 py-2 bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400 rounded-lg text-sm">
              Success
            </div>
            <div className="px-3 py-2 bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-400 rounded-lg text-sm">
              Error
            </div>
            <div className="px-3 py-2 bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-400 rounded-lg text-sm">
              Warning
            </div>
            <div className="px-3 py-2 bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400 rounded-lg text-sm">
              Info
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemePreview;
