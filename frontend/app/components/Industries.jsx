import industries from "@/data/industries";

const Industries = () => {
  return (
    <section className="section--primary">
      <div className="inner--section">
        <div className="section--left ">
          <div className="section_head--primary">Industries We Serve</div>
        </div>
        <div className="section--right grid grid-cols-2 gap-4">
          {industries.map((industry) => (
            <div
              key={industry.id}
              className="relative hover:-translate-y-[3px] active:translate-y-0 transition-transform cursor-pointer"
            >
              <img
                src={industry.url}
                alt={industry.image_attribute}
                className="w-full h-full rounded-[.5rem]"
              />
              <div className="image-text--primary">{industry.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
