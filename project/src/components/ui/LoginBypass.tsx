import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export default function LoginBypass() {
  const { bypassLogin, setBypassLogin, loginAsRole } = useAuth();
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  const handleBypassToggle = () => {
    setBypassLogin(!bypassLogin);
  };

  const login = async (role: 'owner' | 'customer' | 'staff' | 'admin') => {
    await loginAsRole(role);
    let redirectPath = '/';
    
    switch(role) {
      case 'owner':
        redirectPath = '/dashboard';
        break;
      case 'customer':
        redirectPath = '/portal';
        break;
      case 'admin':
        redirectPath = '/admin';
        break;
      case 'staff':
        redirectPath = '/dashboard';
        break;
    }
    
    navigate(redirectPath);
  };

  return (
    <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="bypass-login"
            checked={bypassLogin}
            onChange={handleBypassToggle}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
          />
          <label htmlFor="bypass-login" className="ml-2 text-sm font-medium text-gray-900">
            Development Mode: Bypass Authentication
          </label>
        </div>
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-sm text-blue-600 hover:underline"
        >
          {expanded ? 'Hide Options' : 'Show Options'}
        </button>
      </div>
      
      {expanded && bypassLogin && (
        <div className="mt-4 grid grid-cols-2 gap-2">
          <button
            onClick={() => login('owner')}
            className="py-2 px-4 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Login as Business Owner
          </button>
          <button
            onClick={() => login('customer')}
            className="py-2 px-4 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-300"
          >
            Login as Customer
          </button>
          <button
            onClick={() => login('staff')}
            className="py-2 px-4 text-sm font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-300"
          >
            Login as Staff
          </button>
          <button
            onClick={() => login('admin')}
            className="py-2 px-4 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300"
          >
            Login as Admin
          </button>
        </div>
      )}
    </div>
  );
} 