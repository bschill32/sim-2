import { createStore } from "redux"

const initialState = {
  name: "",
  address: "",
  city: "",
  state: "",
  zip: 0
}

export const UPDATE_NAME = "UPDATE_NAME"
export const UPDATE_ADDRESS = "UPDATE_ADDRESS"
export const UPDATE_CITY = "UPDATE_CITY"
export const UPDATE_STATE = "UPDATE_STATE"
export const UPDATE_ZIP = "UPDATE_ZIP"

function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_NAME:
      return { ...state, name: action.payload }
    case UPDATE_ADDRESS:
      return { ...state, address: action.payload }
    case UPDATE_CITY:
      return { ...state, city: action.payload }
    case UPDATE_STATE:
      return { ...state, state: action.payload }
    case UPDATE_ZIP:
      return { ...state, zip: action.payload }
    default:
      return state
  }
}

export default createStore(reducer)
