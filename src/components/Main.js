import React from "react";
import Home from "./Home";
import About from "./About";
import { Routes, Route } from "react-router-dom";
import CountriesList from "../country/CountriesList";
// switch is switching option of route and render according to link clicked in nav. All page remain same only main gets changed according to path provided.
const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/countrieslist" element={<CountriesList />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </main>
  );
};
export default Main;
