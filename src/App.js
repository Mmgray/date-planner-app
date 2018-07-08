import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";
import Wrapper from "./components/Wrapper";
import Date from "./pages/Date";
import Home from "./pages/Home";


const App = () => (
  <Router>
    <div>
      <Navbar />
      <Wrapper>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={Date} />
      </Wrapper>
      <Footer />
    </div>
  </Router>
);

export default App;

