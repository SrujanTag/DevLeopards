import React, { useState } from 'react';
import { WhatsApp } from './icons';

const WhatsAppButton = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleClick = () => {
    window.open('https://wa.me/14155238886?text=join%20brown-telephone', '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 flex-row-reverse">
      <button
        onClick={handleClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-lg shadow-green-950/30 transform hover:scale-110 active:scale-95 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-gray-950"
        aria-label="Chat with LeapBot on WhatsApp"
      >
        {/* Pulsing outer ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping group-hover:animate-none -z-10" />
        
        <WhatsApp className="w-7 h-7" />
      </button>

      {/* Sleek Dark/Green Glass Tooltip */}
      <div
        className={`
          px-4 py-2 rounded-xl bg-gray-900/90 border border-emerald-500/20 text-white text-xs font-semibold shadow-xl backdrop-blur-md whitespace-nowrap
          pointer-events-none transition-all duration-300 transform origin-right
          ${showTooltip ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-4 scale-90'}
        `}
      >
        <div className="flex items-center gap-1.5 text-white">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Chat with LeapBot! 💬
        </div>
      </div>
    </div>
  );
};

export default WhatsAppButton;
