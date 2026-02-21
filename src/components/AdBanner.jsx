
import React from 'react';

const AdBanner = ({ size = 'leaderboard', className = '' }) => {
  // Define dimensions based on size
  const dimensions = {
    leaderboard: 'w-full max-w-[728px] h-[90px] md:max-w-[970px]',
    mediumRectangle: 'w-[300px] h-[250px]',
    responsive: 'w-full h-[100px] sm:h-[90px]'
  };

  const adClass = dimensions[size] || dimensions.responsive;

  return (
    <div className={`flex flex-col items-center justify-center my-6 ${className}`}>
      <span className="text-[10px] text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1">
        Advertisement
      </span>
      <div className={`${adClass} bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center rounded transition-colors duration-300`}>
        <span className="text-gray-400 dark:text-gray-500 font-medium">Ad Space</span>
      </div>
    </div>
  );
};

export default AdBanner;
