import { products } from "@/data/products";

const Products = () => {
  const all_products = products.reduce((array, element) => {
    array.push(...element.images);
    return array;
  }, []);
  return (
    <section className="pt-[4.5rem] bg-[#e7e7e7]">
      <div className="inner--section pb-8 space-y-2 lg:space-y-0">
        <h1 className="w-full text-[1.5rem] lg:text-[1.7rem] text-[#0f243d] font-medium text-start leading-[2.3rem]  lg:text-center underline">
          Fortune Sealings - Product Details
        </h1>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
          {all_products.map((product) => (
            <div className="bg-white flex flex-col justify-center items-center p-2">
              <img
                src={product.image}
                alt={product.title}
                className="w-[8rem] lg:w-[10rem] h-[8rem] lg:h-[15rem] object-contain"
              />
              <div className="text-[#0f243d] leading-[1.2rem] lg:leading-[1.6rem] lg:text-[1.1rem] text-center font-medium">
                {product.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
