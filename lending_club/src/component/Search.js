import React from 'react'
import { Link } from "react-router-dom";

class Search extends React.Component {
    constructor() {
        super()
        this.state = {
            searchQuery: "",
            data: [],
            result: []
        }
    }

    componentDidMount() {
        fetch("http://localhost:5000/")
            .then(response => response.json())
            .then(json => {
                console.log(json);
                this.setState({
                    data: json
                });
            });
    }

    onCancel = () => {
        this.setState({
            ...this.state,
            result: []
        })
    }

    handleChange = (evt) => {
        const searchCity = this.state.data.filter(member => member.member_id.toString().indexOf(this.state.searchQuery) !== -1);
        let query = evt.target.value
        this.setState({
            ...this.state,
            searchQuery: query,
            result: searchCity
        })
    }


    render() {

        const searchResult = this.state.result.map((loanDetails, index) => {
            return (
                <tr key={index}>

                    <th scope="row"><Link to={`/data/${loanDetails.member_id}`}> &#9755;{loanDetails.member_id}</Link></th>
                    <td>{loanDetails.loan_amnt}</td>
                    <td>{loanDetails.funded_amnt_inv}</td>
                    <td>{loanDetails.term}</td>
                    <td>{loanDetails.issue_d}</td>
                    <td>{loanDetails.loan_status}</td>
                    <td>{loanDetails.last_pymnt_d}</td>
                    <td>{loanDetails.last_pymnt_amnt}</td>
                </tr >
            )
        })


        console.log("hhell", this.state.result)
        return (
            <div className="container">
                <div className="input-group mb-3 justify-content-end">
                    <input type="text" className="form-control" placeholder="Search By Member ID" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={this.handleChange} />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
                        <button className="btn btn-outline-danger" onClick={this.onCancel}>&#10006;</button>
                        {/* {searchCity} */}
                    </div>
                </div>
                {
                    this.state.result ? (<div className="container ">
                        <div className="table-responsive-sm">
                            <table className="table table-bordered  table-hover">
                                <tbody>
                                    {searchResult}
                                </tbody>
                            </table>
                        </div>

                    </div>) : (<p>Member Id Not Available</p>)
                }
            </div>
        )
    }
}

export default Search
