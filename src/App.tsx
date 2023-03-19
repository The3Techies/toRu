import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from './pages/Home/Home';
import WhyRussia from "./pages/Why Russia/WhyRussia";
import Apply from "./pages/Apply/Apply";
import Cities from "./pages/Cities/Cities";
import City from "./pages/City/City";


const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/WhyRussia" element={<WhyRussia />} />
          <Route path="/Apply" element={<Apply />} />
          <Route path="/Cities" element={<Cities />} />
          <Route path="/City" element={<City />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
 
}

export default App
