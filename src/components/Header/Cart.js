import { Backdrop, Button, Container, Fade, Modal } from "@material-ui/core";
import {
    AddCircleSharp as AddCircleSharpIcon,
    CloseSharp as CloseSharpIcon,
    RemoveCircleSharp as RemoveCircleSharpIcon,
} from "@material-ui/icons";
import React from "react";
import { connect } from "react-redux";

const Cart = ({ openCartModal, handleOpenCartModal, cartItems }) => {
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
                                            <div className="add_one_item__icon">
                                                <AddCircleSharpIcon />
                                            </div>
                                            <div className="cart_item__quantity">
                                                {item.quantity}
                                            </div>
                                            <div className="remove_one_item__icon">
                                                <RemoveCircleSharpIcon />
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="cart_buttons__container">
                            <Button variant="outlined" color="primary">
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
