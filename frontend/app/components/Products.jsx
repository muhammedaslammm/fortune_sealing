import Link from "next/link";
import { products } from "@/data/products";
let product_lists = products.map(
  ({ id, name, path, banner_image, short_description }) => ({
    id,
    name,
    path,
    banner_image,
    short_description,
  })
);
const Products = () => {
  return (
    <section className="bg-pattern" id="products">
      <div className="inner--section">
        <div className="section--left">
          <div className="section_head--secondary">Our Products</div>
        </div>
        <div className="section--right grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-4 lg:mt-0">
          {product_lists.map((product, index) => (
            <Link
              key={index}
              href={product.path}
              className="hover:-translate-y-[.25rem] transition-transform"
            >
              <div className="image--box xl:col-span-2  cursor-pointer">
                <div className="text_color--secondary text-[1.8rem] font-medium w-[10rem] leading-[2.2rem]">
                  {product.name}
                </div>
                <div className="mt-auto text_color--secondary text max-w-[30rem] text-[1.2rem] leading-[1.5rem]">
                  {product.short_description}
                </div>
                <img
                  className="absolute top-[0rem] right-[.5rem] h-[8rem] w-[8rem] lg:h-[9rem] lg:w-[9rem] xl:w-[10rem] xl:h-[10rem] object-contain"
                  src={product.banner_image}
                  alt={product.name}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
