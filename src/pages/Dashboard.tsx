import ContentFooter from "@/components/footer/ContentFooter";
import SectionFour from "@/components/home-parent/section-four";
import SectionOne from "@/components/home-parent/section-one";
import SectionThree from "@/components/home-parent/section-three";
import SectionTwo from "@/components/home-parent/section-two";

const Dashboard = () => {

  return (
    <div className="flex flex-col h-full w-full bg-white">
      <SectionOne />
      <SectionTwo/>
      <SectionThree/>
      <SectionFour/>
      <ContentFooter />
    </div>
  );
};

export default Dashboard;
