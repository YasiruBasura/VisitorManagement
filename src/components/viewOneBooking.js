import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

import "./css/finance.css";
import BookingTable from "./oneBookingTableRow";

export default class viewOneBooking extends Component {
  constructor(props) {
    super(props);

    this.state = { natives: [] };
  }

  componentDidMount() {
    //alert('email is ' +this.props.match.params.id);
    axios
      .get(
        "http://localhost:4000/Bookings/viewOneBooking/" +
          this.props.match.params.id
      )
      .then((response) => {
        // alert('Pass una')
        // alert('Data Tika :'+response.data)
        this.setState({ natives: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  tabRow() {
    // return this.state.natives.map(function (object, i){
    //     return <NativeTicketTable obj = {object} key = {i}/>;
    // });
    return <BookingTable obj={this.state.natives} />;
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
              VISITOR DASHBOARD
            </h1>

            <h4 style={{ color: "white", marginRight: 600 }}>
              BOOKING HISTORY
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
                <th>Booking Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Regular</th>
                <th>Student</th>
                <th>Child</th>
                <th>Date</th>
                <th>Total Price</th>
              </tr>
            </thead>
            <tbody>{this.tabRow()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
