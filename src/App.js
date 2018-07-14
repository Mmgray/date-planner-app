import React, {Component} from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
// import SearchForm from "./components/SearchForm";
// import SearchResults from "./components/SearchResults";
import Footer from "./components/Footer";
// import Carousel from "./components/Carousel";
// import Wrapper from "./components/Wrapper";
import CarouselSlider from "./components/CarouselSlider";
import Home from "./pages/Home";
import MapContainer from "./utils/Google/index"
import datepg from "./pages/datepg";
// import signup from "./pages/signup";
//import Navbar from "./components/Navbar/Navbar";
//import Jumbotron from "./components/Jumbotron/jumbotron";
// import Button from "./components/Button/button";
const App = () => {
  return (
    <div id="app">
      <Navbar />
      <Jumbotron />
      <MapContainer />
    </div>
  );
};

export default App;