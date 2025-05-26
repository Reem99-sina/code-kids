import { ArrowGreen } from "@/assets";
import MainComponentInfor from "@/components/common/main-component-infor";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import clsx from "clsx";

const questions = [
  {
    question: "Q1: What age is the platform designed for?",
    answer: " A: Our content is suitable for children aged 6 to 16.",
  },
  {
    question: "Q2: Is the platform available in Arabic?",
    answer: "A: Yes, the platform is available in both Arabic and English.",
  },
  {
    question: "Q3: Is parental supervision required?",
    answer:
      " A: For children under 13, we recommend parents supervise their usage.",
  },
  {
    question: "Q4: Do I need to install any software?",
    answer:
      " A: No installation is needed. The platform is 100% browser-based.",
  },
  {
    question: "Q5: How much does it cost?",
    answer:
      "A: We offer a free version and premium subscriptions with added features.",
  },
];

const Faq = () => {
  return (
    <MainComponentInfor title="FAQs">
      <div className="container mx-auto text-start">
        <h3 className="font-black text-black text-xl mb-8">
          Frequently Asking Questions
        </h3>
        {questions?.map((ele, index) => (
          <Accordion
            key={`filter_${index}`}
            type="single"
            collapsible
            className=" rounded-lg mb-7 shadow-lg"
          >
            <AccordionItem
              value="item-1"
              className={clsx("data-[state=open]:bg-[#EEFDFF]")}
            >
              <AccordionTrigger
                className="bg-transparent "
                icon={<ArrowGreen />}
              >
                <div className="p-4">{ele?.question}</div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="px-4 pb-4">{ele?.answer}</div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </MainComponentInfor>
  );
};

export default Faq;
