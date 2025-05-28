import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import "./intro.css";
import { useEffect, useState } from "react";

const Intro = () => {
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div className="intro">
          <div className="intro-title">
            <h1 className="title">Flight Book </h1>
            <AutoStoriesIcon style={{ fontSize: "3.2rem", margin: "10px" }} />
          </div>
        </div>
      )}
    </>
  );
};

export default Intro;
