import React from 'react';
import { UtensilsCrossed, Star, MapPin, Clock, ArrowDown, ExternalLink } from 'lucide-react';
import { siteContent } from '../content/siteContent';

export const Hero: React.FC = () => {
  const handleScrollToMenu = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const menuEl = document.querySelector('#menu');
    if (menuEl) {
      const headerOffset = 96;
      const elementPosition = menuEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="hero" className="relative bg-[#F9F7F2] text-[#1A1A1A] pt-28 sm:pt-36 lg:pt-40 pb-16 border-b border-[#1A1A1A]/10 scroll-mt-28 sm:scroll-mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Image with EST badge */}
          <div className="lg:col-span-6 relative">
            <div className="aspect-[4/3] w-full bg-[#E8E4DB] border border-[#1A1A1A]/15 overflow-hidden relative shadow-sm">
              <img
                src={siteContent.hero.heroImage}
                alt={siteContent.restaurantName}
                className="w-full h-full object-cover filter contrast-[1.05] brightness-95"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 left-0 bg-[#1A1A1A] text-[#F9F7F2] px-4 py-2.5 text-[11px] font-mono tracking-widest uppercase border-t border-r border-[#1A1A1A]">
                Est. {siteContent.establishedYear} • {siteContent.cuisineType}
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Typography & CTAs */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1A1A1A] text-[#F9F7F2] text-[10px] uppercase font-mono tracking-[0.2em]">
              <UtensilsCrossed className="w-3 h-3 text-stone-300" />
              <span>{siteContent.hero.badgeText}</span>
            </div>

            <div className="space-y-2">
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#1A1A1A] leading-[1.05]">
                <span className="block">{siteContent.hero.titleLine1}</span>
                <span className="block editorial-italic text-[#1A1A1A]/80 font-normal">
                  {siteContent.hero.titleLine2}
                </span>
              </h1>
            </div>

            <p className="text-stone-700 text-base sm:text-lg font-light leading-relaxed max-w-xl">
              {siteContent.hero.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href="#menu"
                onClick={handleScrollToMenu}
                className="px-7 py-3.5 bg-[#1A1A1A] hover:bg-black text-[#F9F7F2] font-semibold text-xs tracking-[0.15em] uppercase transition-all duration-200 text-center flex items-center justify-center gap-2"
              >
                <span>{siteContent.hero.primaryCtaText}</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <a
                href={siteContent.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-transparent hover:bg-[#1A1A1A]/5 border border-[#1A1A1A]/30 text-[#1A1A1A] font-semibold text-xs tracking-[0.15em] uppercase transition-all duration-200 text-center flex items-center justify-center gap-2"
              >
                <Star className="w-3.5 h-3.5 fill-[#1A1A1A]" />
                <span>Google Reviews</span>
                <ExternalLink className="w-3.5 h-3.5 text-stone-600" />
              </a>
            </div>
          </div>
        </div>

        {/* Quick Location & Hours Editorial Grid */}
        <div className="mt-16 pt-8 border-t border-[#1A1A1A]/15 grid grid-cols-1 sm:grid-cols-2 gap-6 bg-[#EFECE6]/60 p-6 border border-[#1A1A1A]/10">
          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 text-[#1A1A1A] shrink-0 mt-0.5" />
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-stone-500 font-bold block">
                Location
              </span>
              <span className="text-xs text-[#1A1A1A] font-semibold block mt-1">
                {siteContent.address.street}
              </span>
              <span className="text-[11px] text-stone-600 block">
                {siteContent.address.cityStateZip}
              </span>
            </div>
          </div>

          <div className="flex items-start gap-3 border-t sm:border-t-0 sm:border-l border-[#1A1A1A]/10 pt-4 sm:pt-0 sm:pl-6">
            <Clock className="w-4 h-4 text-[#1A1A1A] shrink-0 mt-0.5" />
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-stone-500 font-bold block">
                Hours
              </span>
              <span className="text-xs text-[#1A1A1A] font-semibold block mt-1">
                {siteContent.operatingHours[0].days}: {siteContent.operatingHours[0].hours}
              </span>
              <span className="text-[11px] text-stone-600 block">
                Kitchen closes {siteContent.operatingHours[0].kitchenCloses}
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
