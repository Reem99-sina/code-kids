import { Button } from "../common/button.component";
import { Add } from "@/assets";
import { useUser } from "@/hooks/user.hooks";
import { useNavigate } from "react-router-dom";

const SectionOne = () => {
  const { user } = useUser();
  const route =useNavigate()

  return (
    <section className="bg-[url('/main-parent.png')] min-h-[452px] w-full bg-repeat-round">
      <div className="flex items-center justify-start container mx-auto">
        <div className="bg-[url('/paper.png')] min-h-[365px] w-[645px] bg-repeat-round flex flex-col gap-4 p-20 text-start">
          <h3 className="text-purpleSeven text-3xl font-bold">
            Welcome back, {user?.username}
          </h3>
          <p className="text-gray-[#363636] text-xl">
            You're guiding your child's learning journey — let's make it
            amazing.
          </p>
          <div>
            <Button
              className="bg- rounded-full  !py-3 !px-6 !w-auto !text-base"
              text="Add New Child"
              startIcon={<Add className=" me-3" />}
              onClick={()=>route("/add-child")}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
