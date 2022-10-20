import React from 'react';
import classes from './styles.module.scss';
import FacebookIcon from 'assets/images/facebook.svg';
import LinkedInIcon from 'assets/images/linkedin.svg';
import MenuIcon from 'assets/images/menu-icon.svg';

interface Props {
  openMainMenu?: () => void;
}

const Navigation: React.FC<Props> = (props) => {
  return (
    <div className={classes['navigation']}>
      <div className={classes['left']}>
        <p className={classes['full-name']}>Kai Nguyen</p>
      </div>
      <div className={classes['right']}>
        <div className={classes['social-networks']}>
          <a
            href='https://www.facebook.com/vimihi/'
            target='_blank'
            rel='noreferrer'
          >
            <img
              src={FacebookIcon}
              alt='Facebook'
              className={classes['social-network-item']}
            />
          </a>
          <a
            href='https://www.linkedin.com/in/prime-kai/'
            target='_blank'
            rel='noreferrer'
          >
            <img
              src={LinkedInIcon}
              alt='LinkedIn'
              className={classes['social-network-item']}
            />
          </a>
        </div>
        <img
          src={MenuIcon}
          alt='MenuIcon'
          className={classes['menu-icon']}
          onClick={props.openMainMenu}
        />
      </div>
    </div>
  );
};

export default Navigation;
