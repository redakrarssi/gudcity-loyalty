import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useAuth } from '../hooks/useAuth';

export interface LoyaltyProgram {
  id: string;
  name: string;
  type: 'points' | 'punchcard' | 'tiered';
  description: string;
  rules: {
    pointsPerDollar?: number;
    punchesNeeded?: number;
    tiers?: { name: string; threshold: number; benefits: string[] }[];
  };
  active: boolean;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  dateJoined: string;
  points: number;
  visits: number;
  totalSpent: number;
  lastVisit: string;
}

export interface Transaction {
  id: string;
  customerId: string;
  customerName: string;
  date: string;
  amount: number;
  pointsEarned: number;
  type: 'purchase' | 'redemption';
}

export interface Reward {
  id: string;
  name: string;
  description: string;
  pointsCost: number;
  active: boolean;
}

export interface Business {
  id: string;
  name: string;
  logo: string;
  primaryColor: string;
  secondaryColor: string;
  industry: string;
  programs: LoyaltyProgram[];
  customers: Customer[];
  transactions: Transaction[];
  rewards: Reward[];
  metrics: {
    totalMembers: number;
    activeMembers: number;
    pointsIssued: number;
    pointsRedeemed: number;
    repeatRate: number;
    averageOrderValue: number;
  };
}

// Types for mock data
export type MockDataProp = 'programs' | 'customers' | 'transactions' | 'rewards';

interface BusinessContextType {
  business: Business | null;
  loading: boolean;
  saveBusiness: (data: Partial<Business>) => void;
  addProgram: (program: LoyaltyProgram) => void;
  addCustomer: (customer: Customer) => void;
  addTransaction: (transaction: Transaction) => void;
  addReward: (reward: Reward) => void;
}

const BusinessContext = createContext<BusinessContextType | undefined>(undefined);

export function BusinessProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const [business, setBusiness] = useState<Business | null>(null);
  const [loading, setLoading] = useState(true);

  // Load initial business data
  useEffect(() => {
    if (user) {
      // In a real app, this would be a database call
      const mockBusiness: Business = {
        id: "business-1",
        name: "Coffee Haven",
        logo: "https://placehold.co/100x100.png",
        primaryColor: "#0F52BA",
        secondaryColor: "#FFD700",
        industry: "Food & Beverage",
        programs: [],
        customers: [],
        transactions: [],
        rewards: [],
        metrics: {
          totalMembers: 0,
          activeMembers: 0,
          pointsIssued: 0,
          pointsRedeemed: 0,
          repeatRate: 0,
          averageOrderValue: 0
        }
      };
      
      setBusiness(mockBusiness);
      setLoading(false);
    } else {
      setBusiness(null);
      setLoading(false);
    }
  }, [user]);

  // Mock data functions to simulate database operations
  const saveBusiness = (data: Partial<Business>) => {
    setBusiness(prev => prev ? { ...prev, ...data } : null);
  };

  const addProgram = (program: LoyaltyProgram) => {
    setBusiness(prev => {
      if (!prev) return null;
      return {
        ...prev,
        programs: [...prev.programs, program],
        metrics: { ...prev.metrics }
      };
    });
  };

  const addCustomer = (customer: Customer) => {
    setBusiness(prev => {
      if (!prev) return null;
      return {
        ...prev,
        customers: [...prev.customers, customer],
        metrics: {
          ...prev.metrics,
          totalMembers: prev.metrics.totalMembers + 1,
          activeMembers: prev.metrics.activeMembers + 1
        }
      };
    });
  };

  const addTransaction = (transaction: Transaction) => {
    setBusiness(prev => {
      if (!prev) return null;
      return {
        ...prev,
        transactions: [...prev.transactions, transaction],
        metrics: {
          ...prev.metrics,
          pointsIssued: prev.metrics.pointsIssued + (transaction.type === 'purchase' ? transaction.pointsEarned : 0),
          pointsRedeemed: prev.metrics.pointsRedeemed + (transaction.type === 'redemption' ? transaction.pointsEarned : 0)
        }
      };
    });
  };

  const addReward = (reward: Reward) => {
    setBusiness(prev => {
      if (!prev) return null;
      return {
        ...prev,
        rewards: [...prev.rewards, reward]
      };
    });
  };

  const value = {
    business,
    loading,
    saveBusiness,
    addProgram,
    addCustomer,
    addTransaction,
    addReward
  };

  return <BusinessContext.Provider value={value}>{children}</BusinessContext.Provider>;
}

export const useBusinessContext = () => {
  const context = useContext(BusinessContext);
  if (context === undefined) {
    throw new Error('useBusinessContext must be used within a BusinessProvider');
  }
  return context;
};