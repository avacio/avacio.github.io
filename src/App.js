import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './Home';
import AboutPage from './About';

import React, { useEffect, useState } from 'react';
import styles from './styles.css';
import animations from './animation/animate.css';
import { Footer } from './components/Footer';
import { NavigationPanel } from './components/NavigationPanel';
import { personalProjects as personalProjectsData } from './data/personalProjects';
import { ProjectsView } from './components/ProjectsView';
import { ProjectView } from './components/ProjectView';

function App() {
  return (
    <Router>
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav> */}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;

