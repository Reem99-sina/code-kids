import MainComponentInfor from "@/components/common/main-component-infor";

const TermsOfUse = () => {
  return (
    <MainComponentInfor title="Terms of Use">
      <div className="container mx-auto text-start ">
        <h3 className="font-black text-black text-xl mb-8">Terms of Use</h3>
        <div className=" bg-[#F9F0FF] p-8 rounded-2xl">
          <h3 className="font-black text-black text-lg mb-4">
            Welcome to our platform. By using our website, you agree to the
            following terms and conditions:
          </h3>
          <ol className="list-decimal ml-8">
            <li>
              Use of Content: All educational content provided on this site is
              for personal and non-commercial use only.
            </li>
            <li>
              Age Requirement: This platform is designed for children ages 6–16.
              Parents or guardians must supervise children under the age of 13
              when using the site.
            </li>
            <li>
              Account Responsibility: If you register an account, you are
              responsible for maintaining the confidentiality of your login
              credentials.
            </li>
            <li>
              Intellectual Property: All site content (text, graphics, lessons)
              is the intellectual property of our platform and may not be copied
              or distributed without permission.
            </li>
            <li>
              Modifications: We may update these terms at any time. Continued
              use of the platform after changes means you accept the new terms.
            </li>
          </ol>
        </div>
      </div>
    </MainComponentInfor>
  );
};

export default TermsOfUse;
