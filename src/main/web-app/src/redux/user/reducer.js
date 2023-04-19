import { DELETE_USER, SET_USER } from "./constants.js"

const initialState = {
    login: "",
    password: ""
}

function userReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER:
            return {
                login: action.payload?.login || state.login,
                password: action.payload?.password || state.password
            }
        case DELETE_USER:
            return {
                login: "",
                password: ""
            }
        default:
            return state
    }
}

export default userReducer;