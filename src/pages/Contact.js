import { useEffect } from "react";
import Form from "../components/Form";

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
              src="https://maps.google.com/maps?q=JL.%20Gracia%207&t=k&z=17&ie=UTF8&iwloc=&output=embed"
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
          <Form />
        </div>
      </div>
    </>
  );
};

export default Contact;
