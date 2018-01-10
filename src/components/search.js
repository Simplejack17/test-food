import React, { Component } from 'react'
import $ from 'jquery';
import geocoder from "google-geocoder";
import axios from 'axios'
import '../css/search.css'

class Search extends Component {

  //AIzaSyDtXKHvSyrR8eGDXXw6Ip0wIka_M3qJNgg

  constructor(props) {
    super(props);

  }

  handleClick = () => {
    console.log(this.props);
    //Call the geocoder function to get the coordinates
    let address = $('#address-input').val();

    // set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
    let geo = geocoder({
      key: 'AIzaSyDtXKHvSyrR8eGDXXw6Ip0wIka_M3qJNgg'
    });

    let lat;
    let long;

    geo.find(address, function(err, res){

      // process response object
      console.log(res);
      lat = res[0].location.lat;
      long = res[0].location.long;
    });

    this.props.searchAddressArea(lat, long);

    console.log(address);
  }

  render () {
    return (
      <div>
        <div className="searchButton">
            <input id="address-input" type="text" name="name" placeholder="Enter your adress"></input>
            <button onClick={this.handleClick} id="button">Search</button>
        </div>
      </div>
    )
  }
}


export default Search
