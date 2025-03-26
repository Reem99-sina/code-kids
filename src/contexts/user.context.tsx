import useLocalStorage from "@/hooks/useLocalStorage";
import { useUserQuery } from "@/services/profile-service";
import { IUser } from "@/types/user.type";
import {
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
} from "@tanstack/react-query";
import React, { createContext } from "react";

interface UserContextType {
  user?: IUser | null;
  isLoadingUser: boolean;
  refetchUser: (
    options?: (RefetchOptions & RefetchQueryFilters) | undefined
  ) => Promise<QueryObserverResult<IUser, unknown>>;
}

type Props = {
  children: React.ReactNode;
};

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export const UserProvider: React.FC<Props> = ({ children }) => {
  const { getStoreValue } = useLocalStorage();
  const auth = getStoreValue("authData") as { user: IUser; token: string };
  const { user } = auth ?? {};
  const {
    data: userResponse,
    refetch,
    isLoading,
  } = useUserQuery({ id: user?.id });

  const contextValue: UserContextType = {
    user: userResponse,
    refetchUser: refetch,
    isLoadingUser: isLoading,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
