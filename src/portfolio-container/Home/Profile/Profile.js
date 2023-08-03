import React from "react";
import ScrollService from ".././../../utilities/ScrollService";
import "./Profile.css";
import Typical from "react-typical";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.linkedin.com/in/emmanuel-koech-a223a2171">
                <i className="fa fa-linkedin-square" />
              </a>
              <a href="https://link.medium.com/HfBBdSp8dzb">
                <i className="fa fa-medium" />
              </a>
              <a href="https://twitter.com/MutaiE1?t=ma8Q0Z81fkTMZpnbXEZEfw&s=09">
                <i className="fa fa-twitter" />
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Emmanuel</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    " Specialized in Data Visualization😎",
                    1000,
                    "Specialized in Data Analytics!💻",
                    1000,
                    "Specialized in Machine Learning!",
                    1000,
                  ]}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
              Data Scientist & Analyst located in Nairobi Kenya
            </span>
          </div>
          <div className="profile-options">
            <button
              className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              {" "}
              Hire Me{" "}
            </button>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
