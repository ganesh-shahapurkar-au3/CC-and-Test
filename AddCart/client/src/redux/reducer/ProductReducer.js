const productReducer = (products = [], action) => {
    switch (action.type) {

        case "FETCH_PRODUCTS":
            return products = action.products

        default:
            return products;
    }
}

export { productReducer }