
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import ArticleCard from '@/components/ArticleCard';
import NewsletterSignup from '@/components/NewsletterSignup';
import TrendingNow from '@/components/TrendingNow';
import AdBanner from '@/components/AdBanner';
import { articlesData, getAllArticles } from '@/data/articles';

const HomePage = () => {
  const allArticles = getAllArticles();
  const featuredArticle = articlesData.Finance[0];
  
  const latestNews = [
    articlesData.Markets[0],
    articlesData.Technology[0],
    articlesData.Business[0],
    articlesData.Crypto[0],
    articlesData.RealEstate[0],
    articlesData.Legal[0]
  ].filter(Boolean);

  const categories = [
    { name: 'Finance', path: '/finance', desc: 'Global finance and banking news' },
    { name: 'Markets', path: '/markets', desc: 'Stock market and commodities updates' },
    { name: 'Business', path: '/business', desc: 'Corporate news and leadership' },
    { name: 'Crypto', path: '/crypto', desc: 'Blockchain and digital assets' },
    { name: 'Technology', path: '/technology', desc: 'Tech industry and innovations' },
    { name: 'Real Estate', path: '/real-estate', desc: 'Commercial and residential property' },
    { name: 'Government', path: '/government', desc: 'Policy and political news' },
    { name: 'Legal', path: '/legal', desc: 'Law, regulations and rulings' },
    { name: 'Insurance', path: '/insurance', desc: 'Risk management and coverage' }
  ];

  return (
    <>
      <Helmet>
        <title>Kavam - Professional News & Journalism</title>
        <meta name="description" content="Kavam delivers trusted professional journalism across global markets, finance, business, tech, and policy." />
      </Helmet>

      <div className="bg-gray-50 dark:bg-gray-900 min-h-screen pt-4 transition-colors duration-300">
        
        <AdBanner size="leaderboard" />

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 mt-6">
          <Link to={`/article/${featuredArticle.id}`} className="block group">
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-sm flex flex-col lg:flex-row cursor-pointer transition-colors duration-300">
              <div className="lg:w-2/3 relative h-96 lg:h-[500px] overflow-hidden">
                <img 
                  src={featuredArticle.image} 
                  alt={featuredArticle.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="lg:w-1/3 p-8 lg:p-12 flex flex-col justify-center bg-gray-900 text-white">
                <span className="text-blue-400 font-bold tracking-wider uppercase text-sm mb-4 block">
                  Editor's Pick
                </span>
                <h1 className="font-serif text-4xl lg:text-5xl font-bold leading-tight mb-6 group-hover:text-blue-300 transition-colors">
                  {featuredArticle.title}
                </h1>
                <p className="text-gray-300 text-lg mb-8 leading-relaxed line-clamp-4">
                  {featuredArticle.excerpt}
                </p>
                <div className="flex items-center text-sm text-gray-400 font-medium tracking-wide uppercase mt-auto">
                  <span className="mr-4 text-white">{featuredArticle.author}</span>
                  <span>{featuredArticle.date}</span>
                </div>
              </div>
            </div>
          </Link>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            <div className="lg:col-span-8">
              <div className="flex items-center justify-between border-b-2 border-gray-900 dark:border-white pb-2 mb-8">
                <h2 className="journalistic-headline text-3xl">Latest News</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {latestNews.map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            </div>

            <aside className="lg:col-span-4 space-y-10">
              <TrendingNow />
              <AdBanner size="mediumRectangle" />
            </aside>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <NewsletterSignup />
        </section>

        <section className="bg-white dark:bg-gray-800 py-20 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="journalistic-headline text-4xl mb-4">Explore Kavam Sections</h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
                Dive deep into our comprehensive coverage across major industries and global markets.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
              {categories.map((cat) => (
                <Link key={cat.name} to={cat.path}>
                  <div className="bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-700 rounded-lg p-6 hover:shadow-md hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300 group h-full">
                    <h3 className="font-serif text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {cat.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {cat.desc}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
