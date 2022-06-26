import React from "react";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import CategoryComp from "./CategoryComp";
import Searched from "./Searched";
import Item from "./Item";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categorycomp/:type" element={<CategoryComp />} />
      <Route path="/searched/:input" element={<Searched />} />
      <Route path="/item/:id/:sku" element={<Item />} />
    </Routes>
  );
}

export default Pages;
