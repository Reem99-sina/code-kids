import { useTracksQuery } from "@/services/track-service";
import clsx from "clsx";
import {
  Business,
  Coding,
  Creative,
  Culture,
  LifeSkills,
  Steam,
} from "@/assets";
import { useMemo } from "react";
import { trackInterface } from "@/types/track.type";

export const tracks = [
  { name: "coding", image: <Coding className="w-24 h-24" /> },
  { name: "business", image: <Business className="w-24 h-24" /> },
  { name: "creativity", image: <Creative className="w-24 h-24" /> },

  { name: "steam", image: <Steam className="w-24 h-24" /> },
  { name: "life skills", image: <LifeSkills className="w-24 h-24" /> },
  { name: "culture & language", image: <Culture className="w-24 h-24" /> },
];

const SectionTracksInCommen = ({
  track,
  changeTrack,
}: {
  track?: number | string;
  changeTrack: (props: number | string) => void;
}) => {
  const { data } = useTracksQuery();

  const findImage = useMemo(() => {
    return (ele: trackInterface) =>
      tracks?.find((elem) => elem?.name.includes(ele?.name));
  }, []);

  return (
    <div className="bg-[url('@/assets/bg-track.png')] bg-cover bg-no-repeat min-h-[526px] h-full mt-[7%] flex flex-col justify-center items-center">
      <div className="container mx-auto">
        <h3 className="text-white font-bold !text-start w-full text-2xl">
          Tracks
        </h3>
      </div>
      <div className="flex items-center justify-center gap-4">
        {data && data?.length > 0
          ? data?.map((ele) => (
              <div
                className="text-white capitalize font-bold cursor-pointer"
                onClick={() => changeTrack(ele?.id)}
                key={ele?.id}
              >
                <div
                  className={clsx(
                    "hover:bg-[url('@/assets/select-vector.png')] bg-[url('@/assets/Vector.png')] bg-cover bg-no-repeat",
                    "p-12",
                    track == ele?.id
                      ? "bg-[url('@/assets/select-vector.png')] "
                      : "bg-[url('@/assets/Vector.png')]"
                  )}
                >
                  {findImage(ele)?.image}
                </div>
                <p>{ele?.name}</p>
              </div>
            ))
          : tracks?.map((ele) => (
              <div
                className="text-white capitalize font-bold cursor-pointer"
                onClick={() => changeTrack(ele?.name)}
                key={ele?.name}
              >
                <div
                  className={clsx(
                    "hover:bg-[url('@/assets/select-vector.png')] bg-[url('@/assets/Vector.png')] bg-cover bg-no-repeat",
                    "p-12",
                    track == ele?.name
                      ? "bg-[url('@/assets/select-vector.png')] "
                      : "bg-[url('@/assets/Vector.png')]"
                  )}
                >
                  {ele?.image}
                </div>
                <p>{ele?.name}</p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default SectionTracksInCommen;
