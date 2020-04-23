import { store } from "../redux/store/store";
import { userToken } from "../helper/helper";

const loadCartData = (userID) => {
    fetch("http://localhost:5000/user/cart/get-cart/" + userID, {
        method: "GET",
        headers: {
            'Authorization': `Bearer ${userToken()}`
        }
    })
        .then((data) => data.json())
        .then((response) => {
            console.log("response =>", response)
            store.dispatch({
                type: "FETCH_CART",
                cart: response
            })
        })
        .catch((error) => {
            console.log("error", error)
        })
}

function handleRemove(cartID) {
    // console.log(cartID)
    fetch(`http://localhost:5000/user/cart/delete-cart/${cartID}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${userToken()}`
        }
    })
        .then((data) => data.json())
        .then((response) => {
            console.log("delete", response)
            alert(response.message)
        }).then(() => {
            window.location.reload()
        })
        .catch((err) => {
            console.log('error', err)
        })
}


function updateCart(data) {
    const cartID = data._id
    // console.log(cartID)

    fetch(`http://localhost:5000/user/cart/update-cart/${cartID}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${userToken()}`
        },
        body: JSON.stringify(data)
    })
        .then((data) => data.json())
        .then((response) => {
            console.log("update", response)
            alert(response.message)
        })
        .catch((err) => {
            console.log('error', err)
        })
}

export { loadCartData, handleRemove, updateCart }