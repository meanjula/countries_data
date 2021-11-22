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
      this.state.data.map((country) => this.state.data);
    });
  }

  render() {
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
  }
}

export default App;
