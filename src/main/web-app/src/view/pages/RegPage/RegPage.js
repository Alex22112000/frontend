import React, { useState } from 'react';
import RegPanel from '../../components/Elements/RegPanel/RegPanel';
import Button from "../../components/UI/Button/Button";
import AuthService from '../../../model/services/authService';
import { useNavigate } from 'react-router-dom';

function RegPage() {
    const initialState = {
        password: "",
        login: "",
        message: ""
    }
    const [state, setState] = useState(initialState);
    const navigate = useNavigate();

    const toAuth = () => {
        navigate("/");
    }

    const register = async () => {
        const isOk = await AuthService.signUp(
            state.login,
            state.password
        )
        if (isOk) {
            toAuth()
        }

        setState({
            ...state,
            message: "Регистрация успешна."
        })
    }

    const onRegPanelChange = ({ password, login }) => {
        setState({
            ...state,
            password: password,
            login: login,
        })
    }

    return (
        <div align="center" className="rpage">
            <RegPanel onChange={onRegPanelChange} />

            <Button onClick={register}>Зарегистрироваться</Button>
            <br />
            <Button onClick={toAuth}>Назад</Button>
            {state.message && <><br />{state.message}</>}
        </div>
    )
}

export default RegPage;