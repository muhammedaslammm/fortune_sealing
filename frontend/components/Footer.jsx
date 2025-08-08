import Link from "next/link";

const Footer = () => {
  return (
    <footer className="section--footer">
      <div className="inner--section">
        <div className="flex flex-col gap-30">
          <div className="flex justify-between">
            <div className="w-1/2 space-y-3">
              <div className="font--judson text-[3.5rem] leading-none">
                Fortune Sealing
              </div>
              <div className="footer--text !text-[1.2rem]">
                Fortune Sealing Equipment's Trading LLC is a trusted provider of
                high-performance rubber seals and precision-molded components
                for the Oil & Gas industry.
              </div>
            </div>
            <div className="w-1/2 flex justify-end gap-16">
              <div className="footer--text space-y-4">
                <div className="text-white">Links</div>
                <ul className="space-y-2">
                  <li>About Us</li>
                  <li>Products</li>
                  <li>Industries</li>
                  <li>Highlights</li>
                  <li>Contact</li>
                </ul>
              </div>
              <div className="footer--text w-[50%] space-y-4">
                <div className="text-white">Contact</div>
                <ul className="space-y-2">
                  <li>Sample-address St Jevel 323, Mar Streel Line 2</li>
                  <li>justsample@gmail.com</li>
                  <li>879-989-989</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between footer--text !text-[1rem]">
            <Link href="https://bizdatatech.com/">
              &copy; {new Date().getFullYear()} Fortune Sealing | Privacy Policy
              |{" "}
              <span className="hover:underline">
                Powered by BizdataTech Consultancy Limited, Kerala, India
              </span>
            </Link>
            <div className="flex gap-8">
              <div>Instagram</div>
              <div>Facebook</div>
              <div>X</div>
              <div>LinkedIn</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
