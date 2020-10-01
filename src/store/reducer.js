import * as actionTypes from './actionTypes'

const initialState = {
  items: [],
  page: 1,
  page_limit: 10,
}

export default function pranks(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_PRANKS:
      return {
        ...state,
        ...action.payload
      }

    default:
      return state
  }
}