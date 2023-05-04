import React, { useState } from 'react';
import CRegPanel from '../../components/Elements/RegPanel/RegPanel';
import CButton from "../../components/UI/Button/Button";
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
            <CRegPanel onChange={onRegPanelChange} />

            <CButton onClick={register}>Зарегистрироваться</CButton>
            <br />
            <CButton onClick={toAuth}>Назад</CButton>
            {state.message && <><br />{state.message}</>}
        </div>
    )
}

export default RegPage;