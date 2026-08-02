import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, UtensilsCrossed } from 'lucide-react';
import { siteContent } from '../content/siteContent';

interface HeaderProps {
  noticeVisible?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ noticeVisible = true }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Menu', href: '#menu' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const targetEl = document.querySelector(href);
    if (targetEl) {
      const headerOffset = noticeVisible ? 104 : 84;
      const elementPosition = targetEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth'
      });
    }
  };

  const topClass = isScrolled ? 'top-4' : (noticeVisible ? 'top-[44px]' : 'top-4');

  return (
    <header className={`fixed left-0 right-0 z-50 px-4 sm:px-6 flex justify-center pointer-events-none transition-all duration-500 ${topClass}`}>
      <div className="relative w-full max-w-4xl">
        <div className={`pointer-events-auto w-full bg-[#F9F7F2]/85 backdrop-blur-md border border-[#1A1A1A]/10 rounded-full px-5 sm:px-6 py-2.5 transition-all duration-500 flex items-center justify-between ${isScrolled ? 'shadow-lg' : 'shadow-sm'}`}>
          
          {/* Brand Identity */}
          <a
            href="#"
            onClick={(e) => handleScrollTo(e, '#')}
            className="group flex items-center gap-3"
          >
            <div className="w-8 h-8 rounded-full bg-[#1A1A1A] flex items-center justify-center text-[#F9F7F2] shrink-0">
              <UtensilsCrossed className="w-4 h-4 text-[#F9F7F2]" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-base sm:text-lg font-medium tracking-tight text-[#1A1A1A] leading-none">
                {siteContent.restaurantName}
              </span>
              <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.2em] font-mono text-stone-500 mt-1">
                Japanese Dining
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="text-xs uppercase tracking-[0.15em] font-medium text-stone-600 hover:text-[#1A1A1A] transition-colors py-1 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-[#1A1A1A] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Right Action Button (Desktop) */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#menu"
              onClick={(e) => handleScrollTo(e, '#menu')}
              className="px-4 py-1.5 rounded-full bg-transparent border border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#F9F7F2] text-[#1A1A1A] font-medium text-[10px] tracking-widest uppercase transition-all duration-300"
            >
              View Menu
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-[#1A1A1A] focus:outline-none transition-transform duration-300 pointer-events-auto"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Expanded Menu - Absolute Dropdown */}
        <div
          className={`absolute top-[calc(100%+8px)] left-0 right-0 pointer-events-auto bg-[#F9F7F2]/95 backdrop-blur-md border border-[#1A1A1A]/10 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 origin-top md:hidden ${
            mobileMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
          }`}
        >
          <div className="p-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="text-xs uppercase tracking-[0.2em] font-medium text-stone-700 py-3 px-4 hover:bg-[#1A1A1A]/5 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 mt-1 border-t border-[#1A1A1A]/10">
              <a
                href="#menu"
                onClick={(e) => handleScrollTo(e, '#menu')}
                className="flex items-center justify-center gap-3 text-xs uppercase tracking-[0.2em] font-medium text-[#F9F7F2] bg-[#1A1A1A] py-3 px-4 rounded-lg hover:bg-black transition-colors"
              >
                <span>View Menu</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
