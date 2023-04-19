import React, { useState } from 'react';
import { useHistory, withRouter } from 'react-router-dom'
import CButton from "../../components/UI/CButton/CButton";
import AuthService from '../../../model/services/authService';
import "./SettingPage.css"
import { deleteUser } from '../../../redux/user/creators'
import { useDispatch } from 'react-redux';


function SettingPage(props) {
    const dispatch = useDispatch()
    const history = useHistory();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [setMessage] = useState("");

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
                    //dispatch(deleteUser());
                    AuthService.deleteAccount()
                        .then(() => {
                            console.log('Аккаунт удален');
                        })
                        .catch(() => {
                            console.log('Что-то пошло не так при удалении аккаунта');
                            setMessage("Ошибка удаления аккаунта");
                        });
                    history.push('/');
                }}>Удалить аккаунт</CButton>
                <br />
                <CButton onClick={() => history.push('/catalog')}>Назад</CButton>
            </div >
        </>
    )
}

export default withRouter(SettingPage)