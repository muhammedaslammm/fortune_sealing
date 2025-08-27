import { products } from "@/data/products";

const Products = () => {
  return (
    <section className="pt-[4.5rem] bg-[#e7e7e7] text-[#0f243d]">
      <div className="inner--section pb-8 space-y-2 lg:space-y-0">
        <h1 className="w-full text-[1.5rem] lg:text-[1.7rem] font-medium text-start leading-[2.3rem]  lg:text-center underline">
          Fortune Sealings - Product Details
        </h1>
        <div className="space-y-16">
          {products.map((product) => (
            <div key={product.id} className="space-y-2">
              <div className="text-[1.3rem] underline">{product.name}</div>
              <div className="grid grid-cols-2 lg:grid-cols-5 gap-2">
                {product.images.map((p, i) => (
                  <div
                    key={i}
                    className="bg-white flex flex-col justify-center items-center p-2"
                  >
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-[8rem] lg:w-[10rem] h-[8rem] lg:h-[13rem] object-contain"
                    />
                    <div className="text-[#0f243d] leading-[1.2rem] lg:leading-[1.6rem] lg:text-[1.1rem] text-center font-medium">
                      {p.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
