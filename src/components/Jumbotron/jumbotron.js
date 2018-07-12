import React, { Component } from "react";
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
