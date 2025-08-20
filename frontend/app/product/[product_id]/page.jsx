"use client";

import { products } from "@/data/products";
import { packerElements } from "@/data/packerElementsData";
import { useParams } from "next/navigation";

const ProductPage = () => {
  const { product_id } = useParams();

  // Find product by id
  const product = products.find((p) => p.id === product_id);

  return (
    <div className="page--product text-black">
      <div className="w-[95%] lg:w-[85%] mx-auto">
        {product ? (
          <div className="space-y-14">
            <div className="md:space-y-2 lg:space-y-4">
              <h1 className="page--product-heading">{product.name}</h1>
              <div className="page--product-text">{product.description}</div>
            </div>
            <div className="space-y-2">
              <div className="text-[1rem] lg:text-[1.2rem]">{`Our ${product.name} products :`}</div>
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
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
