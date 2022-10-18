import RightDrawer from 'common/RightDrawer';
import React from 'react';
import classes from './styles.module.scss';
import Avatar from 'assets/images/avatar.jpg';
import DomainManagement from 'assets/images/domain-management.png';
import DomainEcommerce from 'assets/images/domain-ecommerce.png';
import DomainWebsite from 'assets/images/domain-website.png';
import DomainFinancial from 'assets/images/domain-financial.png';
import Slider from 'react-slick';

const AboutMeDetails = () => {
  const settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    // fade: true,
    speed: 3000,
    // pauseOnHover: false,
    cssEase: 'linear',
    // adaptiveHeight: true,
    // variableWidth: true,
    className: classes.toolSlider,
    arrows: false,
    // dots: true,
    // draggable: true,
  };
  return (
    <RightDrawer
      isOpen={true}
      width='1200px'
      onClose={() => {}}
      backgroundColor='linear-gradient(180deg, #0C2144 0%, #9A2F76 47.43%, #FD4C5B 100%)'
      classes={classes['about-me-details']}
    >
      <img src={Avatar} alt='Avatar' className={classes['avatar']} />
      <p className={classes['slogan']}>Life Is A Journey</p>
      <div className={classes['wrapper']}>
        <div className={classes['title-wrapper']}>
          <p className={classes['full-name']}>PHAT NGUYEN TAN</p>
          <p className={classes['short-name']}>KAI</p>
          <p className={classes['job-title']}>BUSINESS ANALYST</p>
          <p className={classes['year-of-exp']}>+5 years of experience</p>
        </div>
        {/* SECTION 1 */}
        <div className={classes['section']}>
          <p className={classes['section-title']}>Who am i</p>
          <div className={classes['section-wai-description']}>
            <p className={classes['wai-item']}>
              Hi everyone, my name is Phat Nguyen Tan (aka. Kai)
            </p>
            <p className={classes['wai-item']}>
              I was born in 1996 and currently living at Ho Chi Minh city,
              Vietnam
            </p>
            <p className={classes['wai-item']}>
              I graduated in 2019 with Information System domain. During the 3rd
              terms of university, I’ve started an BA intership at an
              outsourcing company.
            </p>
          </div>
        </div>
        {/* SECTION 2 */}
        <div className={classes['section']}>
          <p className={classes['section-title']}>Experienced Domains</p>
          <div className={classes['domain-wrapper']}>
            <div className={classes['domain-item']}>
              <img
                src={DomainManagement}
                alt='Domain Management'
                className={classes['domain-image']}
              />
              <p className={classes['domain-name']}>
                <span>Management system</span>
                <span className={classes['domain-description']}>
                  (CRM, ERP, etc.)
                </span>
              </p>
            </div>
            <div className={classes['domain-item']}>
              <img
                src={DomainFinancial}
                alt='Domain Management'
                className={classes['domain-image']}
              />
              <p className={classes['domain-name']}>Financial system</p>
            </div>
            <div className={classes['domain-item']}>
              <img
                src={DomainEcommerce}
                alt='Domain Management'
                className={classes['domain-image']}
              />
              <p className={classes['domain-name']}>E-commerce</p>
            </div>
            <div className={classes['domain-item']}>
              <img
                src={DomainWebsite}
                alt='Domain Management'
                className={classes['domain-image']}
              />
              <p className={classes['domain-name']}>Informaton website</p>
            </div>
          </div>
        </div>
        {/* SECTION 3 - STRENGTH */}
        <div className={classes['section']}>
          <div className={classes['strength-wrapper']}>
            <p className={classes['section-title']}>STRENGTH</p>
            <div className={classes['strength-items-wrapper']}>
              <div className={classes['strength-item']}>
                <p className={classes['strength-item-title']}>Curiousity</p>
                <p className={classes['strength-item-description']}>
                  5+ years experience as BA showed me that learning is a life
                  long process and curiosity is a key to success.
                </p>
              </div>
              <div className={classes['strength-item']}>
                <p className={classes['strength-item-title']}>Patient</p>
                <p className={classes['strength-item-description']}>
                  Never give up on any idea or project till i explore all
                  solutions and options for it.
                </p>
              </div>
              <div className={classes['strength-item']}>
                <p className={classes['strength-item-title']}>UX/UI</p>
                <p className={classes['strength-item-description']}>
                  Strong as UX/UI when making wireframe for both Web app and
                  Mobile app.
                </p>
              </div>
              <div className={classes['strength-item']}>
                <p className={classes['strength-item-title']}>
                  Technical Background
                </p>
                <p className={classes['strength-item-description']}>
                  Well technical background with OOP, C#, ReactJS, Flutter, HTML
                  & CSS, Database (Sql server, MySQL).
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* SECTION 4 - TOOLS*/}
        <div className={classes['section']}>
          <p className={classes['section-title']}>Tools</p>
          <div className={classes['tools-wrapper']}>
            <div className={classes['tools-box']}>
              <Slider {...settings}>
                <div className={classes['tool-img-wrapper']}>
                  <img
                    src={DomainEcommerce}
                    alt='tool'
                    className={classes['tool-img']}
                  />
                </div>
                <div>
                  <img
                    src={DomainFinancial}
                    alt='tool'
                    className={classes['tool-img']}
                  />
                </div>
                <div>
                  <img
                    src={DomainManagement}
                    alt='tool'
                    className={classes['tool-img']}
                  />
                </div>
                <div>
                  <img
                    src={DomainWebsite}
                    alt='tool'
                    className={classes['tool-img']}
                  />
                </div>
                <div className={classes['tool-img-wrapper']}>
                  <img
                    src={DomainEcommerce}
                    alt='tool'
                    className={classes['tool-img']}
                  />
                </div>
                <div>
                  <img
                    src={DomainFinancial}
                    alt='tool'
                    className={classes['tool-img']}
                  />
                </div>
                <div>
                  <img
                    src={DomainManagement}
                    alt='tool'
                    className={classes['tool-img']}
                  />
                </div>
                <div>
                  <img
                    src={DomainWebsite}
                    alt='tool'
                    className={classes['tool-img']}
                  />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </RightDrawer>
  );
};

export default AboutMeDetails;
