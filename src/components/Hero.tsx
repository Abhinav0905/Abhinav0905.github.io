import React from 'react';
import { Github, Linkedin, Download } from 'lucide-react';

export function Hero() {
  return (
    <section id="about" className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500"
              alt="Professional headshot"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Your Name
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
              Senior Software Engineer
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl">
              Passionate software engineer with expertise in building scalable web applications.
              Specialized in React, Node.js, and cloud technologies. Always eager to learn and
              tackle new challenges in the tech world.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="/resume.pdf"
                className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition"
              >
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}