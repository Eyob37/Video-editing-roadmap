import React, { useState, useEffect } from 'react';
import { Menu, X, Play } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg">
              <Play className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              VideoMaster
            </span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('roadmap')}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                Roadmap
              </button>
              <button
                onClick={() => scrollToSection('software')}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                Software
              </button>
              <button
                onClick={() => scrollToSection('resources')}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                Resources
              </button>
              <button
                onClick={() => scrollToSection('challenges')}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                Challenges
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => scrollToSection('roadmap')}
              className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium w-full text-left"
            >
              Roadmap
            </button>
            <button
              onClick={() => scrollToSection('software')}
              className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium w-full text-left"
            >
              Software
            </button>
            <button
              onClick={() => scrollToSection('resources')}
              className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium w-full text-left"
            >
              Resources
            </button>
            <button
              onClick={() => scrollToSection('challenges')}
              className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium w-full text-left"
            >
              Challenges
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;