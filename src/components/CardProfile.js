const CardProfile = ({
  showCardProfile,
  setShowCardProfile,
  personalInfo,
  setPersonalInfo,
}) => {
  return (
    <>
      <div className={showCardProfile} id="section-home">
        <div className="vcard-profile-pic">
          <img src={personalInfo.image} id="profile2" alt="" />
          <img
            src={personalInfo.image}
            id="profile1"
            className="profileActive"
            alt=""
          />
        </div>

        <div className="vcard-profile-description">
          <h1 className="profile-title">
            <span className="color1">{personalInfo.name}</span>
          </h1>
          <h2 className="profile-subtitle">{personalInfo.job}</h2>

          <hr className="hr1" />
          <div className="vcard-profile-description-text">
            <p>{personalInfo.bio}</p>
          </div>

          <div className="vcard-profile-description-feature">
            <div className="vcard-profile-description-ft-item">
              <p>
                email: {personalInfo.email} | phone: {personalInfo.phoneNumber}
              </p>
            </div>
          </div>
        </div>

        <div className="vcard-footer">
          <div className="footer-social-icons">
            <a href={personalInfo.instagram} target="_blank" rel="noreferrer">
              <i className="fa fa-instagram" />
            </a>
            <a href={personalInfo.facebook} target="_blank" rel="noreferrer">
              <i className="fa fa-facebook" />
            </a>
            <a href={personalInfo.twitter} target="_blank" rel="noreferrer">
              <i className="fa fa-twitter" />
            </a>
            <a href={personalInfo.linkedIn} target="_blank" rel="noreferrer">
              <i className="fa fa-linkedin" />
            </a>
            <a href={personalInfo.youtube} target="_blank" rel="noreferrer">
              <i className="fa fa-youtube" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardProfile;
