import { store } from "../redux/store/store"

function fetchProduct() {
    const url = "http://localhost:5000/products"
    fetch(url)
        .then((data) => data.json())
        .then(async (response) => {
            console.log("product data => ", response)
            store.dispatch({
                type: "FETCH_PRODUCTS",
                products: response
            })
        })
        .catch((err) => {
            console.log("err" + err)
        })
}

export { fetchProduct }