import React, { useState } from 'react';
import { withRouter, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import CLogPanel from "../../components/Elements/CLogPanel/CLogPanel";
import CButton from "../../components/UI/CButton/CButton";
import AuthService from '../../../model/services/authService';
import { setUser } from '../../../redux/user/creators';


function CLogPage() {
    const history = useHistory();
    const dispatch = useDispatch();
    
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState("");
    const [message, setMessage] = useState("");

    async function auth() {
        await AuthService.signIn(login, password)
            .then(() => {
                console.log("ok");
                dispatch(setUser({
                    login,
                    password
                }));
                history.push("/catalog");
            })
            .catch(() => {
                setMessage("Неправильный логин или пароль")
                console.log("error");
            })
    }

    const toRegistration = () => history.push("/register")

    const onLogPanelChange = ({ password, login }) => {
        setPassword(password)
        setLogin(login)
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