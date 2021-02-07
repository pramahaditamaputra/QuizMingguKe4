const Form = () => {
  return (
    <>
      <form id="contactForm" method="post" className="form">
        <div className="form-group">
          <input
            className="form-control required"
            id="name"
            name="name"
            placeholder="Name"
            type="text"
            required
          />
        </div>
        <div className="form-group">
          <input
            className="form-control required"
            id="email"
            name="email"
            placeholder="Email"
            type="email"
            required
          />
        </div>
        <div className="form-group">
          <input
            className="form-control required"
            id="subject"
            type="text"
            name="subject"
            placeholder="Subject"
            required
          />
        </div>
        <div className="form-group">
          <textarea
            className="form-control required"
            id="message"
            name="message"
            placeholder="Message"
            rows={5}
            required
            defaultValue={""}
          />
        </div>
        <div className="form-group">
          <input
            type="submit"
            className="btn btn-default form-send"
            defaultValue="Send!"
          />
        </div>
      </form>
    </>
  );
};

export default Form;
