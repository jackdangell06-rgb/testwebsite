import React from 'react';

export default function GameCard({ game }) {
  return (
    <div className="bg-gradient-to-br from-retro-blue to-retro-dark rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 border-2 border-neon-green hover:border-neon-orange">
      <div className="relative">
        <img src={game.image} alt={game.title} className="w-full h-48 object-cover" />
        <div className="absolute top-2 right-2 flex space-x-1">
          {game.platforms.map((platform) => (
            <span key={platform} className="bg-neon-green text-retro-dark text-xs font-bold px-2 py-1 rounded">
              {platform}
            </span>
          ))}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-neon-green mb-2">{game.title}</h3>
        <p className="text-gray-300 text-sm mb-4">{game.description}</p>
        <div className="flex space-x-2">
          <a
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-neon-orange text-retro-dark font-bold py-2 px-3 rounded text-center text-sm hover:bg-neon-green transition"
          >
            App Store
          </a>
          <a
            href="https://play.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-neon-orange text-retro-dark font-bold py-2 px-3 rounded text-center text-sm hover:bg-neon-green transition"
          >
            Play Store
          </a>
        </div>
      </div>
    </div>
  );
}
