export const manageCart = (cartItems) => {
    return {
        type: "MANAGE_CART",
        payload: cartItems,
    };
};
