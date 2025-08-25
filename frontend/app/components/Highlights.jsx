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
        <div className="section--right relative grid grid-cols-1 sm:grid-cols-3 sm:gap-4 mt-4 lg:mt-0">
          {highlights.map((highlight) => (
            <div key={highlight.id} className="highlight--card">
              <div className="h-8 w-8 flex-shrink-0 rounded-full bg-neutral-400 circle-shift"></div>
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
