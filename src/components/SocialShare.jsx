
import React from 'react';
import { Twitter, Linkedin, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';

const SocialShare = ({ title, url }) => {
  const currentUrl = url || window.location.href;
  const encodedUrl = encodeURIComponent(currentUrl);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = [
    {
      name: 'Twitter',
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
      color: 'bg-[#1DA1F2] hover:bg-[#1a91da]'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      color: 'bg-[#0A66C2] hover:bg-[#0958a8]'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: 'bg-[#1877F2] hover:bg-[#166fe5]'
    }
  ];

  return (
    <div className="flex items-center space-x-3">
      <span className="text-sm font-medium text-gray-500 dark:text-gray-400 mr-2">Share:</span>
      {shareLinks.map((social) => (
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          title={`Share on ${social.name}`}
          className={`w-9 h-9 rounded-full flex items-center justify-center text-white shadow-sm transition-colors duration-200 ${social.color}`}
        >
          <social.icon size={16} />
        </motion.a>
      ))}
    </div>
  );
};

export default SocialShare;
