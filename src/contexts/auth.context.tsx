import useLocalStorage from "@/hooks/useLocalStorage";
import { useQueryClient } from "@tanstack/react-query";

import { createContext, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  children: ReactNode;
};

type AuthData = {
  token: string;
  refreshToken?: string;
};

type AuthValuesType = {
  isAuthenticated: boolean;
  authData: AuthData | null;
  logout: () => Promise<void>;
  authenticate: (authData: AuthData) => void;
};

const localStorageKey = "authData";

const defaultProvider: AuthValuesType = {
  authData: null,
  isAuthenticated: false,
  logout: () => Promise.resolve(undefined),
  authenticate: () => null,
};

const AuthContext = createContext(defaultProvider);

const AuthProvider = ({ children }: Props) => {
  const queryClient = useQueryClient();
  const router = useNavigate();

  const { removeStoredValue, setStoredValue, storedValue } =
    useLocalStorage<AuthData>(localStorageKey);

  const [authData, setAuthData] = useState<AuthData | null>(
    storedValue || null
  );

  useEffect(() => {
    if (storedValue) {
      setAuthData(storedValue as AuthData);
    }
  }, [storedValue]);

  const authenticate = async (newAuthData: AuthData) => {
    setStoredValue(localStorageKey, newAuthData);
    setAuthData(newAuthData);
  };

  const handleLogout = async () => {
    removeStoredValue(localStorageKey);
    queryClient.removeQueries();
    queryClient.resetQueries();
    queryClient.invalidateQueries();
    setAuthData(null);
    router("/");
  };

  const values = {
    isAuthenticated: !!authData,
    authData,
    authenticate,
    logout: handleLogout,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
export { AuthContext, AuthProvider };
