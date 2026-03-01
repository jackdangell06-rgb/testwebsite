import React from 'react';
import GameCard from '../components/GameCard';
import { games } from '../data';

export default function Games() {
  console.log('games data', games);
  return (
    <div className="bg-retro-dark min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-neon-green mb-4 font-pixel text-center">Our Games</h1>
        <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Discover our collection of retro-inspired games designed for Android and iOS. Each game is crafted to bring back the joy of classic gaming with modern features.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>

        {/* Download Section */}
        <section className="mt-16 bg-gradient-to-r from-neon-green to-neon-orange p-8 rounded-lg text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-retro-dark mb-4">Available on Multiple Platforms</h2>
          <p className="text-retro-dark mb-8">All our games are available on:</p>
          <div className="flex justify-center space-x-4">
            <div className="bg-retro-dark text-neon-green font-bold py-3 px-6 rounded">📱 iOS</div>
            <div className="bg-retro-dark text-neon-green font-bold py-3 px-6 rounded">🤖 Android</div>
          </div>
        </section>
      </div>
    </div>
  );
}
