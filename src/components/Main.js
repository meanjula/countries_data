import React from "react";
import Home from "./Home";
import { Routes, Route, useParams } from "react-router-dom";
import CountriesList from "./country/CountriesList";
import CountrySingle from "./country/CountrySingle";
//routewrapper for using useparam hook in class component(countrysingle)
const RouteWrapper = (props) => {
  const params = useParams();
  return <CountrySingle params={params} {...props} />;
};
const Main = (props) => {
  console.log(props);
  return (
    <main>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/countries" element={<CountriesList />} />
        <Route path="/countries/:name" element={<RouteWrapper />} />
      </Routes>
    </main>
  );
};
export default Main;
