
import React from 'react';
import { Helmet } from 'react-helmet';
import ArticleCard from '@/components/ArticleCard';
import NewsletterSignup from '@/components/NewsletterSignup';
import { articlesData } from '@/data/articles';

const FinancePage = () => {
  const articles = articlesData.Finance || [];
  const featured = articles[0];
  const related = articles.slice(1);

  return (
    <>
      <Helmet>
        <title>Finance News - Kavam</title>
      </Helmet>
      <div className="bg-gray-50 min-h-screen py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <h1 className="font-serif text-5xl font-bold border-b-4 border-gray-900 pb-4 mb-8">Finance</h1>
          {featured && (
            <div className="mb-12">
               <h2 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Featured Story</h2>
               <ArticleCard article={featured} />
            </div>
          )}
          <h2 className="journalistic-headline text-3xl mb-6 border-b border-gray-200 pb-2">Latest in Finance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {related.map(article => <ArticleCard key={article.id} article={article} />)}
          </div>
          <NewsletterSignup />
        </div>
      </div>
    </>
  );
};

export default FinancePage;
