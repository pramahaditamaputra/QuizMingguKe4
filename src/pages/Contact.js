import { useEffect } from "react";

const Contact = ({
  personalInfo,
  setPersonalInfo,
  showContact,
  setShowContact,
  showCardProfile,
  setShowCardProfile,
  showMenu,
  setShowMenu,
}) => {
  useEffect(() => {
    setTimeout(() => {
      setShowCardProfile(
        "section-vcardbody section-home ps-container section-vcardbody-pgactive"
      );
      setShowContact("section-vcardbody section-page section-page-active");
      setShowMenu("main-menu main-menu-pgactive");
    }, 100);
    return () => {
      setShowContact("section-vcardbody section-page");
    };
  }, []);

  return (
    <>
      <div className={showContact} id="page-contact">
        <div className="section-contact">
          <h2 className="section-title">Contact</h2>
          <div className="map">
            <div className="map-overlay" />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8352.985568651915!2d-0.12905994797222892!3d51.50665753790812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C+UK!5e0!3m2!1spt-BR!2sbr!4v1443128181953"
              height={250}
              style={{ border: 0 }}
              allowFullScreen
            />
          </div>
          <div className="contact-infos">
            <h4 className="contact-subtitle-1">
              <i className="fa fa-map" />
              &nbsp; Address
            </h4>
            <p>{personalInfo.address}</p>
            <h4 className="contact-subtitle-1">
              <i className="fa fa-phone-square" />
              &nbsp; Phone
            </h4>
            <p>{personalInfo.phoneNumber}</p>
            <h4 className="contact-subtitle-1">
              <i className="fa fa-envelope" />
              &nbsp; Mail
            </h4>
            <p>{personalInfo.email}</p>
          </div>
          <h4 className="contact-subtitle-1">
            <i className="fa fa-paper-plane-o" />
            &nbsp; Send Me a Message
          </h4>
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
        </div>
      </div>
    </>
  );
};

export default Contact;
