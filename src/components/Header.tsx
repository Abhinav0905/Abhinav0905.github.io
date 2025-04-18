import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#" className="text-xl font-bold text-gray-900">
            Kumar Abhinav
          </a>

          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
            <a href="#experience" className="text-gray-600 hover:text-gray-900">Experience</a>
            <a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <a href="#about" className="text-gray-600 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#experience" className="text-gray-600 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>Experience</a>
              <a href="#projects" className="text-gray-600 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>Projects</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}