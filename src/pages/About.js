import React from 'react';
import { team } from '../data';

export default function About() {
  return (
    <div className="bg-retro-dark min-h-screen py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Company Story */}
        <section className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-neon-green mb-8 font-pixel">About Jack Games</h1>
          <div className="bg-retro-blue p-8 rounded-lg border-2 border-neon-green">
            <h2 className="text-2xl font-bold text-neon-orange mb-4">Our Story</h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Founded in 2018, Jack Games was born from a passion for classic gaming and a vision to bring those nostalgic experiences to modern mobile devices. We believe that great games transcend time, and retro-inspired games have a unique charm that resonates with both longtime gamers and new audiences.
            </p>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Our team of experienced developers, designers, and artists work tirelessly to create games that honor the classics while embracing modern technology. Every game we release is crafted with attention to detail, ensuring a delightful experience for our players.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="mb-16">
          <div className="bg-retro-blue p-8 rounded-lg border-2 border-neon-orange">
            <h2 className="text-2xl font-bold text-neon-green mb-4">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed">
              To create high-quality, engaging retro-inspired games for Android and iOS platforms that bring joy, nostalgia, and entertainment to millions of players worldwide. We are committed to preserving the magic of classic gaming while innovating for the future.
            </p>
          </div>
        </section>

        {/* Team */}
        <section>
          <h2 className="text-3xl font-bold text-neon-green mb-12 font-pixel text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member) => (
              <div key={member.id} className="bg-retro-blue p-6 rounded-lg border-2 border-neon-green hover:border-neon-orange transition text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 border-2 border-neon-green"
                />
                <h3 className="text-xl font-bold text-neon-green mb-2">{member.name}</h3>
                <p className="text-neon-orange font-semibold mb-3">{member.role}</p>
                <p className="text-gray-300 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
