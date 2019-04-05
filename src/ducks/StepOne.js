import React, { Component } from "react"
import { Link } from "react-router-dom"
import store, {
  UPDATE_NAME,
  UPDATE_ADDRESS,
  UPDATE_CITY,
  UPDATE_STATE,
  UPDATE_ZIP
} from "./store"

class StepOne extends Component {
  constructor(props) {
    super(props)
    const reduxState = store.getState()
    this.state = {
      name: reduxState.name,
      address: reduxState.address,
      city: reduxState.city,
      state: reduxState.state,
      zip: reduxState.zip
    }
    this.nameChange = this.nameChange.bind(this)
  }

  componentDidMount() {
    store.subscribe(() => {
      const reduxState = store.getState()
      this.setState({
        name: reduxState.name,
        address: reduxState.address,
        city: reduxState.city,
        state: reduxState.state,
        zip: reduxState.zip
      })
    })
  }

  nameChange(e) {
    this.setState({
      name: e.target.value
    })
  }

  addressChange = e => {
    this.setState({
      address: e.target.value
    })
  }

  cityChange = e => {
    this.setState({
      city: e.target.value
    })
  }

  stateChange = e => {
    this.setState({
      state: e.target.value
    })
  }

  zipChange = e => {
    this.setState({
      zip: e.target.value
    })
  }

  updateChanges() {
    store.dispatch({
      type: UPDATE_NAME,
      payload: this.state.name
    })
    store.dispatch({
      type: UPDATE_ADDRESS,
      payload: this.state.address
    })
    store.dispatch({
      type: UPDATE_CITY,
      payload: this.state.city
    })
    store.dispatch({
      type: UPDATE_STATE,
      payload: this.state.state
    })
    store.dispatch({
      type: UPDATE_ZIP,
      payload: this.state.zip
    })
    // Send data to Redux state
  }

  render() {
    return (
      <div>
        <h1>Add New Listing</h1>
        <form>
          <div>
            Property Name
            <input onChange={this.nameChange} />
          </div>
          <div>
            Address
            <input onChange={this.addressChange} />
          </div>
          <div>
            City
            <input onChange={this.cityChange} />
          </div>
          <div>
            State
            <input onChange={this.stateChange} />
          </div>
          <div>
            Zip
            <input onChange={this.zipChange} />
          </div>
        </form>
        <Link to="/wizard/step2">
          <button onClick={() => this.updateChanges()}>Next Step</button>
        </Link>
      </div>
    )
  }
}

export default StepOne
