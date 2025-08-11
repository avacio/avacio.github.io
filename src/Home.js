import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React, { useEffect, useState, useRef } from 'react';
import styles from './styles.css';
import { Footer } from './components/Footer';
import { NavigationPanel } from './components/NavigationPanel';
import { personalProjects as personalProjectsData } from './data/personalProjects';
import { proProjects as proProjectsData } from './data/proProjects';
import { ProjectsView } from './components/ProjectsView';
import { ProjectView } from './components/ProjectView';
import { ProjectLinkPreview } from './components/ProjectLinkPreview';


function Home() {
  const [isWide, setIsWide] = useState(false);
  const [isAnimLoaded, setAnimLoaded] = useState(0);

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

  }, []); // Empty dependency array ensures it runs only once

  useEffect(() => {
    document.getElementById('vidLoop').addEventListener('loadeddata', function () {
      // Video is loaded and can be played
      if (isAnimLoaded == 0) {
        setAnimLoaded(1);
      }
      setTimeout(() => {
        setAnimLoaded(2);
      }, 3000);
    }, false);
  }, []);

    return (
      <div className="App">

        <div className={isAnimLoaded == 0 ? "loading-splash show" : isAnimLoaded == 1 ? "loading-splash hide" : "loading-splash displayNone"}><div className={isAnimLoaded == 0 ? "loader" : "displayNone"}></div></div>

        <div id="body" className={isWide ? 'limit1200' : 'limit400'}>

        <div className="main">
            <div className="nameTitle">alexis gervacio</div>
          <div className="biganimation">
              <div className="animation" id="loop" >
                <video id="vidLoop" autoPlay="autoplay" loop="loop" muted="" playsInline loading="eager"
                  alt="Animation of a girl rolling a rock up a mountain like Sisyphus."><source src="img/sisyphus.mp4" type="video/mp4" /></video>
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

