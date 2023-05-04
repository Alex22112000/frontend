import React from 'react'
import Label from '../../UI/Label/Label'
import TextBar from '../../UI/TextBar/TextBar'
import './RegPanel.css'

class RegPanel extends React.Component {
    state = {
        login: "",
        password: ""
    }

    onPasswordChange = (e) => {
        this.props?.onChange({
            ...this.state,
            password: e.currentTarget.value
        })

        this.setState({
            password: e.currentTarget.value
        })
    }

    onLoginChange = (e) => {
        this.props?.onChange({
            ...this.state,
            login: e.currentTarget.value
        })

        this.setState({
            login: e.currentTarget.value
        })
    }

    render() {
        return (
            <div align="center" className="regstr">
                <Label>Регистрация</Label>
                <br />
                <br />

                <Label>Логин</Label>
                <TextBar value={this.state.login} onChange={this.onLoginChange} />
                <br />
                <br />

                <Label>Пароль</Label>
                <TextBar value={this.state.password} onChange={this.onPasswordChange} />


                <br />
                <br />
            </div>
        )
    }
}

export default RegPanel