import React from 'react';
import { withRouter } from 'react-router-dom'
import CRegPanel from '../../components/Elements/CRegPanel/CRegPanel';
import CButton from "../../components/UI/CButton/CButton";
import AuthService from '../../../model/services/authService';

class CRegPage extends React.Component {
    state = {
        password: "",
        login: "",
        message: ""
    }

    toAuth = () => {
        this.props.history.push("/")
    }

    register = async () => {
        const isOk = await AuthService.signUp(
            this.state.login,
            this.state.password
        )
        if (isOk) {
            this.props.history.push("/")
        }

        this.setState({
            message: "Регистрация успешна."
        })
    }

    onRegPanelChange = ({ password, login }) => {
        this.setState({
            password,
            login,
        })
    }

    render() {
        return (
            <div align="center" className="rpage">
                <CRegPanel onChange={this.onRegPanelChange} />

                <CButton onClick={this.register}>Зарегистрироваться</CButton>
                <br />
                <CButton onClick={this.toAuth}>Назад</CButton>
                {this.state.message && <><br />{this.state.message}</>}
            </div>
        )
    }
}

export default withRouter(CRegPage)