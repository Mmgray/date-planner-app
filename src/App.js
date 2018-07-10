import React, {Component} from "react";
import { BrowserRouter,Route, Link,Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
//import SearchResults from "./components/SearchResults";
////import Footer from "./components/Footer";
//  import Carousel from "./components/Carousel";
//import Wrapper from "./components/Wrapper";
import Home from "./pages/Home";
import datepg from "./pages/datepg";



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <BrowserRouter exact path="/" component={Home} />
            <BrowserRouter exact path="/datepg" component={datepg} />
          </Switch>
          <div className ="content">
         
          </div>
           {/* <Carousel />  */}
        </div>
      </BrowserRouter>
    )
  }
}


export default App;



