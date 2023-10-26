import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

import "./css/finance.css";
import BookingTable from "./bookingTableRow";

export default class viewBookingdata extends Component {
  constructor(props) {
    super(props);

    this.state = {
      natives: [],
      searchValue: "",
    };
  }

  componentDidMount() {
    // alert('email is ' +this.props.match.params.id);
    axios
      .get("http://localhost:4000/Bookings/viewBookingData/")
      .then((response) => {
        // alert('Pass una')
        // alert('Data Tika :'+response.data)
        this.setState({ natives: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });

    //this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }

  tabRow() {
    return this.state.natives
      .filter((object) => {
        // filter objects based on searchValue if not empty
        if (this.state.searchValue === "") {
          return true;
        } else {
          const searchString = this.state.searchValue.toLowerCase();
          const id = object.id.toLowerCase();
          const name = object.name.toLowerCase();
          const email = object.email.toLowerCase();
          return (
            name.includes(searchString) ||
            email.includes(searchString) ||
            id.includes(searchString)
          );
        }
      })
      .map((object, i) => {
        return <BookingTable obj={object} key={i} />;
      });
    // return <OrderTableRow obj={this.state.orders}/>
  }

  onSearchChange = (event) => {
    this.setState({ searchValue: event.target.value });
  };

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

            <input
              type="text"
              value={this.state.searchValue}
              onChange={this.onSearchChange}
            />
          </center>

          {/* SearchBar */}
          {/* <div className="container" style={{marginTop:20,marginBottom:20}}>
                            <form onSubmit={this.onSearchSubmit}>
                            <div className="row">
                                <div className="col-lg-9 col-md-9 col-sm-9">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Search Users ..."/>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-3">
                                <button type="submit" onChange={this.onChangeEmail} className="btn btn-success">Search</button>

                                </div>
                            </div>
                            </form>
                        </div> */}

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
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{this.tabRow()}</tbody>
          </table>

          {/* flex box alinged left */}

          <div>
            {/* Report download button */}
            <a
              type="button"
              class="btn btn-warning"
              href="http://localhost:4000/Bookings/BookingReport"
              align="left"
              style={{ marginLeft: 1000, marginTop: 20 }}
            >
              Generate Bookings Report
            </a>
          </div>
        </div>
      </div>
    );
  }
}
