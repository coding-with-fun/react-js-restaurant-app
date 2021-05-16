import React, { useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { fetchFoodItems } from "./actions/foodActions";
import AppHeader from "./components/Header";
import WrappedRouter from "./routes/WrappedRouter";

const App = ({ dispatch }) => {
    useEffect(() => {
        handleGetFoodItems();
        // eslint-disable-next-line
    }, []);

    const handleGetFoodItems = () => {
        dispatch(fetchFoodItems());
    };

    return (
        <Router>
            <AppHeader />
            <WrappedRouter />
        </Router>
    );
};

export default connect()(App);
