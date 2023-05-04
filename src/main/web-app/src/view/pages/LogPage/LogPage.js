import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import CLogPanel from "../../components/Elements/LogPanel/LogPanel";
import CButton from "../../components/UI/Button/Button";
import AuthService from '../../../model/services/authService';
import { useAuthUser } from '../../../mobx/user/hooks';
import { getAlertConnection } from '../../../model/services/alertService';
// import { useAuthUser } from "../../../redux/hooks";


function LogPage() {
    const navigate = useNavigate();

    const [password, setPassword] = useState("");
    const [login, setLogin] = useState("");
    const [message, setMessage] = useState("");
    const {
        signIn
    } = useAuthUser();

    async function auth() {
        await AuthService.signIn(login, password)
            .then(() => {
                console.log("ok");
                getAlertConnection();
                const token = localStorage.getItem("token");
                const payload = token.split(".")[1];
                const userInfo = JSON.parse(atob(payload));
                signIn(true, login, password, userInfo["role"]);
                navigate("/catalog");
            })
            .catch(() => {
                setMessage("Неправильный логин или пароль")
                console.log("error");
            })
    }

    const toRegistration = () => navigate("/register")

    const onLogPanelChange = ({ password, login }) => {
        setPassword(password);
        setLogin(login);
    }

    return (
        <div align="center" className="lpage">
            <CLogPanel onChange={onLogPanelChange} />
            <CButton onClick={auth}>Войти</CButton>
            <br />
            <CButton onClick={toRegistration}>Регистрация</CButton>
            {message && <><br />{message}</>}
        </div>
    )
}

export default LogPage