import Link from "next/link";
import { products } from "@/data/products";
let product_lists = products.map(
  ({ id, name, path, banner_image, description }) => ({
    id,
    name,
    path,
    banner_image,
    description,
  })
);
const Products = () => {
  return (
    <section className="section--secondary" id="products">
      <div className="inner--section">
        <div className="section--left flex justify-between items-center">
          <div className="section_head--secondary">Our Products</div>
        </div>
        <div className="section--right grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 lg:mt-0">
          {product_lists.map((product) => (
            <Link href={product.path} className="flex-none">
              <div className="image--box xl:col-span-2 cursor-pointer">
                <div className="image-text--secondary !w-[15rem]">
                  {product.name}
                </div>
                <img
                  className="image"
                  src={product.banner_image}
                  alt="hammer and stuffing image"
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
