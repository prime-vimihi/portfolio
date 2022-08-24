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
            <a href='/' className={classes['item']} data-replace='Homepage'>
              <span>Homepage</span>
            </a>
            <a
              href='#anchor-section-two'
              className={classes['item']}
              data-replace='Project'
            >
              <span>Project</span>
            </a>
            <a href='/' className={classes['item']} data-replace='About Me'>
              <span>About Me</span>
            </a>
            <a href='/' className={classes['item']} data-replace='Get In Touch'>
              <span>Get In Touch</span>
            </a>
          </div>
          <div className={classes['social-networks']}>
            <FontAwesomeIcon icon={faFacebook} className={classes.icon} />
            <FontAwesomeIcon icon={faLinkedin} className={classes.icon} />
          </div>
        </div>
      </RightDrawer>
    </div>
  );
};

export default Layout;
