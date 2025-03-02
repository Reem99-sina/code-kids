import { useAuthenticatedQuery } from "@/hooks/authenticated-query.hook";
import { useFetch } from "@/hooks/fetch.hooks";
import { IResponse } from "@/types/common.type";
import { IUser } from "@/types/user.type";
import { useMutation } from "@tanstack/react-query";

export const useUserQuery = () => {
  const { api } = useFetch();

  return useAuthenticatedQuery<IUser>({
    queryKey: ["user"],
    queryFn: async () => {
      const response: IResponse< IUser > = await api.get("/user/details");

      return response.data;
    },
  });
};

export const useLoginMutation = () => {
  const { api } = useFetch();

  return useMutation<
    IResponse<{
      token: string;
      refreshToken: string;
      user: IUser;
    }>,
    { message: string },
    { idNumber: string }
  >({
    mutationFn: (data) => {
      return api.post("/auth/login", data);
    },
  });
};

export const useRegisterMutation = () => {
  const { api } = useFetch();

  return useMutation<
    IResponse<IUser>,
    { message: string },
    {
      name: string;
      idNumber: string;
      mobile: string;
    }
  >({
    mutationFn: (data) => {
      return api.post("/auth/register", data);
    },
  });
};

