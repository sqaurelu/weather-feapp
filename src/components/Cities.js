import React from "react";

const API_CITIES = "http://localhost:8888//weather-service/weathers/cities";

class Cities extends React.Component {
  state = {
    cities: [],
  };

  componentDidMount() {
    console.log("City component");

    // console.log(this.state.cities);

    const { cities } = this.state;
    // console.log("Cities: ", cities);

    const citiesData = fetch(API_CITIES)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          cities: data,
        });
      });

    console.log(cities, citiesData);
  }

  render() {
    const { cities } = this.state;

    return (
      <div>
        <h1>Cities</h1>
        <p>City list</p>
        <div>{cities.join(" ")}</div>
      </div>
    );
  }
}

export default Cities;
