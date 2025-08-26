import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/productsDatas"; // single file that holds all categories

// Reusable block: left heading + right grid
const CategoryBlock = ({ id, name, images }) => (
  <div className="inner--section py-8" id={id}>
    <div className="section--left">
      <div className="section_head--secondary">{name}</div>
    </div>

    {/* Responsive grid: 1 col mobile, 2 col tablet, 4 col desktop */}
    <div className="section--right grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4 lg:mt-0">
      {images.map((img, index) => (
        <div
          key={index}
          className="image--box hover:-translate-y-[3px] transition-transform"
        >
          <div className="image-text--secondary">{img.title}</div>
          <Image
            src={img.image}
            alt={img.title}
            width={800}
            height={600}
            className="image object-contain"
            priority={false}
          />
        </div>
      ))}
    </div>
  </div>
);

export default function ProductImagesPage() {
  return (
    <section className="section--secondary">
      {/* Top header + quick jump pills */}
      <div className="inner--section">
        <div className="w-full mb-6 flex flex-wrap items-center justify-between gap-3">
          <h1 className="text-3xl font-bold text-[#0F243D]">All Products</h1>

          <nav className="flex flex-wrap gap-2">
            {products.map((c) => (
              <a
                key={c.id}
                href={`#${c.id}`}
                className="px-3 py-1 rounded-md text-white"
                style={{ backgroundColor: "#0F243D" }}
              >
                {c.name}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Category sections */}
      {products.map((c) => (
        <CategoryBlock key={c.id} {...c} />
      ))}

      {/* Back button */}
      <div className="inner--section">
        <div className="w-full text-center mt-10">
          <Link
            href="/#products"
            className="inline-block px-4 py-2 rounded-md"
            style={{ backgroundColor: "#0F243D", color: "white" }}
          >
            ← Back to Products
          </Link>
        </div>
      </div>
    </section>
  );
}
