import React, { Component } from "react";

class CountrySingle extends Component {
  render() {
    return <h1>{this.props.params.name}</h1>;
  }
}

export default CountrySingle;
