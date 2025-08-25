"use client";

import { CaretDown } from "phosphor-react";
import { products } from "@/data/products";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

const ProductPage = () => {
  const { product_id } = useParams();
  const [currentProduct, setCurrentProduct] = useState(product_id);
  const [dropdown, setDropdown] = useState(false);

  // Find product by id
  const product = products.find((p) => p.id === product_id);

  return (
    <div className="page--product text-black">
      <div className="w-[95%] lg:w-[85%] mx-auto">
        {product ? (
          <div className="space-y-10 lg:space-y-14">
            <div className="md:space-y-1 lg:space-y-4">
              <h1 className="page--product-heading">{product.name}</h1>
              <div className="page--product-text">{product.description}</div>
            </div>
            <div className="space-y-6">
              <div className="hidden md:flex border-b border-neutral-300">
                {products.map((product) => (
                  <Link
                    key={product.id}
                    href={`/product/${product.id}`}
                    className={`text-[1.1rem] px-4 py-2  transition ${
                      currentProduct === product.id
                        ? "bg-[#0f243d] text-white"
                        : "hover:bg-neutral-300"
                    }`}
                  >
                    {product.name}
                  </Link>
                ))}
              </div>
              <div className="border border-neutral-300 md:hidden"></div>
              <div className="relative sm:w-1/2 -mt-3 flex items-center gap-4 md:hidden">
                <div className="text-[1.1rem]">Products:</div>
                <div
                  className="form--input flex justify-between items-center cursor-pointer"
                  onClick={() => setDropdown(!dropdown)}
                >
                  {product.name}
                  <CaretDown
                    weight="bold"
                    className={`${
                      dropdown ? "rotate-180" : "rotate-0"
                    } transition`}
                  />
                </div>
                <div
                  className={`absolute top-10 w-full bg-white flex flex-col border border-neutral-300 transition-all duration-200 ease-in-out overflow-y-hidden  ${
                    dropdown
                      ? "max-h-80 opacity-100 shadow-md"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {products.map((p) => (
                    <Link
                      key={p.id}
                      href={`/product/${p.id}`}
                      className="py-2 px-2 hover:bg-neutral-300"
                      onClick={() => setDropdown(false)}
                    >
                      {p.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                {/* <div className="text-[1rem] lg:text-[1.2rem]">{`Our ${product.name} products :`}</div> */}
                <div className="w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
                  {product.images.map((image, index) => (
                    <div
                      key={index}
                      className="border border-[#BABABA] bg-[#f9f9f9] hover:bg-[#ffffff] transition bg- p-4 flex flex-col items-center justify-center gap-5 rounded-[.5rem]"
                    >
                      <img
                        src={image.image}
                        alt={image.title}
                        className="w-[9rem] h-[6rem] sm:w-[10rem] sm:h-[7rem] md:w-[9rem] xl:w-[12rem] md:h-[8rem] xl:h-[10rem] object-contain"
                      />
                      <div className="text-center text-[.9rem] md:text-[1rem] leading-[1.4rem] ">
                        {image.title}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
