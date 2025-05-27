import FeedCard from "./feed-card";

export const LearnSmarter = () => {
  return (
    <div className="w-full min-h-screen items-end my-10 ">
      <div className="flex items-center justify-between p-10">
        <span className="text-4xl font-bold text-[#001D1D]">
          You're not alone — Learn with expert guides!
        </span>
        <span className="text-2xl font-bold text-[#626262] cursor-pointer">
          See all
        </span>
      </div>
      <div className="flex items-center justify-center ">
        <div className="flex items-center justify-center gap-4 w-[70%]">
          <FeedCard
            title="Teen Skills & Chill Homeroom"
            star={"4.8"}
            rating={"441"}
            price={"1500"}
            oldPrice={"1500"}
            min="8-10"
            type="30"
          />
          <FeedCard
            title="Teen Skills & Chill Homeroom"
            star={"4.8"}
            rating={"441"}
            price={"1500"}
            oldPrice={"1500"}
            min="8-10"
            type="30"
          />
        </div>
      </div>
    </div>
  );
};
