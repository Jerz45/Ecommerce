// import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./ui/molecules/NavBar";
import { homeRoutes } from "./Routes/routes";
// import { sampleProducts } from "./data";
// import Products from "./ui/pages/home/Products";
// import { useEffect } from "react";

function App() {
  return (
    <div>
      <Router>
        <NavBar />

        <Routes>
          {homeRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
