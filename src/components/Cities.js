import React from "react";
import { Switch, Route, withRouter } from "react-router";

import CityList from "./CityList";
import Weather from "./Weather/index";

// const API_CITIES = "http://localhost:8888//weather-service/weathers/cities";
const API_CITIES = "http://localhost:8888/weather-service/available-cities";

class Cities extends React.Component {
  state = { // state initialize
    cities: [],
  };

  componentDidMount() { // render가 된 후에 호출?
    console.log("City component");

    const { cities } = this.state;
    // console.log("Cities: ", cities);

    const citiesData = fetch(API_CITIES)
      .then((res) => res.json()) // 데이터를 다 가지고 온 후(비동기)
      .then((data) => {
        this.setState({ // 위에서 선언한 배열에 state를 넣어줘야 함
          cities: data,
        });
      });

    // const cities_ = fetch(API_CITIES)
    //   .then((res) => res.json())
    //   .then(data => console.log(data));

    // console.log(cities_); // promise 객체
    console.log(cities, citiesData); // cities는 빈 배열, citiesData는 promise객체(fetch가 asynch function)

  }

  render() {
    const { match } = this.props; // history, location, match ...
    // match는 router와 관련된 것들
    const { cities } = this.state; // city이름 배열로 저장되어 있음

    return (
      <div>
        <h1>Cities</h1>
        <p>City list</p>

        <Switch> {/*Switch태그는 Route 요소들 중 매치되는 url을 렌더링 
        Switch로 감싸고 있기 때문에 Route가 중복되는 것이 있으면 첫 번 째 요소만 렌더링*/}
          <Route path={`${match.path}/:cityName`} component={Weather} /> { /*Weather component에게 cityName을 props로 전달한다*/}
          <Route
            exact
            path={match.path}
            render={() => <CityList cities={cities} />} // city들의 list
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(Cities);
