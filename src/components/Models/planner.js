///// second page in the app, we can use the 2nd page to render the data here,ie google maps
import React, { Component } from 'react';
import { render } from 'react-dom';
import {Router, Route} from 'react-router';

//// not sure if export needed since our home page is the landing page 
//// could use a 
export default function App() {
    return (
        <div>
            <h1></h1>
            <Route path ="/" component={}/>
            <Route path ="/" component={}/>
        </div>
    );
}
///// start creating the routes here
const routes = [{
    component: Root,
    routes: [
       {
           path: "/",
           exact: true,
           component: Home,

       } 
    ]
}]

export default routes;