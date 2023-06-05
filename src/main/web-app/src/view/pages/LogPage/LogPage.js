import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import LogPanel from "../../components/Elements/LogPanel/LogPanel";
import Button from "../../components/UI/Button/Button";
import { useAuthUser } from "../../../state/redux/hooks";

function LogPage() {
    const navigate = useNavigate();

    const [password, setPassword] = useState("");
    const [login, setLogin] = useState("");
    const [message, setMessage] = useState("");
    const { signIn } = useAuthUser();

    function auth() {
        try {
            signIn(login, password);
            navigate("/catalog");
        } catch (error) {
            console.log(error);
            setMessage("Неправильный логин или пароль");
            console.log("error");
        }
    }

    const toRegistration = () => navigate("/register")

    const onLogPanelChange = ({ password, login }) => {
        setPassword(password);
        setLogin(login);
    }

    return (
        <div align="center" className="lpage">
            <LogPanel onChange={onLogPanelChange} />
            <Button onClick={auth}>Войти</Button>
            <br />
            <Button onClick={toRegistration}>Регистрация</Button>
            {message && <><br />{message}</>}
        </div>
    )
}

export default LogPage;