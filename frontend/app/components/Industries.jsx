// import Link from "next/link";
// import industries from "@/data/industries";

// const Industries = () => {
//   return (
//     <section className="section--primary" id="industries">
//       <div className="inner--section">
//         <div className="section--left ">
//           <div className="section_head--primary">Industries We Serve</div>
//         </div>
//         <div className="section--right grid grid-cols-2 lg:grid-cols-3 gap-4">
//           {industries.map((industry) => (
//             <div
//               className="relative hover:-translate-y-[3px] active:translate-y-0 transition-transform "
//               key={industry.id}
//             >
//               <img
//                 src={industry.url}
//                 alt={industry.image_attribute}
//                 className="h-[15rem] w-full sm:h-full lg:h-[18rem] rounded-[.5rem] object-cover"
//               />
//               <div className="image-text--primary">{industry.title}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Industries;
import Link from "next/link";
import industries from "@/data/industries";

const Industries = () => {
  return (
    <section className="section--primary" id="industries">
      <div className="inner--section">
        <div className="section--left">
          <div className="section_head--primary text-center">
            Industries We Serve
          </div>
        </div>
        <div className="section--right grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 auto-rows-[14rem] sm:auto-rows-[16rem] lg:auto-rows-[34rem] gap-4 mt-4 lg:mt-0">
          {industries.map((industry) => (
            <div
              className="relative hover:-translate-y-[3px] active:translate-y-0 transition-transform h-full"
              key={industry.id}
            >
              <img
                src={industry.url}
                alt={industry.image_attribute}
                className="lg:h-full w-full rounded-[.5rem] object-cover"
              />
              <div className="text_color--primary absolute top-4 left-4 text-[1.2rem] xl:text-[1.2rem] font-medium w-[10rem] leading-[1.4rem] xl:leading-[1.5rem]">
                {industry.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
