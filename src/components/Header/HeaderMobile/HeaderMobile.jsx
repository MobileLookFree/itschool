import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './HeaderMobile';

class HeaderMobile extends Component {
    constructor(props) {
        super(props);
        this.state = { chatVisible: false, techBack: false };
    }

    componentDidMount() {
        this.setState({ chatVisible: false , techBack: false}); //флаг видимости чата в зависимости от авторизации
    }

    render() {
        return (
            <div className="dropdown-menu" id="mobile">
                <Link to="${process.env.PUBLIC_URL}/news">Новости</Link>
                <Link to="${process.env.PUBLIC_URL}/courses">Курсы</Link>
                <Link to="${process.env.PUBLIC_URL}/schools">Школы</Link>
                <Link to="${process.env.PUBLIC_URL}/resources">Ресурсы</Link>
                {this.state.chatVisible && <Link to="${process.env.PUBLIC_URL}/chat">Чат</Link>}
                <Link to="${process.env.PUBLIC_URL}/about">О нас</Link>
            </div>
        );
    }
}

export default HeaderMobile;