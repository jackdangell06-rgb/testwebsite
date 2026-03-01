import React from 'react';
import { blog } from '../data';

export default function Blog() {
  return (
    <div className="bg-retro-dark min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-neon-green mb-4 font-pixel text-center">Retro Gaming Blog</h1>
        <p className="text-gray-300 text-center mb-12">
          Insights, tips, and stories from the Jack Games team.
        </p>

        <div className="space-y-8">
          {blog.map((post) => (
            <article
              key={post.id}
              className="bg-retro-blue p-8 rounded-lg border-2 border-neon-green hover:border-neon-orange transition"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-neon-green mb-2">{post.title}</h2>
                  <p className="text-neon-orange text-sm">{post.date}</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">{post.summary}</p>
              <a
                href="#blog-post"
                className="inline-block bg-neon-green text-retro-dark font-bold py-2 px-4 rounded hover:bg-neon-orange transition"
              >
                Read More →
              </a>
            </article>
          ))}
        </div>

        {/* Newsletter Section */}
        <section className="mt-16 bg-gradient-to-r from-neon-orange to-neon-green p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold text-retro-dark mb-4">Stay Updated</h2>
          <p className="text-retro-dark mb-6">Subscribe to our newsletter for the latest news and updates.</p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-2 rounded text-retro-dark focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-retro-dark text-neon-green font-bold py-2 px-6 rounded hover:bg-retro-blue transition"
            >
              Subscribe
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
