import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/home-page";
import { PlanePage } from "./pages/plane-page";
import { CreatePlanePage } from "./pages/create-plane";
import { path } from './path'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path={`${path.plane}/:id`} element={<PlanePage />} />
        <Route path={`${path.createPlane}`} element={<CreatePlanePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
