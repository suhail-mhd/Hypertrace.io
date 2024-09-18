import Footer from "components/footer/FooterAuthDefault";
import authImg from "assets/img/auth/auth.png";
import { Link, Routes, Route, Navigate } from "react-router-dom";
import routes from "routes.js";
import FixedPlugin from "components/fixedPlugin/FixedPlugin";
import Video from "../../assets/img/auth/video.mp4";
import bgDot from "../../assets/img/auth/Dot.png";
import SignIn from "views/auth/SignIn";
import "./auth.css";

export default function Auth() {
  // const getRoutes = (routes) => {
  //   return routes.map((prop, key) => {
  //     if (prop.layout === "/auth") {
  //       return (
  //         <Route path={`/${prop.path}`} element={prop.component} key={key} />
  //       );
  //     } else {
  //       return null;
  //     }
  //   });
  // };
  document.documentElement.dir = "ltr";
  return (
    <>
      <FixedPlugin />
      <div className="bgContainer">
        <div className="overlay"></div>
        <div className="bgVideo-container">
          <video className="bgVideo" src={Video} autoPlay loop muted />
        </div>
        <div className="card-box">
          <div>
            <SignIn />
            <img src={bgDot} alt="" className="bgDot1" />
            <img src={bgDot} alt="" className="bgDot2" />
          </div>
        </div>
      </div>
      <div className="foot">
        <Footer />
      </div>
    </>
  );
}
