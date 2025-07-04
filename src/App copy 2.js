import React from 'react';
import { useState } from "react";
import styles from './styles.css';
import { Footer } from './components/Footer';
import { NavigationPanel } from './components/NavigationPanel';
import { personalProjects as personalProjectsData } from './data/personalProjects';
import { ProjectsView } from './components/ProjectsView';
import { ProjectView } from './components/ProjectView';
// import useScript from './hooks/useScript';

function updateSize(e) {
  if ((window).width() > 900) {
    document('#body').addClass('limit1200');
    document('#body').removeClass('limit400');
    document('#contact').removeClass('limit');
  } else {
    document('#body').addClass('limit400');
    document('#body').removeClass('limit1200');
    document('#contact').addClass('limit');
  }
}

class App extends React.Component {

  animSequence()
  {
    setTimeout(function () {
      // Animated loop X after initial intro anim
      document.getElementById('first').style.display = 'none'
    }, 9 * 1000)

    setTimeout(function () {
      document.getElementById('loop').style.display = 'block'
    }, 9 * 1000)
  }

  componentDidMount() {
    this.animSequence();
  }

  render() {

    return (
      <div className="App">
        {/* <body id="top" cz-shortcut-listen="true"> */}
        {/* <body id="top"> */}
        {/* <div id="body"> */}

        <header>
          <span id="logo" className="scroll"><a href="https://avacio.github.io/#home"><img href="index.html" src="img/shuffle-logo.png" alt="" /></a></span>
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

        </div>


        <NavigationPanel />

        <ProjectsView>
          {/* Iterate over all the projects */}
          {personalProjectsData.map((project) => (
            <ProjectView
              key={project.name}
              projectData={project}
            />
          ))}
        </ProjectsView>

        {/* </div> */}
        <Footer />
        {/* </body>  */}
      </div>
    );
  }
}

export default App;

