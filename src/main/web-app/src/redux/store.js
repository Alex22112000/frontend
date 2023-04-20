import { createStore, combineReducers } from 'redux'
import userReducer from './user/reducer.js'
import { Provider } from 'react-redux'

const store = createStore(combineReducers({
    "user": userReducer
}))

export function buildProvider(){
    return (props) => 
        <Provider store={store}>
            {props.children}
        </Provider>
}

export default store
