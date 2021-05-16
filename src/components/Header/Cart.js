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
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

const Cart = ({ openCartModal, handleOpenCartModal, cartItems }) => {
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        let cartTotalAmount = 0;

        cartItems.map((item) => {
            cartTotalAmount += item.price;
            return cartTotalAmount;
        });

        setCartTotal(cartTotalAmount);
    }, [cartItems]);

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

                        <div className="cart_items__container">
                            {cartItems.map((item) => {
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
                                            >
                                                <RemoveCircleSharpIcon />
                                            </IconButton>
                                            <div className="cart_item__quantity">
                                                {item.quantity}
                                            </div>
                                            <IconButton
                                                aria-label="add"
                                                className="add_one_item__icon"
                                            >
                                                <AddCircleSharpIcon />
                                            </IconButton>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="cart_total__container">
                            Your total amount is{" "}
                            <span className="cart__total">{cartTotal}</span>
                        </div>

                        <div className="cart_buttons__container">
                            <Button
                                variant="outlined"
                                color="primary"
                                onClick={handleOpenCartModal}
                            >
                                Confirm Order
                            </Button>
                        </div>
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
