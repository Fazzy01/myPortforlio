import './index.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Project from './components/Project';
import About from './components/About';

function App() {
  return (

    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/projects" element={<Project />} />
      <Route path="/about" element={<About />} />

    </Routes>

  );
}

export default App;
