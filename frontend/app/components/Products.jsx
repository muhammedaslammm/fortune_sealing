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
    <section className="section--secondary" id="products">
      <div className="inner--section">
        <div className="section--left">
          <div className="section_head--secondary">Our Products</div>
        </div>
        <div className="section--right grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mt-4 lg:mt-0">
          {product_lists.map((product, index) => (
            <Link
              key={index}
              href={product.path}
              className="hover:-translate-y-[.25rem] transition-transform"
            >
              <img
                src={product.banner_image}
                alt={product.name}
                className="w-full h-full object-contain"
              />
              <div className="text_color--primary">{product.name}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
