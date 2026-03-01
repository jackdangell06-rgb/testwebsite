import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="bg-retro-dark min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-neon-green mb-4 font-pixel text-center">Contact Us</h1>
        <p className="text-gray-300 text-center mb-12">
          Have questions or feedback? We'd love to hear from you!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-retro-blue p-8 rounded-lg border-2 border-neon-green">
            <h2 className="text-2xl font-bold text-neon-green mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-300 font-semibold mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded bg-retro-dark text-white border border-neon-green focus:outline-none focus:border-neon-orange"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-gray-300 font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded bg-retro-dark text-white border border-neon-green focus:outline-none focus:border-neon-orange"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-gray-300 font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-2 rounded bg-retro-dark text-white border border-neon-green focus:outline-none focus:border-neon-orange resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-neon-green text-retro-dark font-bold py-2 rounded hover:bg-neon-orange transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-retro-blue p-8 rounded-lg border-2 border-neon-orange">
            <h2 className="text-2xl font-bold text-neon-green mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-neon-green font-bold mb-2">Email</h3>
                <p className="text-gray-300">
                  <a href="mailto:hello@jackgames.com" className="hover:text-neon-green transition">
                    hello@jackgames.com
                  </a>
                </p>
              </div>
              <div>
                <h3 className="text-neon-green font-bold mb-2">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-neon-green transition">Twitter</a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-neon-green transition">Facebook</a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-neon-green transition">Instagram</a>
                  <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-neon-green transition">Discord</a>
                </div>
              </div>
              <div>
                <h3 className="text-neon-green font-bold mb-2">Business Hours</h3>
                <p className="text-gray-300">
                  Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                  Saturday - Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
