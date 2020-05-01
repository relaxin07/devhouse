import { combineReducers } from 'redux'
import bakersSlice from './modules/bakers'

const rootReducer = {
  bakers: bakersSlice.reducer,
}

export default rootReducer
