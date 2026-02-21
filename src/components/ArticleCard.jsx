
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock } from 'lucide-react';

const ArticleCard = ({ article }) => {
  const { id, title, excerpt, date, author, authorAvatar, category, image, words } = article;
  
  const readingTime = Math.ceil((words || 800) / 200);

  return (
    <Link to={`/article/${id}`} className="block h-full outline-none">
      <motion.article
        whileHover={{ y: -6, scale: 1.01 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden group cursor-pointer border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl dark:hover:shadow-black/40 transition-all duration-300 flex flex-col h-full"
      >
        <div className="relative h-48 overflow-hidden shrink-0">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute top-4 left-4">
            <span className="category-badge shadow-sm bg-blue-600 text-white border-none dark:bg-blue-600">
              {category}
            </span>
          </div>
        </div>
        
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="journalistic-headline text-xl mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
            {title}
          </h3>
          
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3 flex-grow leading-relaxed">
            {excerpt}
          </p>
          
          <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img 
                src={authorAvatar} 
                alt={author} 
                className="w-8 h-8 rounded-full border border-gray-200 dark:border-gray-600 object-cover shadow-sm"
              />
              <span className="byline text-xs font-semibold">{author}</span>
            </div>
            <div className="flex flex-col items-end">
              <time className="text-xs text-gray-400 dark:text-gray-500 font-medium mb-1">{date}</time>
              <span className="text-xs text-gray-400 dark:text-gray-500 flex items-center">
                <Clock size={12} className="mr-1" />
                {readingTime} min read
              </span>
            </div>
          </div>
        </div>
      </motion.article>
    </Link>
  );
};

export default ArticleCard;
