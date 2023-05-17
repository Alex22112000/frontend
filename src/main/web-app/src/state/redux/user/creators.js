import { CHANGE_PASSWORD, LOGIN, LOGOUT } from "./constants.js"

const logOut = () => {
    return {
        type: LOGOUT
    }
}

const logIn = ({isAuth, login, password, role }) => {
    return {
        type: LOGIN,
        payload: {
            isAuth,
            login,
            password,
            role
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
