import React from "react";
import Filters from "./Filters";
import SearchBar from "./SearchBar";

const AppHeader = () => {
    return (
        <div className="AppHeader">
            <SearchBar />
            <Filters />
        </div>
    );
};

export default AppHeader;
