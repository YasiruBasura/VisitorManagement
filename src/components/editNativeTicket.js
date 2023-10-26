import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

import "./css/finance.css";

export default class editNativeTicket extends Component {
  constructor(props) {
    super(props);

    var today = new Date(),
      cdate =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();

    this.onChangerNumber = this.onChangerNumber.bind(this);
    this.onChangeAdult = this.onChangeAdult.bind(this);
    this.onChangeChild = this.onChangeChild.bind(this);
    this.onChangeaPrice = this.onChangeaPrice.bind(this);
    this.onChangecPrice = this.onChangecPrice.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      rnumber: "",
      adult: "",
      child: "",
      aprice: "",
      cprice: "",
      total: "",
      date: cdate,
    };
  }

  componentDidMount() {
    //alert('edit id ' +this.props.match.params.id);
    axios
      .get(
        "http://localhost:4000/finance/editnativeticket/" +
          this.props.match.params.id
      )
      .then((res) => {
        this.setState({
          rnumber: res.data.rnumber,
          adult: res.data.adult,
          child: res.data.child,
          aprice: res.data.aprice,
          cprice: res.data.cprice,
        });
      })
      .catch(function (error) {
        console.log("Can't Get Data");
      });
  }

  onChangerNumber(e) {
    this.setState({
      rnumber: e.target.value,
    });
  }
  onChangeAdult(e) {
    this.setState({
      adult: e.target.value,
    });
  }
  onChangeChild(e) {
    this.setState({
      child: e.target.value,
    });
  }
  onChangeaPrice(e) {
    this.setState({
      aprice: e.target.value,
    });
  }
  onChangecPrice(e) {
    this.setState({
      cprice: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    this.state.total =
      parseInt(this.state.aprice) + parseInt(this.state.cprice);
    alert("Your Total Price is Rs. " + this.state.total);
    const obj = {
      rnumber: this.state.rnumber,
      adult: this.state.adult,
      child: this.state.child,
      aprice: this.state.aprice,
      cprice: this.state.cprice,
      total: this.state.total,
      date: this.state.date,
    };

    axios
      .post(
        "http://localhost:4000/finance/updatenativeticket/" +
          this.props.match.params.id,
        obj
      )
      .then((res) => {
        alert("Native Ticket Updated Successfully");
        this.setState({
          rnumber: "",
          adult: "",
          child: "",
          aprice: "",
          cprice: "",
        });
        console.log(res.data);
      });
    //this.props.history.push('/viewpayment/'+this.props.match.params.id);
    window.location.replace("/viewNativeTicket");
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
              FINANCE DASHBOARD
            </h1>
          </center>

          <h4 style={{ color: "white", marginLeft: 300 }}>NATIVE TICKET</h4>
          <br />
          <div className="container" style={{ marginLeft: 300 }}>
            <form
              onSubmit={this.onSubmit}
              style={{ color: "white", width: "60%" }}
            >
              <div class="row g-3 align-items-center">
                <div class="col-auto">
                  <label class="col-form-label">Reference No :</label>
                </div>
                <div class="col-auto">
                  <input
                    type="number"
                    on
                    class="form-control"
                    value={this.state.rnumber}
                    onChange={this.onChangerNumber}
                    required
                  />
                </div>
              </div>
              <br />
              <div class="row g-3 align-items-center">
                <div class="col-auto">
                  <label class="col-form-label">Adult (a) :</label>
                </div>
                <div class="col-auto">
                  <input
                    type="number"
                    class="form-control"
                    min="1"
                    value={this.state.adult}
                    onChange={this.onChangeAdult}
                    required
                  />
                </div>
              </div>
              <br />
              <div class="row g-3 align-items-center">
                <div class="col-auto">
                  <label class="col-form-label">Child (c) :</label>
                </div>
                <div class="col-auto">
                  <input
                    type="number"
                    class="form-control"
                    min="1"
                    value={this.state.child}
                    onChange={this.onChangeChild}
                    required
                  />
                </div>
              </div>
              <br />
              <div class="row g-3 align-items-center">
                <div class="col-auto">
                  <label class="col-form-label">Price (a) :</label>
                </div>
                <div class="col-auto">
                  <input
                    type="number"
                    class="form-control"
                    min="1"
                    value={this.state.aprice}
                    onChange={this.onChangeaPrice}
                    required
                  />
                </div>
              </div>
              <br />
              <div class="row g-3 align-items-center">
                <div class="col-auto">
                  <label class="col-form-label">Price (c) :</label>
                </div>
                <div class="col-auto">
                  <input
                    type="number"
                    class="form-control"
                    min="1"
                    value={this.state.cprice}
                    onChange={this.onChangecPrice}
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
