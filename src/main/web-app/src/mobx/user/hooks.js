import { useEffect, useState } from "react";
import { mobxStore } from "./store";
import { autorun } from "mobx";

export function useAuthUser() {
    const signIn = (isAuth, login, password) => {
        const userInfo = {
            isAuth: isAuth,
            login: login,
            password: password
        };
        mobxStore.login(userInfo);
    };

    const signOut = () => {
        localStorage.clear();
        mobxStore.logout()
    };

    const changePassword = (password) => {
        const userPassword = {
            password: password
        }
        mobxStore.replacePassword(userPassword);
    }

    return { signIn, signOut, changePassword };
}

export function useUserInfo() {
    const [userInfo, setUserInfo] = useState(mobxStore.user);
    useEffect(() => {
        function handle(userInfo) {
            setUserInfo(userInfo);
        }
        return autorun(() => {
            handle(mobxStore.user);
        })
    }, []);
    return userInfo;
}