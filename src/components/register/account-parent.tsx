import { GoogleColor } from "@/assets";
import { FC } from "react";
import DividerWithText from "../common/line-text-component";
import { TextInput } from "../common/form/text-input.component";
import { LockKeyhole, Mail, User } from "lucide-react";
import { Button } from "../common/button.component";

interface props {
  onComplete: () => void;
}

const AccountParent: FC<props> = ({ onComplete }) => {
  return (
    <div className="pt-4 px-1 flex flex-col gap-2 items-start justify-start">
      <h2 className="text-xl font-black text-headerBlue">
        Create Parent Account
      </h2>
      <p className="text-lg font-normal text-textSecondary">
        Simple steps separate you from entering our platform
      </p>
      <div className="rounded-full w-full py-3 flex justify-center items-center gap-4 border-2  border-[#EFF0F6] my-3">
        <GoogleColor />
        <p className="text-sm font-black text-textThird">
          Continue with Google
        </p>
      </div>
      <DividerWithText text="or Sign up with Email" />
      <div className="flex items-start gap-2 flex-col w-full">
        <TextInput
          className="!rounded-full !py-4 !px-4"
          label="Name"
          inputProps={{ placeholder: "Parent's name" }}
          leftIcon={<User className="text-grayOne" />}
        />
        <TextInput
          className="!rounded-full !py-4 !px-4"
          label="Email"
          inputProps={{ placeholder: "Email address" }}
          leftIcon={<Mail className="text-grayOne" />}
        />
        <TextInput
          className="!rounded-full !py-4 !px-4"
          label="Password"
          inputProps={{ placeholder: "Password" }}
          leftIcon={<LockKeyhole className="text-grayOne" />}
        />
       
      </div>
      <Button
          className="rounded-full bg-yellowTwo !text-blackPurple mt-5"
          text="Create My Account"
          onClick={onComplete}
        />
      <div className="flex items-center justify-center mt-3 w-full">
        <p className="text-base">
          Already have an account
          <span className="text-purpleFour font-bold mx-4 text-base">Login</span>
        </p>
      </div>
    </div>
  );
};

export default AccountParent;
