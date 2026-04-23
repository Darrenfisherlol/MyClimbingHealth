import React from 'react'
import { createContext, useContext, useState } from "react";

interface AuthUser {
    userId: number;
    role: 'pt' | 'patient';
    token: string;
}

interface AuthContextType {
    user: AuthUser | null;
    login: (email: string, password: string) => Promise<AuthUser>;
    logout: () => void;
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuth must be used within an AuthProvider');
    return context;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {

    const [user, setUser] = useState<AuthUser | null>(() => {
        try {
            const stored = localStorage.getItem('auth');
            return stored ? JSON.parse(stored) : null;
        } catch {
            return null;
        }
    });

    const login = async (email: string, password: string): Promise<AuthUser> => {

        // nav to pt if we include pt in email ~ mid testing i know
        const mockUser: AuthUser = {
            userId: 1,
            role: email.includes('pt') ? 'pt' : 'patient',
            token: 'mock-token-123',
        };
        setUser(mockUser);
        localStorage.setItem('auth', JSON.stringify(mockUser));
        return mockUser;


        // will use Axios or SWR or tanStackQUery

        const res = await fetch('/auth/login/routeForLogInNotYetSet');

        if (!res.ok) {
            throw new Error('Login failed');
        }

        // we'll want to save the
        // userId for queries
        // role for routes
        // token 4... token / auth
        const data = await res.json();

        if (!data || !data.token || !data.role || !data.userId) {
            throw new Error('Invalid auth response');
        }

        setUser(data);
        localStorage.setItem('auth', JSON.stringify(data));

        return data;
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('auth');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

