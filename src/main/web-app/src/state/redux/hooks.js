import { useDispatch, useSelector } from "react-redux";
import { logOut, logIn, replacePassword } from "./user/creators";
import { getAlertConnection } from "../../model/services/alertService";
import AuthService from "../../model/services/authService";

const fetchUser = (login, password) => async (dispatch) => { // thunk action
    try {
        await AuthService.signIn(login, password);
        const token = AuthService.getToken(); 
        const payload = token.split(".")[1];
        const userInfo = JSON.parse(atob(payload));

        const info = {
            isAuth: true , login, password, role: userInfo["role"]
        }

        dispatch(logIn(info));
    } catch (error) {
        console.log(error);
    }
}

export function useAuthUser() {
    const dispatch = useDispatch();

    const signIn = (login, password) => {
        console.log("ok");
        getAlertConnection();

        dispatch(fetchUser(login, password));
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

// export function useAuthUser() {
//     const dispatch = useDispatch();
//     const signIn = (isAuth, login, password, role) => {
//         const userInfo = {
//             isAuth: isAuth,
//             login: login,
//             password: password,
//             role: role
//         };
//         dispatch(logIn(userInfo));
//     };

//     const signOut = () => {
//         localStorage.clear();
//         dispatch(logOut())
//     };

//     const changePassword = (password) => {
//         const userPassword = {
//             password: password
//         }
//         dispatch(replacePassword(userPassword));
//     }

//     return { signIn, signOut, changePassword };
// }

export function useUserInfo() {
    return useSelector(state => state.user);
}