import { useEffect, useState } from "react";
import CardResume from "../components/CardResume";

const Resume = ({
  resumes,
  setResumes,
  showResume,
  setShowResume,
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
      setShowResume("section-vcardbody section-page section-page-active");
      setShowMenu("main-menu main-menu-pgactive");
    }, 100);
    return () => {
      setShowResume("section-vcardbody section-page");
    };
  }, []);

  return (
    <>
      <div className={showResume} id="page-resume">
        <div className="section-education">
          <h2 className="section-title">Resume</h2>

          {resumes.map((resume) => {
            return (
              <>
                <h2 className="section-title2">
                  <i className="fa fa-university" />
                  &nbsp; {resume.title}
                </h2>
                {resume.resumes.map((resume) => {
                  return (
                    <>
                      <CardResume
                        resumeName={resume.name}
                        resumeRole={resume.role}
                        resumeYears={resume.years}
                        resumeDescription={resume.description}
                      />
                    </>
                  );
                })}
              </>
            );
          })}
        </div>

        <div className="page-footer">
          <div className="resume-buttons">
            <a href="#" className="btn btn-default btn-default2">
              <i className="fa fa-download" />
              &nbsp; Download my resume
            </a>
            <a
              href="#page-contact"
              className="btn btn-default btn-default2 link-page"
            >
              <i className="fa fa-download" />
              &nbsp; Get in Touch
            </a>
          </div>
          <p className="footer-quote">
            "The best way to predict the future is to create it" <br />
            <i>Peter Drucker</i>
          </p>
        </div>
      </div>
    </>
  );
};

export default Resume;
