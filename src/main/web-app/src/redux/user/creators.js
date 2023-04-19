import { DELETE_USER, SET_USER } from "./constants.js"

const deleteUser = () => {
    return {
        type: DELETE_USER
    }
}

const setUser = ({ login, password }) => {
    return {
        type: SET_USER,
        payload: {
            login,
            password
        }
    }
}

export {
    deleteUser,
    setUser
}