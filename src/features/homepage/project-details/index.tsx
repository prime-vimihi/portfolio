import RightDrawer from 'common/RightDrawer';
import React from 'react';
import classes from './styles.module.scss';
import SiteSmartLogo from 'assets/images/logo-with-text-white.svg';
import SiteSmartProjectDetailsIMG from 'assets/images/sitesmart-project-details-img.png';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const ProjectDetails: React.FC<Props> = (props) => {
  return (
    <RightDrawer
      isOpen={props.isOpen}
      width='1200px'
      onClose={props.onClose}
      backgroundColor='linear-gradient(180deg, #0C2144 0%, #9A2F76 47.43%, #FD4C5B 100%)'
      classes={classes['project-details']}
    >
      <img
        src={SiteSmartLogo}
        alt='SiteSmart Logo'
        className={classes['project-logo']}
      />
      <div className={classes['wrapper']}>
        <p className={classes['title']}>SiteSmart Technology</p>
        <p className={classes['subtitle']}>Construction management system</p>
        <img
          src={SiteSmartProjectDetailsIMG}
          alt='SiteSmart Project'
          className={classes['details-image']}
        />
        <div className={classes['content-wrapper']}>
          {/* PROJECT DESCRIPTION SECTION */}
          <div className={classes['project-description']}>
            <p className={classes['content-title']}>Project Description</p>
            <div className={classes['content']}>
              <p className={classes['content-description']}>
                SiteSmart Technology is a software to manage construction
                plants, equipments, peoples, etc.
              </p>
              <p className={classes['content-description']}>
                It having 1 web application, 1 mobile application for worker,
                and 1 mobile application for manager.
              </p>
              <p className={classes['content-description']}>
                Highlight features:
              </p>
              <p className={classes['content-description']}>
                - Real time GPS tracking- track for total worked hours, worked
                distance of a plant. etc. <br />
                - Plant documentation exipry reminder <br />
                - Pre-start <br />
                - Timesheet/Dockets <br />- etc.
              </p>
            </div>
          </div>
          {/* MY RESPONSIBILITY */}
          <div className={classes['my-responsibility']}>
            <p className={classes['content-title']}>My Responsibility</p>
            <div className={classes['content']}>
              <p className={classes['content-description']}>
                In this project, I worked as many role: BA, Asscociated Project
                Manager, and Scrum Master
              </p>
              <div className={classes['my-responsibility-items']}>
                {/* BA */}
                <div className={classes['item']}>
                  <div className={classes['left']}>
                    <p className={classes['item-title']}>BA</p>
                  </div>
                  <div className={classes['right']}>
                    <p className={classes['content-description']}>
                      Collect and analyze user requirement, made SRS, FRS, and
                      related documentations.
                    </p>
                    <p className={classes['content-description']}>
                      Setup and organize user story on Jira
                    </p>
                    <p className={classes['content-description']}>
                      Making wireframe and also join the design progress as
                      giving idea and improve some UI design
                    </p>
                  </div>
                </div>
                {/* PM */}
                <div className={classes['item']}>
                  <div className={classes['left']}>
                    <p className={classes['item-title']}>PM</p>
                    <p className={classes['item-subtitle']}>Associated</p>
                  </div>
                  <div className={classes['right']}>
                    <p className={classes['content-description']}>
                      Working directly with Project Owner (client) to finalize
                      the project timeline (this project applied Agile Scrum
                      methodlogy)
                    </p>
                    <p className={classes['content-description']}>
                      Reading user story and planning task for each team member
                    </p>
                  </div>
                </div>
                {/* SM */}
                <div className={classes['item']}>
                  <div className={classes['left']}>
                    <p className={classes['item-title']}>SM</p>
                  </div>
                  <div className={classes['right']}>
                    <p className={classes['content-description']}>
                      Organize daily scrum meeting
                    </p>
                    <p className={classes['content-description']}>
                      Resolve team issues
                    </p>
                    <p className={classes['content-description']}>
                      Organize scrum report
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* MORE PROJECTS */}
          <div className={classes['more-projects']}>
            <p className={classes['content-title']}>Explore More Projects</p>
            <div className={classes['content']}>
              <p className={classes['content-description']}>
                I'm still building the page to show more projects that I've
                worked on. Please hold on!
              </p>
            </div>
          </div>
        </div>
      </div>
    </RightDrawer>
  );
};

export default ProjectDetails;
