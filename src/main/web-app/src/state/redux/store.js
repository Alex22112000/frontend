import { createStore, combineReducers, applyMiddleware } from 'redux'
import userReducer from './user/reducer.js'
import { Provider } from 'react-redux'
import thunk from "redux-thunk";

const store = createStore(combineReducers({
    "user": userReducer
}), applyMiddleware(thunk))

export function buildProvider(){
    return (props) => 
        <Provider store={store}>
            {props.children}
        </Provider>
}

export default store
