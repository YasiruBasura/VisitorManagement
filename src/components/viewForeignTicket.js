import  React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

import './css/finance.css';
import ForeignTicketTable from './foreignTicketTableRow';


export default  class viewForeignTicket extends  Component{


    constructor(props) {
        super(props);

        this.state = { foreigns : []};
    }

    componentDidMount() {
        // alert('email is ' +this.props.match.params.id);
        axios.get('http://localhost:4000/finance/foreignticket/')
            .then(response => {
                // alert('Pass una')
                // alert('Data Tika :'+response.data)
                this.setState({foreigns : response.data});

            })
            .catch(function (error){
                console.log(error);
            })
    }

    tabRow(){
        return this.state.foreigns.map(function (object, i){
            return <ForeignTicketTable obj = {object} key = {i}/>;
        });
        // return <OrderTableRow obj={this.state.orders}/>
    }


    render() {
        return (
          <div>
            <div class="sidebar">
              <center>
                <h2>Animal Haven</h2>
                <h6>Admin Dashboard</h6>
              </center>
              <br />
              <a href="/">Dashboard</a>
              <a href="/VisitorDashboard">Visitor Management</a>
              <a href="/">Project Management</a>
              <a href="/financeDashboard">Finance Management</a>
              <a href="/adminHome">Inventory Management</a>
              <a href="/HandlingRecordsResearchDashboard">
                Handing Medical Records & Research
              </a>
              <a href="/AnimalsDashbord">Animal Management</a>
              <a href="/voldb">Volunteer Management</a>
              <a href="">Employee Management</a>
            </div>

            <div class="content">
              <center>
                <br />
                <h1 style={{ fontSize: 40, color: "white", marginBottom: 30 }}>
                  FINANCE DASHBOARD
                </h1>

                <h4 style={{ color: "white", marginRight: 600 }}>
                  FOREIGN TICKET HISTORY
                </h4>
              </center>

              <table
                className="table table-striped"
                style={{
                  marginTop: 20,
                  marginLeft: 270,
                  width: "80%",
                  color: "white",
                }}
              >
                <thead>
                  <tr>
                    {/* <th>id</th> */}
                    <th>Reference Number</th>
                    <th>No of Adult</th>
                    <th>No of Child</th>
                    <th>Price (a)</th>
                    <th>Price (c)</th>
                    <th>Total</th>
                    <th>Generating Receipt Date</th>
                    <th colSpan="2">Action</th>
                  </tr>
                </thead>
                <tbody>{this.tabRow()}</tbody>
              </table>
            </div>
          </div>
        );
    }
}