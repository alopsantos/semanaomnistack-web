import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Farmacia from './pages/Farmacia';
import Plantao from './pages/Plantao';

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/farmacias" component={Farmacia} />
                <Route path="/plantoes" component={Plantao} />
            </Switch>
        </BrowserRouter>
    );
}