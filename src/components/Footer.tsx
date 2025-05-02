
import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-streaming-dark py-10 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center space-x-6 mb-6">
          <a href="#" className="text-gray-400 hover:text-white">
            <Facebook size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <Twitter size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <Instagram size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <Youtube size={24} />
          </a>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-400 mb-8">
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-300">Audio Description</a></li>
            <li><a href="#" className="hover:text-gray-300">Investor Relations</a></li>
            <li><a href="#" className="hover:text-gray-300">Legal Notices</a></li>
          </ul>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-300">Help Center</a></li>
            <li><a href="#" className="hover:text-gray-300">Jobs</a></li>
            <li><a href="#" className="hover:text-gray-300">Cookie Preferences</a></li>
          </ul>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-300">Gift Cards</a></li>
            <li><a href="#" className="hover:text-gray-300">Terms of Use</a></li>
            <li><a href="#" className="hover:text-gray-300">Corporate Information</a></li>
          </ul>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-300">Media Center</a></li>
            <li><a href="#" className="hover:text-gray-300">Privacy</a></li>
            <li><a href="#" className="hover:text-gray-300">Contact Us</a></li>
          </ul>
        </div>
        
        <div className="text-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} StreamScape. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
