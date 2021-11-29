import React from "react";
import number from "easy-number-formatter";
import { Link } from "react-router-dom";
const CountryCard = ({
  name,
  capital,
  languages,
  currencies,
  flags,
  population,
}) => {
  return (
    <Link to={capital}>
      <div className="country">
        <div className="country-header">
          <h1>{name}</h1>
          <h2>
            Capital: <span>{capital}</span>
          </h2>
        </div>
        <p>
          {languages.length > 1 ? `Languages` : `Language`}:{" "}
          <span>
            {languages.map((language, i) => language.name).join(", ")}
          </span>
        </p>
        <p>
          currencies:{" "}
          {currencies.map((cur, i) => (
            <span key={i}>{cur.name}</span>
          ))}
        </p>
        <p>
          Population: <span>{number.formatNumber(population)}</span>
        </p>
        <img src={flags.png} alt={name} />
      </div>
    </Link>
  );
};

export default CountryCard;
