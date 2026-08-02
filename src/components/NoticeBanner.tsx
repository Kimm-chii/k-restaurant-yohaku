import React, { useEffect, useState } from 'react';
import { Info, X } from 'lucide-react';
import { siteContent } from '../content/siteContent';

interface NoticeBannerProps {
  visible: boolean;
  onClose: () => void;
}

export const NoticeBanner: React.FC<NoticeBannerProps> = ({ visible, onClose }) => {
  const [mounted, setMounted] = useState(visible);

  useEffect(() => {
    if (visible) {
      setMounted(true);
    } else {
      const timer = setTimeout(() => setMounted(false), 300);
      return () => clearTimeout(timer);
    }
  }, [visible]);

  if (!mounted) return null;

  return (
    <div className={`bg-[#1A1A1A] text-[#F9F7F2] text-xs border-[#1A1A1A] transition-all duration-300 tracking-wide font-mono uppercase overflow-hidden ${visible ? 'max-h-16 py-2 border-b opacity-100' : 'max-h-0 py-0 border-b-0 opacity-0'}`}>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between gap-3 h-full">
        <div className="flex items-center gap-2">
          <Info className="w-3.5 h-3.5 text-stone-300 shrink-0" />
          <p className="font-normal tracking-wider leading-tight text-[11px]">
            <span className="font-bold text-white">Guest Notice:</span> {siteContent.disclaimers.priceNotice}
          </p>
        </div>
        <button
          onClick={onClose}
          className="text-stone-400 hover:text-white transition-colors p-1 rounded hover:bg-stone-800"
          title="Dismiss notice"
          aria-label="Dismiss notice"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
