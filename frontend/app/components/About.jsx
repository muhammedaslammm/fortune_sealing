"use client";
import Link from "next/link";

import { useState } from "react";

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleExpand = () => setIsExpanded(!isExpanded);
  return (
    <section className="section--primary" id="about">
      <div className="inner--section">
        <div className="section--left">
          <div className="section_head--primary">About Fortune Sealings</div>
        </div>
        <div className="section--right">
          <p
            className={`section_paragraph lg:text-justify ${
              isExpanded ? "line-clamp-none" : "line-clamp-3"
            } lg:line-clamp-none`}
          >
            Fortune Sealing Equipment's Trading LLC is a leading supplier of
            high-performance rubber seals and precision-molded rubber products,
            serving the critical demands of the Oil & Gas industry. With a
            state-of-the-art manufacturing facility in India equipped with
            advanced rubber injection and compression molding systems, we
            deliver consistent quality and performance under extreme operational
            conditions. Our product range includes BOP inner and outer seals,
            O-rings, backup rings, X-rings, hammer union seals, stuffing box
            packings, rubber diaphragms, packer elements, swab cups, wiper
            plugs, S seals, FS seals, Chevron V-seals, seals for gas lift
            valves, slickline blowout plugs, V-packings for downhole tools,
            metal-bonded oilfield components, and thread protectors. We
            specialize in sealing solutions tailored for Oil & Gas field
            equipment, ensuring reliability, durability, and field-proven
            performance for our global clients.
          </p>
          <button
            className="lg:hidden text-[.9rem] text-yellow-100 active:text-white"
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
