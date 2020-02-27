import React from 'react';

class ViewClient extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            client: []
        };
    }

    componentDidMount() {
        const memberID = this.props.match.params.id
        // console.log("Member ID", memberID)
        fetch(`http://localhost:5000/data/${memberID}`)
            .then((data) => data.json())
            .then(response => {
                console.log("success :", response)
                this.setState({
                    client: response
                })
            })
            .catch((err) => {
                console.log('error', err)
            })
    }


    render() {
        return (
            <div>
                <div>
                    <h1>Details of Client Id-{this.state.client.member_id}</h1>
                    <div className="container">
                        <div>
                            <h3>Member ID</h3>
                        </div>

                        <div className="container text-left">
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <th scope="row" className="ml-5">Member Id</th>
                                        <td>{this.state.client.member_id}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Employee Title</th>
                                        <td>{this.state.client.emp_title}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Employee Length</th>
                                        <td>{this.state.client.emp_length}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Grade</th>
                                        <td>{this.state.client.grade}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Home Ownership</th>
                                        <td>{this.state.client.home_ownership}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Loan Status</th>
                                        <td>{this.state.client.loan_status}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Verifiction Status</th>
                                        <td>{this.state.client.verification_status}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Issue Date</th>
                                        <td>{this.state.client.issue_d}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Term</th>
                                        <td>{this.state.client.term}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Purpose</th>
                                        <td>{this.state.client.purpose}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Title</th>
                                        <td>{this.state.client.title}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Loan Amount</th>
                                        <td>{this.state.client.loan_amnt}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Last Payment Amount</th>
                                        <td>{this.state.client.last_pymnt_amnt}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Last Payment Date</th>
                                        <td>{this.state.client.last_pymnt_d}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Intrest Rate %</th>
                                        <td>{this.state.client.int_rate}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Installment</th>
                                        <td>{this.state.client.installment}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Funded Amount Investment</th>
                                        <td>{this.state.client.funded_amnt_inv}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Annual Income</th>
                                        <td>{this.state.client.annual_inc}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Description</th>
                                        <td>{this.state.client.desc}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Address state</th>
                                        <td>{this.state.client.addr_state}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>


                    </div>
                </div>
            </div>
        )

    }
}
export default ViewClient

