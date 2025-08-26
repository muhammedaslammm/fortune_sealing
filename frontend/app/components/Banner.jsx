const Banner = () => {
  return (
    <section>
      <div className="pt-[5rem] lg:pt-[6rem] space-y-6 lg:space-y-6">
        <div className="w-[95%] lg:w-[85%] mx-auto flex flex-col gap-2 lg:flex-row justify-between lg:items-end">
          <h1 className="w-full text-[1.8rem] lg:text-[3rem] font-semibold leading-[2rem] lg:leading-[3rem]">
            <span className="color--fade lg:block">We Are The</span>
            <span className="lg:block ml-[.5rem] lg:ml-0">Sealing Experts</span>
          </h1>
          <div className="text-[.9rem] lg:text-[1.4rem] color--fade lg:font-medium max-w-[35rem] leading-[1.1rem] lg:leading-[1.6rem] lg:text-end">
            Experts in sealing solutions for{" "}
            <span className="text-white">Oil & Gas</span> field equipments
          </div>
        </div>
        <div className="bg-[#fafcfb] h-[18rem] lg:h-[25rem] relative -z-10">
          <img
            src="/images/banner/banner_packer.png"
            alt="packer image banner"
            className="h-full absolute w-full left-[50%] top-[50%] -translate-y-[50%]  lg:w-full  -translate-x-[50%] object-cover border border-red-600"
          />
          {/* <video
            muted
            autoPlay
            loop
            src="/videos/rubber_seal_video_1.mp4"
            className="h-full absolute left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] object-cover"
          /> */}
        </div>
      </div>
    </section>
  );
};
export default Banner;
