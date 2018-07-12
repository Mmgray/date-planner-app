import React, { Component } from "react";
// import $ from 'jquery';


// class Jumbotron extends Component {

//     componentDidMount() {
//         $(document).ready(function () {
//             var header = $('body');

//             var backgrounds = new Array(
//                 ['url(https://grancaffelaquila.com/wp-content/uploads/2015/11/ALEX-9-2-Group-Dining-_mini.png)'
//                 , 'url(https://cdn.shopify.com/s/files/1/0759/5747/files/DSC_5024w.jpg?v=1517529850)']
//             );

//             var current = 0;

//             function nextBackground() {
//                 current++;
//                 current = current % backgrounds.length;
//                 header.css('background-image', backgrounds[current]);
//             }
//             setInterval(nextBackground, 10000);

//             header.css('background-image', backgrounds[0]);
//         });
//     }

//     render() {
//         return (

//             <div className="container" >

//                 <div className="jumbotron" >
//                     <div className="searchbar">
//                         <form action="/action_page.php">
                           
//                      <h1 className="display-3">Hello, world!</h1>
//                     <hr className="my-4" />
//                     <p className="lead" />
                     
//                         <a className="btn btn-primary btn-lg" href="" role="button">Learn more</a>
//                         <input type="text" placeholder="Search.." name="search" id="searchy" />
//                            <button type="submit"><i className="fa fa-search"></i></button>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

// export default Jumbotron;