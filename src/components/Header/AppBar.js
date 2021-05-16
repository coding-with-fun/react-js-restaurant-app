import {
    AppBar as Topbar,
    Badge,
    IconButton,
    Toolbar,
    Typography,
} from "@material-ui/core";
import { ShoppingCart as ShoppingCartIcon } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Cart from "./Cart";

const AppBar = ({ cartItems }) => {
    const [openCartModal, setOpenCartModal] = useState(false);
    const [totalCartItems, setTotalCartItems] = useState(0);

    useEffect(() => {
        let cartTotalItems = 0;

        cartItems.map((item) => {
            cartTotalItems += item.quantity;
            return cartTotalItems;
        });

        setTotalCartItems(cartTotalItems);
    }, [cartItems]);

    const handleOpenCartModal = () => {
        setOpenCartModal(!openCartModal);
    };

    return (
        <div className="app_bar__container">
            <Topbar position="static">
                <Toolbar>
                    <Link to="/">
                        <Typography variant="h6" noWrap>
                            Material-UI
                        </Typography>
                    </Link>
                    <div className="app_bar_spacing__container" />
                    <div className="app_bar_icons__container">
                        <IconButton
                            aria-label="Items in cart"
                            color="inherit"
                            onClick={handleOpenCartModal}
                        >
                            <Badge
                                badgeContent={totalCartItems}
                                color="secondary"
                            >
                                <ShoppingCartIcon />
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </Topbar>

            {openCartModal && (
                <Cart
                    openCartModal={openCartModal}
                    handleOpenCartModal={handleOpenCartModal}
                />
            )}
        </div>
    );
};

export default connect((state) => {
    return {
        cartItems: state.cartItemsData.cartItems,
    };
})(AppBar);
