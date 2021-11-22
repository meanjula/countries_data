import React from "react";

const Countries = () => {
  return (
    <div className="countries">
      {this.state.data.map((country) => (
        <div key={country.name.common} className="country">
          <h1>{country.name.common}</h1>
          <h2>{country.capital}</h2>
          <img src={country.flags.png} alt="country flag" />
        </div>
      ))}
      ;
    </div>
  );
};

export default Countries;
