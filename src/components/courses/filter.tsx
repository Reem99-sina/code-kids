import { ReactNode, useState } from "react";
import { TextInput } from "../common/form/text-input.component";
import { Select } from "../common/select.component";
import { Menu, Search } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Checkbox } from "../ui/checkbox";
import {
  FilterElementSimple,
  FilterElementWithChildren,
  FilterSection,
} from "@/types/track.type";
import { Slider } from "../ui/slider";

interface props {
  children: ReactNode;
  filterData:FilterSection[]
}



const Filter = ({ children,filterData }: props) => {
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const handleSliderChange = (value: number[]) => {
    setPriceRange(value);
  };

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (value === "" || isNaN(Number(value))) return;
    setPriceRange([Number(value), priceRange[1]]);
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (value === "" || isNaN(Number(value))) return;
    setPriceRange([priceRange[0], Number(value)]);
  };

  return (
    <div className="container mx-auto py-8 flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="border rounded-full text-orangeThree flex items-center p-3 gap-3">
            <Menu />
            <p>Filters</p>
          </div>
          <div className="lg:min-w-[273px] min-w-auto">
            <TextInput
              inputProps={{ placeholder: "Search online courses & teachers" }}
              leftIcon={
                <Search className="bg-purpleSix text-white p-2 rounded-full" />
              }
              className="!rounded-full"
            />
          </div>
        </div>
        <div className=" flex items-center gap-6 text-grayCommon capitalize font-bold">
          <p>sorting:</p>
          <Select
            options={[{ label: "Trending", value: "Trending" }]}
            onChange={(): void => {
              throw new Error("Function not implemented.");
            }}
            styleCustom={{ width: "200px" }}
            placeholder="Trending"
          />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="font-bold">
          <p>Suggestion:</p>
        </div>
        <div className="font-bold text-grayCommon">
          <p>
            <span className="text-black">3,145,684</span> results find for
            "ui/ux design"
          </p>
        </div>
      </div>
      <div className="flex gap-3">
        <div className="flex-[0.3]">
          {filterData?.map((ele, index) => (
            <Accordion
              key={`filter-${index}`}
              type="single"
              collapsible
              className="border-x border-b border-gray-300 rounded-lg mb-7"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="bg-transparent border border-gray-300">
                  {ele?.title}
                </AccordionTrigger>
                <AccordionContent>
                  {ele?.type && ele?.type == "price" ? (
                    <div className="space-y-4">
                      {/* Slider */}
                      <div className="pt-2 px-2">
                        <Slider
                          defaultValue={priceRange}
                          value={priceRange}
                          max={1000}
                          step={1}
                          onValueChange={handleSliderChange}
                          className="my-6"
                          thumbClassName="h-4 w-4 bg-orange-500 border-2 border-white"
                          trackClassName="h-1.5 bg-orange-500"
                        />
                      </div>

                      {/* Price inputs */}
                      <div className="flex items-center justify-between gap-4">
                        <div className="w-1/2">
                          <p className="text-sm text-gray-600 mb-1 block">
                            EGP min:
                          </p>
                          <TextInput
                            inputProps={{
                              type: "text",
                              value: priceRange[0],
                              onChange: handleMinPriceChange,
                            }}
                            className="h-9 border-gray-300"
                          />
                        </div>
                        <div className="w-1/2">
                          <p className="text-sm text-gray-600 mb-1 block">
                            EGP max:
                          </p>
                          <TextInput
                            inputProps={{
                              type: "text",
                              value: priceRange[1],
                              onChange: handleMaxPriceChange,
                            }}
                            className="h-9 border-gray-300"
                          />
                        </div>
                      </div>

                      {ele?.element?.map((elem, index) => (
                        <div
                          className="flex items-center justify-between"
                          key={elem?.title + index}
                        >
                          <div className="flex items-center gap-2">
                            <Checkbox className="bg-gray-100 text-black my-1" />
                            {elem?.title}
                          </div>
                          <div className="text-[#8C94A3]">{(elem as FilterElementSimple)?.count}</div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    ele?.element?.map((elem, elemIndex) =>
                      (elem as FilterElementWithChildren)?.children ? (
                        <Accordion
                          key={`${ele.title}-${elemIndex}`}
                          type="single"
                          collapsible
                          className="rounded-none hover:border-0 hover:border-transparent"
                        >
                          <AccordionItem value="item-1">
                            <AccordionTrigger className="bg-transparent flex items-center justify-between gap-6 whitespace-nowrap">
                              <div className="flex items-center justify-start gap-6">
                                {(elem as FilterElementWithChildren)?.icon ? (
                                  (elem as FilterElementWithChildren)?.icon
                                ) : (
                                  <></>
                                )}
                                {(elem as FilterElementWithChildren)?.title}
                              </div>
                            </AccordionTrigger>
                            <AccordionContent>
                              {(
                                elem as FilterElementWithChildren
                              )?.children?.map((eleme, elemeIndex) => (
                                <div
                                  key={`${elem.title}-child-${elemeIndex}`}
                                  className="flex items-center justify-between"
                                >
                                  <div className="flex items-center gap-2">
                                    <Checkbox className="bg-gray-100 text-black my-1" />
                                    {eleme?.name}
                                  </div>
                                  <div className="text-[#8C94A3]">{eleme?.count}</div>
                                </div>
                              ))}
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      ) : (
                        <div
                          key={`${ele.title}-${elemIndex}`}
                          className="flex items-center justify-between"
                        >
                          <div className="flex items-center gap-2">
                            <Checkbox className="bg-gray-100 text-black my-1" />
                            {(elem as FilterElementSimple)?.title}
                          </div>
                          <div className="text-[#8C94A3]">{(elem as FilterElementSimple)?.count}</div>
                        </div>
                      )
                    )
                  )}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
};

export default Filter;
