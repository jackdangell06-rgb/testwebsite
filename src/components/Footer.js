import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-retro-dark border-t-4 border-neon-green">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-neon-green font-pixel mb-4">Jack Games</h3>
            <p className="text-gray-400">Crafting retro gaming experiences for modern devices.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/about" className="hover:text-neon-green transition">About Us</Link></li>
              <li><Link to="/games" className="hover:text-neon-green transition">Games</Link></li>
              <li><Link to="/blog" className="hover:text-neon-green transition">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-green transition">Twitter</a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-green transition">Facebook</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-green transition">Instagram</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>&copy; 2024 Jack Games. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="https://example.com/privacy" className="hover:text-neon-green transition">Privacy Policy</a>
              <a href="https://example.com/terms" className="hover:text-neon-green transition">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
