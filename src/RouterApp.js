import React from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Navigation from "./components/Navigation/index";
import About from "./components/About";

const RouterApp = () => {
  const cityName = "Seoul";

  return (
    <div className="App">
      <Navigation />
      <Header cityName={cityName} />
      <p>Hello world!</p>

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </div>
  );
};
export default RouterApp;
