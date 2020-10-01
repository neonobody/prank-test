import React from 'react';
import { Provider } from "react-redux";
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import HomePage from "./pages/home"

import './App.scss';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route component={HomePage} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
