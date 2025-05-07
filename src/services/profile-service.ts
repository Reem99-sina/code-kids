import { useAuthenticatedQuery } from "@/hooks/authenticated-query.hook";
import { useFetch } from "@/hooks/fetch.hooks";
import { IResponse } from "@/types/common.type";
import {
  AddChildRequest,
  AddChildResponse,
  IUser,
  IUserLoginChildRequest,
  IUserLoginParentRequest,
  IUserRegisterRequest,
  IUserVerifyRequest,
  ResendCodeRequest,
  ResetNewPasswordRequest,
  VerifyResendCodeRequest,
} from "@/types/user.type";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

export const useUserQuery = ({ id }: { id?: number }) => {
  const { api } = useFetch();

  return useAuthenticatedQuery<IUser>({
    queryKey: ["user"],
    queryFn: async () => {
      const response: IResponse<IUser> = await api.get("/user/" + id);

      return response.data;
    },
  });
};

export const useLoginParentMutation = () => {
  const { api } = useFetch();

  return useMutation<
    IResponse<{
      token: string;
      user: IUser;
    }>,
    { message: string },
    IUserLoginParentRequest
  >({
    mutationFn: (data) => {
      return api.post("/auth/parent/login", data);
    },
  });
};

export const useLoginChildMutation = () => {
  const { api } = useFetch();

  return useMutation<
    IResponse<{
      token: string;
      user: IUser;
    }>,
    { message: string },
    IUserLoginChildRequest
  >({
    mutationFn: (data) => {
      return api.post("/auth/child/login", data);
    },
  });
};

export const useRegisterMutation = () => {
  const { api } = useFetch();

  return useMutation<
    IResponse<IUser>,
    { message: string },
    IUserRegisterRequest
  >({
    mutationFn: (data) => {
      return api.post("/auth/parent/register", data);
    },
  });
};

export const useVerifyEmailMutation = () => {
  const { api } = useFetch();

  return useMutation<
    IResponse<{ user: IUser; token: string }>,
    { message: string },
    IUserVerifyRequest
  >({
    mutationFn: (data) => {
      return api.put("/auth/parent/code", data);
    },
  });
};

export const useAddChildMutation = () => {
  const { api } = useFetch();
  const queryClient = useQueryClient();
  // console.log(api,"api")

  return useMutation<
    IResponse<AddChildResponse>,
    { message: string },
    AddChildRequest
  >({
    mutationFn: (data) => {
      return api.post("/child", data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["parent"],
      });
    },
  });
};

export const useLoginWithSocialMutation = () => {
  const { api } = useFetch();
  const searchParams = useSearchParams();

  return useMutation<
    IResponse<{
      token: string;
      refreshToken: string;
    }>,
    { message: string },
    void
  >({
    mutationFn: () =>
      api.get(`/auth/google/callback`),
  });
};

export const useResendCodeMutation = () => {
  const { api } = useFetch();

  return useMutation<
    IResponse<{
      token: string;
      user: IUser;
    }>,
    { message: string },
    ResendCodeRequest
  >({
    mutationFn: (data) => {
      return api.post("/auth/parent/forget-password", data);
    },
  });
};

export const useVerifyCodeReset = () => {
  const { api } = useFetch();

  return useMutation<
    IResponse<{
      token: string;
      user: IUser;
    }>,
    { message: string },
    VerifyResendCodeRequest
  >({
    mutationFn: (data) => {
      return api.put("/auth/parent/verify-code", data);
    },
  });
};

export const useNewPassword = () => {
  const { api } = useFetch();

  return useMutation<
    IResponse<{
      token: string;
      user: IUser;
    }>,
    { message: string },
    ResetNewPasswordRequest
  >({
    mutationFn: (data) => {
      return api.put("/auth/parent/reset-password", data);
    },
  });
};

export const useResendCode = () => {
  const { api } = useFetch();

  return useMutation<
    IResponse<{
      token: string;
      user: IUser;
    }>,
    { message: string },
    ResendCodeRequest
  >({
    mutationFn: (data) => {
      return api.put("/auth/parent/resend-code", data);
    },
  });
};
