import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import styles from './styles.css';
import animations from './animation/animate.css';
import { Footer } from './components/Footer';
import { NavigationPanel } from './components/NavigationPanel';
import { personalProjects as personalProjectsData } from './data/personalProjects';
import { ProjectsView } from './components/ProjectsView';
import { ProjectView } from './components/ProjectView';

function Home() {
  const [isWide, setIsWide] = useState(false)


    function animSequence() {
      setTimeout(function () {
        // Animated loop X after initial intro anim
        document.getElementById('first').style.display = 'none'
      }, 9 * 1000)

      setTimeout(function () {
        document.getElementById('loop').style.display = 'block'
      }, 9 * 1000)
    }

    useEffect(() => {
      animSequence();

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

        <div className="main">

          <div className="biganimation">

            <div className="animation font_color wow fadeInUp" id="first">
              <img src="img/FinalIteration.gif" alt="" />
            </div>

            <div className="animation" id="loop">
              <img src="img/Loop.gif" alt="" />
            </div>
          </div>

          <NavigationPanel />

        </div>


        <ProjectsView>
          {/* Iterate over all the projects */}
          {personalProjectsData.map((project) => (
            <ProjectView
              key={project.name}
              projectData={project}
            />
          ))}
        </ProjectsView>
        </div>

        <Footer className={isWide ? '' : 'limit'} />
      </div>
    );
  }

export default Home;

