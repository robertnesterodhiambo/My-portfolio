import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";

import "./AboutMe.css";

const AboutMe = (props) => {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTANTS = {
    description:
      "As a skilled Data Analyst with experience in statistical analysis, data visualization, and machine learning techniques, I am eager to leverage my expertise to make a significant impact in the field of data science. I possess a detail-oriented and analytical approach, which enables me to identify trends, patterns, and insights that inform strategic decision-making. My proficiency in data cleaning, transformation, and visualization using tools such as Python, SQL, Excel, and Power BI makes me a valuable asset to any organization.I have experience collaborating with interdisciplinary teams to achieve project goals, and my excellent communication skills allow me to convey complex data- driven insights to diverse audiences. I am dedicated to staying up-to - date with the latest industry trends and continuously expanding my skills and knowledge in the data science field.I am excited to bring my passion and expertise to a dynamic and innovative organization where I can contribute to the success of the team and help drive business growth.",
    highlights: {
      bullets: [
        "DATA VISUALISATION  Great experience in discovering the best ways to present data using a variety of visual techniques",
        "DATA ANALYTICS  Well practiced in analyzing massive amounts of informations to pinpoint trends and patterns",
        "MACHINE LEARNING  Skilled in implementing machine learning algorithms to build predictive models",
        "DATABASES  Knowledge of database development and experience writing queries"
      ],
      heading: "Here are a Few Highlights:",
    },
  };

  const renderHighlights = () => {
    return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="about-me-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
              </div>
              {renderHighlights()}
            </div>
            <div className="about-me-options">
              <button
                className="btn primary-btn"
                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              >
                {" "}
                Hire Me{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
