import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';

import MainPage from './MainPage/MainPage';
import NewsBlog from './NewsBlog/NewsBlog';
import Login from './Login/Login';
import Page404 from './Page404';

class App extends Component {

    render() {
        return (
            <Router basename={process.env.PUBLIC_URL} history={history} >
                <div>
                    <Switch>
                        <Route exact path="${process.env.PUBLIC_URL}/" component={MainPage} />
                        <Route exact path="${process.env.PUBLIC_URL}/news" component={NewsBlog} />
                        <Route exact path="${process.env.PUBLIC_URL}/login" component={Login} />
                        <Route exact path="${process.env.PUBLIC_URL}*" component={Page404} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;