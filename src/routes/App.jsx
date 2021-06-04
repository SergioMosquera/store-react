import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Checkout from '../containers/Checkout';
import Information from '../containers/Information';
import Layout from '../components/Layout';


const App = () => (
        <BrowserRouter>
        <Layout>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/checkout/information" component={Information} />
        </Switch>
        </Layout>
        </BrowserRouter>
    )

export default App;