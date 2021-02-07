import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CardProfile from "../components/CardProfile";

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
                      <div className="resume-item">
                        <h3 className="section-item-title-1">{resume.name}</h3>
                        <h4 className="graduation-time">
                          {resume.role} - {resume.years}
                        </h4>
                        <div className="graduation-description">
                          <p>{resume.description}</p>
                        </div>
                      </div>
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
