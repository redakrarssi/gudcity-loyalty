import React from 'react';
import { Card } from '../../components/ui/Card';
import { BarChart, LineChart, PieChart } from 'lucide-react';
import { Bar, Line } from 'react-chartjs-2';

const AdminDashboard: React.FC = () => {
  // Sample data for charts
  const businessGrowthData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'New Businesses',
        data: [12, 19, 15, 25, 22, 30],
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
      },
    ],
  };

  const revenueData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Monthly Revenue',
        data: [15000, 17500, 21000, 24000, 25500, 28000],
        backgroundColor: 'rgba(34, 197, 94, 0.5)',
      },
    ],
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">System Overview</h1>
        <p className="mt-1 text-sm text-gray-500">Monitor platform performance and metrics</p>
      </div>

      {/* Quick stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <Card>
          <div className="p-6">
            <div className="flex items-center">
              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-900">Total Businesses</h3>
                <p className="text-3xl font-bold text-blue-600">1,234</p>
              </div>
              <div className="bg-blue-100 rounded-full p-3">
                <Building2 className="h-6 w-6 text-blue-600" />
              </div>
            </div>
            <p className="mt-2 text-sm text-gray-600">+12% from last month</p>
          </div>
        </Card>

        <Card>
          <div className="p-6">
            <div className="flex items-center">
              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-900">Active Users</h3>
                <p className="text-3xl font-bold text-green-600">45.2K</p>
              </div>
              <div className="bg-green-100 rounded-full p-3">
                <Users className="h-6 w-6 text-green-600" />
              </div>
            </div>
            <p className="mt-2 text-sm text-gray-600">+8% from last month</p>
          </div>
        </Card>

        <Card>
          <div className="p-6">
            <div className="flex items-center">
              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-900">Monthly Revenue</h3>
                <p className="text-3xl font-bold text-purple-600">$28.5K</p>
              </div>
              <div className="bg-purple-100 rounded-full p-3">
                <DollarSign className="h-6 w-6 text-purple-600" />
              </div>
            </div>
            <p className="mt-2 text-sm text-gray-600">+15% from last month</p>
          </div>
        </Card>

        <Card>
          <div className="p-6">
            <div className="flex items-center">
              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-900">System Health</h3>
                <p className="text-3xl font-bold text-emerald-600">99.9%</p>
              </div>
              <div className="bg-emerald-100 rounded-full p-3">
                <Activity className="h-6 w-6 text-emerald-600" />
              </div>
            </div>
            <p className="mt-2 text-sm text-gray-600">All systems operational</p>
          </div>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <Card>
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">Business Growth</h3>
              <LineChart className="h-5 w-5 text-gray-400" />
            </div>
            <Line
              data={businessGrowthData}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: 'bottom' as const,
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

        <Card>
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">Revenue Overview</h3>
              <BarChart className="h-5 w-5 text-gray-400" />
            </div>
            <Bar
              data={revenueData}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: 'bottom' as const,
                  },
                },
                scales: {
                  y: {
                    beginAtZero: true,
                    ticks: {
                      callback: (value) => `$${value}`,
                    },
                  },
                },
              }}
            />
          </div>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <div className="p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[
              {
                type: 'business',
                message: 'New business registered: Coffee Haven',
                time: '5 minutes ago',
              },
              {
                type: 'user',
                message: 'User reported issue with points calculation',
                time: '23 minutes ago',
              },
              {
                type: 'system',
                message: 'System update completed successfully',
                time: '1 hour ago',
              },
              {
                type: 'business',
                message: 'Business subscription upgraded: Tea Time',
                time: '2 hours ago',
              },
            ].map((activity, index) => (
              <div key={index} className="flex items-start">
                <div
                  className={`p-2 rounded-full mr-3 ${
                    activity.type === 'business'
                      ? 'bg-blue-100'
                      : activity.type === 'user'
                      ? 'bg-green-100'
                      : 'bg-purple-100'
                  }`}
                >
                  {activity.type === 'business' ? (
                    <Building2 className="h-5 w-5 text-blue-600" />
                  ) : activity.type === 'user' ? (
                    <Users className="h-5 w-5 text-green-600" />
                  ) : (
                    <Settings className="h-5 w-5 text-purple-600" />
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{activity.message}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AdminDashboard;