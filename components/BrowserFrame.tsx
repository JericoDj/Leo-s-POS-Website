import React from 'react';

interface BrowserFrameProps {
  children: React.ReactNode;
  className?: string;
}

export const BrowserFrame: React.FC<BrowserFrameProps> = ({ children, className = '' }) => {
  return (
    <div className={`rounded-xl overflow-hidden shadow-2xl border border-slate-200 bg-white ${className}`}>
      {/* Browser Toolbar */}
      <div className="bg-slate-100 border-b border-slate-200 px-4 py-3 flex items-center space-x-2">
        <div className="w-3 h-3 rounded-full bg-red-400"></div>
        <div className="w-3 h-3 rounded-full bg-amber-400"></div>
        <div className="w-3 h-3 rounded-full bg-green-400"></div>
        {/* Address Bar Mockup */}
        <div className="ml-4 flex-1 bg-white rounded-md h-6 border border-slate-200 max-w-sm"></div>
      </div>
      {/* Content */}
      <div className="relative">
        {children}
      </div>
    </div>
  );
};