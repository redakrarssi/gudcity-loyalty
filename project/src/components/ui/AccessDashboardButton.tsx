import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

interface AccessDashboardButtonProps {
  label: string;
  route: string;
  role: 'owner' | 'customer' | 'staff' | 'admin';
  className?: string;
}

export default function AccessDashboardButton({
  label,
  route,
  role,
  className = '',
}: AccessDashboardButtonProps) {
  const { loginAsRole } = useAuth();
  const navigate = useNavigate();

  const handleAccess = async () => {
    await loginAsRole(role);
    navigate(route);
  };

  return (
    <button
      onClick={handleAccess}
      className={`py-2 px-4 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 ${className}`}
    >
      {label}
    </button>
  );
} 