import React, { Component } from 'react';
import './css/Login.css';

class Login extends Component {

    render() {
        return (
            <div className="login-card">
                <h1>Войдите</h1>
                <div class="user-avatar"></div>
                <input type="text" placeholder="Электронная почта"/>
                <input type="password" placeholder="Пароль"/>
                <button className="enter-login">Войти</button>
                <a href="" className="registration">Регистрация</a>
            </div>
        );

    }
}

export default Login;