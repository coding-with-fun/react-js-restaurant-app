import { combineReducers } from "redux";
import foodReducer from "./foodReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
    foodItemsData: foodReducer,
    cartItemsData: cartReducer,
});

export default rootReducer;
