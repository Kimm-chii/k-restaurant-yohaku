import React, { useState } from 'react';
import { Star, ArrowUp, Compass, Copy, Check } from 'lucide-react';
import { siteContent } from '../content/siteContent';

export const Footer: React.FC = () => {
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(siteContent.email).then(() => {
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 2000);
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1A1A1A] text-[#F9F7F2] border-t border-[#1A1A1A] pt-16 pb-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-[#F9F7F2] text-[#1A1A1A] flex items-center justify-center font-bold">
                <span className="brand-sans text-lg">
                  {siteContent.restaurantName.charAt(0)}
                </span>
              </div>
              <div>
                <span className="brand-sans text-xl font-bold text-[#F9F7F2] block uppercase tracking-tight">
                  {siteContent.restaurantName}
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-bold block">
                  {siteContent.cuisineType}
                </span>
              </div>
            </div>

            <p className="text-xs text-stone-300 max-w-sm font-light leading-relaxed">
              {siteContent.tagline}
            </p>

            <div className="pt-1 flex flex-wrap items-center gap-2">
              <a
                href={siteContent.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 bg-transparent border border-[#F9F7F2]/20 text-[#F9F7F2] text-xs uppercase font-mono tracking-wider hover:border-[#F9F7F2] transition-colors"
              >
                <Star className="w-3.5 h-3.5 text-stone-300 fill-stone-300" />
                <span>{siteContent.reviews.googleRatingScore} ★ Google Reviews</span>
              </a>
              <a
                href={siteContent.tripAdvisorUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 bg-transparent border border-[#F9F7F2]/20 text-[#F9F7F2] text-xs uppercase font-mono tracking-wider hover:border-[#F9F7F2] transition-colors"
              >
                <Compass className="w-3.5 h-3.5 text-stone-300" />
                <span>TripAdvisor</span>
              </a>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-stone-400 font-bold block">
              Quick Links
            </span>
            <ul className="space-y-2 text-xs font-mono uppercase tracking-wider text-stone-300">
              <li><a href="#about" onClick={(e) => { e.preventDefault(); document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#menu" onClick={(e) => { e.preventDefault(); document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-white transition-colors">Menu</a></li>
              <li><a href="#reviews" onClick={(e) => { e.preventDefault(); document.querySelector('#reviews')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-white transition-colors">Google Reviews</a></li>
              <li><a href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact & Hours Summary */}
          <div className="md:col-span-4 space-y-3 text-xs">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-stone-400 font-bold block">
              Contact & Location
            </span>
            <p className="text-stone-200 font-medium">
              {siteContent.address.fullAddress}
            </p>
            <p className="text-stone-400">
              Phone: <a href={`tel:${siteContent.phone.replace(/[^0-9]/g, '')}`} className="text-white hover:underline">{siteContent.phone}</a>
            </p>
            <p className="text-stone-400 flex items-center gap-1.5 flex-wrap h-5">
              <span>Email:</span>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="text-white hover:underline font-medium inline-flex items-center gap-1 cursor-pointer h-5"
                title="Click to copy email address"
              >
                <span>{siteContent.email}</span>
                <span className="inline-flex items-center justify-center h-5 w-4 shrink-0">
                  {emailCopied ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400 stroke-[2.5]" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 text-stone-400 hover:text-white transition-colors" />
                  )}
                </span>
                {emailCopied && (
                  <span className="text-emerald-300 text-[10px] uppercase font-mono tracking-wider inline-flex items-center bg-emerald-950/80 border border-emerald-500/30 px-1.5 py-0.5 rounded leading-none">
                    Copied!
                  </span>
                )}
              </button>
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p className="font-mono text-[11px]">
            © {new Date().getFullYear()} {siteContent.restaurantName}. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="p-2 bg-stone-800 hover:bg-stone-700 text-[#F9F7F2] border border-stone-700 transition-colors flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider"
            title="Scroll to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
