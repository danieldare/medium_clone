import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from 'react';
import Home from "../Home/Home";

const Routes  = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route to="/" component={Home} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
