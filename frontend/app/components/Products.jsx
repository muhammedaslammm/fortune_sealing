const Products = () => {
  return (
    <section className="section--secondary" id="products">
      <div className="inner--section">
        <div className="section--left section_head--secondary">
          Our Products
        </div>
        <div className="section--right">
          <div className="relative grid grid-cols-1 grid-rows-5 sm:grid-cols-2 sm:grid-rows-3 md:grid-cols-3 md:grid-rows-2  lg:grid-cols-2 lg:grid-rows-3 xl:grid-cols-3 xl:grid-rows-2 gap-4">
            <div className="image--box">
              <div className="image--text">Packer Elements</div>
              <img
                className="image"
                src="/images/packer_element.png"
                alt="packer element image"
              />
            </div>
            <div className="image--box">
              <div className="image--text">Backup Rings & O-Rings</div>
              <img
                className="image"
                src="/images/backup-o-rings.png"
                alt="backup and o rings image"
              />
            </div>
            <div className="image--box">
              <div className="image--text">BOP Inner & Outer Seals</div>
              <img
                className="image"
                src="/images/bop_inner-outer.png"
                alt="bop inner and outer image"
              />
            </div>
            <div className="image--box">
              <div className="image--text">Swab Cups & V Packings</div>
              <img
                className="image"
                src="/images/swabcup-vpack.png"
                alt="swab cup and v pack image"
              />
            </div>
            <div className="image--box xl:col-span-2">
              <div className="image--text !w-[15rem]">
                Hammer Union Seals & Stuffing Box Packings
              </div>
              <img
                className="image"
                src="/images/hammer_and_stuffing.png"
                alt="hammer and stuffing image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
