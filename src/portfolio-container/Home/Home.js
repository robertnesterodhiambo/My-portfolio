import React from "react";
import Header from "./Header/Header";
import Profile from "./Profile/Profile";
import Footer from "./Footer/Footer";
import "./Home.css";

function Home(props) {
  return (
    <div className="home-container" id={props.id || ""}>
      <Header />
      <Profile />
      <Footer />
      <div className="icon">
        <a
          href="https://twitter.com/MutaiE1?t=ma8Q0Z81fkTMZpnbXEZEfw&s=09"
          className="facebook"
        >
          <i class="fa fa-twitter" aria-hidden="true"></i> Twitter{" "}
        </a>
        <a href="https://link.medium.com/HfBBdSp8dzb" className="twitter">
          {" "}
          <i class="fa fa-medium" aria-hidden="true"></i> Medium{" "}
        </a>
        <a href="https://www.linkedin.com/in/emmanuel-koech-a223a2171" className="twitter">
          {" "}
          <i class="fa fa-linkedin" aria-hidden="true"></i> Linkedin{" "}
        </a>
      </div>
    </div>
  );
}

export default Home;
