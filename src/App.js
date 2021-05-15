import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchFoodItems } from "./actions/quoteActions";
import AppHeader from "./components/Header";

const App = ({ dispatch }) => {
    useEffect(() => {
        handleGetFoodItems();
        // eslint-disable-next-line
    }, []);

    const handleGetFoodItems = () => {
        dispatch(fetchFoodItems());
    };

    return (
        <div>
            <AppHeader />
        </div>
    );
};

export default connect()(App);
