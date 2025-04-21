import React from 'react';
import { Header } from './components/Header';
import { HeroBanner } from './components/HeroBanner';
import { NewsSection } from './components/NewsSection';
import { DLCSection } from './components/DLCSection';
import { GallerySection } from './components/GallerySection';
import { PreFooterBanner } from './components/PreFooterBanner';
import { Footer } from './components/Footer';
export function App() {
  return <div className="min-h-screen bg-black">
      <Header />
      <main>
        <HeroBanner />
        <NewsSection />
        <DLCSection />
        <GallerySection />
        <PreFooterBanner />
      </main>
      <Footer />
    </div>;
}