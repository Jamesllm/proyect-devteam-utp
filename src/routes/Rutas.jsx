import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavDev from "../components/Nav/NavDev";
import LandingPage from "../LandingPage";
import Proyectos from "../pages/Proyectos";
import Proyecto from "../pages/Proyecto";
import Devteam from "../pages/Devteam";
import DevTAnteriores from "../pages/DevTAnteriores";

export default function Rutas() {
  return (
    <Router>
      <NavDev />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/info/devteam/" element={<Devteam />} />
          <Route path="/hackaton-utp-el-comercio/:path" element={<DevTAnteriores />} />
          <Route path="/proyecto/:path" element={<Proyecto />} />
      </Routes>
    </Router>
  );
}
