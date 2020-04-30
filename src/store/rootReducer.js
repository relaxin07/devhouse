import { combineReducers } from 'redux'
import bakersSlice from './modules/bakers'

const rootReducer = combineReducers({
  bakers: bakersSlice.reducer,
})

export default rootReducer
