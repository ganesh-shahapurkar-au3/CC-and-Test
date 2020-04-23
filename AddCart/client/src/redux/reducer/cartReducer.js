const cartReducer = (carts = [], action) => {
    switch (action.type) {
        case "FETCH_CART":
            return carts = action.cart;

        case "ADD_TO_CART":
            return carts = carts.concat(action.cart)

        case "ADD_QUANTITY":
            return carts.map((cart) => {
                if (cart._id === action.cart._id) {
                    return {
                        ...cart,
                        quantity: action.cart.quantity
                    }
                } else return cart;
            })

        default:
            return carts;
    }
}

export { cartReducer }