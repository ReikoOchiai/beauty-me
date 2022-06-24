import React from "react";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import CategoryComp from "./CategoryComp";
import Searched from "./Searched";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categorycomp/:type" element={<CategoryComp />} />
      <Route path="/searched/:input" element={<Searched />} />
    </Routes>
  );
}

export default Pages;
