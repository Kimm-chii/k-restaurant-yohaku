import React from 'react';
import { Star, ExternalLink, MessageSquareQuote } from 'lucide-react';
import { siteContent } from '../content/siteContent';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-10 sm:py-14 bg-[#F9F7F2] text-[#1A1A1A] border-b border-[#1A1A1A]/10 relative scroll-mt-28 sm:scroll-mt-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
        
        {/* Compact Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-[#EFECE6]/90 border border-[#1A1A1A]/15 rounded-xl">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-full bg-[#1A1A1A] text-[#F9F7F2] flex items-center justify-center shrink-0">
              <MessageSquareQuote className="w-5 h-5 text-[#F9F7F2]" />
            </div>
            <div>
              <h2 className="font-serif text-lg font-normal text-[#1A1A1A] flex items-center gap-2">
                Google Reviews
                <span className="text-xs font-mono font-bold px-2 py-0.5 bg-[#1A1A1A] text-[#F9F7F2] rounded-full">
                  ★ {siteContent.reviews.googleRatingScore}
                </span>
              </h2>
              <p className="text-xs text-stone-600 font-light">
                {siteContent.reviews.totalReviewCount}+ verified customer reviews
              </p>
            </div>
          </div>

          <a
            href={siteContent.googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#1A1A1A] hover:bg-black text-[#F9F7F2] font-semibold text-xs uppercase tracking-wider transition-all duration-200 shrink-0"
          >
            <Star className="w-3.5 h-3.5 fill-[#F9F7F2]" />
            <span>Read / Review</span>
            <ExternalLink className="w-3 h-3 ml-0.5" />
          </a>
        </div>

        {/* Compact 2-column Review Quotes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {siteContent.reviews.reviewList.map((rev) => (
            <div
              key={rev.id}
              className="p-3 bg-[#EFECE6]/40 border border-[#1A1A1A]/10 rounded-md space-y-1.5 text-left hover:border-[#1A1A1A]/20 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-0.5 text-[#1A1A1A]">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-2.5 h-2.5 fill-[#1A1A1A]" />
                  ))}
                </div>
                <span className="text-[9px] font-mono text-stone-400">
                  {rev.date}
                </span>
              </div>

              <p className="text-[11px] text-stone-700 font-light leading-relaxed editorial-italic">
                "{rev.comment}"
              </p>

              <div className="pt-1.5 border-t border-[#1A1A1A]/5 flex items-center justify-between text-[10px]">
                <span className="font-semibold text-[#1A1A1A] uppercase tracking-wide">
                  — {rev.author}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
