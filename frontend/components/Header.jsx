"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Rows, File } from "phosphor-react";
import ProductNav from "./ProductNav";

const Header = () => {
  const path = usePathname().split("/").filter(Boolean)[0];

  return (
    <header className="header">
      <div className="w-[95%] lg:w-[85%] mx-auto flex justify-between items-center py-3 lg:py-0">
        <div className="font-medium text-[1.1rem]">
          <Link href="/">
            <img
              src={"/images/logo/fortune_sealing_logo_1.png"}
              alt="Fortune Sealing Logo"
              className="w-[10rem] h-[2rem] lg:w-[12.5rem] lg:h-[2.8rem] object-cover -translate-x-[1.5rem] lg:-translate-x-[2rem]"
            />
          </Link>
        </div>
        <div className="flex items-center gap-6">
          <nav className="hidden lg:flex gap-6">
            <Link href="/">Home</Link>
            <Link href="/#about">About Us</Link>
            <Link href="/#products">Products</Link>
            <Link href="/#industries">Industries</Link>
            <Link href="/#highlights">Highlights</Link>
            <Link href="/#contact">Contact</Link>
          </nav>
          <Link
            href="/products"
            className="hidden lg:flex items-center gap-1 bg-[#2761ae] hover:bg-[#20559b] transition  py-5 px-2"
          >
            View Brochure <File weight="bold" className="w-5 h-5" />
          </Link>
        </div>

        <div className="lg:hidden">
          <Rows className="w-6 h-6" />
        </div>
      </div>
      {path === "product" && (
        <div className="bg-[#d2dce9]">
          <ProductNav />
        </div>
      )}
    </header>
  );
};

export default Header;
