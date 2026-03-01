import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-retro-dark to-retro-blue py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          <span className="text-neon-green">Bringing Retro Fun</span>
          <br />
          <span className="text-white">to Modern Devices</span>
        </h1>
        <p className="text-gray-300 text-lg sm:text-xl mb-8">
          Experience classic gaming nostalgia on Android and iOS with our collection of retro-inspired games.
        </p>
        <Link
          to="/games"
          className="inline-block bg-neon-green text-retro-dark font-bold py-3 px-8 rounded hover:bg-neon-orange transition transform hover:scale-105"
        >
          Explore Games
        </Link>
      </div>
    </section>
  );
}
