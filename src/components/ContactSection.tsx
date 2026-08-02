import React, { useState } from 'react';
import { siteContent } from '../content/siteContent';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Compass, Copy, Check } from 'lucide-react';

export const ContactSection: React.FC = () => {
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
  return (
    <section id="contact" className="py-12 sm:py-16 bg-[#F9F7F2] text-[#1A1A1A] border-b border-[#1A1A1A]/10 relative scroll-mt-28 sm:scroll-mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-[10px] uppercase font-mono tracking-[0.25em] text-stone-600 font-bold">
            <MapPin className="w-3.5 h-3.5 text-[#1A1A1A]" />
            <span>Contact & Location</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#1A1A1A]">
            Visit Us
          </h2>
          <p className="text-stone-600 text-sm sm:text-base font-light">
            Located in the heart of the neighborhood. Come by for a great meal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* Location & Contact */}
          <div className="p-8 bg-[#EFECE6] border border-[#1A1A1A]/20 space-y-6">
            <h3 className="font-serif text-xl font-normal text-[#1A1A1A] border-b border-[#1A1A1A]/10 pb-4">
              Get in Touch
            </h3>
            
            <div className="space-y-4 text-sm">
              <div className="p-4 bg-[#F9F7F2] border border-[#1A1A1A]/15 space-y-1">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-stone-600 block">Address</span>
                <p className="text-[#1A1A1A] font-semibold text-sm">{siteContent.address.street}</p>
                <p className="text-stone-600 text-xs">{siteContent.address.cityStateZip}</p>
                <div className="pt-2">
                  <a href={siteContent.address.googleMapsDirectionsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-[#1A1A1A] hover:underline font-bold uppercase tracking-wider">
                    <span>Directions</span>
                    <MapPin className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a href={`tel:${siteContent.phone.replace(/[^0-9]/g, '')}`} className="p-4 bg-[#F9F7F2] border border-[#1A1A1A]/15 hover:border-[#1A1A1A]/40 transition-colors space-y-1 block">
                  <div className="flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest text-stone-600">
                    <Phone className="w-3.5 h-3.5 text-[#1A1A1A]" />
                    <span>Phone</span>
                  </div>
                  <p className="text-[#1A1A1A] font-bold font-serif text-base">{siteContent.phone}</p>
                </a>
                
                <div className="p-4 bg-[#F9F7F2] border border-[#1A1A1A]/15 hover:border-[#1A1A1A]/40 transition-colors space-y-2 block">
                  <div className="flex items-center justify-between text-[10px] font-mono font-bold uppercase tracking-widest text-stone-600 h-5">
                    <div className="flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-[#1A1A1A]" />
                      <span>Email</span>
                    </div>
                    <div className="h-5 flex items-center justify-end min-w-[70px]">
                      {emailCopied ? (
                        <span className="text-emerald-800 bg-emerald-100 font-sans text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded flex items-center gap-1 animate-in fade-in leading-none">
                          <Check className="w-3 h-3 text-emerald-700 stroke-[2.5]" /> Copied!
                        </span>
                      ) : (
                        <button
                          onClick={handleCopyEmail}
                          className="text-stone-600 hover:text-[#1A1A1A] text-[10px] font-mono uppercase tracking-wider flex items-center gap-1 transition-colors cursor-pointer leading-none py-0.5"
                          title="Copy email address"
                        >
                          <Copy className="w-3 h-3" /> Copy
                        </button>
                      )}
                    </div>
                  </div>
                  
                  <div className="pt-0.5">
                    <button
                      onClick={handleCopyEmail}
                      className="text-[#1A1A1A] font-medium text-xs truncate hover:underline text-left cursor-pointer w-full flex items-center justify-between"
                      title="Click to copy email address"
                    >
                      <span>{siteContent.email}</span>
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2">
                <a href={siteContent.facebookUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-[#1A1A1A] text-[#F9F7F2] hover:bg-black text-center flex items-center justify-center gap-2 text-xs uppercase font-mono tracking-wider transition-colors">
                  <Facebook className="w-3.5 h-3.5" /> Facebook
                </a>
                <a href={siteContent.instagramUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-[#1A1A1A] text-[#F9F7F2] hover:bg-black text-center flex items-center justify-center gap-2 text-xs uppercase font-mono tracking-wider transition-colors">
                  <Instagram className="w-3.5 h-3.5" /> Instagram
                </a>
                <a href={siteContent.tripAdvisorUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-[#1A1A1A] text-[#F9F7F2] hover:bg-black text-center flex items-center justify-center gap-2 text-xs uppercase font-mono tracking-wider transition-colors">
                  <Compass className="w-3.5 h-3.5" /> TripAdvisor
                </a>
              </div>
            </div>
          </div>

          {/* Operating Hours */}
          <div className="p-8 bg-[#EFECE6] border border-[#1A1A1A]/20 space-y-6">
            <h3 className="font-serif text-xl font-normal text-[#1A1A1A] border-b border-[#1A1A1A]/10 pb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#1A1A1A]" /> Operating Hours
            </h3>

            <div className="space-y-3">
              {siteContent.operatingHours.map((item, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 p-3 bg-[#F9F7F2] border border-[#1A1A1A]/15">
                  <span className="font-bold text-[#1A1A1A] text-xs uppercase tracking-wider">{item.days}</span>
                  <div className="text-right">
                    <span className="font-serif font-normal text-[#1A1A1A] text-sm block">{item.hours}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <p className="text-xs text-stone-600 font-light mt-4">
              {siteContent.disclaimers.reservationNotice}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
