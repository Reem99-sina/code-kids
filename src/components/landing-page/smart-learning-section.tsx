import { BrainIcon, ParentIcon, SafeIcon } from "@/assets";
import { FeatureCard } from "../cards/FeatureCard";

export const SmartLearningSection = () => {
  return (
    <div className="w-full h-screen items-end ">
      <div>
        <p className="text-[#001D1D] font-bold text-[39px] mt-12">
          We turn screen time into a fun & educational journey
        </p>
      </div>
      <div className="items-center justify-center flex gap-4 mt-8">
        <FeatureCard
          icon={<BrainIcon />}
          title="Engaging logic & coding lessons"
        />
        <FeatureCard icon={<SafeIcon />} title="Fun, safe, ad-free content" />{" "}
        <FeatureCard
          icon={<ParentIcon />}
          title="Parent dashboard & full control"
        />
      </div>
    </div>
  );
};
