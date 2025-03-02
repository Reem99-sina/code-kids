import { FetchProvider } from "@/contexts/fetch.context";
import { UserProvider } from "@/contexts/user.context";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Toaster } from "react-hot-toast";
import { AuthProvider } from "@/contexts/auth.context";

interface Props {
  children: React.ReactNode;
  // locale: string;
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export const Providers = ({ children }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <AuthProvider>
        <FetchProvider>
          <UserProvider>
            {children}
            </UserProvider>
        </FetchProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};
