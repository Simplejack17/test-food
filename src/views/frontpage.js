import React, { Component } from 'react'
import axios from 'axios'

import Search from '../components/search'
import '../css/frontpage.css'

class FrontPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      latitude: '',
      longitude: '',
      radius: 1000,
      budget: '',
      restaurants: [],
      results: [],
    };

    this.searchByAddress = this.searchByAddress.bind(this);
  }

  // componentDidMount () {
  //     axios.get("https://developers.zomato.com/api/v2.1/search", {
  //       headers: {
  //         'user-key': '7a6a8a2de6aa306f165cacd29b2909ab',
  //         'Accept': 'application/json'
  //       },
  //       params: {
  //         lat: '38.8355869',
  //         lon: '-77.10573999999997',
  //         radius: '100000'
  //       }
  //     })
  //       .then((response) => {
  //         console.log(response)
  //       })
  //       .catch((err) => {
  //         console.log(err)
  //       })
  // }

  searchByAddress(latitude, longitude) {
    axios.get("https://developers.zomato.com/api/v2.1/search", {
      headers: {
        'user-key': '7a6a8a2de6aa306f165cacd29b2909ab',
        'Accept': 'application/json'
      },
      params: {
        lat: latitude,
        lon: longitude,
        radius: 10000
      }
    })
      .then((response) => {
        // console.log(response)

        let restaurantsArray = response.data.restaurants;

        for (let i = 0; i < restaurantsArray.length; i++) {
          let id = restaurantsArray[i].restaurant.R.res_id;
          let restaurantState = this.state.restaurants;

          this.searchRestaraunt(id);

          restaurantState.push(id)
          this.setState({
            restaurants: restaurantState
          });
        }

        console.log(this.state.restaurants);

        //set state of results to be the response

      })
      .catch((err) => {
        console.log(err)
      })
  }

  searchRestaraunt(restarauntId) {
    axios.get("https://developers.zomato.com/api/v2.1/dailymenu", {
      headers: {
        'user-key': '7a6a8a2de6aa306f165cacd29b2909ab',
        'Accept': 'application/json'
      },
      params: {
        res_id: 16507624
      }
    })
      .then((response) => {
        console.log(response)
        //logic for looping through menu items and checking if they are under budget

      })
      .catch((err) => {
        console.log(err)
      })
  }
  // <Results results={this.state.results} />


  render () {
    return (
      <div>
      <h1 className='title'> Food Budget App </h1>
        <Search searchAddressArea={this.searchByAddress}/>
      </div>
    )
  }
}


export default FrontPage
