import React, { useState } from 'react';
import { NoticeBanner } from './components/NoticeBanner';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Menu } from './components/Menu';
import { ReviewsSection } from './components/ReviewsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [noticeVisible, setNoticeVisible] = useState(true);

  return (
    <div className="min-h-screen bg-[#F9F7F2] text-[#1A1A1A] font-sans selection:bg-[#1A1A1A] selection:text-[#F9F7F2] antialiased">
      {/* Top Disclaimer Notice Banner */}
      <NoticeBanner visible={noticeVisible} onClose={() => setNoticeVisible(false)} />

      {/* Main Sticky Header */}
      <Header noticeVisible={noticeVisible} />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Story & Philosophy */}
        <About />

        {/* Tabbed Menu & Pricing Disclaimer */}
        <Menu />

        {/* Google Reviews Highlights */}
        <ReviewsSection />

        {/* Contact & Hours */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
