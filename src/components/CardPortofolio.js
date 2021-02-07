const CardPortofolio = ({ portofolioName }) => {
  return (
    <>
      <div className="project-item">
        <a
          href="img/portfolio/p1.jpg"
          className="project-thumbnail nivobox"
          data-lightbox-gallery="portfolio"
          style={{
            backgroundColor: "#FFA384",
          }}
        >
          <div className="project-description-wrapper">
            <div className="project-description">
              <h2 className="project-title">{portofolioName}</h2>
              <span className="see-more">Project Tags</span>
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

export default CardPortofolio;
