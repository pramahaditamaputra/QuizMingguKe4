import { useEffect } from "react";
import CardPortofolio from "../components/CardPortofolio";

const Portofolio = ({
  portofolios,
  setPortofolios,
  showPortofolio,
  setShowPortofolio,
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
      setShowPortofolio("section-vcardbody section-page section-page-active");
      setShowMenu("main-menu main-menu-pgactive");
    }, 100);
    return () => {
      setShowPortofolio("section-vcardbody section-page");
    };
  }, []);
  return (
    <div className={showPortofolio} id="page-portfolio">
      <div className="section-portfolio">
        <h2 className="section-title">Portfolio</h2>
        <div className="projects-list">
          {portofolios.map((portofolio, index) => {
            return (
              <div key={index}>
                <CardPortofolio portofolioName={portofolio.name} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portofolio;
