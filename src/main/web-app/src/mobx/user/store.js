import { makeAutoObservable } from "mobx"

const initialState = {
    isAuth: false,
    login: null,
    password: null,
}

export const mobxStore = makeAutoObservable({
    user: {
        ...initialState
    },
    login: ({ isAuth, login, password }) => {
        mobxStore.user = {
            isAuth: isAuth,
            login: login,
            password: password,
        }
    },
    logout: () => {
        mobxStore.user = {
            ...initialState
        }
    },
    replacePassword: ({password}) => {
        mobxStore.user = {
            ...mobxStore.user,
            password: password
        }
    }
});

export function buildProvider() {
    return (props) =>
        <>
            {props.children}
        </>
}