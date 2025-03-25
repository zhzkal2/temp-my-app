import { useState, useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Preloader from "./Components/Preloader";
import Home from "./pages/Home";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 2초 후에 로딩 상태를 변경하여 프리로더를 숨깁니다.
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <HashRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </HashRouter>
      )}
    </>
  );
}

export default App;
