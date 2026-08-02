import React, { useState, useEffect, useRef } from 'react';
import { Utensils, AlertCircle, Tag, Sparkles, ChevronUp, X } from 'lucide-react';
import { siteContent } from '../content/siteContent';

export const Menu: React.FC = () => {
  const initialCategory = siteContent.menuCategories[0]?.id || 'ramen';
  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [isInMenuSection, setIsInMenuSection] = useState(false);
  const [showMenuDrawer, setShowMenuDrawer] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Monitor when user is scrolling inside the #menu section
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      // Section is in view when its top is near/above middle screen and bottom is still visible
      const inView = rect.top <= window.innerHeight * 0.75 && rect.bottom >= 200;
      setIsInMenuSection(inView);
      if (!inView) {
        setShowMenuDrawer(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToMenuTop = () => {
    if (sectionRef.current) {
      const yOffset = -100; // Fixed header height offset
      const y = sectionRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
    }
  };

  const handleCategorySelect = (catId: string) => {
    setActiveCategory(catId);
    setSelectedTag(null);
    // Immediately close drawer first so bottom sheet doesn't cover content during scroll
    setShowMenuDrawer(false);
    // Ensure modal closes before smooth scrolling commences
    requestAnimationFrame(() => {
      scrollToMenuTop();
    });
  };

  // Extract all unique dietary tags
  const allTags = Array.from(
    new Set(siteContent.menuItems.flatMap((item) => item.tags || []))
  );

  // Filter menu items by active category & selected tag
  const filteredItems = siteContent.menuItems.filter((item) => {
    const matchesCategory = item.category === activeCategory;
    const matchesTag = selectedTag ? item.tags?.includes(selectedTag) : true;
    return matchesCategory && matchesTag;
  });

  const activeCategoryObj = siteContent.menuCategories.find(
    (c) => c.id === activeCategory
  );

  return (
    <section ref={sectionRef} id="menu" className="py-12 sm:py-16 bg-[#F9F7F2] text-[#1A1A1A] border-b border-[#1A1A1A]/10 relative scroll-mt-28 sm:scroll-mt-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-[10px] uppercase font-mono tracking-[0.25em] text-stone-600 font-bold">
            <Utensils className="w-3.5 h-3.5 text-[#1A1A1A]" />
            <span>Our Menu</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#1A1A1A]">
            Current Offerings
          </h2>
          <p className="text-stone-600 text-sm sm:text-base font-light max-w-xl mx-auto">
            {siteContent.tagline}
          </p>
        </div>

        {/* Category Tabs Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 pb-2">
          {siteContent.menuCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setSelectedTag(null);
                }}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-[0.15em] transition-all duration-200 whitespace-nowrap border ${
                  isActive
                    ? 'bg-[#1A1A1A] text-[#F9F7F2] border-[#1A1A1A] shadow-sm'
                    : 'bg-transparent text-[#1A1A1A] border-[#1A1A1A]/20 hover:border-[#1A1A1A]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Tag Filters (Optional Tag Filter Buttons) */}
        {allTags.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs">
            <span className="text-stone-500 font-mono text-[11px] uppercase tracking-wider flex items-center gap-1 mr-1">
              <Tag className="w-3 h-3 text-[#1A1A1A]" /> Filter:
            </span>
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-3 py-1 rounded-full text-[11px] font-mono tracking-wider uppercase border transition-colors ${
                selectedTag === null
                  ? 'bg-[#1A1A1A] text-[#F9F7F2] border-[#1A1A1A]'
                  : 'bg-transparent border-[#1A1A1A]/20 text-stone-600 hover:text-[#1A1A1A]'
              }`}
            >
              All Items
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                className={`px-3 py-1 rounded-full text-[11px] font-mono tracking-wider uppercase border transition-colors ${
                  selectedTag === tag
                    ? 'bg-[#1A1A1A] text-[#F9F7F2] border-[#1A1A1A]'
                    : 'bg-transparent border-[#1A1A1A]/20 text-stone-600 hover:text-[#1A1A1A]'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        )}

        {/* Active Category Description */}
        {activeCategoryObj && (
          <div className="text-center max-w-lg mx-auto text-xs sm:text-sm text-stone-600 editorial-italic">
            "{activeCategoryObj.description}"
          </div>
        )}

        {/* Menu Items List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {filteredItems.length === 0 ? (
            <div className="col-span-full py-12 text-center text-stone-500 text-xs font-mono uppercase tracking-wider">
              No items found for the selected dietary tag in this section.
            </div>
          ) : (
            filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-[#EFECE6]/80 border border-[#1A1A1A]/15 hover:border-[#1A1A1A]/40 transition-all duration-200 flex flex-col justify-between overflow-hidden group shadow-sm"
              >
                {/* Item Image (Rendered ONLY if item.image exists - e.g. Food/Ramen, omitted for Beverages) */}
                {item.image && (
                  <div className="w-full aspect-[16/9] bg-[#E8E4DB] overflow-hidden border-b border-[#1A1A1A]/10 relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-[1.05]"
                      referrerPolicy="no-referrer"
                    />
                    {item.featured && (
                      <span className="absolute top-2 left-2 px-2.5 py-1 bg-[#1A1A1A] text-[#F9F7F2] text-[9px] font-mono tracking-widest uppercase font-bold flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-[#F9F7F2]" />
                        <span>Popular</span>
                      </span>
                    )}
                  </div>
                )}

                {/* Item Details */}
                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-baseline justify-between gap-4">
                      <div className="space-y-1">
                        <h3 className="font-serif text-lg sm:text-xl font-normal text-[#1A1A1A] group-hover:underline">
                          {item.name}
                        </h3>
                        {item.tags && item.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 pt-0.5">
                            {item.tags.map((t) => (
                              <span
                                key={t}
                                className="px-2 py-0.5 text-[9px] font-mono tracking-widest uppercase bg-[#1A1A1A] text-[#F9F7F2]"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                      <span className="font-serif text-lg sm:text-xl font-semibold text-[#1A1A1A] shrink-0 border-b border-[#1A1A1A]/30 pb-0.5">
                        {item.price}
                      </span>
                    </div>

                    <p className="text-stone-700 text-xs sm:text-sm leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>

                  {!item.image && item.featured && (
                    <div className="pt-2 flex items-center gap-1.5 text-[10px] uppercase font-mono tracking-widest text-[#1A1A1A] font-bold">
                      <Sparkles className="w-3 h-3 text-[#1A1A1A]" />
                      <span>Popular</span>
                    </div>
                  )}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Pricing & Availability Disclaimer Note */}
        <div className="max-w-2xl mx-auto p-4 bg-[#EFECE6] border border-[#1A1A1A]/20 flex items-start gap-3 text-xs text-stone-700">
          <AlertCircle className="w-4 h-4 text-[#1A1A1A] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-bold text-[#1A1A1A] uppercase tracking-wider text-[11px]">Important Notice:</p>
            <p className="leading-relaxed">
              {siteContent.disclaimers.priceNotice} {siteContent.disclaimers.allergyNotice}
            </p>
          </div>
        </div>

      </div>

      {/* Floating Action Button for Menu Navigation (Appears smoothly when scrolling inside #menu) */}
      <div
        className={`fixed bottom-6 right-6 z-40 transition-all duration-200 ease-out transform ${
          isInMenuSection
            ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 scale-90 translate-y-4 pointer-events-none'
        }`}
      >
        <button
          onClick={() => setShowMenuDrawer(!showMenuDrawer)}
          className="flex items-center gap-2 px-4 py-3 bg-[#1A1A1A] text-[#F9F7F2] rounded-full shadow-2xl hover:bg-black border border-[#F9F7F2]/20 transition-all duration-150 active:scale-95 font-mono text-xs uppercase tracking-widest font-bold"
          aria-label="Quick category menu"
        >
          <Utensils className="w-4 h-4 text-[#F9F7F2]" />
          <span>Menu</span>
        </button>
      </div>

      {/* Floating Category Picker Popover Modal */}
      <div 
        className={`fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 sm:p-6 bg-black/40 backdrop-blur-xs transition-opacity duration-200 ease-out ${
          isInMenuSection && showMenuDrawer
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setShowMenuDrawer(false)}
      >
        <div
          className={`relative w-full max-w-xs sm:max-w-sm bg-[#F9F7F2] border border-[#1A1A1A] rounded-2xl shadow-2xl p-5 space-y-4 transition-all duration-200 ease-out transform ${
            isInMenuSection && showMenuDrawer
              ? 'scale-100 translate-y-0 opacity-100'
              : 'scale-95 translate-y-4 opacity-0'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between border-b border-[#1A1A1A]/10 pb-3">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#1A1A1A]">
              <Utensils className="w-4 h-4" />
              <span>Jump To Category</span>
            </div>
            <button
              onClick={() => setShowMenuDrawer(false)}
              className="p-1 rounded-full text-stone-500 hover:text-[#1A1A1A] hover:bg-[#1A1A1A]/10 transition-colors"
              aria-label="Close menu drawer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-2">
            {siteContent.menuCategories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategorySelect(cat.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-between active:scale-[0.98] ${
                    isActive
                      ? 'bg-[#1A1A1A] text-[#F9F7F2]'
                      : 'bg-[#EFECE6] text-[#1A1A1A] hover:bg-[#1A1A1A]/10'
                  }`}
                >
                  <span>{cat.label}</span>
                  {isActive && <span className="text-[10px] font-mono tracking-widest text-stone-400">Active</span>}
                </button>
              );
            })}
          </div>

          <div className="pt-2 border-t border-[#1A1A1A]/10">
            <button
              onClick={() => {
                setShowMenuDrawer(false);
                requestAnimationFrame(() => {
                  scrollToMenuTop();
                });
              }}
              className="w-full py-2.5 bg-stone-200 hover:bg-stone-300 text-[#1A1A1A] rounded-lg text-[11px] font-mono uppercase tracking-wider font-bold transition-colors flex items-center justify-center gap-1.5 active:scale-[0.98]"
            >
              <ChevronUp className="w-3.5 h-3.5" />
              <span>Scroll to Top of Menu</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
