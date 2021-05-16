const initialState = {
    loadingCartItems: false,
    cartItems: [
        {
            id: 1,
            name: "Pizza One",
            price: 100,
            totalPrice: 100,
            quantity: 1,
        },
    ],
    totalItems: 15,
};

const cartRequest = (state = initialState, action) => {
    switch (action.type) {
        case "MANAGE_CART":
            console.log(action.payload);
            return {
                ...state,
                cartItems: action.payload.cartItems,
            };

        default:
            return state;
    }
};

export default cartRequest;
