import ContentFooter from "@/components/footer/ContentFooter";
import SectionTwo from "@/components/home-parent/section-two";
import SectionOne from "@/components/my-kids/section-one";
import SectionThree from "@/components/my-kids/section-three";

const MyKids = () => {
  return (
    <>
      <div className="bg-white">
        <SectionOne />
        <SectionTwo />
        <SectionThree />
      </div>
      <ContentFooter />
    </>
  );
};

export default MyKids;
