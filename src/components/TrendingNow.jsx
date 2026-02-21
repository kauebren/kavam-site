
import React from 'react';
import { Link } from 'react-router-dom';
import { Flame } from 'lucide-react';
import { getAllArticles } from '@/data/articles';

const TrendingNow = () => {
  const allArticles = getAllArticles();
  const trending = [...allArticles].sort((a, b) => b.views - a.views).slice(0, 5);

  const formatViews = (views) => {
    if (views >= 1000) {
      return (views / 1000).toFixed(1) + 'k';
    }
    return views;
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm overflow-hidden transition-colors duration-300">
      <div className="bg-gray-50 dark:bg-gray-900 border-b border-gray-100 dark:border-gray-700 p-4 flex items-center">
        <Flame className="text-red-500 mr-2" size={20} />
        <h3 className="font-serif font-bold text-lg text-gray-900 dark:text-white uppercase tracking-wider">
          Trending Now
        </h3>
      </div>
      <div className="divide-y divide-gray-100 dark:divide-gray-700">
        {trending.map((article, index) => (
          <Link 
            key={article.id} 
            to={`/article/${article.id}`}
            className="block p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200 group"
          >
            <div className="flex items-start gap-4">
              <span className="text-2xl font-serif font-bold text-gray-200 dark:text-gray-600 group-hover:text-blue-200 dark:group-hover:text-blue-900/50 transition-colors">
                {index + 1}
              </span>
              <div className="flex-grow">
                <div className="flex items-center mb-1 gap-2">
                  <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wide">
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-400 dark:text-gray-500 flex items-center">
                    <Flame size={12} className="mr-1 text-orange-400" />
                    {formatViews(article.views)} views
                  </span>
                </div>
                <h4 className="font-serif font-bold text-gray-900 dark:text-white text-base leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                  {article.title}
                </h4>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TrendingNow;
