import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import ReactGA from 'react-ga';

if (process.env.NODE_ENV === 'production') {
    ReactGA.initialize('UA-134201888-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
} else {
    ReactGA.initialize('UA-000000-01', {
        debug: true,
    });
    ReactGA.pageview('main');
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
