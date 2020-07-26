import React from "react";

const API_WEATHER = "http://localhost:8888/weather-service/weathers";


// Stateless component
class Weather extends React.Component {
  state = {
    data: {
      weather: [
        {
          main: "",
          description: ""
        }
      ],
      main: {
        temp: 0
      }
    }

  };

  componentDidMount() {
    const { cityName } = this.props.match.params;
    console.log("cityName : ", cityName);

    const { data } = this.state;

    const api = `${API_WEATHER}?cityName=${cityName}`;

    fetch(api)
      .then(res => res.json())
      .then(data_ => this.setState({
        data: data_
      }))
      .catch(err => console.warn(`ERROR occurs : ${err.message}`));

  }
  render() {

    const { cityName } = this.props.match.params;
    const { data } = this.state;

    // console.log(this.state.data.weather[0].main);
    const weather_main = data.weather[0].main;
    const weather_description = data.weather[0].description;
    const celsius = (data.main.temp - 273.15).toFixed(2);
    return (
      <div>
        <h3>도시이름 : {cityName}</h3>
        <ul>
          <h3>날씨 : {weather_main}</h3>
          <h3>날씨 상세 : {weather_description}</h3>
          <h3>온도 : {celsius}</h3>
        </ ul>
      </div>
    );
  }

};

// 도시이름(cityName)
//   - 날씨(data.weather[0].main),
//   - 날씨 상세(data.weather[0].description),
//     - 온도(data.main.temp)

export default Weather;

