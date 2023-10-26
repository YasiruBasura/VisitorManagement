import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

import "./css/finance.css";

export default class editTicketType extends Component {
  constructor(props) {
    super(props);

    this.onChangerNumber = this.onChangerNumber.bind(this);
    this.onChangeType = this.onChangeType.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      tno: "",
      type: "",
      price: "",
    };
  }

  componentDidMount() {
    //alert('edit id ' +this.props.match.params.id);
    axios
      .get(
        "http://localhost:4000/finance/edittickettype/" +
          this.props.match.params.id
      )
      .then((res) => {
        this.setState({
          tno: res.data.tno,
          type: res.data.type,
          price: res.data.price,
        });
      })
      .catch(function (error) {
        console.log("Can't Get Data");
      });
  }

  onChangerNumber(e) {
    this.setState({
      tno: e.target.value,
    });
  }
  onChangeType(e) {
    this.setState({
      type: e.target.value,
    });
  }
  onChangePrice(e) {
    this.setState({
      price: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      tno: this.state.tno,
      type: this.state.type,
      price: this.state.price,
    };

    axios
      .post(
        "http://localhost:4000/finance/updatetickettype/" +
          this.props.match.params.id,
        obj
      )
      .then((res) => {
        alert("Ticket Type Updated Successfully");
        this.setState({
          tno: "",
          type: "",
          price: "",
        });
        console.log(res.data);
      });
    //this.props.history.push('/viewpayment/'+this.props.match.params.id);
    window.location.replace("/manageTicketType");
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

          <h4 style={{ color: "white", marginLeft: 300 }}>FOREIGN TICKET</h4>
          <br />
          <div className="container" style={{ marginLeft: 300 }}>
            <form
              onSubmit={this.onSubmit}
              style={{ color: "white", width: "60%" }}
            >
              <div class="row g-3 align-items-center">
                <div class="col-auto">
                  <label class="col-form-label">Ticket No :</label>
                </div>
                <div class="col-auto">
                  <input
                    type="number"
                    class="form-control"
                    value={this.state.tno}
                    onChange={this.onChangerNumber}
                    required
                  />
                </div>
              </div>
              <br />
              <div class="row g-3 align-items-center">
                <div class="col-auto">
                  <label class="col-form-label">Type :</label>
                </div>
                <div class="col-auto">
                  <input
                    type="text"
                    class="form-control"
                    value={this.state.type}
                    onChange={this.onChangeType}
                    required
                  />
                </div>
              </div>
              <br />
              <div class="row g-3 align-items-center">
                <div class="col-auto">
                  <label class="col-form-label">Price :</label>
                </div>
                <div class="col-auto">
                  <input
                    type="number"
                    class="form-control"
                    min="1"
                    value={this.state.price}
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
