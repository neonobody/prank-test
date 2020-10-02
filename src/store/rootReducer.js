import { combineReducers } from 'redux'

// Reducers
import pranksReducer from './pranks/reducer';

const rootReducer = combineReducers({
  pranks: pranksReducer,
})

export default rootReducer;
