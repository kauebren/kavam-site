
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CategoryCard = ({ icon: Icon, title, description, link, gradient = 'from-blue-500 to-blue-700' }) => {
  return (
    <Link to={link}>
      <motion.div
        whileHover={{ scale: 1.05, y: -10 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-xl shadow-lg hover:shadow-2xl p-8 h-full border border-gray-100 cursor-pointer group"
      >
        <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="text-white" size={32} />
        </div>
        
        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-4">
          {description}
        </p>
        
        <div className="flex items-center text-blue-600 font-semibold group-hover:gap-3 transition-all duration-300">
          <span>Explore {title}</span>
          <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
        </div>
      </motion.div>
    </Link>
  );
};

export default CategoryCard;
