import React from 'react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center min-h-screen">
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="relative">
          <div className="h-20 w-20 rounded-full border-t-4 border-b-4 border-blue-600 animate-spin"></div>
          <div className="absolute top-0 left-0 h-20 w-20 rounded-full border-t-4 border-b-4 border-amber-500 animate-spin" style={{ animationDuration: '1.5s' }}></div>
        </div>
        <h2 className="text-xl font-semibold text-gray-800">LoyaltyLoop</h2>
        <p className="text-gray-500">Loading your dashboard...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;