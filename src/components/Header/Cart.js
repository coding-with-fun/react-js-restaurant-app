import {
    Backdrop,
    Button,
    Container,
    Fade,
    IconButton,
    Modal,
} from "@material-ui/core";
import {
    AddCircleSharp as AddCircleSharpIcon,
    CloseSharp as CloseSharpIcon,
    RemoveCircleSharp as RemoveCircleSharpIcon,
} from "@material-ui/icons";
import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { manageCart } from "../../actions/cartActions";

const Cart = ({ openCartModal, handleOpenCartModal, cartItems, dispatch }) => {
    const history = useHistory();
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        let cartTotalAmount = 0;

        cartItems.map((item) => {
            cartTotalAmount += item.totalPrice;
            return cartTotalAmount;
        });

        setCartTotal(cartTotalAmount);
    }, [cartItems]);

    const routeToCheckOut = () => {
        handleOpenCartModal();
        history.push("/checkout");
    };

    const addItemToCart = (index) => {
        const localCartItems = [...cartItems];
        localCartItems[index].quantity += 1;
        localCartItems[index].totalPrice += localCartItems[index].price;
        dispatch(manageCart(localCartItems));
    };

    const removeItemFromCart = (index) => {
        let localCartItems = [...cartItems];

        if (localCartItems[index].quantity === 1) {
            localCartItems.splice(index, 1);
        } else {
            localCartItems[index].quantity -= 1;
            localCartItems[index].totalPrice -= localCartItems[index].price;
        }

        dispatch(manageCart(localCartItems));
    };

    return (
        <Modal
            aria-labelledby="cart modal"
            aria-describedby="cart-modal"
            className="cart__container"
            open={openCartModal}
            onClose={handleOpenCartModal}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={openCartModal}>
                <Container maxWidth="xs">
                    <div className="cart_content__container">
                        <div className="cart_header__container">
                            <h2 className="cart_header__title">Cart</h2>
                            <CloseSharpIcon
                                onClick={handleOpenCartModal}
                                className="cart_header__close_icon"
                            />
                        </div>

                        {cartItems.length > 0 ? (
                            <Fragment>
                                <div className="cart_items__container">
                                    {cartItems.map((item, index) => {
                                        return (
                                            <div
                                                key={item.id}
                                                className="cart_item__container"
                                            >
                                                <div className="cart_item__title">
                                                    {item.name}
                                                </div>

                                                <div className="cart_item_quantity__container">
                                                    <IconButton
                                                        aria-label="remove"
                                                        className="remove_one_item__icon"
                                                        onClick={() =>
                                                            removeItemFromCart(
                                                                index
                                                            )
                                                        }
                                                    >
                                                        <RemoveCircleSharpIcon />
                                                    </IconButton>
                                                    <div className="cart_item__quantity">
                                                        {item.quantity}
                                                    </div>
                                                    <IconButton
                                                        aria-label="add"
                                                        className="add_one_item__icon"
                                                        onClick={() =>
                                                            addItemToCart(index)
                                                        }
                                                    >
                                                        <AddCircleSharpIcon />
                                                    </IconButton>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>

                                <div className="cart_total__container">
                                    Your total amount is
                                    <span className="cart__total">
                                        {cartTotal}
                                    </span>
                                </div>

                                <div className="cart_buttons__container">
                                    <Button
                                        variant="outlined"
                                        color="primary"
                                        onClick={routeToCheckOut}
                                    >
                                        Confirm Order
                                    </Button>
                                </div>
                            </Fragment>
                        ) : (
                            <div className="empty_cart__title">
                                Your cart is empty!!
                            </div>
                        )}
                    </div>
                </Container>
            </Fade>
        </Modal>
    );
};

export default connect((state) => {
    return {
        cartItems: state.cartItemsData.cartItems,
    };
})(Cart);
