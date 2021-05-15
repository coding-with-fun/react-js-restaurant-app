const initialState = {
    loadingFoodItems: true,
    foodItems: [],
};

const quoteReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOADING_FOOD_ITEMS":
            return {
                ...state,
                loadingFoodItems: action.payload.flag,
            };

        case "SET_ALL_FOOD_ITEMS":
            return {
                ...state,
                foodItems: action.payload.foodItems,
            };

        default:
            return state;
    }
};

export default quoteReducer;
