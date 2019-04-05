import React, { Component } from "react"
import { Link, Route } from "react-router-dom"
import StepOne from "../../ducks/StepOne"
import StepTwo from "../../ducks/StepTwo"
import StepThree from "../../ducks/StepThree"
// import axios from 'axios'

class Wizard extends Component {
  render() {
    return (
      <div>
        <Route path="/wizard/step1" component={StepOne} />
        <Route path="/wizard/step2" component={StepTwo} />
        <Route path="/wizard/step3" component={StepThree} />
      </div>
    )
  }
}

export default Wizard
