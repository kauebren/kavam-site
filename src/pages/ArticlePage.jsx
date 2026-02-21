
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowLeft, ChevronRight, Clock, Eye } from 'lucide-react';
import { getAllArticles, articlesData } from '@/data/articles';
import ArticleCard from '@/components/ArticleCard';
import SocialShare from '@/components/SocialShare';
import TrendingNow from '@/components/TrendingNow';
import AdBanner from '@/components/AdBanner';

const ArticlePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const all = getAllArticles();
    const foundArticle = all.find((a) => a.id === id);
    
    if (foundArticle) {
      setArticle(foundArticle);
      
      const categoryArticles = articlesData[foundArticle.category] || [];
      const related = categoryArticles.filter(a => a.id !== id).slice(0, 3);
      setRelatedArticles(related);
    } else {
      setArticle(null);
    }
  }, [id]);

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Article Not Found</h1>
        <button 
          onClick={() => navigate('/')}
          className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
        >
          <ArrowLeft size={16} className="mr-2" /> Return to Home
        </button>
      </div>
    );
  }

  const categoryPath = `/${article.category.toLowerCase().replace(' ', '-')}`;
  const readingTime = Math.ceil((article.words || 800) / 200);

  return (
    <>
      <Helmet>
        <title>{article.title} - Kavam</title>
        <meta name="description" content={article.excerpt} />
      </Helmet>

      <AdBanner size="leaderboard" />

      <div className="bg-white dark:bg-gray-900 min-h-screen transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Content Column */}
          <article className="lg:col-span-8">
            <nav className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-8 font-medium">
              <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</Link>
              <ChevronRight size={14} className="mx-2" />
              <Link to={categoryPath} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors uppercase tracking-wider text-xs">
                {article.category}
              </Link>
              <ChevronRight size={14} className="mx-2" />
              <span className="text-gray-900 dark:text-gray-300 truncate max-w-xs">{article.title}</span>
            </nav>

            <div className="mb-10">
              <span className="category-badge mb-4 inline-block">
                {article.category}
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
                {article.title}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed font-serif italic">
                {article.excerpt}
              </p>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between border-y border-gray-100 dark:border-gray-800 py-6 gap-6">
                <div className="flex items-center">
                  <img 
                    src={article.authorAvatar} 
                    alt={article.author} 
                    className="w-14 h-14 rounded-full border-2 border-gray-100 dark:border-gray-700 object-cover shadow-sm mr-4"
                  />
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white text-base">
                      By {article.author}
                    </div>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-4 mt-1">
                      <span>{article.date}</span>
                      <span className="flex items-center"><Clock size={14} className="mr-1" /> {readingTime} min read</span>
                    </div>
                  </div>
                </div>
                
                <SocialShare title={article.title} />
              </div>
            </div>

            <div className="mb-12">
              <img 
                src={article.image} 
                alt={article.title} 
                className="w-full h-auto rounded-xl shadow-lg object-cover max-h-[600px]"
              />
              <div className="flex justify-between items-center mt-2">
                <p className="text-xs text-gray-400">Image source: Unsplash</p>
                <span className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                  <Eye size={12} className="mr-1" /> {article.views.toLocaleString()} views
                </span>
              </div>
            </div>

            <div className="prose prose-lg prose-blue dark:prose-invert max-w-none">
              {article.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-800 dark:text-gray-200 text-lg leading-relaxed mb-6 font-serif">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="my-10 border-t border-gray-200 dark:border-gray-800 pt-8">
               <AdBanner size="leaderboard" />
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
              <Link 
                to={categoryPath}
                className="inline-flex items-center font-bold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
              >
                <ArrowLeft size={20} className="mr-2" />
                Back to {article.category}
              </Link>
            </div>
          </article>

          {/* Sidebar Column */}
          <aside className="lg:col-span-4 space-y-10">
            <TrendingNow />
            <AdBanner size="mediumRectangle" />
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700">
               <h3 className="font-serif font-bold text-xl text-gray-900 dark:text-white mb-4">About the Author</h3>
               <div className="flex items-center mb-4">
                  <img src={article.authorAvatar} alt={article.author} className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-white shadow-sm" />
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">{article.author}</h4>
                    <p className="text-sm text-blue-600 dark:text-blue-400">Senior Correspondent</p>
                  </div>
               </div>
               <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                 {article.author} is a senior correspondent at Kavam covering global {article.category.toLowerCase()} and policy.
               </p>
            </div>
          </aside>
        </div>

        {/* Related Articles Section */}
        {relatedArticles.length > 0 && (
          <div className="bg-gray-50 dark:bg-gray-800 py-16 mt-8 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="journalistic-headline text-3xl mb-8">
                More from {article.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedArticles.map((rel) => (
                  <ArticleCard key={rel.id} article={rel} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ArticlePage;
