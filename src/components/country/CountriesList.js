import React, { Component } from "react";
import axios from "axios";
import CountryCard from "./CountryCard";
// import { Routes, Route } from "react-router-dom";
// import CountrySingle from "./CountrySingle";
class CountriesList extends Component {
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
        this.state.data.map((country) => country);
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
        <div className="countries-container">
          <input type="text" name="search" onChange={this.searchHandler} />
          <div className="countries">
            {countryFilter.map((country) => (
              <CountryCard key={country.name.toUpperCase()} {...country} />
            ))}
          </div>
        </div>
      );
    }
  }
}

export default CountriesList;
