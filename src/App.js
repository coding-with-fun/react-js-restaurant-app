import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchFoodItems } from "./actions/quoteActions";

const App = ({ dispatch }) => {
    useEffect(() => {
        handleGetFoodItems();
        // eslint-disable-next-line
    }, []);

    const handleGetFoodItems = () => {
        dispatch(fetchFoodItems());
    };

    return <div>Hello</div>;
};

export default connect()(App);
