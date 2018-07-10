import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import SearchForm from "./components/SearchForm";
import SearchResults from "./components/SearchResults";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";
import Wrapper from "./components/Wrapper";
import Date from "./pages/Date";
import Home from "./pages/Home";

class App extends Component {
  render() {
    return (

      <div>
        <h1>Let Us Help You Plan Your Next Date!</h1>

     <ul className="header">
            <li><a href="/">Home</a></li>
            <li><a href="/date">Date</a></li>
            <li><a href="/Sign Up">Sign Up</a></li>
          </ul>

         <div className ="content">
         
         </div>
      </div>
    );
  }
}


export default App;



