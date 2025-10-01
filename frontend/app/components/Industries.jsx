import Link from "next/link";
import industries from "@/data/industries";

const Industries = () => {
  return (
    <section className="section--primary pattern" id="industries">
      <div className="inner--section">
        <div className="section--left">
          <div className="section_head--primary text-center">
            Industries We Serve
          </div>
        </div>
        <div className="section--right grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 auto-rows-[14rem] sm:auto-rows-[16rem] lg:auto-rows-[18rem] gap-4 mt-4 lg:mt-0">
          {industries.map((industry, index) => (
            <div
              className="group relative h-full overflow-hidden cursor-pointer"
              key={industry.id}
            >
              <img
                src={industry.url}
                alt={industry.image_attribute}
                className="lg:h-full w-full object-cover"
              />

              <div
                className={`absolute inset-0 ${
                  index % 2 === 0 ? "hover_bg" : "bg-neutral-700"
                } flex items-center justify-center p-4 group-hover:-translate-x-[110%] duration-200 transition-transform`}
              >
                <div className="text-white text-[1.4rem] text-center leading-[1.6rem] font-medium ">
                  {industry.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
