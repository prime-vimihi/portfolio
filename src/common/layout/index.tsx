import React, { useState } from 'react';
import classes from './styles.module.scss';
import Background from 'assets/images/background.png';
import Navigation from 'common/navigation';
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import RightDrawer from 'common/RightDrawer';

const Layout: React.FC = (props) => {
  const [isOpenMainMenu, setIsOpenMainMenu] = useState(false);

  const closeMainMenuHandler = () => {
    setIsOpenMainMenu(false);
  };

  const openMainMenuHandler = () => {
    setIsOpenMainMenu(true);
  };
  return (
    <div className={classes['layout']}>
      <Navigation openMainMenu={openMainMenuHandler} />
      <img
        src={Background}
        alt='Background'
        className={classes['background']}
      />
      <div className={classes['body-wrapper']}>{props.children}</div>

      {/* MAIN MENU */}
      <RightDrawer
        isOpen={isOpenMainMenu}
        width='800px'
        onClose={closeMainMenuHandler}
        backgroundColor='linear-gradient(180deg, #0C2144 0%, #9A2F76 47.43%, #FD4C5B 100%)'
        classes={classes['main-menu']}
      >
        <div className={classes['main-menu-wrapper']}>
          <div className={classes['main-menu-items']}>
            <a
              href='#anchor-homepage'
              className={classes['item']}
              data-replace='Homepage'
              onClick={closeMainMenuHandler}
            >
              <span>Homepage</span>
            </a>
            <a
              href='#anchor-projects'
              className={classes['item']}
              data-replace='Project'
              onClick={closeMainMenuHandler}
            >
              <span>Project</span>
            </a>
            <a
              href='#anchor-about-me'
              className={classes['item']}
              data-replace='About Me'
              onClick={closeMainMenuHandler}
            >
              <span>About Me</span>
            </a>
            <a
              href='#anchor-get-in-touch'
              className={classes['item']}
              data-replace='Get In Touch'
              onClick={closeMainMenuHandler}
            >
              <span>Get In Touch</span>
            </a>
          </div>
          <div className={classes['social-networks']}>
            <a
              href='https://www.facebook.com/vimihi/'
              target='_blank'
              rel='noreferrer'
            >
              <FontAwesomeIcon icon={faFacebook} className={classes.icon} />
            </a>
            <a
              href='https://www.linkedin.com/in/prime-kai/'
              target='_blank'
              rel='noreferrer'
            >
              <FontAwesomeIcon icon={faLinkedin} className={classes.icon} />
            </a>
          </div>
        </div>
      </RightDrawer>
    </div>
  );
};

export default Layout;
