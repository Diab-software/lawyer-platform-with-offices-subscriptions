
import React, { createContext, useContext, useState, useEffect } from 'react';

export type UserRole = 'lawyer' | 'trainee' | 'client' | 'admin';

export interface User {
  id: string;
  email: string;
  role: UserRole;
  name: string;
  verified: boolean;
  subscriptionActive?: boolean;
  subscriptionAmount?: number;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  register: (email: string, password: string, role: UserRole, name: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Check for existing session
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    // TODO: Implement login logic
    console.log('Login:', email, password);
  };

  const logout = async () => {
    // TODO: Implement logout logic
    setUser(null);
  };

  const register = async (email: string, password: string, role: UserRole, name: string) => {
    // TODO: Implement registration logic
    console.log('Register:', email, password, role, name);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};