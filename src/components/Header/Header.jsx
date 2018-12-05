import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

import HeaderBack from './HeaderBack/HeaderBack';
import Page from '../Page/Page';
import HeaderMobile from './HeaderMobile/HeaderMobile';

window.onload = function () {
    var nav = document.getElementById("mobile");
    var openButton = document.getElementById("openNavButton");

    window.addEventListener('click', function (event) {
        if (event.target == openButton && nav.className == "dropdown-menu") {
            nav.className += " mobile";
            this.console.log("click");
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
            <HeaderBack>
                <Page>
                    <nav>
                        <div className="home-button" title="На Главную"><Link to="${process.env.PUBLIC_URL}/"><i className="material-icons">brightness_1</i></Link></div>
                        <a href="javascript:void(0);" className="header-menu-button" id="openNavButton">Меню</a>
                        <div className="header-menu">
                            <Link to="${process.env.PUBLIC_URL}/news">Новости</Link>
                            <Link to="${process.env.PUBLIC_URL}/courses">Курсы</Link>
                            <Link to="${process.env.PUBLIC_URL}/schools">Школы</Link>
                            <Link to="${process.env.PUBLIC_URL}/resources">Ресурсы</Link>
                            {this.state.chatVisible && <Link to="${process.env.PUBLIC_URL}/chat">Чат</Link>}
                            <Link to="${process.env.PUBLIC_URL}/about">О нас</Link>
                        </div>
                        <div className="authorization" title="Войти"><Link to="${process.env.PUBLIC_URL}/login"><i className="material-icons">person</i></Link></div>
                        <HeaderMobile />
                    </nav>
                </Page>
            </HeaderBack>
        );
    }
}

export default Header;