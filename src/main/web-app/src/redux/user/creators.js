import { CHANGE_PASSWORD, LOGIN, LOGOUT } from "./constants.js"

const logOut = () => {
    return {
        type: LOGOUT
    }
}

const logIn = ({isAuth, login, password }) => {
    return {
        type: LOGIN,
        payload: {
            isAuth,
            login,
            password
        }
    }
}

const replacePassword = ({password}) => {
    return {
        type: CHANGE_PASSWORD,
        payload: {
            password
        }
    }
}

export {
    logIn,
    logOut,
    replacePassword
}
