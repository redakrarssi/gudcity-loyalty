import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';
import { lazy, Suspense } from 'react';

// Layouts
import AuthLayout from './layouts/AuthLayout';
import DashboardLayout from './layouts/DashboardLayout';
import CustomerLayout from './layouts/CustomerLayout';
import AdminLayout from './pages/admin/AdminLayout';

// Public pages
import Home from './pages/Home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';
import CustomerLogin from './pages/customer/CustomerLogin';

// Protected pages
import Dashboard from './pages/dashboard/Dashboard';
import Programs from './pages/dashboard/Programs';
import Customers from './pages/dashboard/Customers';
import Transactions from './pages/dashboard/Transactions';
import Reports from './pages/dashboard/Reports';
import Settings from './pages/dashboard/Settings';

// Customer portal
import CustomerPortal from './pages/customer/CustomerPortal';
import CustomerRewards from './pages/customer/CustomerRewards';
import CustomerProfile from './pages/customer/CustomerProfile';

// Admin pages
import AdminDashboard from './pages/admin/AdminDashboard';

// Components
import LoadingScreen from './components/ui/LoadingScreen';
import NotFound from './pages/NotFound';

const SetupWizard = lazy(() => import('./pages/onboarding/SetupWizard'));

function App() {
  const { user, loading, bypassLogin } = useAuth();

  if (loading) {
    return <LoadingScreen />;
  }

  // Helper to determine if route should be accessible
  const canAccess = () => bypassLogin || !!user;

  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<Home />} />
      
      {/* Auth routes */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/customer/login" element={<CustomerLogin />} />
      </Route>
      
      {/* Onboarding */}
      <Route 
        path="/setup" 
        element={
          <Suspense fallback={<LoadingScreen />}>
            {canAccess() ? <SetupWizard /> : <Navigate to="/login" />}
          </Suspense>
        } 
      />
      
      {/* Dashboard routes - protected */}
      <Route 
        element={<DashboardLayout />}
        path="/dashboard"
      >
        <Route index element={canAccess() ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="programs" element={canAccess() ? <Programs /> : <Navigate to="/login" />} />
        <Route path="customers" element={canAccess() ? <Customers /> : <Navigate to="/login" />} />
        <Route path="transactions" element={canAccess() ? <Transactions /> : <Navigate to="/login" />} />
        <Route path="reports" element={canAccess() ? <Reports /> : <Navigate to="/login" />} />
        <Route path="settings" element={canAccess() ? <Settings /> : <Navigate to="/login" />} />
      </Route>
      
      {/* Customer portal */}
      <Route element={<CustomerLayout />} path="/portal">
        <Route index element={canAccess() ? <CustomerPortal /> : <Navigate to="/customer/login" />} />
        <Route path="rewards" element={canAccess() ? <CustomerRewards /> : <Navigate to="/customer/login" />} />
        <Route path="profile" element={canAccess() ? <CustomerProfile /> : <Navigate to="/customer/login" />} />
      </Route>

      {/* Admin routes */}
      <Route element={<AdminLayout />} path="/admin">
        <Route index element={canAccess() ? <AdminDashboard /> : <Navigate to="/login" />} />
      </Route>
      
      {/* 404 and redirects */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;