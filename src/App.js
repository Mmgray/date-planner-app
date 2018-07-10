import React, {Component} from "react";
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Home from "./pages/home";
import datepg from "./pages/datepg";
import signup from "./pages/signup";
import Navbar from "./components/Navbar/Navbar";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <BrowserRouter exact path="/" component={Home} />
            <BrowserRouter exact path="/datepg" component={datepg} />
            <BrowserRouter exact path="/signup" component={signup} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
