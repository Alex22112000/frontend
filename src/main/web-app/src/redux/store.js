import { createStore, combineReducers } from 'redux'
import userReducer from './user/reducer.js'

const store = createStore(combineReducers({
    "user": userReducer
}))

export default store