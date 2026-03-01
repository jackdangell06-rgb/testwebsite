import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-retro-dark shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <span className="text-neon-green font-pixel text-lg sm:text-2xl">Jack Games</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-white hover:text-neon-green transition">Home</Link>
            <Link to="/about" className="text-white hover:text-neon-green transition">About Us</Link>
            <Link to="/games" className="text-white hover:text-neon-green transition">Games</Link>
            <Link to="/blog" className="text-white hover:text-neon-green transition">Blog</Link>
            <Link to="/contact" className="text-white hover:text-neon-green transition">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link to="/" className="block text-white hover:text-neon-green py-2">Home</Link>
            <Link to="/about" className="block text-white hover:text-neon-green py-2">About Us</Link>
            <Link to="/games" className="block text-white hover:text-neon-green py-2">Games</Link>
            <Link to="/blog" className="block text-white hover:text-neon-green py-2">Blog</Link>
            <Link to="/contact" className="block text-white hover:text-neon-green py-2">Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
