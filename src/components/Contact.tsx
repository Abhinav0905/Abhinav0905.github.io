import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Get In Touch
        </h2>

        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-gray-600">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions.
            </p>
          </div>

          <div className="space-y-4">
            <a
              href="mailto:your.email@example.com"
              className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
            >
              <Mail className="w-5 h-5 mr-3 text-gray-600" />
              <span className="text-gray-900">your.email@example.com</span>
            </a>

            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
            >
              <Github className="w-5 h-5 mr-3 text-gray-600" />
              <span className="text-gray-900">github.com/yourusername</span>
            </a>

            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
            >
              <Linkedin className="w-5 h-5 mr-3 text-gray-600" />
              <span className="text-gray-900">linkedin.com/in/yourusername</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}