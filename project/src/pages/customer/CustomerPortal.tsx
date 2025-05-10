import React from 'react';
import { Link } from 'react-router-dom';
import { CreditCard, Gift, CircleUser, ArrowRight, Calendar, BarChart3 } from 'lucide-react';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';

const CustomerPortal: React.FC = () => {
  // Mock customer data
  const customer = {
    name: 'Sarah Johnson',
    email: 'sarah@example.com',
    points: 450,
    level: 'Silver',
    memberSince: 'June 2024',
    nextReward: 500,
    progress: 90, // 90% to next reward
    transactions: [
      { id: 1, date: 'Jul 15, 2024', type: 'Purchase', amount: 24.50, points: 122 },
      { id: 2, date: 'Jul 8, 2024', type: 'Purchase', amount: 18.75, points: 93 },
      { id: 3, date: 'Jul 1, 2024', type: 'Redemption', amount: 0, points: -100 },
      { id: 4, date: 'Jun 25, 2024', type: 'Purchase', amount: 32.40, points: 162 },
    ]
  };
  
  // Mock available rewards
  const availableRewards = [
    { id: 1, name: 'Free Coffee', points: 100, expires: 'Never' },
    { id: 2, name: '$5 Off Next Purchase', points: 250, expires: 'Never' },
    { id: 3, name: 'Free Pastry', points: 150, expires: 'Never' },
    { id: 4, name: '25% Off Any Item', points: 400, expires: 'Never' },
  ];
  
  return (
    <div className="px-4 py-6 sm:px-0">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">Welcome, {customer.name}</h1>
        <p className="text-sm text-gray-600">Member since {customer.memberSince}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Points Card */}
        <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-lg font-medium text-white opacity-90">Your Points</h3>
              <p className="text-3xl font-bold">{customer.points}</p>
            </div>
            <div className="p-2 bg-white/20 rounded-full">
              <CreditCard className="h-6 w-6 text-white" />
            </div>
          </div>
          
          <div className="mb-2 flex justify-between text-sm">
            <span>Progress to next tier</span>
            <span>{customer.level} → Gold</span>
          </div>
          
          <div className="w-full bg-white/20 rounded-full h-2.5 mb-4">
            <div className="bg-white h-2.5 rounded-full" style={{ width: `${customer.progress}%` }}></div>
          </div>
          
          <div className="text-sm opacity-90">
            {500 - customer.points} more points to reach Gold status
          </div>
        </Card>
        
        {/* Next Reward Card */}
        <Card>
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-lg font-medium text-gray-900">Next Reward</h3>
              <p className="text-gray-600">You're almost there!</p>
            </div>
            <div className="p-2 bg-amber-100 rounded-full">
              <Gift className="h-6 w-6 text-amber-600" />
            </div>
          </div>
          
          <div className="mb-2 flex justify-between text-sm">
            <span className="text-gray-600">$5 Off Next Purchase</span>
            <span className="font-medium">{customer.points}/250 pts</span>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
            <div 
              className="bg-amber-500 h-2.5 rounded-full" 
              style={{ width: `${Math.min(100, (customer.points / 250) * 100)}%` }}
            ></div>
          </div>
          
          <Link to="/portal/rewards">
            <Button variant="outline" size="sm" fullWidth rightIcon={<ArrowRight className="h-4 w-4" />}>
              View All Rewards
            </Button>
          </Link>
        </Card>
        
        {/* Member Status Card */}
        <Card>
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-lg font-medium text-gray-900">Member Status</h3>
              <p className="text-gray-600">Coffee Haven</p>
            </div>
            <div className="p-2 bg-blue-100 rounded-full">
              <CircleUser className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          
          <div className="px-3 py-1 inline-block bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            {customer.level} Member
          </div>
          
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-center">
              <Check className="h-4 w-4 text-green-500 mr-2" /> 
              5 points per dollar spent
            </li>
            <li className="flex items-center">
              <Check className="h-4 w-4 text-green-500 mr-2" /> 
              Birthday reward
            </li>
            <li className="flex items-center">
              <Check className="h-4 w-4 text-green-500 mr-2" /> 
              Silver exclusive offers
            </li>
          </ul>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Transactions */}
        <Card title="Recent Activity" className="lg:col-span-2">
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Points
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {customer.transactions.map((transaction) => (
                  <tr key={transaction.id}>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                      {transaction.date}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        transaction.type === 'Purchase' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {transaction.type}
                      </span>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                      {transaction.amount > 0 ? `$${transaction.amount.toFixed(2)}` : '-'}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm font-medium">
                      <span className={transaction.points > 0 ? 'text-green-600' : 'text-blue-600'}>
                        {transaction.points > 0 ? '+' : ''}{transaction.points}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="pt-4 border-t border-gray-200 mt-4 text-right">
            <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-500">
              View all activity
            </a>
          </div>
        </Card>
        
        {/* Available Rewards */}
        <Card title="Available Rewards">
          <ul className="divide-y divide-gray-200">
            {availableRewards.map((reward) => (
              <li key={reward.id} className="py-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">{reward.name}</h4>
                    <p className="text-xs text-gray-500">Expires: {reward.expires}</p>
                  </div>
                  <span className="text-sm font-medium text-gray-900">{reward.points} pts</span>
                </div>
                {customer.points >= reward.points && (
                  <button className="mt-2 text-sm font-medium text-blue-600 hover:text-blue-500">
                    Redeem →
                  </button>
                )}
              </li>
            ))}
          </ul>
          <div className="pt-4 border-t border-gray-200 mt-4 text-right">
            <Link to="/portal/rewards" className="text-sm font-medium text-blue-600 hover:text-blue-500">
              View all rewards
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

// Simple check icon component
const Check: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

export default CustomerPortal;