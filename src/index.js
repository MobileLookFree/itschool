import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Header from './components/Header';
import SmallScreen from './components/SmallScreen';

if (window.innerWidth < "310") {
    ReactDOM.render(
        <div>
            <SmallScreen />
        </div>, document.getElementById('root')
    );

    window.addEventListener('orientationchange', function (){
        ReactDOM.render(
            <div>
                <App />
            </div>, document.getElementById('root')
        );
    })
}

else {
    ReactDOM.render(
        <div>
            <App />
        </div>, document.getElementById('root')
    );
}


