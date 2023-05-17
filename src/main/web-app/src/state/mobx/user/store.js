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
    login: ({ isAuth, login, password, role }) => {
        mobxStore.user = {
            isAuth: isAuth,
            login: login,
            password: password,
            role: role
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