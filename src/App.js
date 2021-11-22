import "./App.css";
import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  state = {
    data: [],
  };
  componentDidMount() {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      this.setState({ data: res.data });
      this.state.data.map((country) => console.log(this.state.data));
    });
  }

  render() {
    return (
      <div className="countries">
        {this.state.data.map((country) => (
          <div key={country.name.common.toUpperCase()} className="country">
            <h1>{country.name.common}</h1>
            <h2>Capital: {country.capital}</h2>
            {/* <h3>
              {country.languages.length > 1 ? `Languages` : `Language`}:
              {country.languages.map((language) => language).join(", ")}
            </h3> */}
            {/* <p>{country.currencies.map((cur) => cur.AFN.name)}</p> */}
            <p>Population:{country.population}</p>

            <img src={country.flags.png} alt="country flag" />
          </div>
        ))}
        ;
      </div>
    );
  }
}

export default App;
