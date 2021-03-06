import thunk from 'redux-thunk';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import Application from './components/Application.jsx';
import IndexPage from './components/IndexPage.jsx';

import * as reducers from './reducers';

const finalCreateStore = compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f // for redux-devtools-extension
)(createStore);
const store = finalCreateStore(reducers.palindrome);

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path='/' component={Application}>
                <IndexRoute component={IndexPage} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('container')
) 
