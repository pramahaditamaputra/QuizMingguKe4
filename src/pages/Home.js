import axios from "axios";
import { useEffect } from "react";

const Home = ({ setShowMenu, setShowCardProfile }) => {
  useEffect(() => {
    setShowMenu("main-menu");
    setShowCardProfile("section-vcardbody section-home");
  }, []);

  return <></>;
};

export default Home;
