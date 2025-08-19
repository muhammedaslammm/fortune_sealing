// "use client";

// import { products } from "@/data/products";
// import { useParams } from "next/navigation";

// const ProductPage = () => {
//   const params = useParams(); // dynamic segment
//   const { product_id } = params;

//   const product = products.find((product) => product.id === product_id);

//   return (
//     <section className="page--product">
//       <div className="w-[90%] mx-auto">
//         <div className="space-y-2">
//           <h1 className="section_head--secondary">Product: {product.name}</h1>
//           <p className="text-black">{product.description}</p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductPage;
"use client";

import { products } from "@/data/products";
import { packerElements } from "@/data/packerElementsData";
import { useParams } from "next/navigation";

const ProductPage = () => {
  const { product_id } = useParams();

  // Find product by id
  const product = products.find((p) => p.id === product_id);

  // Product not found
  if (!product) {
    return (
      <section className="page--product">
        <div className="w-[90%] mx-auto py-10 text-center">
          <h1 className="text-2xl font-bold text-red-600">Product Not Found</h1>
          <p className="text-gray-600">
            The product you’re looking for doesn’t exist.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="page--product">
      <div className="w-[90%] mx-auto py-10 grid md:grid-cols-2 gap-8 items-start border-b border-[#BABABA] pb-10">
        {/* LEFT: Product Image */}
        <div className="w-full">
          <img
            src={product.image}
            alt={product.name}
            className="rounded-lg shadow-md w-full max-h-[400px] object-contain bg-gray-100 border border-[#BABABA]"
          />
        </div>

        {/* RIGHT: Product Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold" style={{ color: "#0F243D" }}>
              {product.name}
            </h1>
            <p className="mt-2 text-black">{product.description}</p>
          </div>

          {product.features && (
            <div>
              <h2
                className="text-xl font-semibold mb-2"
                style={{ color: "#0F243D" }}
              >
                Features:
              </h2>
              <ul className="list-disc list-inside space-y-1 text-black">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* 🔹 EXTRA: Packer Elements (only for Packer Elements product) */}
      {product.id === "packer-elements" && (
        <div className="w-[90%] mx-auto py-10">
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#0F243D" }}>
            Available Packer Elements
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {packerElements.map((element) => (
              <div
                key={element.id}
                className="border border-[#BABABA] rounded-lg p-4 shadow-sm hover:shadow-md transition bg-white text-center"
              >
                <img
                  src={element.image}
                  alt={element.name}
                  className="w-full h-32 object-contain mb-3"
                />
                <h3 className="text-lg font-semibold text-black">
                  {element.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductPage;
