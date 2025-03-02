import { config } from "@/config";
import { useAuth } from "@/hooks/auth.hook";
import axios, { AxiosError, AxiosInstance } from "axios";
import { createContext, FC, ReactNode, useMemo } from "react";
import toast from "react-hot-toast";

// import { IResponse } from "@/types/common.type";

const API_URL = config.NEXT_PUBLIC_BASE_URL;
interface AuthResponse {
  token: string;
  refreshToken: string;
}

type FetchContextInterface = {
  api: AxiosInstance;
};

type CreateInstanceParams = {
  url: string;
  token?: string;
  refreshToken?: string;
  callback: (authData: AuthResponse) => void;
  logout: () => void;
};
export const FetchContext = createContext<FetchContextInterface | null>(null);
const createInstance = ({
  url,
  // refreshToken,
  // callback,
  logout,
  token,
}: CreateInstanceParams) => {
  const instance = axios.create({
    baseURL: url,
  });
  instance.interceptors.request.use(
    (config) => {
      const axiosConfig = {
        ...config,
      };

      if (token) {
        axiosConfig.headers["Authorization"] = `${token}`;
      }

      return axiosConfig;
    },
    async (error) => await Promise.reject(error)
  );
  instance.interceptors.response.use(
    (res) => res?.data,
    async (error: AxiosError) => {
      if (error.code === "ERR_NETWORK" || error.code === "ECONNABORTED") {
        toast.error("You are offline");
        Promise.reject("ERR_NETWORK");
      }

      if (error.response?.status === 401) {
        return logout();
      }

      return await Promise.reject(error?.response?.data);
    }
  );

  return instance;
};
export const FetchProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { authData, logout, authenticate } = useAuth();

  const api = useMemo(() => {
    return createInstance({
      url: API_URL as string,
      refreshToken: authData?.refreshToken,
      callback: (data) => {
        authenticate(data);
      },
      logout: () => {
        logout();
      },
      token: authData?.token,
    });
  }, [authData, logout]);

  const contextValue = useMemo(() => ({ api }), [api]);

  return (
    <FetchContext.Provider value={contextValue}>
      {children}
    </FetchContext.Provider>
  );
};
