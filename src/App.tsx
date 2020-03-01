import React, { StrictMode, FunctionComponent, ReactElement } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './services/store';
import './assets/sass/main.scss';
import 'react-perfect-scrollbar/dist/css/styles.css';
import routes from './routes/appRoute';

const App: FunctionComponent = (): ReactElement => {
  return (
    <Provider store={store}>
      <StrictMode>
        <BrowserRouter>
          <Switch>
            {routes.map(route => (
              <Route
                key={route.name}
                exact={route.exact}
                path={route.path}
                component={route.component}
              />
            ))}
          </Switch>
        </BrowserRouter>
      </StrictMode>
    </Provider>
  );
};

render(<App />, document.getElementById('root'));
