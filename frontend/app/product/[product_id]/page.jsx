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
import { useParams } from "next/navigation";

const ProductPage = () => {
  const { product_id } = useParams(); // dynamic segment

  // Find product based on id
  const product = products.find((p) => p.id === product_id);

  // If product not found
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
      <div className="w-[90%] mx-auto py-10 grid md:grid-cols-2 gap-8 items-start">
        {/* LEFT: Product Image */}
        <div className="w-full">
          <img
            src={product.image}
            alt={product.name}
            className="rounded-lg shadow-md w-full max-h-[400px] object-contain bg-gray-100"
          />
        </div>

        {/* RIGHT: Product Details */}
        <div className="space-y-6">
          <div>
            <h1 className="section_head--secondary">{product.name}</h1>
            <p className="text-gray-700 mt-2">{product.description}</p>
          </div>

          {product.features && (
            <div>
              <h2 className="text-xl font-semibold mb-2">Features:</h2>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
