import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import PreLoad from "./components/PreLoad";
import Home from "./pages/Home";
import CV from "./pages/CV";



function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    const img = new Image();
    img.src = "/assets/3.avif";
    img.onload = () => {
      clearTimeout(timeout);
      setIsLoading(false);
    };

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {isLoading && <PreLoad />}
      <div
        className={`transition-opacity duration-700 ease-in-out ${
          isLoading ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cv" element={<CV />} />
        </Routes>
        
        
      </div>
    </>
  );
}

export default App;
