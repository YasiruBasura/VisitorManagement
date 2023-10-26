import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

import "./css/finance.css";

export default class editUserDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      _id: "",
      name: "",
      email: "",
      regular: "",
      student: "",
      child: "",
      date: "",
      total_price: "",
      //password: "",
    };

    this.onChangeID = this.onChangeID.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeRegular = this.onChangeRegular.bind(this);
    this.onChangeStudent = this.onChangeStudent.bind(this);
    this.onChangeChild = this.onChangeChild.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    //alert('edit id ' +this.props.match.params.id);
    axios
      .get(
        "http://localhost:4000/Bookings/viewOneBooking/" +
          this.props.match.params.id
      )
      .then((res) => {
        this.setState({
          _id: res.data._id,
          name: res.data.name,
          email: res.data.email,
          regular: res.data.regular,
          student: res.data.student,
          child: res.data.child,
          date: res.data.date,
          total_price: res.data.total_price,
          //password: res.data.password,
        });
      })
      .catch(function (error) {
        console.log("Can't Get Data");
      });
  }

  onChangeID(e) {
    this.setState({
      _id: e.target.value,
    });
  }
  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }
  onChangeRegular(e) {
    this.setState({
      regular: e.target.value,
    });
  }
  onChangeStudent(e) {
    this.setState({
      student: e.target.value,
    });
  }
  onChangeChild(e) {
    this.setState({
      child: e.target.value,
    });
  }
  onChangeDate(e) {
    this.setState({
      date: e.target.value,
    });
  }
  onChangePrice(e) {
    this.setState({
      total_price: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      _id: this.state._id,
      name: this.state.name,
      email: this.state.email,
      regular: this.state.regular,
      student: this.state.student,
      child: this.state.child,
      date: this.state.date,
      total_price: this.state.total_price,
    };

    console.log(obj);

    axios
      .post(
        "http://localhost:4000/Bookings/Updatebookingdetails/" +
          this.props.match.params.id,
        obj
      )
      .then((res) => {
        alert("Booking Updated Successfully");
        this.setState({
          _id: "",
          name: "",
          email: "",
          regular: "",
          student: "",
          child: "",
          date: "",
          total_price: "",
          //password: "",
        });
        console.log(res.data);
      });
    //this.props.history.push('/viewpayment/'+this.props.match.params.id);
    setTimeout(function () {
      window.location.replace("/viewBookingdata");
    }, 1000);
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
            <h1 style={{ fontSize: 70, color: "white", marginBottom: 30 }}>
              VISITOR DASHBOARD
            </h1>
          </center>

          <h4 style={{ color: "white", marginLeft: 300 }}>
            EDIT BOOKING DETAILS
          </h4>
          <br />
          <div className="container" style={{ marginLeft: 300 }}>
            <form
              onSubmit={this.onSubmit}
              style={{ color: "white", width: "60%" }}
            >
              <div class="row g-3 align-items-center">
                <div class="col-auto">
                  <label class="col-form-label">User ID :</label>
                </div>
                <div class="col-auto">
                  <input
                    type="text"
                    class="form-control"
                    value={this.state._id}
                    onChange={this.onChangeID}
                    disabled
                    required
                  />
                </div>
              </div>
              <br />
              <div class="row g-3 align-items-center">
                <div class="col-auto">
                  <label class="col-form-label">Name :</label>
                </div>
                <div class="col-auto">
                  <input
                    type="text"
                    class="form-control"
                    value={this.state.name}
                    onChange={this.onChangeName}
                    required
                  />
                </div>
              </div>
              <br />
              <div class="row g-3 align-items-center">
                <div class="col-auto">
                  <label class="col-form-label">Email :</label>
                </div>
                <div class="col-auto">
                  <input
                    type="text"
                    class="form-control"
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                    required
                  />
                </div>
              </div>
              <br />
              <div class="row g-3 align-items-center">
                <div class="col-auto">
                  <label class="col-form-label">Regular :</label>
                </div>
                <div class="col-auto">
                  <input
                    type="number"
                    class="form-control"
                    value={this.state.regular}
                    onChange={this.onChangeRegular}
                    required
                  />
                </div>
              </div>
              <br />
              <div class="row g-3 align-items-center">
                <div class="col-auto">
                  <label class="col-form-label">Student :</label>
                </div>
                <div class="col-auto">
                  <input
                    type="number"
                    class="form-control"
                    value={this.state.student}
                    onChange={this.onChangeStudent}
                    required
                  />
                </div>
              </div>
              <br />
              <div class="row g-3 align-items-center">
                <div class="col-auto">
                  <label class="col-form-label">Child :</label>
                </div>
                <div class="col-auto">
                  <input
                    type="number"
                    class="form-control"
                    value={this.state.child}
                    onChange={this.onChangeChild}
                    required
                  />
                </div>
              </div>
              <br />
              <div class="row g-3 align-items-center">
                <div class="col-auto">
                  <label class="col-form-label">Date :</label>
                </div>
                <div class="col-auto">
                  <input
                    type="date"
                    class="form-control"
                    value={this.state.date}
                    onChange={this.onChangeDate}
                    required
                  />
                </div>
              </div>
              <br />
              <div class="row g-3 align-items-center">
                <div class="col-auto">
                  <label class="col-form-label">Total Price :</label>
                </div>
                <div class="col-auto">
                  <input
                    type="number"
                    class="form-control"
                    value={this.state.total_price}
                    onChange={this.onChangePrice}
                    required
                  />
                </div>
              </div>
              <br />
              <br />
              <button
                type="submit"
                class="btn btn-info"
                style={{ marginLeft: 210 }}
              >
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
