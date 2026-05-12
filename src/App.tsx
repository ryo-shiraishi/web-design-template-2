import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Company from './components/Company';
import Access from './components/Access';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative w-full min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Company />
        <Access />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
