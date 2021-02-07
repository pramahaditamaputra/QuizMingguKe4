import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
const MainMenu = ({ showMenu, setShowMenu }) => {
  return (
    <Router>
      <div className={showMenu} id="main-menu">
        <ul className="main-menu-list">
          <li>
            <LinkContainer to="/Home">
              <a className="link-home">Home</a>
            </LinkContainer>
          </li>
          <li>
            <LinkContainer to="/Resume">
              <a className="link-page">Resume</a>
            </LinkContainer>
          </li>
          <li>
            <LinkContainer to="/Skills">
              <a className="link-page">Skills</a>
            </LinkContainer>
          </li>
          <li>
            <LinkContainer to="/Portofolio">
              <a className="link-page">Portfolio</a>
            </LinkContainer>
          </li>
          <li>
            <LinkContainer to="/Blog">
              <a className="link-page">Blog</a>
            </LinkContainer>
          </li>
          <li>
            <LinkContainer to="/Contact">
              <a className="link-page">Contact</a>
            </LinkContainer>
          </li>
        </ul>
      </div>
    </Router>
  );
};

export default MainMenu;
