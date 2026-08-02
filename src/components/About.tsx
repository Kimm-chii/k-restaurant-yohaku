import React from 'react';
import { Sparkles, Utensils } from 'lucide-react';
import { siteContent } from '../content/siteContent';

export const About: React.FC = () => {
  const singleImage = siteContent.about.images[0];

  return (
    <section id="about" className="py-10 sm:py-14 bg-[#F9F7F2] text-[#1A1A1A] border-b border-[#1A1A1A]/10 relative scroll-mt-28 sm:scroll-mt-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto space-y-1">
          <div className="inline-flex items-center gap-1.5 text-[10px] uppercase font-mono tracking-[0.25em] text-stone-500 font-bold">
            <Sparkles className="w-3 h-3 text-[#1A1A1A]" />
            <span>{siteContent.about.title}</span>
          </div>
          <h2 className="font-serif text-xl sm:text-2xl font-normal tracking-tight text-[#1A1A1A]">
            {siteContent.about.subtitle}
          </h2>
        </div>

        {/* Compact Card Layout */}
        <div className="bg-[#EFECE6]/80 border border-[#1A1A1A]/15 p-4 sm:p-5 grid grid-cols-1 md:grid-cols-12 gap-4 items-center rounded-lg">
          
          {/* Narrative */}
          <div className="md:col-span-8 space-y-3 text-stone-800 font-light text-xs sm:text-sm leading-relaxed">
            {siteContent.about.storyParagraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
            <div className="pt-1 flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-wider text-[#1A1A1A]">
              <Utensils className="w-3 h-3 text-[#1A1A1A]" />
              <span>{siteContent.restaurantName} • {siteContent.address.cityStateZip}</span>
            </div>
          </div>

          {/* Single Image Thumbnail */}
          {singleImage && (
            <div className="md:col-span-4 relative aspect-[16/10] w-full border border-[#1A1A1A]/15 bg-[#E8E4DB] overflow-hidden rounded shadow-sm">
              <img
                src={singleImage.src}
                alt={singleImage.alt}
                className="w-full h-full object-cover filter contrast-[1.05]"
                referrerPolicy="no-referrer"
              />
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
