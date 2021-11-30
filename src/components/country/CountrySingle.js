import axios from "axios";
import React, { Component } from "react";

function getCountry(capital) {
  return axios.get(`https://restcountries.com/v2/capital/${capital}`);
}

// function getWeather(capital) {
//   return axios.get("http://api.weatherstack.com/current", {
//     params: {
//       access_key: process.env.REACT_APP_API_KEY,
//       query: capital,
//     },
//   });
// }
function getWeather(capital) {
  return axios.get(
    `api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${process.env.REACT_APP_OPENWEATHER_KEY}`
  );
}
class CountrySingle extends Component {
  state = {
    country: [],
    weather: [],
  };
  //consolelog in componentdidmount for seeing what data is passed
  componentDidMount() {
    console.log(this.props.params);
  }
  render() {
    return (
      <div>
        <h1>{this.props.params.name}</h1>
        <p>Right now it is degree in{this.props.params.name}.</p>
      </div>
    );
  }
}

export default CountrySingle;
