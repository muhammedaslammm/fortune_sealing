"use client";

import Link from "next/link";
import { Rows } from "phosphor-react";

const Header = () => {
  return (
    <header className="header">
      <div className="w-[95%] lg:w-[85%] mx-auto flex justify-between items-center py-3 lg:py-2.5">
        <div className="font-medium text-[1.1rem]">
          <Link href="/">
            <img
              src={"/images/logo/fortune_sealing_logo_1.png"}
              alt="Fortune Sealing Logo"
              className="w-[10rem] h-[2rem] lg:w-[12.5rem] lg:h-[2.8rem] object-cover -translate-x-[1.5rem] lg:-translate-x-[2rem]"
            />
          </Link>
        </div>
        <nav className="hidden lg:flex gap-8">
          <Link href="/">Home</Link>
          <Link href="/#about">About Us</Link>
          <Link href="/#products">Products</Link>
          <Link href="/#industries">Industries</Link>
          <Link href="/#highlights">Highlights</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
        <div className="lg:hidden">
          <Rows className="w-6 h-6" />
        </div>
      </div>
    </header>
  );
};

export default Header;
