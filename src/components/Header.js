import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { chatVisible: false, techBack: false};
    }

    componentDidMount() {
        this.setState({ chatVisible: false }); //флаг видимости чата в зависимости от авторизации
    }

    render() {
        return (
            <div className="header-back">
                <div className="header-menu-bar">
                    <div className="home-button"><a href="http://localhost:3000"></a></div>
                    <div className="header-menu">
                        <ul >
                            <li><a href="">Новости</a></li>
                            <li><a href="">Курсы</a></li>
                            <li><a href="">Школы</a></li>
                            <li><a href="">Ресурсы</a></li>
                            {this.state.chatVisible && <li><a href="">Чат</a></li>}
                            <li><a href="">Контакты</a></li>
                        </ul>
                    </div>
                    <div className="authorization"><a href=""><i className="material-icons">person</i></a></div>
                </div>
            </div>
        );
    }
}

export default Header;