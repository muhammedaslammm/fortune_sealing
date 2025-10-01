import Link from "next/link";
import { products } from "@/data/products";
let product_lists = products.map(
  ({ id, name, path, banner_image, short_description, images }) => ({
    id,
    name,
    path,
    banner_image,
    short_description,
    products: images.slice(0, 4),
  })
);
const Products = () => {
  return (
    <section className="section--secondary pattern" id="products">
      <div className="inner--section ">
        <div className="section--left">
          <div className="section_head--secondary">Our Products</div>
        </div>
        <div className="section--right grid grid-cols-1 auto-rows-[22rem] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5  gap-4 mt-4 lg:mt-0">
          {product_lists.map((product, index) => (
            <Link
              key={index}
              href={product.path}
              className="group flex flex-col gap-0 bg-white"
            >
              <div className=" text-black text-center text-[1.3rem] font-medium py-[.3rem] border-b border-neutral-300">
                {product.name}
              </div>
              <div className="relative w-full h-full overflow-hidden">
                <div className="grid grid-cols-2 grid-rows-2 gap-[.1rem] h-full">
                  {product.products.map((p, i) => (
                    <img
                      key={i}
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-contain bg-white p-6"
                    />
                  ))}
                </div>

                <div className="absolute inset-0 hover_bg translate-x-[110%] group-hover:translate-x-0 transition-transform duration-200 p-4">
                  <div className="text-white">
                    <strong className="mr-1">{product.name}</strong>
                    <div>{product.short_description}</div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
