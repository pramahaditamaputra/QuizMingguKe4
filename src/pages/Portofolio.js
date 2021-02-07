import { useEffect } from "react";

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
          {portofolios.map((portofolio) => {
            return (
              <>
                <div className="project-item">
                  <a
                    href="img/portfolio/p1.jpg"
                    className="project-thumbnail nivobox"
                    data-lightbox-gallery="portfolio"
                    style={{
                      backgroundImage: 'url("img/portfolio/thumb-p1.jpg")',
                    }}
                  >
                    <div className="project-description-wrapper">
                      <div className="project-description">
                        <h2 className="project-title">{portofolio.name}</h2>
                        <span className="see-more">Project Tags</span>
                      </div>
                    </div>
                  </a>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portofolio;
