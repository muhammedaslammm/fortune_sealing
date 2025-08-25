import Link from "next/link";

const Footer = () => {
  return (
    <footer className="section--footer">
      <div className="inner--section">
        <div className="flex flex-col gap-15 lg:gap-25">
          <div className="flex flex-col lg:flex-row justify-between gap-6">
            <div className="lg:w-1/2 space-y-1 lg:space-y-3">
              <div className="font--judson text-[1.6rem] lg:text-[3.5rem] leading-none">
                Fortune Sealing
              </div>
              <div className="footer--text !text-[.9rem] lg:!text-[1.2rem] text-justify">
                Fortune Sealing Equipment's Trading LLC is a trusted provider of
                high-performance rubber seals and precision-molded components
                for the Oil & Gas industry.
              </div>
            </div>
            <div className="lg:w-1/2 flex flex-col lg:flex-row lg:justify-end gap-8 lg:gap-16">
              <div className="footer--text flex flex-col gap-2 lg:gap-4">
                <div className="text-white">Links</div>
                <ul className="flex flex-col gap-1 lg:gap-2">
                  <Link href="/#about">About Us</Link>
                  <Link href="/#products">Products</Link>
                  <Link href="/#industries">Industries</Link>
                  <Link href="/#highlights">Highlights</Link>
                  <Link href="/#contact">Contact</Link>
                </ul>
              </div>
              <div className="footer--text w-[50%] space-y-2 lg:space-y-4">
                <div className="text-white">Contact</div>
                <ul className="space-y-1 lg:space-y-2">
                  <li>
                    Fortune Sealing Equipments Trading LLC, AM Facility, Office
                    No.31,M4 Musaffah Abu Dhabi U.A.E
                  </li>
                  <li>sample@gmail.com</li>
                  <li>+97126261225</li>
                  <li>+971504255636</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer--text flex flex-col lg:flex-row lg:justify-between gap-4">
            <div className="flex gap-4 lg:gap-8 justify-start text-[.9rem] lg:text-[1rem]">
              <div>Instagram</div>
              <div>Facebook</div>
              <div>X</div>
              <div>LinkedIn</div>
            </div>
            <div className="text-[.8rem] lg:text-[.9rem] self-end">
              &copy; {new Date().getFullYear()} Fortune Sealing | Privacy Policy
              |{" "}
              <Link href="https://bizdatatech.com/" className="hover:underline">
                Powered by BizdataTech Consultancy Limited, Kerala, India
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
