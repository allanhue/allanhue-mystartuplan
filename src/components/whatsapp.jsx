import React, { useState } from 'react';
import { FiMessageCircle, FiX } from 'react-icons/fi';

const WhatsappWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  
  const phoneNumber = '+254731430273';
  const defaultMessage = 'Hello Allan, I would like to discuss IT solutions for my business.';

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message || defaultMessage);
    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };
  
  const toggleWidget = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={toggleWidget}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
          aria-label="Open WhatsApp chat"
        >
          <FiMessageCircle className="w-6 h-6" />
        </button>
      </div>

      {/* WhatsApp Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 bg-white rounded-lg shadow-2xl border border-gray-200">
          {/* Header */}
          <div className="bg-green-500 text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-green-500 text-xl">💬</span>
              </div>
              <div>
                <h3 className="font-semibold">WhatsApp Chat</h3>
                <p className="text-sm text-green-100">We usually reply instantly</p>
              </div>
            </div>
            <button
              onClick={toggleWidget}
              className="text-white hover:text-green-100 transition-colors"
              aria-label="Close chat"
            >
              <FiX className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 bg-gray-50">
            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-2">
                Send us a message on WhatsApp and we'll get back to you right away
              </p>
              <div className="bg-white p-3 rounded-lg border border-gray-200">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message here..."
                  className="w-full border-none outline-none resize-none text-sm text-gray-700"
                  rows="3"
                />
              </div>
            </div>
            
            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <span>💬</span>
              <span>Send on WhatsApp</span>
            </button>
            
            <p className="text-xs text-gray-500 text-center mt-3">
              Click to open WhatsApp with your message
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsappWidget;
