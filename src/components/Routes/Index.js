import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from 'react';
import Home from "../Home/Home";

const Routes  = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route to="/" component={Home} exact />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
