import React, { useState, useEffect } from 'react'

export default function Total_Expanses() {

    const [state, setstate] = useState({ data: [] })



    useEffect(() => {

        fetch("http://localhost:8000/getExpanse")
            .then((data) => data.json())
            .then(response => {
                const IncomeData = response.filter((ele) => ele.tag === "income")
                setstate({ incomeData: IncomeData })
            })
            .catch((err) => {
                console.log('error', err)
            })
    }, [])

    return (
        <div>
            <div className="d-flex justify-content-around mt-5">
                <section>
                    <h3>Income</h3>
                    <ul className="list-group list-group-flush">
                        {state.incomeData && state.incomeData.length > 0 ?
                            (state.incomeData.map((ele, index) => {
                                return (
                                    <li key={index} className="d-flex justify-content-between list-group-item list-group-item-primary">
                                        <div className="mr-5">
                                            {ele.categories}
                                        </div>
                                        <div className="ml-5">
                                            {ele.amount}
                                        </div>
                                    </li>
                                )
                            }))
                            :
                            (<p>Nothing in List</p>)
                        }
                    </ul>
                </section>

                <section>
                    <h3>Expanses</h3>
                </section>
            </div>

        </div>
    )
}
