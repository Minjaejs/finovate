import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="font-sans bg-brand-bg min-h-screen text-brand-dark">
      <Navbar />
      <main>
        <Home />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
