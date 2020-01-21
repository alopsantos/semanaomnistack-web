import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Farmacia from './pages/Farmacia';
import Plantao from './pages/Plantao';

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route path="/farmacias" component={Farmacia} />
                <Route path="/plantoes" component={Plantao} />
            </Switch>
        </BrowserRouter>
    );
}