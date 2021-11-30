import axios from "axios";
import React, { Component } from "react";

function getCountry(capital) {
  return axios.get(`https://restcountries.com/v2/capital/${capital}`);
}

function getWeather(capital) {
  return axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${capital}&units=metric&appid=${process.env.REACT_APP_OPENWEATHER_KEY}`
  );
}
class CountrySingle extends Component {
  state = {
    country: [],
    weather: [],
    isLoading: true,
  };
  //consolelog in componentdidmount for seeing what data is passed
  componentDidMount() {
    Promise.all([
      getCountry(this.props.params.name),
      getWeather(this.props.params.name),
    ]).then((res) => {
      this.setState({
        country: res[0].data[0],
        weather: res[1].data,
        isLoading: false,
      });
      console.log("response", res);
      console.log(this.state.country);
      console.log("weather", this.state.weather);
    });
  }
  render() {
    if (this.state.isLoading) {
      if (this.state.isLoading) {
        return (
          <div className="loader">
            <div></div>
            <div></div>
          </div>
        );
      }
    }
    if (!this.state.isLoading) {
      return (
        <div className="country-single">
          <div className="weather-descrptn">
            <h1>Weather: {this.state.country.capital}</h1>
            <p>
              Right now it is {this.state.weather.main.temp}degree in{" "}
              {this.state.country.capital}
            </p>
            <p>Population:{this.state.country.population}</p>
            <p>
              Languages:
              {this.state.country.languages.map((lang, i) => (
                <span key={i}>{lang.name}</span>
              ))}
            </p>
          </div>

          <img
            src={`http://openweathermap.org/img/wn/${this.state.weather.weather[0].icon}@2x.png`}
            alt={this.state.weather.weather[0].description}
            className="weather-img"
          />
        </div>
      );
    }
  }
}

export default CountrySingle;
