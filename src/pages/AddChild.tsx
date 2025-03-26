import { Add, Dinosaur, Earth } from "@/assets";
import AddForm from "@/components/add-child/add-form";
import ChildCard from "@/components/add-child/child-card";
import { Button } from "@/components/common/button.component";
import ContentFooter from "@/components/footer/ContentFooter";
import { useState } from "react";
import { useParentQuery } from "@/services/parent-service";
import { ResponseChildParentAdd } from "@/types/parent.type";

const children = [
  {
    name: "kareem",
    age: 9,
    numCompletetracks: 7,
    numCompleteCourses: 7,
    courses: [],
  },
  {
    name: "Assma",
    age: 9,
    numCompletetracks: 7,
    numCompleteCourses: 7,
    courses: [],
  },
];

const AddChild = () => {
  const { data } = useParentQuery();
  const [addChild, setAddChild] = useState(false);
  const [edit, setEdit] = useState<ResponseChildParentAdd>();


  return (
    <div className="flex flex-col h-auto w-full bg-white">
      <div className="bg-[url('/header-add-child.png')] bg-center bg-cover w-full min-h-[300px] bg-blackPurple flex items-center justify-center text-white relative">
        <div className="flex flex-col gap-3">
          <h3 className="text-3xl font-bold">Add Child</h3>
          <div className="flex items-center gap-3 text-white font-bold">
            <p>Dashboard</p>
            <Earth />
            <p>Child</p>
            <Earth />
            <p>Add Child</p>
          </div>
        </div>
        <Dinosaur className="absolute bottom-0 left-0" />
      </div>
      {addChild||edit ? (
        <AddForm onClose={() => setAddChild(false)}edit={edit} />
      ) : (
        <div className=" flex flex-col gap-7 py-10 container mx-auto">
          {data && data?.length > 0
            ? data?.map((ele) => (
                <ChildCard
                  key={ele?.fullname}
                  child={{
                    fullname: ele?.fullname,
                    age: ele?.age,
                    avatarId: ele?.avatarId,
                    ...ele,
                  }}
                  onEdit={()=>setEdit(ele)}
                />
              ))
            : children?.map((ele) => (
                <ChildCard
                  key={ele?.name}
                  child={{ fullname: ele?.name, age: ele?.age }}
                  onEdit={()=>setEdit(ele)}
                />
              ))}
          <div>
            <Button
              className="!w-auto !rounded-full !text-xs"
              text="Add Child"
              startIcon={<Add className="me-3" />}
              onClick={() => setAddChild(true)}
            />
          </div>
        </div>
      )}
      <ContentFooter />
    </div>
  );
};

export default AddChild;
