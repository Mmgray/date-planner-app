import React, { Component } from "react";
<<<<<<< HEAD
import Button from "../Button/button";


class Jumbotron extends Component {
    state = {
        images: [
            'https://grancaffelaquila.com/wp-content/uploads/2015/11/ALEX-9-2-Group-Dining-_mini.png',
            'https://cdn.shopify.com/s/files/1/0759/5747/files/DSC_5024w.jpg?v=1517529850'
        ],
        currentImage: ''
    }

    componentDidMount() {
        let counter = 0
        this.setState = {
            currentImage: this.state.images[counter]
        }
        counter++
        setInterval(()=>{
            this.setState = {
                currentImage: this.state.images[counter]
            }
            counter++
            if (counter === this.state.images.length) {
                counter = 0
            }
        }, 10 * 1000)
    }

    render() {
        return (
            <div style='{backgroundImage: "url(" + this.state.currentImage + ")"}'>
                <h1>Hello, world!</h1>
                <p>
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
                </p>
                <p>
                    <Button />
                </p>
            </div>
        )
    }
}

export default Jumbotron;
=======
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
>>>>>>> 0f46ab6192ee106156af811cfe2133317835b95f
