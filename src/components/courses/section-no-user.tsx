import { Dinosaur } from "@/assets";
import { TextInput } from "../common/form/text-input.component";
import { Search } from "lucide-react";
import ContentFooter from "../footer/ContentFooter";
import EmptyComponent from "../common/empty-component";

const SectionNoUser = () => {
  return (
    <div className="flex flex-col h-auto w-full bg-white">
      <div className="bg-[url('/header-add-child.png')] bg-bottom bg-cover w-full min-h-[200px] bg-blackPurple flex items-center justify-center text-white relative">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3 text-white font-bold">
            <div className="lg:min-w-[673px] min-w-auto">
              <TextInput
                inputProps={{ placeholder: "Search online courses" }}
                leftIcon={
                  <Search className="bg-purpleSix text-white p-2 rounded-full" />
                }
                className="!rounded-full"
              />
            </div>
          </div>
        </div>
        <Dinosaur className="absolute bottom-0 left-0" />
      </div>
      <div className="container mx-auto items-start justify-start text-start flex flex-col">
        <h3 className="font-bold text-lg">Courses</h3>
        <p className="text-[#706E76] mb-8 text-sm">01 items found out of 5255 courses</p>
        
         <EmptyComponent
            title="😕 Oops! We couldn’t find what you’re looking for."
            desc=" Try adjusting your keywords or explore our recommended courses below.
We’re always adding new content — your perfect course might be just around the corner!"
            title_button="Request a Course"
            onClick={() => {}}
          />
       
      </div>
      <ContentFooter />
    </div>
  );
};

export default SectionNoUser;
