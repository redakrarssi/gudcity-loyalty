import React from 'react';
import { Link } from 'react-router-dom';
import { CircleUser, ChevronRight, CreditCard, Star, Users, ShoppingBag, Trophy } from 'lucide-react';
import Button from '../components/ui/Button';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <CircleUser className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">LoyaltyLoop</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/login" className="text-gray-600 hover:text-gray-900 font-medium">
                Log in
              </Link>
              <Link to="/register">
                <Button variant="primary" size="sm">
                  Sign up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <span className="block">Boost customer</span>
                <span className="block text-amber-400">loyalty and revenue</span>
              </h1>
              <p className="mt-3 text-base text-blue-100 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Create and manage powerful loyalty programs for your small business. Drive repeat purchases, increase customer lifetime value, and grow your revenue.
              </p>
              <div className="mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link to="/register">
                    <Button variant="secondary" size="lg">
                      Get started for free
                    </Button>
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link to="/customer/login">
                    <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-blue-800">
                      Customer login
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <div className="relative sm:max-w-lg sm:mx-auto lg:max-w-none">
                <img
                  className="w-full rounded-lg shadow-xl ring-1 ring-black ring-opacity-5"
                  src="https://images.pexels.com/photos/6214380/pexels-photo-6214380.jpeg"
                  alt="Customer loyalty program dashboard"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to reward your loyal customers
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Simple to set up, easy to manage, and loved by your customers.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Feature 1 */}
              <div className="flex flex-col items-start p-6 bg-gray-50 rounded-lg">
                <div className="p-3 rounded-full bg-blue-100">
                  <CreditCard className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="mt-5 text-lg font-medium text-gray-900">Multiple Program Types</h3>
                <p className="mt-2 text-base text-gray-500">
                  Points-based, punch cards, or tiered VIP programs. Choose what works best for your business.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col items-start p-6 bg-gray-50 rounded-lg">
                <div className="p-3 rounded-full bg-blue-100">
                  <Star className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="mt-5 text-lg font-medium text-gray-900">Custom Rewards</h3>
                <p className="mt-2 text-base text-gray-500">
                  Create custom rewards that match your brand and delight your customers.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col items-start p-6 bg-gray-50 rounded-lg">
                <div className="p-3 rounded-full bg-blue-100">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="mt-5 text-lg font-medium text-gray-900">Customer Management</h3>
                <p className="mt-2 text-base text-gray-500">
                  Track customer activity, manage points, and see detailed customer profiles.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="flex flex-col items-start p-6 bg-gray-50 rounded-lg">
                <div className="p-3 rounded-full bg-blue-100">
                  <ShoppingBag className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="mt-5 text-lg font-medium text-gray-900">Easy Transactions</h3>
                <p className="mt-2 text-base text-gray-500">
                  Record purchases and redeem rewards with our simple point-of-sale interface.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="flex flex-col items-start p-6 bg-gray-50 rounded-lg">
                <div className="p-3 rounded-full bg-blue-100">
                  <Trophy className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="mt-5 text-lg font-medium text-gray-900">Analytics & Reporting</h3>
                <p className="mt-2 text-base text-gray-500">
                  Measure program performance with detailed reports and insights.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="flex flex-col items-start p-6 bg-gray-50 rounded-lg">
                <div className="p-3 rounded-full bg-blue-100">
                  <CircleUser className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="mt-5 text-lg font-medium text-gray-900">Customer Portal</h3>
                <p className="mt-2 text-base text-gray-500">
                  Give customers access to their points, rewards, and transaction history.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing section */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Pricing</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Simple, transparent pricing
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Start with our free plan and upgrade as your business grows.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Free plan */}
            <div className="border border-gray-200 rounded-lg shadow-sm bg-white overflow-hidden">
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">Free</h3>
                <p className="mt-4 text-sm text-gray-500">Perfect for trying out LoyaltyLoop</p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">$0</span>
                  <span className="text-base font-medium text-gray-500">/month</span>
                </p>
                <Link to="/register" className="mt-8 block w-full">
                  <Button variant="outline" fullWidth>
                    Get started
                  </Button>
                </Link>
              </div>
              <div className="px-6 pt-6 pb-8">
                <h4 className="text-sm font-medium text-gray-900 tracking-wide">What's included:</h4>
                <ul className="mt-6 space-y-4">
                  <li className="flex space-x-3">
                    <ChevronRight className="flex-shrink-0 h-5 w-5 text-green-500" />
                    <span className="text-sm text-gray-500">Up to 100 customers</span>
                  </li>
                  <li className="flex space-x-3">
                    <ChevronRight className="flex-shrink-0 h-5 w-5 text-green-500" />
                    <span className="text-sm text-gray-500">Basic loyalty program</span>
                  </li>
                  <li className="flex space-x-3">
                    <ChevronRight className="flex-shrink-0 h-5 w-5 text-green-500" />
                    <span className="text-sm text-gray-500">Customer management</span>
                  </li>
                  <li className="flex space-x-3">
                    <ChevronRight className="flex-shrink-0 h-5 w-5 text-green-500" />
                    <span className="text-sm text-gray-500">Email support</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Basic plan */}
            <div className="border border-blue-500 rounded-lg shadow-sm bg-white overflow-hidden">
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">Basic</h3>
                <p className="mt-4 text-sm text-gray-500">For small businesses ready to grow</p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">$20</span>
                  <span className="text-base font-medium text-gray-500">/month</span>
                </p>
                <Link to="/register" className="mt-8 block w-full">
                  <Button variant="primary" fullWidth>
                    Get started
                  </Button>
                </Link>
              </div>
              <div className="px-6 pt-6 pb-8">
                <h4 className="text-sm font-medium text-gray-900 tracking-wide">What's included:</h4>
                <ul className="mt-6 space-y-4">
                  <li className="flex space-x-3">
                    <ChevronRight className="flex-shrink-0 h-5 w-5 text-green-500" />
                    <span className="text-sm text-gray-500">Up to 500 customers</span>
                  </li>
                  <li className="flex space-x-3">
                    <ChevronRight className="flex-shrink-0 h-5 w-5 text-green-500" />
                    <span className="text-sm text-gray-500">All program types</span>
                  </li>
                  <li className="flex space-x-3">
                    <ChevronRight className="flex-shrink-0 h-5 w-5 text-green-500" />
                    <span className="text-sm text-gray-500">Custom branding</span>
                  </li>
                  <li className="flex space-x-3">
                    <ChevronRight className="flex-shrink-0 h-5 w-5 text-green-500" />
                    <span className="text-sm text-gray-500">Email campaigns</span>
                  </li>
                  <li className="flex space-x-3">
                    <ChevronRight className="flex-shrink-0 h-5 w-5 text-green-500" />
                    <span className="text-sm text-gray-500">Basic analytics</span>
                  </li>
                  <li className="flex space-x-3">
                    <ChevronRight className="flex-shrink-0 h-5 w-5 text-green-500" />
                    <span className="text-sm text-gray-500">Priority email support</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Premium plan */}
            <div className="border border-gray-200 rounded-lg shadow-sm bg-white overflow-hidden">
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">Premium</h3>
                <p className="mt-4 text-sm text-gray-500">For established businesses</p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">$45</span>
                  <span className="text-base font-medium text-gray-500">/month</span>
                </p>
                <Link to="/register" className="mt-8 block w-full">
                  <Button variant="outline" fullWidth>
                    Get started
                  </Button>
                </Link>
              </div>
              <div className="px-6 pt-6 pb-8">
                <h4 className="text-sm font-medium text-gray-900 tracking-wide">Everything in Basic, plus:</h4>
                <ul className="mt-6 space-y-4">
                  <li className="flex space-x-3">
                    <ChevronRight className="flex-shrink-0 h-5 w-5 text-green-500" />
                    <span className="text-sm text-gray-500">Up to 2,000 customers</span>
                  </li>
                  <li className="flex space-x-3">
                    <ChevronRight className="flex-shrink-0 h-5 w-5 text-green-500" />
                    <span className="text-sm text-gray-500">SMS notifications</span>
                  </li>
                  <li className="flex space-x-3">
                    <ChevronRight className="flex-shrink-0 h-5 w-5 text-green-500" />
                    <span className="text-sm text-gray-500">Advanced analytics</span>
                  </li>
                  <li className="flex space-x-3">
                    <ChevronRight className="flex-shrink-0 h-5 w-5 text-green-500" />
                    <span className="text-sm text-gray-500">Multi-location support</span>
                  </li>
                  <li className="flex space-x-3">
                    <ChevronRight className="flex-shrink-0 h-5 w-5 text-green-500" />
                    <span className="text-sm text-gray-500">API access</span>
                  </li>
                  <li className="flex space-x-3">
                    <ChevronRight className="flex-shrink-0 h-5 w-5 text-green-500" />
                    <span className="text-sm text-gray-500">Phone & email support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="bg-blue-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to boost your business?</span>
            <span className="block text-amber-400">Start your free trial today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link to="/register">
                <Button variant="secondary" size="lg">
                  Get started
                </Button>
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Link to="/login">
                <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-blue-700">
                  Log in
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
          <nav className="flex flex-wrap justify-center">
            <div className="px-5 py-2">
              <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                About
              </a>
            </div>
            <div className="px-5 py-2">
              <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                Features
              </a>
            </div>
            <div className="px-5 py-2">
              <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                Pricing
              </a>
            </div>
            <div className="px-5 py-2">
              <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                FAQ
              </a>
            </div>
            <div className="px-5 py-2">
              <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                Contact
              </a>
            </div>
          </nav>
          <p className="mt-8 text-center text-base text-gray-500">
            &copy; 2025 LoyaltyLoop. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;