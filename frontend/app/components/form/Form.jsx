import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const Form = () => {
  return (
    <div className="relative bg-[#F8F8F8] min-h-[550px] px-10 py-8 rounded-[.5rem]">
      <div className="text-black flex flex-col md:flex-row gap-4 w-full">
        <div className="form--section">
          <div className="space-y-1">
            <div className="form--label">Name</div>
            <input
              type="text"
              placeholder="Eg: Simon"
              className="form--input"
            />
          </div>
          <div className="space-y-1">
            <div className="form--label">Message</div>
            <textarea
              rows={10}
              name=""
              id=""
              placeholder="Eg: This is a sample text just to represent that this input box takes lengthy comment from the user"
              className="form--input"
            ></textarea>
          </div>
        </div>
        <div className="form--section">
          <div className="space-y-1">
            <div className="form--label">Email</div>
            <input
              type="emial"
              className="form--input"
              placeholder="Eg: simon002@gmail.com"
            />
          </div>
          <div className="space-y-1">
            <div className="form--label">Phone</div>
            <input
              type="tel"
              placeholder="Eg: 8970293829"
              className="form--input"
            />
          </div>
          <div className="self-start lg:self-end mt-4">
            <button className="form--button">Submit Enquiry</button>
          </div>
        </div>
      </div>
      <img
        src="/images/form/contact_pic.png"
        alt="packer elements image"
        className="hidden lg:block absolute bottom-0 right-0 w-[22rem] h-[15rem] object-contain"
      />
    </div>
  );
};

export default Form;
