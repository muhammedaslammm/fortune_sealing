"use client";
import { useEffect, useState } from "react";
import { products } from "@/data/products";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ProductNav = () => {
  const [pathname, setPathname] = useState(usePathname());

  const nav_products = products.reduce((arr, product) => {
    arr.push({ id: product.id, title: product.name, path: product.path });
    return arr;
  }, []);

  useEffect(() => {}, []);
  return (
    <nav className="w-[95%] lg:w-[85%] mx-auto flex overflow-x-auto scrollbar">
      {nav_products.map((i, index) => (
        <Link
          key={index}
          href={i.path}
          className={`flex-none py-2 px-3 ${
            pathname === i.path
              ? "bg-[#6a8eb7] text-white"
              : "hover:bg-[#bacce1] active:bg-[#adc0d5]"
          } text-[.85rem]  text-[#0f243d] font-medium transition`}
          onClick={() => setPathname(i.path)}
        >
          {i.title}
        </Link>
      ))}
    </nav>
  );
};

export default ProductNav;
