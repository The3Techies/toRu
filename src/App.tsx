import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from './pages/Home/Home';
import WhyRussia from "./pages/WhyRussia/WhyRussia";
import Apply from "./pages/Apply/Apply";
import Cities from "./pages/Cities/Cities";
import City from "./pages/City/City";
import { MyProvider } from "./State/MyContext";


const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <div className="bg-[#262627]">
      <BrowserRouter>
        <ScrollToTop />
        <MyProvider>
        <Routes>
          
            <Route path="/" element={<Home />} />
            <Route path="/WhyRussia" element={<WhyRussia />} />
            <Route path="/Apply" element={<Apply />} />
            <Route path="/Cities" element={<Cities />} />
            <Route path="/City" element={<City />} />
        
        </Routes>
        </MyProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
