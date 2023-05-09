import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Button from "../../components/UI/Button/Button";
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
                <Button onClick={() => setUsername(userInfo.login)}>{username === "" ? "Показать имя пользователя" : username}</Button>
                <br />
                <Button onClick={() => setPassword(userInfo.password)}>{password === "" ? "Показать пароль" : password}</Button>
                <br />
                <input type="password" placeholder='Введите новый пароль' onChange={(e) => setNewPassword(e.target.value)}></input>
                <Button onClick={() => {
                    AuthService.changePassword(userInfo.login, newPassword);
                    changePassword(newPassword);
                    }}>{"Изменить пароль"}</Button>
                <br />
                <Button onClick={() => {signOut()}}>Выйти из аккаунта</Button>
                <br />
                <Button onClick={() => navigate('/catalog')}>Назад</Button>
            </div >
            <div className="delpanel">
                <Button onClick={() => {
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
                }}>Удалить аккаунт</Button>
            </div>
        </>
    )
}

export default SettingPage