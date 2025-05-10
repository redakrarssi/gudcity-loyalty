import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { CircleUser, Home, Gift, UserCircle } from 'lucide-react';

const CustomerLayout: React.FC = () => {
  const location = useLocation();

  const navigationItems = [
    { name: 'Dashboard', href: '/portal', icon: Home },
    { name: 'Rewards', href: '/portal/rewards', icon: Gift },
    { name: 'Profile', href: '/portal/profile', icon: UserCircle },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <CircleUser className="h-8 w-8 text-blue-600" />
                <span className="ml-2 text-xl font-bold text-gray-900">LoyaltyLoop</span>
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                    location.pathname === item.href
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <item.icon className="h-5 w-5 mr-1" />
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <div className="py-10">
        <main>
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <Outlet />
          </div>
        </main>
      </div>

      {/* Mobile navigation */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
        <div className="flex justify-around">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`flex flex-col items-center py-2 ${
                location.pathname === item.href
                  ? 'text-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <item.icon className="h-6 w-6" />
              <span className="text-xs mt-1">{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerLayout;