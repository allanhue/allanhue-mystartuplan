import React, { useState } from 'react';
import { FiX, FiSend } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsappWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const phoneNumber = '+254731430273';
  const defaultMessage = 'Hi';
  const agentName = 'Lanstar Support';
  const agentStatus = 'Online';

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
          className="bg-[#25D366] hover:bg-[#1DAE57] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
          aria-label="Open WhatsApp chat"
        >
          <FaWhatsapp className="w-7 h-7" />
        </button>
      </div>

      {/* WhatsApp Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="bg-[#075E54] text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#128C7E] rounded-full flex items-center justify-center">
                <FaWhatsapp className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold">{agentName}</h3>
                <p className="text-xs text-green-100">{agentStatus}</p>
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
          <div className="p-4 bg-[#ECE5DD]">
            <div className="mb-4">
              <div className="flex justify-start">
                <div className="max-w-[80%] bg-white text-gray-800 text-sm px-3 py-2 rounded-lg shadow-sm">
                  Hi
                </div>
              </div>
            </div>

            <div className="bg-white p-2 rounded-lg border border-gray-200 flex items-center gap-2">
              <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Hi"
                className="flex-1 border-none outline-none text-sm text-gray-700"
              />
              <button
                onClick={handleWhatsAppClick}
                className="bg-[#25D366] hover:bg-[#1DAE57] text-white p-2 rounded-full transition-colors"
                aria-label="Open WhatsApp"
              >
                <FiSend className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-gray-600 text-center mt-3">
              Opens WhatsApp with your message
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsappWidget;
