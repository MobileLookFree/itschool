import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import history from './history';

import MainPage from './MainPage/MainPage';
import NewsBlog from './NewsBlog/NewsBlog';
import Login from './Login/Login';
import Page404 from './Page404';

class App extends Component {

    render() {
    console.log("URL: ", process.env.PUBLIC_URL);

        return (
            <HashRouter basename={process.env.PUBLIC_URL} history={history} >
                <div>
                    <Switch>
                        <Route exact path="/" component={MainPage} />
                        <Route path="/news" component={NewsBlog} />
                        <Route path="/login" component={Login} />
                        <Route path="*" component={Page404} />
                    </Switch>
                </div>
            </HashRouter>
        );
    }
}

export default App;