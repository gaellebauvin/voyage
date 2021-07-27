import React from 'react';
import '../App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Dashboard from './Dashboard/Dashboard';
import Preferences from './Preferences/Preferences';
import Login from './Login/Login';
import useToken from './App/useToken';

function App() {
    const { token, setToken } = useToken();

    //si pas connecté
    if(!token) {
        return <Login setToken={setToken} />
    }

  return (
    <div className="App">
        <h1>Voyage</h1>
        <BrowserRouter>
            <Switch>
                <Route path="/dashboard">
                    <Dashboard/>
                </Route>
                <Route path="/preferences">
                    <Preferences/>
                </Route>
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
