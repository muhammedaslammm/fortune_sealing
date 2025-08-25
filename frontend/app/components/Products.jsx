import Link from "next/link";

const Products = () => {
  return (
    <section className="section--secondary" id="products">
      <div className="inner--section">
        <div className="section--left">
          <div className="section_head--secondary">Our Products</div>
        </div>
        <div className="section--right">
          <div className="relative grid grid-cols-1 grid-rows-5 sm:grid-cols-2 sm:grid-rows-3 md:grid-cols-3 md:grid-rows-2  lg:grid-cols-2 lg:grid-rows-3 xl:grid-cols-3 xl:grid-rows-2 gap-4">
            {/* Packer Elements */}
            <Link href="/product/packer-elements">
              <div className="image--box cursor-pointer">
                <div className="image-text--secondary">Packer Elements</div>
                <img
                  className="image"
                  src="/images/products/packer_element.png"
                  alt="packer element image"
                />
              </div>
            </Link>

            {/* Backup Rings */}
            <Link href="/product/backup-rings-o-rings">
              <div className="image--box cursor-pointer">
                <div className="image-text--secondary">
                  Backup Rings & O-Rings
                </div>
                <img
                  className="image"
                  src="/images/products/backup-o-rings.png"
                  alt="backup and o rings image"
                />
              </div>
            </Link>

            {/* BOP Seals */}
            <Link href="/product/bop-seals">
              <div className="image--box cursor-pointer">
                <div className="image-text--secondary">
                  BOP Inner & Outer Seals
                </div>
                <img
                  className="image"
                  src="/images/products/bop_inner-outer.png"
                  alt="bop inner and outer image"
                />
              </div>
            </Link>

            {/* Swab Cups */}
            <Link href="/product/swab-cups-v-packings">
              <div className="image--box cursor-pointer">
                <div className="image-text--secondary">
                  Swab Cups & V Packings
                </div>
                <img
                  className="image "
                  src="/images/products/swabcup-vpack.png"
                  alt="swab cup and v pack image"
                />
              </div>
            </Link>

            {/* Hammer & Stuffing */}
            <Link href="/product/hammer-stuffing">
              <div className="image--box xl:col-span-2 cursor-pointer">
                <div className="image-text--secondary !w-[15rem]">
                  Hammer Union Seals & Stuffing Box Packings
                </div>
                <img
                  className="image"
                  src="/images/products/hammer_and_stuffing.png"
                  alt="hammer and stuffing image"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
