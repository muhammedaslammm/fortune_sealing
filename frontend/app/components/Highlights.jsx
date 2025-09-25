"use client";

import highlights from "@/data/highlights";

const Highlights = () => {
  return (
    <section className="bg-pattern" id="highlights">
      <div className="inner--section">
        <div className="section--left">
          <div className="section_head--secondary">
            Why Choose Fortune Sealing?
          </div>
        </div>
        <div className="section--right relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-4 mt-4 lg:mt-0">
          {highlights.map(({ icon: Icon, ...highlight }) => (
            <div
              key={highlight.id}
              className="highlight--card flex flex-col items-center justify-center gap-2 sm:gap-2 md:gap-8 py-6 lg:py-8 px-4 rounded-[.5rem] bg-white xl:h-[20rem]"
            >
              <Icon
                className="text-[#0f243d] w-7 h-7 xl:w-[4rem] xl:h-[4rem]"
                weight="duotone"
              />
              <div className="flex flex-col gap-3">
                <div className="text1--highlight-box lg:text-[1.2rem] xl:text-[1.8rem] font-medium text-center leading-[1.8rem] mt-auto">
                  {highlight.title}
                </div>
                <div className="lg:text-[1.2rem] leading-[1.4rem] lg:leading-[1.6rem] w-[90%] mx-auto text-center">
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
