import React, { useState } from 'react';
import { useHistory, withRouter } from 'react-router-dom'
import CButton from "../../components/UI/CButton/CButton";
import AuthService from '../../../model/services/authService';
import "./SettingPage.css"
import Text from '../../components/simple/Text';

function SettingPage(props){

    const history = useHistory();
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");

        return (
            <>
                <div className="panel">
                    <CButton onClick={() => setUsername(AuthService.getLogin())}>{username === "" ? "Показать имя пользователя" : username}</CButton>        
                <br />
                    <CButton onClick={() => setPassword(AuthService.getPassword())}>{password === "" ? "Показать пароль" : password}</CButton>
                <br />
                    <input type="password" placeholder='Введите новый пароль' onChange={(e) => setNewPassword(e.target.value)}></input>
                    <CButton onClick={() => AuthService.changePassword(AuthService.getLogin(), newPassword)}>{"Изменить пароль"}</CButton>
                <br />
                <CButton onClick={() => {
                    AuthService.deleteAccount()
                    .then(() => {
                        console.log('аккаунт удален');
                    })
                    .catch(() => {
                        console.log('что-то пошло не так при удалении аккаунта');
                    });
                    history.push('/');
                }}>Удалить аккаунт</CButton>
                <br />
                <CButton onClick={() => history.push('/catalog')}>Назад</CButton>
                </div>
            </>
        )
}

export default withRouter(SettingPage)