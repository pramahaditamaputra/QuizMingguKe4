import Loader from "./components/Loader";
import CardProfile from "./components/CardProfile";
import Skills from "./pages/Skills";
import Portofolio from "./pages/Portofolio";
import Resume from "./pages/Resume";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import { LinkContainer } from "react-router-bootstrap";
import { useState } from "react";

function App() {
  const [showResume, setShowResume] = useState(
    "section-vcardbody section-page"
  );
  const [showSkills, setShowSkills] = useState(
    "section-vcardbody section-page"
  );
  const [showPortofolio, setShowPortofolio] = useState(
    "section-vcardbody section-page"
  );
  const [showContact, setShowContact] = useState(
    "section-vcardbody section-page"
  );
  const [showCardProfile, setShowCardProfile] = useState(
    "section-vcardbody section-home"
  );
  const [showBlog, setShowBlog] = useState("section-vcardbody section-page");
  const [showMenu, setShowMenu] = useState("main-menu");
  const [skills, setSkills] = useState([
    {
      title: "Programming Languages, Libraries & Frameworks",
      skills: [
        { name: "PHP", percentage: 100 },
        { name: "Laravel", percentage: 100 },
        { name: "Swift", percentage: 100 },
        { name: "JavaScript", percentage: 100 },
        { name: "ReactJS", percentage: 100 },
        { name: "JQuery", percentage: 100 },
        { name: "Bootstrap", percentage: 100 },
        { name: "Materialize", percentage: 100 },
        { name: "Restful API", percentage: 100 },
      ],
    },
    {
      title: "Database, Reporting Tools, Cloud Server",
      skills: [
        { name: "MySQL", percentage: 100 },
        { name: "DoomPDF", percentage: 100 },
        {
          name: "Amazon Web Services",
          percentage: 100,
        },
      ],
    },
    {
      title: "Other Technical Skills",
      skills: [
        { name: "Microsoft (Word, PowerPoint, Visio) ", percentage: 100 },
        { name: "Hardware and software Troubleshooting", percentage: 100 },
        { name: "Figma", percentage: 100 },
        { name: "MarvelApp", percentage: 100 },
        { name: "Xcode", percentage: 100 },
        { name: "Visual Studio Code", percentage: 100 },
        { name: "Git & Github", percentage: 100 },
      ],
    },
  ]);

  const [resumes, setResumes] = useState([
    {
      title: "Formal Education",
      resumes: [
        {
          name: "BINUS University",
          role: "Bachelor Degree (S1), Computer Science.",
          years: "2016 - 2020",
          description: `Majoring Computer Science, Minoring Software Engineering`,
        },
      ],
    },
    {
      title: "Informal Education",
      resumes: [
        {
          name: "Bootcamp Juara Coding",
          role: "Student",
          years: "January 2020",
          description: `The Bootcamp course aims to teach their students to becomefull-stack developers by introducing learners about modern stacktechnology such as :
            • Javascript Fundamental
            • ReactJs, React-Native, Redux, React-Hooks Fundamental
            • NodeJS, ExpressJS Fundamental`,
        },
        {
          name: "Apple Developer Academy | Indonesia",
          role: "Student",
          years: "March 2019 – January 2020",
          description: `The Apple Developer Academy @ BINUS is Asia's first-ever initiative to    empower Indonesia's economy by creating world-class developers for the world's most innovative and vibrant app ecosystem.
          The 10-month journey supports you to develop your own apps and become a well-rounded professional.`,
        },
        {
          name: "Indonesia Android Kejar",
          role: "Student",
          years: "February 2018",
          description: `The Bootcamp course aims to teach their students to become
                        android developers by introducing learners about android mobile
                        app development stack technology such as :
                        • Java Fundamental
                        • Android Studio
                        • Basic Android Mobile App Development`,
        },
        {
          name: "iOS Foundation - Apple Developer Academy | Indonesia",
          role: "Student",
          years: "June – July 2017",
          description: `The iOS Foundation course aims to teach their students to
                        become world-class developers by introducing learners to app
                        development on the iOS platform. `,
        },
      ],
    },
    {
      title: "Work Experience",
      resumes: [
        {
          name:
            "PT Leastric Teknologi Indonesia, Founder, Full-Stack Developer",
          role: "Founder & Full-Stack Developer",
          years: "September 2019 - Current",
          description: `As a Founder Full-Stack Developer my main responsibilities are:
                        • Manage Leastric application backend codebase
                        • Manage Leastric AWS Server
                        • Manage Leastric Official Website ( https://leastric.com )`,
        },
        {
          name: "Apple Developer Academy | Indonesia, Intern - iOS Developer",
          role: "iOS Developer",
          years: "March 2019 – January 2020",
          description: `As an Intern iOS Developer my main responsibilities are:
                        • Business Development :
                        Make the business model and creating idea to be
                        developed as an App
                        • User Research:
                        Do the market and user research and analyze the data that
                        has been collected
                        • App Development:
                        Do the Mobile Development (iOS Platform)`,
        },
        {
          name: "Viewen.com, Intern – Server Administrator",
          role: "Server Administrator",
          years: "August 2017 – July 2018",
          description: `As an Intern – Server Administrator my main responsibilities are:
                        • Create Daily Monitoring Report Data from WHM Panel
                        • Monitoring Server From WHM Panel
                        • Troubleshooting viewen’s customer servers problem.`,
        },
      ],
    },
    {
      title: "Organizational Experience",
      resumes: [
        {
          name: "BINUS Student Learning Community (BSLC) – IT Development",
          role: "IT Development",
          years: "January 2017 – January 2018",
          description: `As an IT Development my main responsibilities are:
                        • Create Apps for BSLC Needs
                        • Maintain or scalling up the existing Apps
                        • Manage BSLC Wordpress Website`,
        },
      ],
    },
  ]);

  const [portofolios, setPortofolios] = useState([
    { name: "Logbook Mentoring Online Web App" },
    { name: "Recruitment BINUS Student Learning Community (BSLC) Web App" },
    { name: "Dashboard Leastric Web App" },
    { name: "Leastric REST API" },
    { name: "KCF Resto Web App" },
  ]);

  const [personalInfo, setPersonalInfo] = useState({
    name: "Pramahadi Tama Putra",
    address: "JL. Gracia 7 Blok F1 No.6",
    phoneNumber: "087889901930",
    email: "pramahadi.putra@gmail.com",
    job: "Software Engineer",
    bio: `Software Engineer who have skills in Web App Development. Has excellent team-work and
          collaboration skills. Eager to learn new skills and meet new challenges in dynamic work and a multi-cultural environment.`,
    facebook: "https://www.facebook.com/PramahadiTamaPutra/",
    instagram: "https://www.instagram.com/pramahaditamaputra/?hl=cs",
    linkedIn: "https://www.linkedin.com/in/pramahadi-tama-putra-832634145/",
    twitter: "",
    youtube: "",
    image: "img/hadi.jpeg",
  });

  return (
    <div className="container-fluid">
      <Loader />
      <CardProfile
        personalInfo={personalInfo}
        setPersonalInfo={setPersonalInfo}
        showCardProfile={showCardProfile}
        setShowCardProfile={setShowCardProfile}
      />
      <Router>
        <div className={showMenu} id="main-menu">
          <ul className="main-menu-list">
            <li>
              <LinkContainer to="/Home">
                <a className="link-home text-center">Home</a>
              </LinkContainer>
            </li>
            <li>
              <LinkContainer to="/Resume">
                <a className="link-page text-center">Resume</a>
              </LinkContainer>
            </li>
            <li>
              <LinkContainer to="/Skills">
                <a className="link-page text-center">Skills</a>
              </LinkContainer>
            </li>
            <li>
              <LinkContainer to="/Portofolio">
                <a className="link-page text-center">Portfolio</a>
              </LinkContainer>
            </li>
            <li>
              <LinkContainer to="/Blog">
                <a className="link-page text-center">Blog</a>
              </LinkContainer>
            </li>
            <li>
              <LinkContainer to="/Contact">
                <a className="link-page text-center">Contact</a>
              </LinkContainer>
            </li>
          </ul>
        </div>
        <Switch>
          <Route path="/Home">
            <Home
              showCardProfile={showCardProfile}
              setShowCardProfile={setShowCardProfile}
              showMenu={showMenu}
              setShowMenu={setShowMenu}
            />
          </Route>
          <Route path="/Resume">
            <Resume
              resumes={resumes}
              setResumes={setResumes}
              showResume={showResume}
              setShowResume={setShowResume}
              showCardProfile={showCardProfile}
              setShowCardProfile={setShowCardProfile}
              showMenu={showMenu}
              setShowMenu={setShowMenu}
            />
          </Route>
          <Route path="/Skills">
            <Skills
              skills={skills}
              setSkills={setSkills}
              showSkills={showSkills}
              setShowSkills={setShowSkills}
              showCardProfile={showCardProfile}
              setShowCardProfile={setShowCardProfile}
              showMenu={showMenu}
              setShowMenu={setShowMenu}
            />
          </Route>
          <Route path="/Portofolio">
            <Portofolio
              portofolios={portofolios}
              setPortofolios={setPortofolios}
              showPortofolio={showPortofolio}
              setShowPortofolio={setShowPortofolio}
              showCardProfile={showCardProfile}
              setShowCardProfile={setShowCardProfile}
              showMenu={showMenu}
              setShowMenu={setShowMenu}
            />
          </Route>
          <Route path="/Blog">
            <Blog
              showBlog={showBlog}
              setShowBlog={setShowBlog}
              showCardProfile={showCardProfile}
              setShowCardProfile={setShowCardProfile}
              showMenu={showMenu}
              setShowMenu={setShowMenu}
            />
          </Route>
          <Route path="/Contact">
            <Contact
              personalInfo={personalInfo}
              setPersonalInfo={setPersonalInfo}
              showContact={showContact}
              setShowContact={setShowContact}
              showCardProfile={showCardProfile}
              setShowCardProfile={setShowCardProfile}
              showMenu={showMenu}
              setShowMenu={setShowMenu}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
