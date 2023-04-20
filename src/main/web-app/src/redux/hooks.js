import { useDispatch, useSelector } from "react-redux";
import { logOut, logIn, replacePassword } from "./user/creators";

export function useAuthUser() {
    const dispatch = useDispatch();
    const signIn = (isAuth, login, password) => {
        const userInfo = {
            isAuth: isAuth,
            login: login,
            password: password
        };
        dispatch(logIn(userInfo));
    };

    const signOut = () => {
        localStorage.clear();
        dispatch(logOut())
    };

    const changePassword = (password) => {
        const userPassword = {
            password: password
        }
        dispatch(replacePassword(userPassword));
    }

    return { signIn, signOut, changePassword };
}

export function useUserInfo() {
    return useSelector(state => state.user);
}