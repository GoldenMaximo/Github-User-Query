import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Footer from '../Components/Footer';

import Home from '../Pages/Home';
import Result from '../Pages/Result';

const Routes = () => (
    <BrowserRouter>
        <>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/" component={Result} />
            </Switch>

            <Footer />
        </>
    </BrowserRouter>
);

export default Routes;
