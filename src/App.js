import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Home />} />

      </Routes>
    </BrowserRouter>

  );
}

export default App;
