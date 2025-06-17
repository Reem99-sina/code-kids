import { PaperPlaneRight } from "@/assets";
import { Button } from "@/components/common/button.component";
import { TextInput } from "@/components/common/form/text-input.component";
import PaperComponent from "@/components/common/paper-component";
import SectionThree from "@/components/common/section-three";
import { TextArea } from "@/components/common/text-area-input.component";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface Location {
  latitude: number | null;
  longitude: number | null;
  error: string | null;
}

const ContactUs = () => {
  const {
    register,
    formState: { errors },
  } = useForm();
  
  const [location] = useState<Location>({
    latitude: 34.0522,
    longitude: -118.2437,
    error: null,
  });

  return (
    <div className="flex flex-col  w-full h-auto bg-gray-50 ">
      <div className="bg-[url('@/assets/contact-us.png')] bg-cover  min-h-[226px]  bg-no-repeat w-full flex justify-end items-center">
        <PaperComponent
          title="Connect with us"
          desc="Your voice matters to us — whether it’s a question, an idea, or just a friendly hello!
Tell us what you think and help us grow better, together 💌"
          className="min-h-[480px] p-24"
        />
      </div>
      <div className="container mx-auto w-full my-7">
        <h3 className="font-bold text-3xl">Contact Us</h3>
        <div className="flex gap-20 py-10">
          <div className="flex flex-col gap-10 flex-[0.7] text-start">
            <p className="text-[#353535] ">
              Will you be in Los Angeles or any other branches any time soon?
              Stop by the office! We'd love to meet.
            </p>
            <div className="flex justify-between">
              <h3 className="text-purpleSix font-bold text-lg">Address</h3>
              <p className="w-[50%] ">1702 Olympic Boulevard Santa Monica, CA 90404</p>
            </div>
            <div className="flex justify-between items-start">
              <h3 className="text-purpleSix font-bold text-lg">Phone Number</h3>
              <div>
                <p>(480) 555-0103</p>
                <p>(219) 555-0114</p>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <h3 className="text-purpleSix font-bold text-lg">
                Email address
              </h3>
              <div>
                <p>help.eduguard@gmail.com</p>
                <p>career.eduguard@gamil.com</p>
              </div>
            </div>
          </div>
          <div className=" rounded-3xl p-10 bg-white flex-1 text-start gap-4">
            <h3 className="text-black font-bold text-lg">Get In touch</h3>
            <p className="text-gray-500">
              Feel free contact with us, we love to make new partners & friends
            </p>
            <div className="flex flex-col gap-4 mt-8">
              <div className=" flex items-start gap-4">
                <TextInput
                  className="!rounded-full !py-4 !px-4 "
                  label="First Name"
                  inputProps={{
                    placeholder: "First Name",
                    ...register("name", {
                      required: { value: true, message: "this input required" },
                    }),
                  }}
                  errorMessage={
                    errors?.name?.message ? String(errors?.name?.message) : ""
                  }
                />
                <TextInput
                  className="!rounded-full !py-4 !px-4 "
                  label="Last Name"
                  inputProps={{
                    placeholder: "Last Name",
                    ...register("last_name", {
                      required: { value: true, message: "this input required" },
                    }),
                  }}
                  errorMessage={
                    errors?.last_name?.message
                      ? String(errors?.last_name?.message)
                      : ""
                  }
                />
              </div>
              <TextInput
                className="!rounded-full !py-4 !px-4 "
                label="Email"
                inputProps={{
                  placeholder: "Email",
                  ...register("email", {
                    required: { value: true, message: "this input required" },
                  }),
                }}
                errorMessage={
                  errors?.email?.message ? String(errors?.email?.message) : ""
                }
              />
              <TextInput
                className="!rounded-full !py-4 !px-4 "
                label="Subject"
                inputProps={{
                  placeholder: "Subject",
                  ...register("subject", {
                    required: { value: true, message: "this input required" },
                  }),
                }}
                errorMessage={
                  errors?.subject?.message
                    ? String(errors?.subject?.message)
                    : ""
                }
              />
              <TextArea
                className="!rounded-full !py-4 !px-4 "
                label="Message"
                inputProps={{
                  placeholder: "Message",
                  ...register("message", {
                    required: { value: true, message: "this input required" },
                  }),
                }}
                errorMessage={
                  errors?.message?.message
                    ? String(errors?.message?.message)
                    : ""
                }
              />
              <div>
                <Button
                  text="Send Message"
                  endIcon={<PaperPlaneRight className="mx-3  " />}
                  className="rounded-full !bg-yellowOne !w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <iframe
        width="100%"
        height="450"
        frameBorder="0"
        scrolling="no"
        marginHeight={0}
        marginWidth={0}
        src={`https://www.openstreetmap.org/export/embed.html?bbox=${location.longitude??0 - 0.5},${location.latitude ?? 0 - 0.5},${location.longitude ?? 0 + 0.5},${location.latitude ?? 0 + 0.5}&layer=mapnik&marker=${location.latitude},${location.longitude}`}
        style={{ border: "1px solid black", borderRadius: "8px" }}
        title="OpenStreetMap Embed"
      ></iframe>
      <SectionThree
        title_button="Start Now"
        title="With one simple step, you can help your child grow, learn, and build a future to be proud of. Believe in them — and get started today!"
      />
    </div>
  );
};

export default ContactUs;
