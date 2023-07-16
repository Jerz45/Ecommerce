// import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./ui/molecules/NavBar";
import { homeRoutes } from "./Routes/routes";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        {homeRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    
    </Router>
  );
}

export default App;
