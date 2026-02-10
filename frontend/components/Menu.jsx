"use client";
import { AppContext } from "@/context/AppContext";
import { X } from "phosphor-react";
import { useContext } from "react";
import Link from "next/link";
import { navbar } from "@/data/navbar";

const Menu = () => {
  const { menuStat, setMenuStat } = useContext(AppContext);
  return (
    <div
      className={`fixed inset-0 w-full bg-[#0f243d] ${
        menuStat ? "translate-x-0" : "translate-x-full"
      } z-2000 transition duration-300 p-4 space-y-8`}
    >
      <div className="flex items-center justify-between">
        <img
          src="/images/logo/fortune_sealing_logo_1.png"
          alt="fortune sealing logo"
          className="w-[10rem] h-[2rem] lg:w-[12.5rem] lg:h-[2.8rem] object-cover -translate-x-[1.5rem]"
        />
        <X
          className="w-[1.5rem] h-[1.5rem] text-white"
          onClick={() => setMenuStat(false)}
        />
      </div>
      <div>
        <nav className="flex flex-col gap-4">
          <Link
            href="/products"
            className="py-4 text-center bg-[#2761ae] text-white active:bg-[#1e5397] px-2"
            onClick={() => setMenuStat(false)}
          >
            View Brochure
          </Link>
          <div className="flex flex-col">
            {navbar.map((n, i) => (
              <Link
                key={i}
                href={n.path}
                className="py-2.5 text-[1.1rem] text-white border-b border-neutral-300/50 last:border-0 "
                onClick={() => setMenuStat(false)}
              >
                {n.title}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Menu;
