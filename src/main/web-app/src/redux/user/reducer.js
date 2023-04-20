import { LOGOUT, LOGIN, CHANGE_PASSWORD } from "./constants.js"

const initialState = {
    isAuth: false,
    login: "",
    password: ""
}

function userReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            return {
                isAuth: action.payload?.isAuth || state.isAuth,
                login: action.payload?.login || state.login,
                password: action.payload?.password || state.password
            }
        case LOGOUT:
            return {
                isAuth: false,
                login: "",
                password: ""
            }
        case CHANGE_PASSWORD:
            return {
                isAuth: state.isAuth,
                login: state.login,
                password: action.payload?.password || state.password
            }
        default:
            return state
    }
}

export default userReducer;
