import { createContext, useEffect, useState, ReactNode } from "react";
import api from "../services/api";

interface User {
  id: number;
  username: string;
  email: string;
  name: string;
}

interface AuthContextData {
  user: User | null;
  loading: boolean;
  login: (token: string) => Promise<void>;
  logout: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextData | undefined>(undefined);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

    useEffect(() => {
    async function loadUser() {
        const token = localStorage.getItem("token");

        if (token) {
        try {
            const response = await api.get<User>("/usuarios/me");
            setUser(response.data);
        } catch (error) {
            localStorage.removeItem("token");
            setUser(null);
        }
        }

        setLoading(false);
    }

    loadUser();
    }, []);

    function logout() {
        localStorage.removeItem("token");
        setUser(null);
    }

    async function login(token: string) {
        localStorage.setItem("token", token);

        const response = await api.get<User>("/usuarios/me");

        setUser(response.data);
    }

  return (
    <AuthContext.Provider value={{ user, loading, logout, login }}>
      {children}
    </AuthContext.Provider>
  );
}