import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import history from './history';

import MainPage from './MainPage/MainPage';
import NewsBlog from './NewsBlog/NewsBlog';
import Login from './Login/Login';
import Page404 from './Page404';

class App extends Component {

    render() {
    console.log("URL: ", process.env.PUBLIC_URL);

        return (
            <Router basename={process.env.PUBLIC_URL} history={history} >
                <div>
                    <Switch>
                        <Route exact path="/" component={MainPage} />
                        <Route exact path="/news" component={NewsBlog} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="*" component={Page404} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;