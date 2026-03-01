import React, { useState } from 'react';
import Hero from '../components/Hero';
import GameCard from '../components/GameCard';
import { games } from '../data';

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % games.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + games.length) % games.length);
  };

  return (
    <div className="bg-retro-dark">
      <Hero />

      {/* Featured Games Carousel */}
      <section className="py-16 px-4 bg-retro-blue">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-neon-green mb-12 text-center font-pixel">Featured Games</h2>
          <div className="relative">
            <div className="flex justify-center">
              <div className="w-full max-w-md">
                <GameCard game={games[currentIndex]} />
              </div>
            </div>
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-neon-green text-retro-dark p-3 rounded-full hover:bg-neon-orange transition"
            >
              ❮
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-neon-green text-retro-dark p-3 rounded-full hover:bg-neon-orange transition"
            >
              ❯
            </button>
          </div>
          <div className="text-center mt-6 text-gray-400">
            Game {currentIndex + 1} of {games.length}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-neon-orange to-neon-green">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-retro-dark mb-4">Ready to Play?</h2>
          <p className="text-retro-dark text-lg mb-8">Download our games today and experience retro gaming like never before.</p>
          <button className="bg-retro-dark text-neon-green font-bold py-3 px-8 rounded hover:bg-retro-blue transition">
            Download Now
          </button>
        </div>
      </section>
    </div>
  );
}
