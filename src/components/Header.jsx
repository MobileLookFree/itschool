import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import './css/Header.css';
import Login from './Login';

window.onload = function () {
    var nav = document.getElementById("mobile");
    var openButton = document.getElementById("openNavButton");

    window.addEventListener('click', function (event) {
        if (event.target == openButton && nav.className == "dropdown-menu") {
            nav.className += " mobile";
        }
        else {
            nav.className = "dropdown-menu";
        }
        if (event.target != openButton && nav.className == "dropdown-menu mobile") {
            nav.className = "dropdown-menu";
        }
    })
}

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { chatVisible: false, techBack: false };
    }

    componentDidMount() {
        this.setState({ chatVisible: true }); //флаг видимости чата в зависимости от авторизации
    }

    render() {
        return (
            <BrowserRouter>
                <div className="header-back">
                    <div className="container">
                        <nav>
                            <div className="home-button" title="На Главную"><Link to="/"><i className="material-icons">brightness_1</i></Link></div>
                            <a href="javascript:void(0);" className="header-menu-button" id="openNavButton">Меню</a>
                            <div className="header-menu">
                                <a href="">Новости</a>
                                <a href="">Курсы</a>
                                <a href="">Школы</a>
                                <a href="">Ресурсы</a>
                                {this.state.chatVisible && <a href="">Чат</a>}
                                <a href="">Контакты</a>
                            </div>
                            <div className="authorization" title="Войти"><Link to="/login"><i className="material-icons">person</i></Link></div>
                            <div className="dropdown-menu" id="mobile">
                                <a href="">Новости</a>
                                <a href="">Курсы</a>
                                <a href="">Школы</a>
                                <a href="">Ресурсы</a>
                                {this.state.chatVisible && <a href="">Чат</a>}
                                <a href="">Контакты</a>
                            </div>
                        </nav>
                    </div>
                    <Route path="/login" component={Login} />
                </div>
            </BrowserRouter>
        );
    }
}

export default Header;