import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, ArcElement, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { PlusCircle, Users, CreditCard, BadgeDollarSign, TrendingUp } from 'lucide-react';
import { useBusiness } from '../../hooks/useBusiness';
import { formatDistanceToNow } from 'date-fns';

import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';

// Register Chart.js components
Chart.register(CategoryScale, LinearScale, BarElement, ArcElement, PointElement, LineElement, Title, Tooltip, Legend);

const Dashboard: React.FC = () => {
  const { business } = useBusiness();
  const [activityFeed, setActivityFeed] = useState<Array<{type: string; message: string; time: string}>>([]);

  useEffect(() => {
    // Mock activity feed data
    const mockActivityFeed = [
      { type: 'customer', message: 'New customer joined: Sarah Johnson', time: '2 hours ago' },
      { type: 'transaction', message: 'Purchase: John Doe earned 120 points', time: '4 hours ago' },
      { type: 'redemption', message: 'Reward redeemed: Free Coffee by Amy Smith', time: '1 day ago' },
      { type: 'customer', message: 'New customer joined: Mike Robinson', time: '2 days ago' },
      { type: 'transaction', message: 'Purchase: Lisa Wang earned 85 points', time: '3 days ago' },
    ];
    
    setActivityFeed(mockActivityFeed);
  }, []);

  // Mock chart data
  const pointsChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Points Issued',
        data: [1200, 1900, 1500, 2500, 2200, 3000],
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 1,
      },
      {
        label: 'Points Redeemed',
        data: [900, 1200, 1100, 1700, 1800, 2100],
        backgroundColor: 'rgba(245, 158, 11, 0.5)',
        borderColor: 'rgba(245, 158, 11, 1)',
        borderWidth: 1,
      },
    ],
  };

  const customerChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'New Customers',
        data: [25, 35, 40, 50, 65, 75],
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
        fill: false,
      },
      {
        label: 'Active Customers',
        data: [20, 25, 30, 45, 55, 70],
        borderColor: 'rgb(153, 102, 255)',
        tension: 0.1,
        fill: false,
      },
    ],
  };

  const programDistribution = {
    labels: ['Points Program', 'Punch Card', 'VIP Tiers'],
    datasets: [
      {
        data: [65, 25, 10],
        backgroundColor: [
          'rgba(59, 130, 246, 0.7)',
          'rgba(245, 158, 11, 0.7)',
          'rgba(16, 185, 129, 0.7)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="mt-1 text-sm text-gray-500">Overview of your loyalty program performance</p>
        </div>
        <div className="mt-4 md:mt-0">
          <Link to="/dashboard/programs">
            <Button 
              variant="primary"
              leftIcon={<PlusCircle className="h-5 w-5" />}
            >
              Create Program
            </Button>
          </Link>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="flex flex-col">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Total Members</p>
              <p className="mt-1 text-3xl font-semibold text-blue-600">{business?.metrics.totalMembers || 0}</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-full">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <div className="flex items-center text-green-500">
              <TrendingUp className="h-4 w-4 mr-1" />
              <span>12% increase</span>
            </div>
            <span className="text-gray-500 ml-2">vs last month</span>
          </div>
        </Card>

        <Card className="flex flex-col">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Active Members</p>
              <p className="mt-1 text-3xl font-semibold text-amber-500">{business?.metrics.activeMembers || 0}</p>
            </div>
            <div className="p-3 bg-amber-100 rounded-full">
              <Users className="h-6 w-6 text-amber-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <div className="flex items-center text-green-500">
              <TrendingUp className="h-4 w-4 mr-1" />
              <span>8% increase</span>
            </div>
            <span className="text-gray-500 ml-2">vs last month</span>
          </div>
        </Card>

        <Card className="flex flex-col">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Points Issued</p>
              <p className="mt-1 text-3xl font-semibold text-green-600">{business?.metrics.pointsIssued.toLocaleString() || 0}</p>
            </div>
            <div className="p-3 bg-green-100 rounded-full">
              <CreditCard className="h-6 w-6 text-green-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <div className="flex items-center text-green-500">
              <TrendingUp className="h-4 w-4 mr-1" />
              <span>16% increase</span>
            </div>
            <span className="text-gray-500 ml-2">vs last month</span>
          </div>
        </Card>

        <Card className="flex flex-col">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Average Order</p>
              <p className="mt-1 text-3xl font-semibold text-indigo-600">${business?.metrics.averageOrderValue || 0}</p>
            </div>
            <div className="p-3 bg-indigo-100 rounded-full">
              <BadgeDollarSign className="h-6 w-6 text-indigo-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <div className="flex items-center text-green-500">
              <TrendingUp className="h-4 w-4 mr-1" />
              <span>5% increase</span>
            </div>
            <span className="text-gray-500 ml-2">vs last month</span>
          </div>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <Card title="Points Activity" className="lg:col-span-2">
          <div className="h-80">
            <Bar 
              data={pointsChartData} 
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: 'top',
                  },
                },
                scales: {
                  y: {
                    beginAtZero: true,
                  },
                },
              }} 
            />
          </div>
        </Card>

        <Card title="Program Distribution">
          <div className="h-80 flex items-center justify-center">
            <Doughnut 
              data={programDistribution} 
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: 'bottom',
                  },
                },
              }} 
            />
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card title="Customer Growth" className="h-96">
          <div className="h-80">
            <Line 
              data={customerChartData} 
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: 'top',
                  },
                },
                scales: {
                  y: {
                    beginAtZero: true,
                  },
                },
              }} 
            />
          </div>
        </Card>

        <Card title="Recent Activity" className="h-96">
          <div className="overflow-y-auto" style={{ maxHeight: '320px' }}>
            <ul className="divide-y divide-gray-200">
              {activityFeed.map((activity, index) => (
                <li key={index} className="py-4">
                  <div className="flex items-start">
                    <div className={`p-2 rounded-full mr-4 ${
                      activity.type === 'customer' 
                        ? 'bg-blue-100' 
                        : activity.type === 'transaction' 
                        ? 'bg-green-100' 
                        : 'bg-amber-100'
                    }`}>
                      {activity.type === 'customer' && <Users className="h-5 w-5 text-blue-600" />}
                      {activity.type === 'transaction' && <CreditCard className="h-5 w-5 text-green-600" />}
                      {activity.type === 'redemption' && <BadgeDollarSign className="h-5 w-5 text-amber-600" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {activity.message}
                      </p>
                      <p className="text-sm text-gray-500">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;