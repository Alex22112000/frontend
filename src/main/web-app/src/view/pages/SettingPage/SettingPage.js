import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import CButton from "../../components/UI/Button/Button";
import AuthService from '../../../model/services/authService';
import "./SettingPage.css"
//import { deleteUser } from '../../../redux/user/creators'
import { useAuthUser, useUserInfo } from '../../../mobx/user/hooks';
//import { useAuthUser, useUserInfo } from "../../../redux/hooks";


function SettingPage(props) {
    const navigate = useNavigate();
    const userInfo = useUserInfo();
    const {
        changePassword, signOut
    } = useAuthUser();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [setMessage] = useState("");
    const [message] = useState("");

    return (
        <>
            <div className="panel">
                <CButton onClick={() => setUsername(userInfo.login)}>{username === "" ? "Показать имя пользователя" : username}</CButton>
                <br />
                <CButton onClick={() => setPassword(userInfo.password)}>{password === "" ? "Показать пароль" : password}</CButton>
                <br />
                <input type="password" placeholder='Введите новый пароль' onChange={(e) => setNewPassword(e.target.value)}></input>
                <CButton onClick={() => {
                    AuthService.changePassword(userInfo.login, newPassword);
                    changePassword(newPassword);
                    }}>{"Изменить пароль"}</CButton>
                <br />
                <CButton onClick={() => {signOut()}}>Выйти из аккаунта</CButton>
                <br />
                <CButton onClick={() => navigate('/catalog')}>Назад</CButton>
            </div >
            <div className="delpanel">
                <CButton onClick={() => {
                    //dispatch(deleteUser());
                    AuthService.deleteAccount()
                        .then(() => {
                            console.log('Аккаунт удален');
                            signOut();
                        })
                        .catch(() => {
                            console.log('Что-то пошло не так при удалении аккаунта');
                            setMessage("Ошибка удаления аккаунта");
                        });
                    navigate('/');
                }}>Удалить аккаунт</CButton>
            </div>
        </>
    )
}

export default SettingPage