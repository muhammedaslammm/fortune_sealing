"use client";

import highlights from "@/data/highlights";

const Highlights = () => {
  return (
    <section className="section--secondary" id="highlights">
      <div className="inner--section">
        <div className="section--left">
          <div className="section_head--secondary">
            Why Choose Fortune Sealing?
          </div>
        </div>
        <div className="section--right relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-4 mt-4 lg:mt-0">
          {highlights.map(({ icon: Icon, ...highlight }) => (
            <div key={highlight.id} className="highlight--card relative ">
              <Icon
                className="text-[#0f243d] w-7 h-7 xl:w-9 xl:h-9"
                weight="regular"
              />
              <div>
                <div className="text1--highlight-box">{highlight.title}</div>
                <div className="text2--highlight-box">
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
