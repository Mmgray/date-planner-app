import React, {Component} from 'react';
import {View} from 'react-native';
import axios from 'axios';

const config = {
    headers: {'Authorization': 'Bearer API key'},
    
}

class YelpClient {
    constructor(apiKey){
      this.apiKey = apiKey;
    }
    
    search(parameters){
      return _send({
        url: 'https://api.yelp.com/v3/businesses/search',
        query: parameters,
        bearerToken: this.apiKey
      });
    }
  
    phoneSearch(parameters){
      return _send({
        url: 'https://api.yelp.com/v3/businesses/search/phone',
        query: parameters,
        bearerToken: this.apiKey
      });
    }