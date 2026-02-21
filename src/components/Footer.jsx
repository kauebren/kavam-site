
import React from 'react';
import { Link } from 'react-router-dom';
import { Newspaper, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import NewsletterSignup from './NewsletterSignup';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const categoryLinks = [
    { name: 'Finance', path: '/finance' },
    { name: 'Markets', path: '/markets' },
    { name: 'Business', path: '/business' },
    { name: 'Crypto', path: '/crypto' },
    { name: 'Technology', path: '/technology' },
    { name: 'Real Estate', path: '/real-estate' },
    { name: 'Government', path: '/government' },
    { name: 'Legal', path: '/legal' },
    { name: 'Insurance', path: '/insurance' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 border-t border-gray-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16">
          <NewsletterSignup />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-4">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="bg-blue-600 p-2 rounded">
                <Newspaper className="text-white" size={24} />
              </div>
              <span className="font-serif text-3xl font-bold text-white tracking-tight">
                Kavam
              </span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your definitive source for professional journalism across global markets, finance, business, and policy. Delivering clarity in a complex world.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="text-gray-400 hover:text-white transition-colors duration-300 bg-gray-800 p-2 rounded-full hover:bg-blue-600"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Categories Section */}
          <div className="md:col-span-5">
            <h4 className="text-white font-serif font-bold text-lg mb-6 tracking-wide uppercase text-sm">Sections</h4>
            <ul className="grid grid-cols-2 gap-y-3 gap-x-6">
              {categoryLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200 block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Corporate Links */}
          <div className="md:col-span-3">
            <h4 className="text-white font-serif font-bold text-lg mb-6 tracking-wide uppercase text-sm">Corporate</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 block">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 block">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 block">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 block">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 block">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center">
          <p>
            © {currentYear} Kavam Media Group. All rights reserved.
          </p>
          <p className="mt-2 md:mt-0">
            Trusted Professional Journalism.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
