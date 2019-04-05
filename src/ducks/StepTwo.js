import React, { Component } from "react"
import { Link } from "react-router-dom"

class StepTwo extends Component {
  constructor() {
    super()
    this.state = {
      img: ""
    }
    this.imgChange = this.imgChange.bind(this)
  }

  imgChange(e) {
    this.setState({
      img: e.target.value
    })
  }

  render() {
    return (
      <div>
        <Link to="/">
          <button>Cancel</button>
        </Link>
        <input onChange={this.imgChange} placeholder="Image URL" />
        <Link to="/wizard/step1">
          <button onClick={() => this.state}>Previous Step</button>
        </Link>
        <Link to="/wizard/step3">
          <button onClick={() => this.state}>Next Step</button>
        </Link>
      </div>
    )
  }
}

export default StepTwo
