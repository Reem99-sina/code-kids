import { useFetch } from "@/hooks/fetch.hooks";
import { IResponse } from "@/types/common.type";
import { ResponseChildParentAdd, TypeoFSkillsResponse } from "@/types/parent.type";
import {  AddChildResponse } from "@/types/user.type";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useParentQuery = () => {
  const { api } = useFetch();

  return useQuery<ResponseChildParentAdd[]>({
    queryKey: ["parent"],
    queryFn: async () => {
      const response: IResponse<ResponseChildParentAdd[]> =
        await api.get("/user/my-children");

      return response.data;
    },
  });
};

export const useParentDeleteChildQuery = ({ id }: { id?: number }) => {
  const { api } = useFetch();
  const queryClient = useQueryClient();
  // console.log(api,"api")

  return useMutation<IResponse<AddChildResponse>, { message: string }>({
    mutationFn: () => {
      return api.delete("/child/" + id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["parent"],
      });
    },
  });
};

export const useSkillsQuery = () => {
  const { api } = useFetch();

  return useQuery<TypeoFSkillsResponse[]>({
    queryKey: ["skills"],
    queryFn: async () => {
      const response: IResponse<TypeoFSkillsResponse[]> =
        await api.get("/skill");

      return response.data;
    },
  });
};