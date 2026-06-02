import React from "react";
import { createContext, useContext, useState } from "react";
import {
    getProfile,
    login as apiLogin,
    profileRoleToAppRole,
} from "../features/account/accountService";

export interface AuthUser {
    userId: number;
    role: "pt" | "patient";
    token: string;
    email?: string;
    name?: string;
}

interface AuthContextType {
    user: AuthUser | null;
    login: (email: string, password: string) => Promise<AuthUser>;
    establishSession: (accessToken: string) => Promise<AuthUser>;
    logout: () => void;
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used within an AuthProvider");
    return context;
};

export const AuthContext = createContext<AuthContextType | null>(null);

/** MVP test logins — any password; skips API */
/** omg exlude when push to "prod" ~ ther wont be 4 this lol */
/** MVP test logins — any password; skips API */
const TEST_ACCOUNTS: Record<string, { role: "pt" | "patient"; userId: number }> = {
    "test@gmail.com": { role: "patient", userId: 0 },
    "test.patient@gmail.com": { role: "patient", userId: 0 },
    "test.pt@gmail.com": { role: "pt", userId: 0 },
};

function tryTestLogin(email: string): AuthUser | null {
    const account = TEST_ACCOUNTS[email.trim().toLowerCase()];
    if (!account) return null;

    return {
        userId: account.userId,
        role: account.role,
        token: "mock-test-token",
        email: email.trim().toLowerCase(),
        name: "Test User",
    };
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<AuthUser | null>(() => {
        try {
            const stored = localStorage.getItem("auth");
            return stored ? JSON.parse(stored) : null;
        } catch {
            return null;
        }
    });

    const establishSession = async (accessToken: string): Promise<AuthUser> => {
        const profile = await getProfile(accessToken);
        const authUser: AuthUser = {
            userId: profile.userId,
            role: profileRoleToAppRole(profile.role),
            token: accessToken,
            email: profile.email,
            name: profile.name,
        };
        setUser(authUser);
        localStorage.setItem("auth", JSON.stringify(authUser));
        return authUser;
    };

    const login = async (email: string, password: string): Promise<AuthUser> => {
        const testUser = tryTestLogin(email);
        if (testUser) {
            setUser(testUser);
            localStorage.setItem("auth", JSON.stringify(testUser));
            return testUser;
        }

        const { access_token } = await apiLogin(email, password);
        return establishSession(access_token);
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("auth");
    };

    return (
        <AuthContext.Provider value={{ user, login, establishSession, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
