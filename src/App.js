import "./App.css";
import React, { Component } from "react";
import axios from "axios";
import number from "easy-number-formatter";

class App extends Component {
  state = {
    data: [],
    searchInput: "",
    isLoading: true,
  };
  componentDidMount() {
    axios
      .get(
        "https://restcountries.com/v2/all?fields=name,capital,flags,languages,population,currencies"
      )
      .then((res) => {
        this.setState({ data: res.data, isLoading: false });
        this.state.data.map((country) => console.log(this.state.data));
      });
  }
  searchHandler = (e) => {
    this.setState({
      searchInput: e.target.value,
    });
    console.log(this.state.searchInput);
  };
  render() {
    if (this.state.isLoading) {
      return (
        <div className="loader">
          <div></div>
          <div></div>
        </div>
      );
    }
    const countryFilter = this.state.data.filter((country) => {
      return country.name
        .toLowerCase()
        .includes(this.state.searchInput.toLowerCase());
    });
    if (!this.state.isLoading) {
      return (
        <div className="App">
          <h1>Country App</h1>
          <input
            type="text"
            name="search"
            onChange={this.searchHandler.bind(this)}
          />
          <div className="countries">
            {countryFilter.map((country) => (
              <div key={country.name.toUpperCase()} className="country">
                <div className="header">
                  <h1>{country.name}</h1>
                  <h2>
                    Capital: <span>{country.capital}</span>
                  </h2>
                </div>
                <h3>
                  {country.languages.length > 1 ? `Languages` : `Language`}:{" "}
                  <span>
                    {country.languages
                      .map((language) => language.name)
                      .join(", ")}
                  </span>
                </h3>
                <p>
                  currencies:{" "}
                  <span>{country.currencies.map((cur) => cur.name)}</span>
                </p>
                <p>
                  Population:{" "}
                  <span>{number.formatNumber(country.population)}</span>
                </p>
                <img src={country.flags.png} alt={country.name} />
              </div>
            ))}
          </div>
        </div>
      );
    }
  }
}

export default App;
