import React from "react";
import { Link } from "react-router-dom";
import Search from './Search';


class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentData: 1,
            DataPerPage: 15,
            pagesSTART: 0,
            pagesLAST: 10,
            data: []
        };
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

    handleClick = event => {
        this.setState({
            ...this.state,
            currentData: Number(event.target.id)
        });
    };


    handleNext = () => {
        console.log(
            this.state.pagesLAST,
            this.state.data.length / this.state.DataPerPage
        );
        if (
            this.state.pagesLAST <
            this.state.data.length / this.state.DataPerPage
        ) {
            this.setState({
                ...this.state,
                pagesSTART: this.state.pagesSTART + 10,
                pagesLAST: this.state.pagesLAST + 10
            });
        }
    };

    handlePrev = () => {
        if (this.state.pagesSTART !== 0) {
            this.setState({
                ...this.state,
                pagesSTART: this.state.pagesSTART - 10,
                pagesLAST: this.state.pagesLAST - 10
            });
        }
    };

    render() {
        const { data } = this.state;

        // Logic for displaying data

        const indexOfLastData = this.state.currentData * this.state.DataPerPage;
        const indexOfFirstData = indexOfLastData - this.state.DataPerPage;
        const currentDatas = data.slice(indexOfFirstData, indexOfLastData);

        const renderData = currentDatas.map((loanDetails, index) => {
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

        // Logic for displaying page numbers

        const totalPage = [];
        for (let i = 1; i <= Math.ceil(data.length / this.state.DataPerPage); i++) {
            totalPage.push(i);
        }

        const pages = totalPage.slice(this.state.pagesSTART, this.state.pagesLAST);

        const TotalPageNumbers = pages.map(number => {
            return (
                <li
                    key={number}
                    id={number}
                    onClick={this.handleClick}
                    className="m-1 btn btn-outline-dark"
                >
                    {number}
                </li>
            );
        });

        return (
            <div>

                <div>
                    <div className="container ">
                        <Search />
                        <div className="table-responsive-sm">
                            <table className="table table-bordered  table-hover">
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">Member_id</th>
                                        <th scope="col">Loan Amount</th>
                                        <th scope="col">Funded Amount</th>
                                        <th scope="col">Term</th>
                                        <th scope="col">Issue Date</th>
                                        <th scope="col">Loan Status</th>
                                        <th scope="col">Last Payment Date</th>
                                        <th scope="col">Last Payment Ammount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {renderData}
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>

                <ul id="page-numbers">{TotalPageNumbers}</ul>
                <button onClick={this.handlePrev} className="btn btn-primary btn-sm m-2">PREV</button>
                <button onClick={this.handleNext} className="btn btn-primary btn-sm">NEXT</button>
            </div>
        );
    }
}

export default Dashboard;
