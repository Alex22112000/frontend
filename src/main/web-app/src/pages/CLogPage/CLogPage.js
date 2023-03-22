import React from 'react';
import { withRouter } from 'react-router-dom'
import CLogPanel from "../../components/Elements/CLogPanel/CLogPanel";
import CButton from "../../components/UI/CButton/CButton";
import { UserContext } from '../../contexts/user';
import AuthService from '../../services/authService';

class CLogPage extends React.Component {
    state = {
        password: "",
        login: "",
    }

    auth = async () => {
       await AuthService.signIn(this.state.login, this.state.password)
       .then(() => {
        console.log("ok");
        this.context.setUser({
            login: this.state.login,
            password: this.state.password
        })

        this.props.history.push("/catalog")
       })
       .catch(() => {
        console.log("error");
       })
    }


    toRegistration = () => {
        this.props.history.push("/register")
    }

    onLogPanelChange = ({ password, login }) => {
        this.setState({
            password,
            login
        })
    }

    render() {
        return (
            <div align="center" className="lpage">
                <CLogPanel onChange={this.onLogPanelChange} />
                <CButton onClick={this.auth}>Войти</CButton>
                <br />
                <CButton onClick={this.toRegistration}>Регистрация</CButton>
            </div>
        )
    }
}

CLogPage.contextType = UserContext

export default withRouter(CLogPage)