import React, { useState } from 'react';

export default function Expanse() {

    const [state, setstate] = useState({
        categories: "",
        amount: 0,
        description: ""
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setstate({
            ...state,
            [name]: value
        })
    }

    const handleSumbit = (event) => {
        event.preventDefault();
        let arr = [];
        arr.push(state)
        console.log("array ===>>>>", arr)
    }

    return (

        <div>
            <button className="btn p-4 m-3 btn-warning rounded">
                Expanse -
            </button>
            <button className="btn p-4 m-3 btn-success rounded">
                Income +
            </button>

            <section>
                <form onSubmit={handleSumbit}>

                    <div className="input-group mb-3 col-4">
                        <div className="input-group-prepend">
                            <label className="input-group-text" htmlFor="inputGroupSelect01">categories</label>
                        </div>
                        <select className="custom-select" id="inputGroupSelect01" name="categories" onChange={handleChange} required>
                            <option value="Entertainment">Entertainment</option>
                            <option value="Education">Education</option>
                            <option value="Shopping">Shopping</option>
                            <option value="Health">Health</option>
                            <option value="Education">Education</option>
                            <option value="Kids">Kids</option>
                            <option value="Food-Dining">Food & Dining</option>
                            <option value="Bills">Bills</option>
                            <option value="Travel">Travel</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div className="input-group mb-3 col-4">
                        <div className="input-group-prepend">
                            <span className="input-group-text">₹</span>
                        </div>
                        <input type="number" name="amount" className="form-control" aria-label="Amount" placeholder="Enter Amount" min="10" defaultValue="10" onChange={handleChange} required />
                    </div>

                    <div className="input-group mb-3 col-4">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Description</span>
                        </div>
                        <textarea className="form-control" name="description" rows="3" onChange={handleChange} required></textarea>
                    </div>
                    <div className="col-4">
                        <button type="submit" className="btn btn-outline-info btn-lg btn-block" onClick={handleSumbit}>Submit</button>
                    </div>

                </form>
            </section>

        </div>
    )
}
