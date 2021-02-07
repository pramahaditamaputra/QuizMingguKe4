import { useEffect, useState } from "react";

const Loader = () => {
  const [hideLoader, setHideLoader] = useState({});

  useEffect(() => {
    setTimeout(() => setHideLoader({ display: "none" }), 3000);
  });

  return (
    <>
      <div className="loader-container" id="page-loader" style={hideLoader}>
        <div className="loading-wrapper">
          <div className="loader-animation" id="loader-animation">
            <span className="loader">
              <span className="loader-inner" />
            </span>
          </div>
          <div className="loader-name" id="loader-name">
            <strong>Pramahadi Tama Putra</strong>
          </div>
          <p className="loader-job" id="loader-job">
            Software Engineer
          </p>
        </div>
      </div>
    </>
  );
};

export default Loader;
