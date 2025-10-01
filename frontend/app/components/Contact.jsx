import Form from "./form/Form";

const Contact = () => {
  return (
    <section className="section--secondary pattern !mt-0" id="contact">
      <div className="inner--section">
        <div className="section--left">
          <div className="section_head--secondary">Contact Us</div>
        </div>
        <div className="section--right">
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
