const SectionOne = () => {
  return (
    <section className="bg-[url('@/assets/bg-mentors.png')] min-h-[452px] w-full bg-repeat-round bg-cover">
      <div className="flex justify-end">
        {" "}
        <div className="bg-[url('/paper.png')] min-h-[365px] w-[645px] bg-repeat-round flex flex-col gap-4 p-20 text-start ">
          <h3 className="text-purpleSeven text-3xl font-bold">
            Meet Your Mentor
          </h3>
          <p className="text-gray-[#363636] text-xl">
            Connect with experienced mentors who will guide you through your
            learning journey. Explore their expertise, the courses they offer,
            and book a session to enhance your skills! 🚀
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
