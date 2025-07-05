import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
// import styles from '././styles.css';
// import animations from '././animation/animate.css';
import { Footer } from '././components/Footer';
import { NavigationPanel } from '././components/NavigationPanel';

function About() {
  const [isWide, setIsWide] = useState(false)
  const today = new Date();
  const options = { weekday: "long" };
  const dayString = new Intl.DateTimeFormat("en-US", options).format(today);

    useEffect(() => {

      // Handler to update window size state
      const handleResize = () => {
        setIsWide(window.innerWidth > 900);
      };

      handleResize();
      // Add event listener for 'resize'
      window.addEventListener('resize', handleResize);

      // Clean up function to remove event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };

    }, []); // Empty dependency array ensures it runs only onc

    return (
      <div className="App">

        <div id="body" className={ isWide ? 'limit1200' : 'limit400' }>

          <header>
            <span id="logo" className="scroll"><Link to="/"><img src="img/shuffle-logo.png" alt="" /></Link></span>
          </header>

          <div className="about-columns">
          <div className="me">
            <img src="img/green_me.jpg" alt=""/>
            </div>
          <div className="about">
            <h1>Hey there!</h1>
            <p>You have reached Alexis Gervacio.</p>
              <img className="seeANeed" src="img/seeANeedFillANeed.jpeg" alt="" />
              <p>Like Bigweld from Robots, I’m a self-starter motivated by creating solutions that solve real world problems. My strength lies in my ability to adapt quickly and wear different hats depending on what the team needs at the moment.
                I'm passionate about the creative applications of technology: particularly mobile development, game development and extended reality. There are so many intersectional possibilites in these fields (i.e. <a href='https://www.vfxvoice.com/nonny-de-la-pena-pioneering-vr-and-immersive-journalism/'>immersive journalism, pioneered by Nonny de la Pena</a>), and I am always excited to stretch the limits of this tech even further!
              </p><br/>
              <p>In my free time I like to make music, play volleyball, and cry to some feel-good movies. Thanks for taking the time to read my profile, and I hope you have a great {dayString}!</p>
            </div>

            </div>
        </div>

        <Footer className={isWide ? '' : 'limit'} />
      </div>
    );
  }

export default About;

