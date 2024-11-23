import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './src/pages/HomePage/HomePage';
import FilterPage from './src/pages/ProductFilterPage/ProductFilter';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product-filter" element={<FilterPage />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
