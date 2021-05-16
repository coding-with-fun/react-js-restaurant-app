export const manageCart = (cartItems) => {
    console.log(cartItems);
    return {
        type: "MANAGE_CART",
        payload: {
            cartItems,
        },
    };
};
