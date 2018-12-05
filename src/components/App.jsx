import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';

import HeaderBack from './Header/HeaderBack/HeaderBack';
import Header from './Header/Header';
import Page from './Page/Page';
import FooterBack from './Footer/FooterBack/FooterBack';

import MainPage from './MainPage/MainPage';
import NewsBlog from './NewsBlog/NewsBlog';
import Login from './Login/Login';



class App extends Component {

    render() {
        return (
            <Router history={history}>
                <div>
                    <HeaderBack>
                        <Page>
                            <Header />
                        </Page>
                    </HeaderBack>
                    <Page>
                        <Route exact path="/" component={MainPage} />
                        <Route exact path="/news" component={NewsBlog} />
                        <Route exact path="/login" component={Login} />
                    </Page>
                    <FooterBack />
                </div>
            </Router>
        );
    }
}

export default App;