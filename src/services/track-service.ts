import { useFetch } from "@/hooks/fetch.hooks";
import { GetGames, IResponse } from "@/types/common.type";
import { trackInterface } from "@/types/track.type";
import { useQuery } from "@tanstack/react-query";

export const useTracksQuery = () => {
  const { api } = useFetch();

  return useQuery<trackInterface[]>({
    queryKey: ["track"],
    queryFn: async () => {
      const response: IResponse<trackInterface[]> =
        await api.get("/track");

      return response.data;
    },
  });
};


export const useCoursesByIdTracksQuery = ({id}:{id?:number}) => {
    const { api } = useFetch();
  
    return useQuery<trackInterface[]>({
      queryKey: ["courses",id],
      queryFn: async () => {
        const response: IResponse<trackInterface[]> =
          await api.get("/course/track/"+id);
  
        return response.data;
      },
    });
  };
  
  export const getGamesQuery = (id:number) => {
    const { api } = useFetch();
  
    return useQuery<GetGames>({
      queryKey: ["game"],
      queryFn: async () => {
        return await api.get(`/level/game-levels/${id}`);
      },
    });
  };
  