import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { 
  signOut,
  onAuthStateChanged,
  User as FirebaseUser,
  Auth
} from 'firebase/auth';
import { auth } from '../services/firebase';

type UserRole = 'owner' | 'staff' | 'customer' | 'admin';

// Extend the FirebaseUser type with our custom properties
interface User extends Omit<FirebaseUser, 'delete' | 'getIdToken' | 'getIdTokenResult' | 'reload' | 'toJSON'> {
  role?: UserRole;
  businessId?: string;
  isSetupComplete?: boolean;
  delete: () => Promise<void>;
  getIdToken: (forceRefresh?: boolean) => Promise<string>;
  getIdTokenResult: (forceRefresh?: boolean) => Promise<any>;
  reload: () => Promise<void>;
  toJSON: () => object;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  loginAsRole: (role: UserRole) => Promise<void>;
  logout: () => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  bypassLogin: boolean;
  setBypassLogin: (value: boolean) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock user for bypass login
const createMockUser = (role: UserRole = 'owner'): User => {
  return {
    uid: `mock-user-${role}-${Date.now()}`,
    email: `mock-${role}@example.com`,
    displayName: `Mock ${role.charAt(0).toUpperCase() + role.slice(1)}`,
    emailVerified: true,
    isAnonymous: false,
    role: role,
    businessId: 'mock-business-id',
    isSetupComplete: true,
    metadata: {
      creationTime: new Date().toISOString(),
      lastSignInTime: new Date().toISOString()
    },
    providerData: [],
    refreshToken: 'mock-refresh-token',
    tenantId: null,
    phoneNumber: null,
    photoURL: null,
    providerId: 'password',
    delete: async () => {},
    getIdToken: async () => 'mock-id-token',
    getIdTokenResult: async () => ({
      token: 'mock-token',
      signInProvider: 'password',
      expirationTime: new Date(Date.now() + 3600000).toISOString(),
      issuedAtTime: new Date().toISOString(),
      authTime: new Date().toISOString(),
      claims: { role }
    }),
    reload: async () => {},
    toJSON: () => ({})
  };
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [bypassLogin, setBypassLogin] = useState(localStorage.getItem('bypassLogin') === 'true');

  useEffect(() => {
    if (bypassLogin) {
      const storedRole = localStorage.getItem('userRole') || 'owner';
      setUser(createMockUser(storedRole as UserRole));
      setLoading(false);
      return () => {};
    }
    
    const typedAuth = auth as Auth;
    const unsubscribe = onAuthStateChanged(typedAuth, (currentUser) => {
      if (currentUser) {
        // In a real app, you would fetch additional user data from your database
        const extendedUser = currentUser as User;
        // Mock setup status - in real app would come from database
        extendedUser.isSetupComplete = localStorage.getItem('setupComplete') === 'true';
        extendedUser.role = localStorage.getItem('userRole') as UserRole || 'owner'; // Default role
        setUser(extendedUser);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, [bypassLogin]);

  useEffect(() => {
    localStorage.setItem('bypassLogin', bypassLogin.toString());
  }, [bypassLogin]);

  const login = async (email: string, password: string) => {
    if (bypassLogin) {
      setUser(createMockUser('owner'));
      return;
    }
    // Normal login logic would go here
  };

  const loginAsRole = async (role: UserRole) => {
    localStorage.setItem('userRole', role);
    setUser(createMockUser(role));
  };

  const logout = async () => {
    if (bypassLogin) {
      setUser(null);
      return;
    }
    const typedAuth = auth as Auth;
    await signOut(typedAuth);
  };

  const register = async (email: string, password: string) => {
    if (bypassLogin) {
      setUser(createMockUser('owner'));
      return;
    }
    // Normal register logic would go here
  };

  const resetPassword = async (email: string) => {
    // Mock implementation when bypassing
    if (bypassLogin) {
      console.log('Password reset bypassed for:', email);
      return;
    }
    // Normal reset logic would go here
  };

  const value = {
    user,
    loading,
    login,
    loginAsRole,
    logout,
    register,
    resetPassword,
    bypassLogin,
    setBypassLogin
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
};