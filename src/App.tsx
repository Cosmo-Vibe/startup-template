import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Promo from './components/Promo/Promo';
import Team from './components/Team/Team';
import Statistics from './components/Statistics/Statistics';
import Work from './components/Work/Work';
import ImageModal from './components/ImageModal/ImageModal';
import Skills from './components/Skills/Skills';
import Pricing from './components/Pricing/Pricing';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [modalImage, setModalImage] = useState<{ src: string; alt: string } | null>(null);
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  
  const openImageModal = (src: string, alt: string) => {
    setModalImage({ src, alt });
  };
  
  const closeImageModal = () => {
    setModalImage(null);
  };

  return (
    <div className="min-h-screen">
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
      <Hero />
      <About />
      <Promo />
      <Team />
      <Statistics />
      <Work openImageModal={openImageModal} />
      {modalImage && <ImageModal 
        src={modalImage.src} 
        alt={modalImage.alt} 
        onClose={closeImageModal} 
      />}
      <Skills />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
