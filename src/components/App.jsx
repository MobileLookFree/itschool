import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import history from './history';

import MainPage from './MainPage/MainPage';
import NewsBlog from './NewsBlog/NewsBlog';
import Login from './Login/Login';
import Page404 from './Page404';
import CoursePage from './Courses/CoursePage';
import AboutPage from './About/AboutPage';

class App extends Component {
    render() {
        return (
            <Router history={history} >
                <div>
                    <Switch>
                        <Route exact path="/" component={MainPage} />
                        <Route path="/news" component={NewsBlog} />
                        <Route path="/courses" component={CoursePage} />
                        <Route path="/about" component={AboutPage} />
                        <Route path="/login" component={Login} />
                        <Route path="*" component={Page404} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;