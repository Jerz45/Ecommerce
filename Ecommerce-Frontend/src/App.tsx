// import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { dashBoardRoutes, homeRoutes } from "./Routes/routes";
// import LoginForm from "./ui/pages/home/LoginForm";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {homeRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>

        <Routes>
          {dashBoardRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
        {/* <LoginForm/> */}
      </Router>
    </div>
  );
}

export default App;
