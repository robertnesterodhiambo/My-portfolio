import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA */
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillsDetails = [
    { skill: "Python", icon: "https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png" },
    { skill: "Tableau", icon: "https://cdn.filepicker.io/api/file/jZDILlufSOSDOkuJTZ7J" },
    { skill: "SQL", icon: "https://cdn-icons-png.flaticon.com/512/4299/4299956.png" },
    { skill: "Microsoft Azure", icon: "https://arunpotti.files.wordpress.com/2021/12/microsoft_azure.svg_.png" },
    { skill: "R programming", icon: "https://cdn-icons-png.flaticon.com/512/2103/2103694.png" },
    { skill: "Microsoft power BI", icon: "https://1000logos.net/wp-content/uploads/2022/08/Microsoft-Power-BI-Logo.png" },
    { skill: "Excel", icon: "https://w7.pngwing.com/pngs/117/809/png-transparent-microsoft-excel-training-computer-software-microsoft-office-excel-template-angle-text-thumbnail.png" },
  ];

  const projectsDetails = [
    {
      title: "Data-Science-Jobs-EDA",
      duration: { fromDate: "2023", toDate: "2023" },
      description:
        "The project seeks to establish various insights about data science jobs across the globe in select countries.",
      subHeading: "Technologies used: Jupyter Notebook",
    },

    {
      title: "SENTIMENT ANALYSIS ON TWEETS",
      duration: { fromDate: "2023", toDate: "2023" },
      description:
        "Utilized R Studio to perform sentiment analysis on 14,000 tweeter reviews of six major airlines Performed data cleaning and text analysis to successfully identified the major complaints for each airline Applied regression and machine learning to produce a final model with an accuracy of 88 % and lift of 34 % ",
      subHeading: "Technologies used: Jupyter Notebook"
    },
    {
      title: "CUSTOMER SALES ANALYSIS",
      duration: { fromDate: "2023", toDate: "2023" },
      description:
        "Utilized SQL to extract data from 8 different related tables from customer sales databases",
      subHeading: "Technologies used: Jupyter Notebook"
    },
  ];

  const resumeDetails = [
    /* EDUCATION */
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Jomo Kenyatta University"}
        subHeading={"BACHELOR OF SCIENCE IN FINANCIAL ENGINEERING"}
        description={"Majors: Probability & Statistics, Time Series Analysis, Calculus, Stochastic Processes, R programming, Linear Algebra"}
        fromDate={"2018"}
        toDate={"present"}
      />
    </div>,
    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={" KPMG VIRTUAL INTERNSHIP PROGRAM"}
          subHeading={"Junior Data Consultant"}
          fromDate={"April 2023"}
          toDate={"Present"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Data Quality Assessment: Assessment of data quality and completeness in preparation for analysis.<br />
            Data Insights: Targeting high value customers based on customer demographics and attributes.
          </span>
        </div>
        <ResumeHeading
          heading={" AZUBI AFRICA"}
          subHeading={"Data Analytics Intern"}
          fromDate={"Dec 2022"}
          toDate={"March 2023"}
        />

        <div className="experience-description">
          <span className="resume-description-text">
            Collected, analyzed and interpreted data to identify trends and insights<br />
            Created interactive dashboards and reports using Power BI to communicate data insights to stakeholders<br />
            Developed data models and performed advanced data analysis using Python and MySQL<br />
            Conducted research and prepared data visualizations to support business development initiatives
            Supported ongoing projects by providing data analytics support
          </span>

        </div>
      </div>
    </div >,
    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <img src={skill.icon} height='50' />
          </div>
        </div>
      ))}
    </div>,
    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,
    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Playing the Guitar"
        description="During mental breaks, I enjoy strumming familiar chords on the guitar as I work on perfecting the skill."
      />
      <ResumeHeading
        heading="Gardening"
        description="Having practiced as a farmer previously, I enjoy gardening. The  joy that comes with watching crops grow after some care is mind relieving!"
      />
      <ResumeHeading
        heading="Sight seeing"
        description="I have an eye for landscapes, vast lands and sunsets. Each time I'm out, away from concrete blocks things get clearer and bleak becomes lucid."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
