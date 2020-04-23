import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { loadCartData, handleRemove, updateCart } from '../API/cartApi';


export default function Cart(props) {

    /***************** GET USER ID STORE IN LOCALSTORAGE AFTER LOGIN *******************/
    const userID = JSON.parse(localStorage.getItem("userToken")).userID

    useEffect(() => {
        /***************** loadCartData FUNCTION FROM CART API TO FETCH USER CART *******************/
        loadCartData(userID)
    }, [userID])

    /***************** REDUX HOOKS FOR FETCHING USER CART *******************/
    const cartProduct = useSelector(state => state.cart)

    const dispatch = useDispatch() // useDispatch Hook


    /***************** INDIVIDUAL PRODUCT DATA FOR SENDING UPDATE REQUEST*******************/
    const [state, setState] = useState({})


    /***************** STATE FOR HANDEL EDIT FUNCANLITY *******************/
    const [edit, setEdit] = useState({ edit: false, disabled: true })


    /***************** HANDLE ENABLE/DISBALE EDIT OPTION *******************/
    function handleEdit(product) {
        setState(product)
        setEdit({
            edit: true,
            disabled: false
        })
    }

    /*****************  CHANGE QUANTITY VALUE *******************/
    const handleQuantity = (event) => {
        setState({
            ...state,
            quantity: event.target.value
        })
    }

    /***************** UPADTE QUANTITY SUBMIT FUNCTION *******************/
    const handleSumbit = () => {
        if (state.quantity > 0) {
            dispatch({
                type: "ADD_QUANTITY",
                cart: state
            })
            updateCart(state)
            setEdit({ edit: false, disabled: true })
        } else {
            alert("Minmum Quantinty 1, Maximum Quantinty 20")
        }
    }

    /***************** DELETE CONFIRMATION FUNCTION*******************/
    const removeCart = (id) => {
        const remove = window.confirm("Are You Sure Remove Product?");
        if (remove === true) {
            handleRemove(id)
        }
    }


    return (
        <div className="container bd-dark">
            <div className="d-flex flex-column col-10">

                {cartProduct.length > 0 ?
                    (
                        cartProduct.map((product, index) => {
                            return (
                                <div className="card mb-5" key={index}>
                                    <div className="card-header">Order</div>

                                    <div className="row no-gutters">
                                        <div className="col-4">
                                            <img src={product.productImage} style={{ width: '300px', height: '220px' }} className="card-img" alt="..." />
                                        </div>
                                        <div className="col-8">
                                            <div className="card-body">
                                                <h5 className="card-title">{product.name}</h5>
                                                <p className="card-text">{product.description}</p>
                                                <div className="text-success"><h5 className="mt-4">&#8377; {product.price}</h5></div>

                                                <div className="d-flex mt-3">
                                                    <div className="input-group mb-3 col-5">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text">Quantity</span>
                                                        </div>
                                                        <input type="number" disabled={edit.disabled} onClick={handleQuantity} className="form-control text-center" min="1" max="10" defaultValue={product.quantity} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required />

                                                        <div className={edit.edit ? "d-block mr-4 mt-4" : "d-none"}>
                                                            <button onClick={handleSumbit} className="btn btn-outline-success mx-2">Submit</button>
                                                            <button onClick={() => { setEdit({ edit: false, disabled: true }) }} className="btn btn-outline-danger">cancle</button>
                                                        </div>
                                                    </div>

                                                    <div className="mr-4">
                                                        <button className="btn btn-outline-success" onClick={() => handleEdit(product)}>Edit Quantity</button>
                                                    </div>

                                                    <div>
                                                        <button className="btn btn-outline-danger" onClick={() => removeCart(product._id)}>Remove</button>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                    <div className="card-footer d-flex justify-content-between">
                                        <div className="d-flex">
                                            <h4>Total Price :&nbsp;</h4>
                                            <h4>{product.price * product.quantity}</h4>
                                        </div>
                                        <button className="btn btn-success font-weight-bold pl-5 pr-5" disabled><span><h5>Place Order</h5></span></button>
                                    </div>
                                </div>
                            )
                        })
                    )
                    :
                    (<div className="m-5"><h3>Cart is Empty</h3></div>)

                }

            </div>
        </div>
    )
}
