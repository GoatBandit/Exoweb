import React from "react";
import Landing from "./pages/landing/landing"
import About from "./pages/about/about"
import Portfolio from "./pages/portfolio/portfolio";

import { BrowserRouter, Route, Routes } from "react-router-dom"

function App()
{
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
