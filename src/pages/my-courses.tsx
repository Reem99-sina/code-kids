import SectionThree from "@/components/common/section-three";
import SectionNoUser from "@/components/courses/section-no-user";
import SectionOne from "@/components/courses/section-one";
import SectionTracks from "@/components/courses/section-tracks";
import ContentFooter from "@/components/footer/ContentFooter";
import { useUser } from "@/hooks/user.hooks";

const MyCourses = () => {
  const { user } = useUser();
  
  return user ? (
    <div className="bg-white h-auto">
      <div className="bg-white h-auto">
        <SectionOne />
        <SectionTracks />
        <SectionThree title="Every course your child takes today is a step toward a brighter future — you're building that future with love and purpose." />
      </div>
      <div>
        <ContentFooter />
      </div>
    </div>
  ) : (
    <SectionNoUser />
  );
};

export default MyCourses;
