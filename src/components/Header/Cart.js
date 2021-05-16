import { Backdrop, Container, Fade, Modal } from "@material-ui/core";
import { CloseSharp as CloseSharpIcon } from "@material-ui/icons";
import React from "react";

const Cart = ({ openCartModal, handleOpenCartModal }) => {
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
                            <CloseSharpIcon />
                        </div>
                    </div>
                </Container>
            </Fade>
        </Modal>
    );
};

export default Cart;
