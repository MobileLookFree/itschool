import React, { Component } from 'react';
import './Login.css';
import '../Header/HeaderFullScreenPage/HeaderFullScreenPage';
import HeaderFullScreenPage from '../Header/HeaderFullScreenPage/HeaderFullScreenPage';

class Login extends Component {

    render() {
        return (
            <div className="login-background">
                <HeaderFullScreenPage />
                <div className="login-card">
                    <h1 className="login">Войдите</h1>
                    <div className="user-avatar"></div>
                    <input type="text" placeholder="Электронная почта" />
                    <input type="password" placeholder="Пароль" />
                    <button className="enter-login">Войти</button>
                    <a href="" className="registration">Регистрация</a>
                </div>
            </div>
        );

    }
}

export default Login;