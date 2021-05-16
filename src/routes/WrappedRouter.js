import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Checkout from "../components/Checkout";
import Home from "../components/Home";

const WrappedRouter = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/checkout">
                <Checkout />
            </Route>
            <Route path="*">
                <Redirect to="/" />
            </Route>
        </Switch>
    );
};

export default WrappedRouter;
