import React from "react";
import number from "easy-number-formatter";

const CountryCard = ({ country }) => {
  console.log(country);
  return (
    <div className="country">
      <div className="country-header">
        <h1>{country.name}</h1>
        <h2>
          Capital: <span>{country.capital}</span>
        </h2>
      </div>
      <p>
        {country.languages.length > 1 ? `Languages` : `Language`}:{" "}
        <span>
          {country.languages.map((language) => language.name).join(", ")}
        </span>
      </p>
      <p>
        currencies: <span>{country.currencies.map((cur) => cur.name)}</span>
      </p>
      <p>
        Population: <span>{number.formatNumber(country.population)}</span>
      </p>
      <img src={country.flags.png} alt={country.name} />
    </div>
  );
};

export default CountryCard;
