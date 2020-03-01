import React, { StrictMode, FunctionComponent, ReactElement } from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './services/store';
import 'react-perfect-scrollbar/dist/css/styles.css';
import routes from './routes/appRoute';
import theme from './assets/styles/variables';
import GlobalStyles from './assets/styles/globalStyles';

const App: FunctionComponent = (): ReactElement => {
  return (
    <Provider store={store}>
      <StrictMode>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
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
        </ThemeProvider>
      </StrictMode>
    </Provider>
  );
};

render(<App />, document.getElementById('root'));
