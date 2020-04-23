import React, { useEffect } from 'react'
import { fetchProduct } from '../API/productApi';
import { useSelector } from 'react-redux';
import { letterCorrection } from '../helper/helper';
import { loadCartData } from '../API/cartApi';
import Logout from './Logout';


export default function Home(props) {


    /***************** GET USER ID STORE IN LOCALSTORAGE AFTER LOGIN *******************/
    const userId = JSON.parse(localStorage.getItem("userToken")).userID;

    /***************** GET JWT TOKEN STORE IN LOCALSTORAGE AFTER LOGIN *******************/
    const userToken = JSON.parse(localStorage.getItem("userToken")).token;

    useEffect(() => {

        // FETCH ALL PRODUCT AND DIPSATCH IN STORE //
        fetchProduct()

        //FETCH ALL CART PRODUCT AND DIPSATCH IN STORE //
        loadCartData(userId)

    }, [userId])

    /***************** REDUX HOOKS FOR FETCHING ALL PRODUCTS *******************/
    const productData = useSelector(state => state.products)


    const handleAddCart = (e) => {
        const productId = e.target.value; //GET PRODUCT ID

        // console.log("productId :", productId, "userId : ", userId)

        /*****************FETCH PRODUCT DETAILS BY ID*******************/
        fetch("http://localhost:5000/get-product/" + productId)
            .then((data) => data.json())
            .then((response) => {
                console.log(response)

                /***************** SEND PRODUCT DETAILS USER CART *******************/
                fetch("http://localhost:5000/user/cart/add-cart/" + userId, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${userToken}`
                    },
                    body: JSON.stringify(response)
                })
                    .then((data) => data.json())
                    .then(response => {
                        console.log("success :", response)
                    })
                    .catch((err) => {
                        console.log('error', err)
                    })

            }).then(() => props.history.push(`/cart/${userId}`))//REDIRECT INTO CART PAGE

            .catch((err) => {
                console.log('error', err)
            })

    }

    return (
        <div>
            <div className="float-right mr-4">
                <Logout />
            </div>
            <div className="container">
                <div className="row ">
                    {
                        productData.map((product, index) => {
                            return (
                                <div className="col-12 col-sm-8 col-md-6 col-lg-3 mt-4" key={index}>
                                    <div className="card">
                                        <img className="card-img" src={product.productImage} alt="Vans" />
                                        <div className="card-body">
                                            <h4 className="card-title">{letterCorrection(product.name)}</h4>
                                            <h6 className="card-subtitle mb-2 text-muted">Style: VA33TXRJ5</h6>
                                            <p className="card-text">{product.description}</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="price text-success"><h5 className="mt-4">&#8377; {product.price}</h5></div>
                                                <button onClick={handleAddCart} value={product._id} className="btn btn-danger mt-3">Add to Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
