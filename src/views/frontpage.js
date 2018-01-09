import React, { Component } from 'react'
import axios from 'axios'

class FrontPage extends Component {

  componentDidMount () {
      axios.get("https://developers.zomato.com/api/v2.1/search", {
        headers: {
          'user-key': '7a6a8a2de6aa306f165cacd29b2909ab',
          'Accept': 'application/json'
        },
        params: {
          lat: '38.8355869',
          lon: '-77.10573999999997',
          radius: '100000'
        }
      })
        .then((response) => {
          console.log(response)
        })
        .catch((err) => {
          console.log(err)
        })
  }

  render () {
    return (
      <div>
        <h1>Title</h1>
      </div>
    )
  }
}


export default FrontPage
