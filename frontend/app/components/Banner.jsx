const Banner = () => {
  return (
    <section>
      <div className="w-[85%] mx-auto pt-[2.5rem]">
        <div className="flex justify-between items-end">
          <h1 className="text-[3rem] font-semibold flex flex-col leading-[3rem]">
            <span className="color--fade">We Are The</span>
            <span>Sealing Experts</span>
          </h1>
          <div className="text-[1.4rem] color--fade font-medium w-full max-w-[35rem] leading-[1.6rem] text-end">
            Experts in sealing solutions for{" "}
            <span className="text-white">Oil & Gas</span> field equipments
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
};
export default Banner;
