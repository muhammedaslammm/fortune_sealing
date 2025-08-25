import Link from "next/link";
import industries from "@/data/industries";

const Industries = () => {
  return (
    <section className="section--primary" id="industries">
      <div className="inner--section">
        <div className="section--left ">
          <div className="section_head--primary">Industries We Serve</div>
        </div>
        <div className="section--right flex overflow-x-auto whitespace-nowrap scroll-smooth gap-4">
          {industries.map((industry) => (
            <div
              className="relative flex-none hover:-translate-y-[3px] active:translate-y-0 transition-transform cursor-pointer w-[40rem]"
              key={industry.id}
            >
              <img
                src={industry.url}
                alt={industry.image_attribute}
                className="h-[15rem] w-full sm:h-full rounded-[.5rem] object-cover"
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
