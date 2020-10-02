import * as actionTypes from '../pranks/actionTypes'

const initialState = {
  loading: false,
  pranks: [],
  page: 1,
  page_limit: 10,
}

export default function pranks(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.SET_PRANKS_LOADING:
      return {
        ...state,
        loading: payload.value,
      };

    case actionTypes.SET_PRANKS:
      return {
        ...state,
        pranks: payload.items,
        page: payload.page,
        page_limit: payload.page_limit,
      }

    default:
      return state
  }
}