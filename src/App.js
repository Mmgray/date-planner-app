import React, {Component} from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import SearchForm from "./components/SearchForm";
// import SearchResults from "./components/SearchResults";
// import Footer from "./components/Footer";
// import Carousel from "./components/Carousel";
// import Wrapper from "./components/Wrapper";
import Home from "./pages/Home";
import datepg from "./pages/datepg";
// import signup from "./pages/signup";
import Navbar from "./components/Navbar/Navbar";
import Jumbotron from "./components/Jumbotron/jumbotron";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>        
          <Navbar />
          <Switch>
            <BrowserRouter exact path="/" component={Home} />
            <BrowserRouter exact path="/datepg" component={datepg} />
            {/* <BrowserRouter exact path="/signup" component={signup} /> */}
          </Switch>
          <div className ="content">
         
          </div>
          <Jumbotron />
        </div>
      </BrowserRouter>
    )
  }
}


export default App;



