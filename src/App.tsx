import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Download } from 'lucide-react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { VisitorCounter } from './components/VisitorCounter';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Kumar Abhinav. All rights reserved.</p>
          <div className="mt-2">
            <VisitorCounter />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;