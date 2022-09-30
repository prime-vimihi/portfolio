import AboutImage from 'assets/images/about-image.png';
import Arrow from 'assets/images/arrow.png';
import Facebook from 'assets/images/facebook.svg';
import GetInTouch from 'assets/images/get-in-touch.png';
import LinkedIn from 'assets/images/linkedin.svg';
import ProjectSiteSmart from 'assets/images/project-sitesmart.png';
import AWS from 'assets/images/technology-icons/aws.png';
import Flutter from 'assets/images/technology-icons/flutter.png';
import NodeJS from 'assets/images/technology-icons/nodejs-logo.png';
import ReactJS from 'assets/images/technology-icons/reactjs.png';
import React, { useState } from 'react';
import AboutMeDetails from './about-me-details';
import ProjectDetails from './project-details';
import classes from './styles.module.scss';

export const Line = () => {
  return (
    <div className={classes['lines']}>
      <span className={classes['line-one']}></span>
      <span className={classes['line-two']}></span>
    </div>
  );
};

const Homepage = () => {
  const [isOpenProjectDetails, setIsOpenProjectDetails] = useState(false);
  const openProjectDetailsHandler = () => {
    setIsOpenProjectDetails(true);
  };
  const closeProjectDetailsHandler = () => {
    setIsOpenProjectDetails(false);
  };

  return (
    <div className={classes['homepage']}>
      <div className={classes['homepage-wrapper']}>
        {/* SECTION ONE */}
        <div className={classes['section-one']}>
          <p className={classes['section-title']}>
            Kai <br /> Nguyen
          </p>
          <Line />
          <p className={classes['section-description']}>
            business analyst / <br /> frontend developer
          </p>
          <a href='#anchor-section-two' className={classes['explore']}>
            <img src={Arrow} alt='Arrow' className={classes['arrow']} />
            Explore
          </a>
        </div>
        {/* SECTION TWO - PROJECT */}
        <div
          id='anchor-section-two'
          className={classes['anchor-section-two']}
        ></div>
        <div className={classes['section-two']}>
          <div className={classes['section-two-left']}>
            <p className={classes['section-sub-title']}>project /</p>
            <p className={classes['section-title']}>
              SiteSmart <br /> Technology
            </p>
            <Line />
            <p className={classes['section-description']}>management system</p>
            <div
              className={classes['explore']}
              onClick={openProjectDetailsHandler}
            >
              Explore
              <img src={Arrow} alt='Arrow' className={classes['arrow-right']} />
            </div>
            <div className={classes['technologies']}>
              <img src={ReactJS} alt='ReactJS' />
              <img src={NodeJS} alt='ReactJS' />
              <img src={Flutter} alt='ReactJS' />
              <img src={AWS} alt='ReactJS' />
            </div>
          </div>
          <div className={classes['section-two-right']}>
            <img
              src={ProjectSiteSmart}
              alt='project-sitesmart'
              className={classes['project-sitesmart']}
            />
          </div>
        </div>
        {/* SECTION THREE - ABOUT ME */}
        <div className={classes['section-three']}>
          <div className={classes['section-three-left']}>
            <p className={classes['section-title']}>About Me</p>
            <Line />
            <p className={classes['section-description']}>
              love analysis, coding, <br /> and much more
            </p>
            <div className={classes['explore']}>
              More Details
              <img src={Arrow} alt='Arrow' className={classes['arrow-right']} />
            </div>
          </div>
          <div className={classes['section-three-right']}>
            <img
              src={AboutImage}
              alt='project-sitesmart'
              className={classes['about-image']}
            />
          </div>
        </div>
        {/* SECTION FOUR - GET IN TOUCH */}
        <div className={classes['section-four']}>
          <div className={classes['section-four-left']}>
            <p className={classes['section-title']}>Get In Touch</p>
            <Line />
            <p className={classes['section-description']}>
              prime.vimihi@gmail.com <br />
              (+84) 707 577 026
            </p>
            <div className={classes['social-networks']}>
              <img src={Facebook} alt='Facebook' />
              <img src={LinkedIn} alt='linkedin' />
            </div>
          </div>
          <div className={classes['section-four-right']}>
            <img
              src={GetInTouch}
              alt='get-in-touch'
              className={classes['get-in-touch']}
            />
          </div>
        </div>
      </div>

      {/* PROJECT DETAILS MODAL */}
      <ProjectDetails
        isOpen={isOpenProjectDetails}
        onClose={closeProjectDetailsHandler}
      />

      {/* ABOUT ME DETAILS */}
      <AboutMeDetails />
    </div>
  );
};

export default Homepage;
