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
        <div className="section--right relative grid grid-cols-1 sm:grid-cols-2 lg:gap-50">
          <div className="hidden sm:block absolute w-[.5px] top-0 bottom-0 left-1/2 border--highlight"></div>

          <div className="flex flex-col">
            {highlights.slice(0, 2).map((data) => (
              <div
                key={data.id}
                className="flex flex-col sm:flex-row gap-2 sm:gap-4 py-8 lg:py-15 sm:first:pt-0 border-b border-black/25 sm:last:border-b-0"
              >
                <div className="h-8 w-8 flex-shrink-0 rounded-full bg-neutral-400"></div>
                <div>
                  <div className="text1--highlight-box">{data.title}</div>
                  <div className="text2--highlight-box">{data.description}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col">
            {highlights.slice(2).map((data) => (
              <div
                key={data.id}
                className="flex flex-col sm:flex-row gap-2 sm:gap-4 py-8 lg:py-15 lg:last:pb-0 border-b border-black/25 last:border-b-0"
              >
                <div className="bg-neutral-400 w-8 h-8 flex-shrink-0 rounded-full"></div>
                <div>
                  <div className="text1--highlight-box">{data.title}</div>
                  <div className="text2--highlight-box">{data.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
