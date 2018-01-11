import React, { Component } from 'react'
import axios from 'axios'
import $ from 'jquery';


class BudgetInput extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    let budget = $('#address-input').val();
    console.log("budget-input")
  }

  render () {
    return (
      <div>
      <p><input id="budget-input" type="text" name="name" placeholder="Enter your meal budget"></input></p>
      </div>
    )
  }
}


export default BudgetInput
