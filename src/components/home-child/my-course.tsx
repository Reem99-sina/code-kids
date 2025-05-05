import { Idea } from "@/assets";
import { CustomPagination } from "../common/pagination.component";
import { courses } from "../home-parent/section-three";
import Card from "./card";
import { Button } from "../common/button.component";
import { useNavigate } from "react-router-dom";

const MyCourse = () => {
  const route = useNavigate();
  
  return (
    <>
      <div className="bg-[url('/courses.png')] bg-no-repeat bg-cover w-full min-h-[500px]  bg-white ">
        {courses?.length == 0 ? (
          <div className="container mx-auto">
            <div className="flex flex-col items-start justify-start container mx-auto text-black gap-8 ">
              <div className="flex items-center justify-between font-bold mt-[14%] w-full">
                <h2 className="text-4xl  text-start">My Courses</h2>
                <p className="text-[#626262] text-2xl cursor-pointer">
                  See all
                </p>
              </div>
              <div className="flex items-center gap-4 flex-wrap ">
                {courses?.slice(0, 3)?.map((ele, index) => (
                  <div
                    className=" bg-[url('/cart.png')] bg-no-repeat bg-cover w-[355px]"
                    key={ele?.title}
                    onClick={() => {
                    
                      if (index == 0) {
                        route("/home");
                      } else if (index == 1) {
                        route("/game");
                      } else {
                        route("/assembly-game");
                      }
                    }}
                  >
                    <div className="pt-[10rem] px-[2rem] pb-[4rem]">
                      <Card key={ele?.title} {...ele} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-14">
              <CustomPagination
                pageCount={5}
                initialPage={1}
                onPageChange={() => {}}
              />
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center text-black">
            <div className=" mt-28 mb-16 bg-pinkLightTwo rounded-2xl flex flex-col items-center justify-center min-h-[600px] w-[80%] gap-4">
              <Idea />
              <h3 className="text-xl font-bold">😕 No Courses Yet!</h3>
              <p className="w-[50%]">
                Looks like you don’t have any courses yet. Ask your parent to
                enroll you in an exciting course and start learning today!
              </p>
              <Button
                className="!w-auto !rounded-full !text-base"
                text="Request a Course"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MyCourse;
