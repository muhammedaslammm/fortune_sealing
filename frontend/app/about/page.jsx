// "use client";
// import Link from "next/link";

// import { useState } from "react";

// const About = () => {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const handleExpand = () => setIsExpanded(!isExpanded);
//   return (
//     <section className="section--primary !py-[8rem]" id="about">
//       <div className="inner--section">
//         <div className="section--left">
//           <div className="section_head--primary">About Fortune Sealings</div>
//         </div>
//         <div className="section--right">
//           <p
//             className={`section_paragraph lg:text-justify ${
//               isExpanded ? "line-clamp-none" : "line-clamp-3"
//             } lg:line-clamp-none`}
//           >
//             Fortune Sealing Equipment's Trading LLC is a leading supplier of
//             high-performance rubber seals and precision-molded rubber products,
//             serving the critical demands of the Oil & Gas industry. With a
//             state-of-the-art manufacturing facility in India equipped with
//             advanced rubber injection and compression molding systems, we
//             deliver consistent quality and performance under extreme operational
//             conditions. Our product range includes BOP inner and outer seals,
//             O-rings, backup rings, X-rings, hammer union seals, stuffing box
//             packings, rubber diaphragms, packer elements, swab cups, wiper
//             plugs, S seals, FS seals, Chevron V-seals, seals for gas lift
//             valves, slickline blowout plugs, V-packings for downhole tools,
//             metal-bonded oilfield components, and thread protectors. We
//             specialize in sealing solutions tailored for Oil & Gas field
//             equipment, ensuring reliability, durability, and field-proven
//             performance for our global clients.
//           </p>
//           <button
//             className="lg:hidden text-[.9rem] text-yellow-100 active:text-white"
//             onClick={handleExpand}
//           >
//             {isExpanded ? "Read Less" : "Read More"}
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
"use client";
import { useState } from "react";

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleExpand = () => setIsExpanded(!isExpanded);

  return (
    <section
      id="about"
      className="!py-[8rem]"
      style={{ backgroundColor: "#fefefe" }}
    >
      <div className="inner--section">
        {/* Section Header */}
        <div className="section--left mb-8">
          <div
            className="section_head--primary text-3xl font-extrabold"
            style={{
              color: "#155eb6",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            About Fortune Sealings
          </div>
        </div>

        {/* Content */}
        <div className="section--right space-y-6">
          <p
            className={`section_paragraph leading-relaxed lg:text-justify ${
              isExpanded ? "line-clamp-none" : "line-clamp-3"
            } lg:line-clamp-none`}
          >
            <span className="font-semibold text-[#155eb6]">
              Fortune Sealing Equipment's Trading LLC
            </span>{" "}
            is a trusted global supplier of high-performance rubber seals and
            precision-molded rubber products, engineered to meet the critical
            demands of the Oil & Gas industry. With a{" "}
            <span className="font-bold">
              state-of-the-art manufacturing facility in India
            </span>
            , equipped with advanced rubber injection and compression molding
            systems, we deliver consistent quality and performance under extreme
            operational conditions.
            <br />
            <br />
            Our product portfolio covers{" "}
            <span className="text-[#155eb6] font-semibold">
              BOP inner & outer seals, O-rings, backup rings, hammer union
              seals, packer elements, swab cups, wiper plugs, Chevron V-seals,
              seals for gas lift valves, slickline blowout plugs, metal-bonded
              oilfield components, and thread protectors
            </span>
            . Each product is designed for{" "}
            <span className="text-[#155eb6] font-bold">
              reliability, durability, and proven field performance
            </span>
            .
            <br />
            <br />
            With innovation and material expertise, our seals withstand{" "}
            <span style={{ color: "#155eb6", fontWeight: "600" }}>
              high pressure, extreme temperatures, and corrosive environments
            </span>
            — making us a preferred choice for international oilfield operators.
          </p>

          {/* Vision */}
          <div
            className={`mt-6 transition-all ${
              isExpanded ? "block" : "hidden lg:block"
            }`}
          >
            <div
              className="rounded-2xl p-6 shadow-md text-white"
              style={{ backgroundColor: "#669cde" }}
            >
              <h3 className="text-xl font-bold mb-3">🎯 Our Vision</h3>
              <p>
                To be the <span className="font-semibold">global leader</span>{" "}
                in sealing technologies — setting new benchmarks in performance,
                sustainability, and innovation across the Oil & Gas sector and
                beyond.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div
            className={`mt-6 transition-all ${
              isExpanded ? "block" : "hidden lg:block"
            }`}
          >
            <div
              className="rounded-2xl p-6 shadow-md text-white"
              style={{ backgroundColor: "#669cde" }}
            >
              <h3 className="text-xl font-bold mb-3">🏆 Our Mission</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Deliver world-class sealing solutions with unmatched
                  consistency.
                </li>
                <li>
                  Ensure safety, durability, and reliability in every product.
                </li>
                <li>
                  Invest continuously in R&D and advanced material science.
                </li>
                <li>
                  Offer customized sealing solutions for unique operational
                  needs.
                </li>
                <li>
                  Build long-term partnerships based on trust & service
                  excellence.
                </li>
              </ul>
            </div>
          </div>

          {/* Core Values */}
          <div
            className={`mt-6 transition-all ${
              isExpanded ? "block" : "hidden lg:block"
            }`}
          >
            <div
              className="rounded-2xl p-6 shadow-md text-white"
              style={{ backgroundColor: "#669cde" }}
            >
              <h3 className="text-xl font-bold mb-3">💎 Our Core Values</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Integrity and transparency in every business deal.</li>
                <li>Customer-centric approach with quick responsiveness.</li>
                <li>Innovation-driven growth through technology.</li>
                <li>Commitment to safety and sustainability.</li>
                <li>Collaboration and teamwork across all levels.</li>
              </ul>
            </div>
          </div>

          {/* Quality Assurance */}
          <div
            className={`mt-6 transition-all ${
              isExpanded ? "block" : "hidden lg:block"
            }`}
          >
            <div
              className="rounded-2xl p-6 shadow-md text-white"
              style={{ backgroundColor: "#669cde" }}
            >
              <h3 className="text-xl font-bold mb-3">🔬 Quality Assurance</h3>
              <p>
                Every sealing component undergoes{" "}
                <span className="font-semibold">rigorous testing</span> under
                simulated extreme conditions to ensure field reliability. Our
                advanced labs are equipped to perform pressure, temperature, and
                material compatibility testing — ensuring that only the{" "}
                <span className="font-bold">best-performing products</span>{" "}
                reach our clients.
              </p>
            </div>
          </div>

          {/* Global Presence */}
          <div
            className={`mt-6 transition-all ${
              isExpanded ? "block" : "hidden lg:block"
            }`}
          >
            <div
              className="rounded-2xl p-6 shadow-md text-white"
              style={{ backgroundColor: "#669cde" }}
            >
              <h3 className="text-xl font-bold mb-3">🌍 Global Presence</h3>
              <p>
                Headquartered in the UAE with manufacturing in India, we serve
                clients across{" "}
                <span className="font-semibold">
                  the Middle East, Africa, Europe, Asia, and North America
                </span>
                . Our global footprint allows us to deliver{" "}
                <span className="font-bold">
                  fast, reliable, and cost-effective
                </span>{" "}
                sealing solutions wherever our customers operate.
              </p>
            </div>
          </div>

          {/* Why Choose Us */}
          <div
            className={`mt-6 transition-all ${
              isExpanded ? "block" : "hidden lg:block"
            }`}
          >
            <div
              className="rounded-2xl p-6 shadow-md text-white"
              style={{ backgroundColor: "#669cde" }}
            >
              <h3 className="text-xl font-bold mb-3">✅ Why Choose Us</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm md:text-base">
                <li>
                  ⚙️ Advanced manufacturing with precision injection & molding.
                </li>
                <li>🧪 Rigorous quality testing for extreme conditions.</li>
                <li>🎯 Customized sealing designs for oilfield challenges.</li>
                <li>🌍 Trusted by global Oil & Gas leaders worldwide.</li>
                <li>♻️ Commitment to eco-friendly & sustainable practices.</li>
              </ul>
            </div>
          </div>

          {/* Read more toggle button */}
          <button
            className="lg:hidden text-[.9rem] mt-6 px-4 py-2 rounded-lg font-medium shadow-md"
            style={{
              backgroundColor: "#155eb6",
              color: "#fefefe",
            }}
            onClick={handleExpand}
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
