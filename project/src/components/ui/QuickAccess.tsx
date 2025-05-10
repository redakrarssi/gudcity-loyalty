import AccessDashboardButton from './AccessDashboardButton';

export default function QuickAccess() {
  return (
    <div className="p-6 border border-gray-200 rounded-lg bg-white shadow-sm">
      <h2 className="text-xl font-bold mb-4">Quick Access (Development Mode)</h2>
      <p className="text-gray-600 mb-4">Access any dashboard without login credentials</p>
      
      <div className="space-y-4">
        <div>
          <h3 className="font-medium mb-2">Business Owner</h3>
          <div className="grid grid-cols-2 gap-2">
            <AccessDashboardButton 
              label="Dashboard" 
              route="/dashboard" 
              role="owner" 
            />
            <AccessDashboardButton 
              label="Programs" 
              route="/dashboard/programs" 
              role="owner" 
            />
            <AccessDashboardButton 
              label="Customers" 
              route="/dashboard/customers" 
              role="owner" 
            />
            <AccessDashboardButton 
              label="Transactions" 
              route="/dashboard/transactions" 
              role="owner" 
            />
            <AccessDashboardButton 
              label="Reports" 
              route="/dashboard/reports" 
              role="owner" 
            />
            <AccessDashboardButton 
              label="Settings" 
              route="/dashboard/settings" 
              role="owner" 
            />
          </div>
        </div>
        
        <div>
          <h3 className="font-medium mb-2">Customer Portal</h3>
          <div className="grid grid-cols-2 gap-2">
            <AccessDashboardButton 
              label="Customer Portal" 
              route="/portal" 
              role="customer" 
            />
            <AccessDashboardButton 
              label="Rewards" 
              route="/portal/rewards" 
              role="customer" 
            />
            <AccessDashboardButton 
              label="Profile" 
              route="/portal/profile" 
              role="customer" 
            />
          </div>
        </div>
        
        <div>
          <h3 className="font-medium mb-2">Admin</h3>
          <div className="grid grid-cols-2 gap-2">
            <AccessDashboardButton 
              label="Admin Dashboard" 
              route="/admin" 
              role="admin" 
            />
          </div>
        </div>
      </div>
    </div>
  );
} 