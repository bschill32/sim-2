import React, { Component } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

class StepThree extends Component {
  constructor() {
    super()
    this.state = {
      mort: 0,
      rent: 0
    }
  }

  mortChange = e => {
    this.setState({
      mort: e.target.value
    })
  }
  rentChange = e => {
    this.setState({
      rent: e.target.value
    })
  }

  addNewHouse = () => {
    let newCasa = {
      name: this.state.name,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip
    }
    axios.post("/api/homes/", { newCasa }).then(() => {
      this.props.history.push("/")
    })
  }
  render() {
    return (
      <div>
        <Link to="/">
          <button>Cancel</button>
        </Link>
        <input onChange={this.mortChange} placeholder="Monthly Mortgage" />
        <input onChange={this.rentChange} placeholder="Monthly Rent" />
        <Link to="/wizard/step2">
          <button onClick={() => this.state}>Previous Step</button>
        </Link>
        <Link to="/">
          <button onClick={this.addNewHouse}>Complete</button>
        </Link>
      </div>
    )
  }
}

export default StepThree
