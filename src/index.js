import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './component/App';
import '../style/style.scss';
import store from './store';

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={App} />
      </Route>
    </Router>
  </Provider>, document.getElementById('app'));
