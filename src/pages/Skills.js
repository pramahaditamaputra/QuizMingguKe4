import { useEffect } from "react";
import CardProfile from "../components/CardProfile";
import ProgressBar from "../components/ProgressBar";

const Skills = ({
  skills,
  setSkills,
  showSkills,
  setShowSkills,
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
      setShowSkills("section-vcardbody section-page section-page-active");
      setShowMenu("main-menu main-menu-pgactive");
    }, 100);
    return () => {
      setShowSkills("section-vcardbody section-page");
    };
  }, []);
  return (
    <>
      <div className={showSkills} id="page-skills">
        <div className="section-skills">
          <h2 className="section-title">SKILLS</h2>
          {skills.map((skill) => {
            return (
              <>
                <h3 className="section-item-title-2">
                  <i className="fa fa-users" />
                  &nbsp;&nbsp; {skill.title}
                </h3>
                <ul className="skills-list">
                  {skill.skills.map((skill) => {
                    return (
                      <>
                        <ProgressBar
                          skillName={skill.name}
                          skillPercentage={skill.percentage}
                        />
                      </>
                    );
                  })}
                </ul>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Skills;
