import React, { Component } from 'react';
import './Login.css';

class Login extends Component {

    render() {
        return (
            <div className="login-card">
                <h1 className="login">Войдите</h1>
                <div className="user-avatar"></div>
                <input type="text" placeholder="Электронная почта"/>
                <input type="password" placeholder="Пароль"/>
                <button className="enter-login">Войти</button>
                <a href="" className="registration">Регистрация</a>
            </div>
        );

    }
}

export default Login;