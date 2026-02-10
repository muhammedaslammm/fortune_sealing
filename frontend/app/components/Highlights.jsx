"use client";

import highlights from "@/data/highlights";

const Highlights = () => {
  return (
    <section className="section--primary" id="highlights">
      <div className="inner--section">
        {/* <div className="section--left">
          <div className="section_head--secondary">
            Why Choose Fortune Sealing?
          </div>
        </div> */}
        <div className="section--right relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-4 mt-4 lg:mt-0">
          {highlights.map(({ icon: Icon, ...highlight }) => (
            <div
              key={highlight.id}
              className="flex flex-col items-center justify-center gap-2 sm:gap-2 md:gap-4 py-6 lg:py-2 px-4 xl:h-auto"
            >
              <Icon
                className="text-[#155eb6] w-7 h-7 xl:w-[3rem] xl:h-[3rem]"
                weight="duotone"
              />
              <div className="flex flex-col gap-3">
                <div className="text-[1.2rem] lg:text-[1.2rem] xl:text-[1.8rem] font-medium text-center leading-[1.8rem] mt-auto">
                  {highlight.title}
                </div>
                <div className="lg:text-[1.2rem] leading-[1.4rem] lg:leading-[1.6rem] w-[90%] mx-auto text-center text-black">
                  {highlight.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
