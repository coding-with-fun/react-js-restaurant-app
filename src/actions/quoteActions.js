import { getItems } from "../api/recipe.api";

export const fetchFoodItems = () => {
    return (dispatch) => {
        dispatch(loadingFoodItems(true));
        getItems()
            .then((response) => {
                const meals = response.meals;
                dispatch(setAllFoodItems(meals));
                console.log(meals);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                dispatch(loadingFoodItems(false));
            });
    };
};

export const loadingFoodItems = (flag) => {
    return {
        type: "LOADING_FOOD_ITEMS",
        payload: {
            flag,
        },
    };
};

export const setAllFoodItems = (foodItems) => {
    return {
        type: "SET_ALL_FOOD_ITEMS",
        payload: {
            foodItems,
        },
    };
};
