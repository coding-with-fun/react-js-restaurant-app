const initialState = {
    loadingCartItems: false,
    cartItems: [
        {
            id: 1,
            name: "Pizza One",
            price: 100,
            quantity: 1,
        },
        {
            id: 2,
            name: "Pizza Two",
            price: 200,
            quantity: 1,
        },
        {
            id: 3,
            name: "Pizza Three",
            price: 300,
            quantity: 1,
        },
        {
            id: 4,
            name: "Pizza One",
            price: 100,
            quantity: 1,
        },
        {
            id: 5,
            name: "Pizza One",
            price: 100,
            quantity: 1,
        },
        {
            id: 6,
            name: "Pizza One",
            price: 100,
            quantity: 1,
        },
        {
            id: 7,
            name: "Pizza One",
            price: 100,
            quantity: 1,
        },
        {
            id: 8,
            name: "Pizza One",
            price: 100,
            quantity: 1,
        },
        {
            id: 9,
            name: "Pizza One",
            price: 100,
            quantity: 1,
        },
        {
            id: 10,
            name: "Pizza One",
            price: 100,
            quantity: 1,
        },
        {
            id: 11,
            name: "Pizza One",
            price: 100,
            quantity: 1,
        },
        {
            id: 12,
            name: "Pizza One",
            price: 100,
            quantity: 1,
        },
        {
            id: 13,
            name: "Pizza One",
            price: 100,
            quantity: 1,
        },
        {
            id: 14,
            name: "Pizza One",
            price: 100,
            quantity: 1,
        },
        {
            id: 15,
            name: "Pizza One",
            price: 100,
            quantity: 1,
        },
    ],
    totalItems: 15,
};

const cartRequest = (state = initialState, action) => {
    switch (action.type) {
        case "MANAGE_CART":
            return {
                ...state,
                cartItems: action.payload.cartItems,
            };

        default:
            return state;
    }
};

export default cartRequest;
