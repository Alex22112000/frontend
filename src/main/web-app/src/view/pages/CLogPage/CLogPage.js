import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import CLogPanel from "../../components/Elements/CLogPanel/CLogPanel";
import CButton from "../../components/UI/CButton/CButton";
import AuthService from '../../../model/services/authService';
// import { useAuthUser } from '../../../mobx/user/hooks';
import { useAuthUser } from "../../../redux/hooks";


function CLogPage() {
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
                signIn(true, login, password);
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

export default CLogPage