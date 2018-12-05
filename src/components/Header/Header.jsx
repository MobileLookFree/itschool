import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

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
                <nav>
                    <div className="home-button" title="На Главную"><Link to="/"><i className="material-icons">brightness_1</i></Link></div>
                    <a href="javascript:void(0);" className="header-menu-button" id="openNavButton">Меню</a>
                    <div className="header-menu">
                        <Link to="/news">Новости</Link>
                        <Link to="/news">Курсы</Link>
                        <Link to="/news">Школы</Link>
                        <Link to="/news">Ресурсы</Link>
                        {this.state.chatVisible && <a href="">Чат</a>}
                        <Link to="/news">О нас</Link>
                    </div>
                    <div className="authorization" title="Войти"><Link to="/login"><i className="material-icons">person</i></Link></div>
                    <div className="dropdown-menu" id="mobile">
                        <Link to="/news">Новости</Link>
                        <Link to="/news">Курсы</Link>
                        <Link to="/news">Школы</Link>
                        <Link to="/news">Ресурсы</Link>
                        {this.state.chatVisible && <a href="">Чат</a>}
                        <Link to="/news">О нас</Link>
                    </div>
                </nav>
        );
    }
}

export default Header;