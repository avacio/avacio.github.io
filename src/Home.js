import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import styles from './styles.css';
import { Footer } from './components/Footer';
import { NavigationPanel } from './components/NavigationPanel';
import { personalProjects as personalProjectsData } from './data/personalProjects';
import { proProjects as proProjectsData } from './data/proProjects';
import { ProjectsView } from './components/ProjectsView';
import { ProjectView } from './components/ProjectView';
import { ProjectLinkPreview } from './components/ProjectLinkPreview';

function Home() {
  const [isWide, setIsWide] = useState(false)


    function animSequence() {
      // setTimeout(function () {
      //   // Animated loop X after initial intro anim
      //   document.getElementById('first').style.display = 'none'
      // }, 9 * 1000)

      setTimeout(function () {
        document.getElementById('loop').style.display = 'block'
      }, 9 * 1000)
    }

    useEffect(() => {
      // animSequence();

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

    }, []); // Empty dependency array ensures it runs only once

    return (
      <div className="App">

        <div id="body" className={isWide ? 'limit1200' : 'limit400'}>

          {/* <header>
            <span id="logo" className="scroll"><Link to="/"><img src="img/shuffle-logo.png" alt="" /></Link></span>
        </header> */}

        <div className="main">
            <div className="nameTitle">alexis gervacio</div>
          <div className="biganimation">

            <div className="animation" id="loop">
                <img src="img/sisyphus.gif" alt="" />
            </div>
          </div>

          <NavigationPanel />

        </div>


        <ProjectsView>
            <h1>Public Professional Projects</h1>

          <div className="ProProjectsContainer">
          {/* Iterate over all the projects */}
            {proProjectsData.map((project) => (
              <ProjectLinkPreview
                key={project.name}
                projectData={project}
              />
            ))}
            </div>

            <h1>Personal and School Projects</h1>
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

