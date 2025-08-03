import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './Home';
import AboutPage from './About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;

