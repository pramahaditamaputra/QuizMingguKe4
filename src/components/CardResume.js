const CardResume = ({
  resumeName,
  resumeRole,
  resumeYears,
  resumeDescription,
}) => {
  return (
    <>
      <div className="resume-item">
        <h3 className="section-item-title-1">{resumeName}</h3>
        <h4 className="graduation-time">
          {resumeRole} - {resumeYears}
        </h4>
        <div className="graduation-description">
          <p>{resumeDescription}</p>
        </div>
      </div>
    </>
  );
};

export default CardResume;
