import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

const CityList = (props) => {
  console.log("CityList.js");
  console.log(props); // 원래 props에 cities 밖에 오지 않는데 withRouter로 감싸서 url, ... 더 추가됨
  const { cities, match } = props;
  const { url } = match; // mathch에 있는 url match :{url:"/cities"}


  const uniqueCities = cities.filter(
    (item, index) => cities.indexOf(item) === index
  );

  return (
    <ul>
      {uniqueCities.map((item) => {
        console.log("citylist: ", item);
        return (
          <li key={item}>
            <Link to={`${url}/${item}`}>{item}</Link> {/* Link */}
          </li>
        );
      })}
    </ul>
  );
};

export default withRouter(CityList);
