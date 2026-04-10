import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import Work from './pages/Work';
import Skills from './pages/Skills';
import Resources from './pages/Resources';
import Setup from './pages/Setup';

export default function App() {
  return (
    <BrowserRouter>
      <nav style={{ display: 'flex', gap: '10px' }}>
        <Link to="/">Home</Link>
        <Link to="/work">Work</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/resources">Resources</Link>
        <Link to="/setup">Setup</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/setup" element={<Setup />} />
      </Routes>
    </BrowserRouter>
  );
}
