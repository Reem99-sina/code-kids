import MainComponentInfor from "@/components/common/main-component-infor";

const PrivacyPolicy = () => {
  return (
    <MainComponentInfor title="Privacy Policy">
      <div className="container mx-auto text-start">
        <h3 className="font-black text-black text-xl mb-8">Privacy Policy</h3>
        <h3 className="font-black text-black text-lg mb-4">
          We care about your privacy. This policy explains how we collect, use,
          and protect your data.
        </h3>
        <ol className="list-decimal ml-8">
          <li>
            Data We Collect: We may collect basic information such as name,
            email, and user activity on the platform to improve our services.
          </li>
          <li>
            Children's Data: We do not collect personal data from children under
            13 without parental consent. The platform is built with child safety
            in mind.
          </li>
          <li>
            How We Use Data: Data is used solely for enhancing user experience
            and is never sold to third parties.
          </li>
          <li>
            Security: We implement reasonable security measures to protect your
            information.
          </li>
          <li>
            Cookies: We use cookies to enhance functionality, such as
            remembering your language preferences.
          </li>
          <li>
            Contact: If you have questions about your data, email us at:
            <a href="mailto:privacy@yourdomain.com" className=" mx-2">privacy@yourdomain.com</a>
          </li>
        </ol>
      </div>
    </MainComponentInfor>
  );
};

export default PrivacyPolicy;
