import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

const CityList = (props) => {
  const { cities, match } = props;
  const { url } = match;

  return (
    <ul>
      {cities.map((item) => {
        // console.log(item);
        return (
          <li key={item}>
            <Link to={`${url}/${item}`}>{item}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default withRouter(CityList);
