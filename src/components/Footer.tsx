import React from 'react';
import { Play, Youtube, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg">
                <Play className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">VideoMaster</span>
            </div>
            <p className="text-gray-400 mb-4">
              Master video editing with our comprehensive learning roadmap. From beginner to professional.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Learning Path</h3>
            <ul className="space-y-2">
              <li><a href="#roadmap" className="text-gray-400 hover:text-white transition-colors duration-200">Beginner</a></li>
              <li><a href="#roadmap" className="text-gray-400 hover:text-white transition-colors duration-200">Intermediate</a></li>
              <li><a href="#roadmap" className="text-gray-400 hover:text-white transition-colors duration-200">Advanced</a></li>
              <li><a href="#challenges" className="text-gray-400 hover:text-white transition-colors duration-200">Challenges</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#software" className="text-gray-400 hover:text-white transition-colors duration-200">Software</a></li>
              <li><a href="#resources" className="text-gray-400 hover:text-white transition-colors duration-200">Tutorials</a></li>
              <li><a href="#resources" className="text-gray-400 hover:text-white transition-colors duration-200">Communities</a></li>
              <li><a href="#resources" className="text-gray-400 hover:text-white transition-colors duration-200">Free Tools</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Feedback</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 VideoMaster. All rights reserved. Built with passion for video editing education.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;