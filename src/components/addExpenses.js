import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

import "./css/finance.css";

export default class addExpenses extends Component {
  constructor(props) {
    super(props);

    this.onChangerId = this.onChangerId.bind(this);
    this.onChangeType = this.onChangeType.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeaAmount = this.onChangeaAmount.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      id: "",
      type: "",
      date: "",
      amount: "",
    };
  }
  onChangerId(e) {
    this.setState({
      id: e.target.value,
    });
  }
  onChangeType(e) {
    this.setState({
      type: e.target.value,
    });
  }
  onChangeDate(e) {
    this.setState({
      date: e.target.value,
    });
  }
  onChangeaAmount(e) {
    this.setState({
      amount: e.target.value,
    });
  }
  onSubmit(e) {
    e.preventDefault();

    const obj = {
      id: this.state.id,
      type: this.state.type,
      date: this.state.date,
      amount: this.state.amount,
    };

    axios.post("http://localhost:4000/finance/addexpenses", obj).then((res) => {
      alert("Expenses Addedd Successfully");
      this.setState({
        id: "",
        type: "",
        date: "",
        amount: "",
      });
      console.log(res.data);
    });
    //this.props.history.push('/viewpayment/'+this.props.match.params.id);
    //window.location.replace('/viewForeignTicket');
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

          <h4 style={{ color: "white", marginLeft: 300 }}>ADD EXPENSES</h4>
          <br />
          <div className="container" style={{ marginLeft: 300 }}>
            <form
              onSubmit={this.onSubmit}
              style={{ color: "white", width: "60%" }}
            >
              <div class="row g-3 align-items-center">
                <div class="col-auto">
                  <label class="col-form-label">Id :</label>
                </div>
                <div class="col-auto">
                  <input
                    type="number"
                    on
                    class="form-control"
                    value={this.state.id}
                    onChange={this.onChangerId}
                    required
                  />
                </div>
              </div>
              <br />
              <div class="row g-3 align-items-center">
                <div class="col-auto">
                  <label class="col-form-label">Type :</label>
                </div>
                <div class="col-auto" style={{ width: "51%" }}>
                  {/* <input type="number"  class="form-control" min = "1" value={this.state.adult} onChange = {this.onChangeAdult} required/> */}
                  <select
                    class="form-control"
                    value={this.state.adult}
                    onChange={this.onChangeType}
                    required
                  >
                    <option>Select Type..</option>
                    <option value="Salary">Salary</option>
                    <option value="Food">Food</option>
                    <option value="Maintance">Maintance</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              <br />
              <div class="row g-3 align-items-center">
                <div class="col-auto">
                  <label class="col-form-label">Date :</label>
                </div>
                <div class="col-auto" style={{ width: "51%" }}>
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
                  <label class="col-form-label">Amount :</label>
                </div>
                <div class="col-auto">
                  <input
                    type="number"
                    class="form-control"
                    min="1"
                    value={this.state.amount}
                    onChange={this.onChangeaAmount}
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
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
