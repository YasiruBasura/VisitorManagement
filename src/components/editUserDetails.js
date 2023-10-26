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
      //password: "",
    };

    this.onChangeID = this.onChangeID.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

   
  }

  componentDidMount() {
    //alert('edit id ' +this.props.match.params.id);
    axios
      .get(
        "http://localhost:4000/User/viewOneUser/" +
          this.props.match.params.id
      )
      .then((res) => {
        this.setState({
          _id: res.data._id,
          name: res.data.name,
          email: res.data.email,
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
  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      _id: this.state._id,
      name: this.state.name,
      email: this.state.email,
    };

    console.log(obj);

    axios
      .post(
        "http://localhost:4000/User/Updateuserdetails/" +
          this.props.match.params.id,
        obj
      )
      .then((res) => {
        alert("User Updated Successfully");
        this.setState({
          _id: "",
          name: "",
          email: "",
          //password: "",
        });
        console.log(res.data);
      });
    //this.props.history.push('/viewpayment/'+this.props.match.params.id);
    setTimeout(function () {
      window.location.replace("/viewUserdata");
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

          <h4 style={{ color: "white", marginLeft: 300 }}>EDIT USER DETAILS</h4>
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
