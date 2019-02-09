import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

if (process.env.NODE_ENV === 'production') {
    const ReactGA = require('react-ga');
    ReactGA.initialize('UA-134201888-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
}

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
