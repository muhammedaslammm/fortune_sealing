"use client";

import Link from "next/link";
import { Columns } from "phosphor-react";

const Header = () => {
  return (
    <header className="header">
      <div className="w-[95%] lg:w-[85%] mx-auto flex justify-between items-center py-3 lg:py-4">
        <div className="font-semibold text-[1.2rem]">Fortune Solutions</div>
        <nav className="hidden md:flex gap-8">
          <Link href="/">Home</Link>
          <Link href="#about">About Us</Link>
          <Link href="#products">Products</Link>
          <Link href="industries">Industries</Link>
          <Link href="highlights">Highlights</Link>
          <Link href="contact">Contact</Link>
        </nav>
        <div className="md:hidden">
          <Columns className="w-6 h-6" />
        </div>
      </div>
    </header>
  );
};

export default Header;
