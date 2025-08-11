import React, { useEffect, useState } from 'react';
import styles from './styles.css';
import { Footer } from './components/Footer';
import { NavigationPanel } from './components/NavigationPanel';
import { personalProjects as personalProjectsData } from './data/personalProjects';
import { proProjects as proProjectsData } from './data/proProjects';
import { ProjectsView } from './components/ProjectsView';
import { ProjectView } from './components/ProjectView';
import { ProjectLinkPreview } from './components/ProjectLinkPreview';

const AnimLoadState = Object.freeze({
  UNLOADED: 0,
  STATIC_LOADED: 1,
  ANIM_LOADED: 2
});

function Home() {
  const [isWide, setIsWide] = useState(false);
  const [animLoadState, setAnimLoaded] = useState(AnimLoadState.UNLOADED);
  const onAnimLoaded = () => {
    setAnimLoaded(AnimLoadState.ANIM_LOADED);
  }

  const onStaticImageLoaded = () => {
    if (animLoadState == AnimLoadState.UNLOADED) {
      setAnimLoaded(AnimLoadState.STATIC_LOADED);
    }
  }

  useEffect(() => {
      // Handler to update window size state
      const handleResize = () => {
        setIsWide(window.innerWidth > 900);
      };
    // console.log(`screen width: ${document.documentElement.clientWidth}`);

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

        <div className={animLoadState == AnimLoadState.UNLOADED ? "loading-splash show" : animLoadState == AnimLoadState.STATIC_LOADED ? "loading-splash hide" : "loading-splash displayNone"}><div className={animLoadState == AnimLoadState.UNLOADED ? "loader" : "displayNone"}></div></div>

        <div id="body" className={isWide ? 'limit1200' : 'limit400'}>
        <div className="main">
            <div className="nameTitle">alexis gervacio</div>
          <div className="biganimation">
              <div className="animation" id="loop" >
                {<img src="img/sisyphus-transparent.png"
                    className="staticAnimFrame"
                    onLoad={onStaticImageLoaded}
                    fetchPriority="high"
                  />}

                {animLoadState >= AnimLoadState.STATIC_LOADED && <img id="sisyphusAnim" key="img/sisyphus.gif"
                  src={document.documentElement.clientWidth <= 576 ? "img/sisyphus-transparent-576w.gif" :
                    document.documentElement.clientWidth <= 768 ?
                      "img/sisyphus-transparent-768w.gif" :
                      "img/sisyphus-transparent-1152w.gif"
                  }

                  type="image/gif"
                  fetchPriority="low"
                  onLoad={onAnimLoaded} />}
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

