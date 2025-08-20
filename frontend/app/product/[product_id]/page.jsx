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
          <div className="space-y-12">
            <div className="space-y-4">
              <h1 className="page--product-heading">{product.name}</h1>
              <div className="page--product-text">{product.description}</div>
            </div>
            <div className="space-y-2">
              <div className="text-[1.2rem]">{`Our ${product.name} products :`}</div>
              <div className="w-full grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <div
                    key={index}
                    className="border border-[#BABABA] bg-[#dddddd] hover:bg-[#e1e1e1] transition bg- p-4 flex flex-col items-center justify-center gap-5 rounded-[.5rem]"
                  >
                    <img
                      src={image.image}
                      alt={image.title}
                      className="w-[12rem] h-[10rem] object-contain"
                    />
                    <div className="text-center leading-[1.4rem] min-w-[20rem]">
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
