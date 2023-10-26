import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

import "./css/finance.css";

export default class addNativeTicket extends Component {
  constructor(props) {
    super(props);

    this.onChangeranimalname = this.onChangeranimalname.bind(this);
    this.onChangeanimalage = this.onChangeanimalage.bind(this);
    this.onChangegender = this.onChangegender.bind(this);
    this.onChangesymptoms = this.onChangesymptoms.bind(this);
    this.onChangemedications = this.onChangemedications.bind(this);
    this.onChangedatefrom = this.onChangedatefrom.bind(this);
    this.onChangedateto = this.onChangedateto.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      animalname: "",
      animalage: "",
      gender: "",
      symptoms: "",
      medications: "",
      datefrom: "",
      dateto: "",
    };
  }
  onChangeranimalname(e) {
    this.setState({
      animalname: e.target.value,
    });
  }
  onChangeanimalage(e) {
    this.setState({
      animalage: e.target.value,
    });
  }
  onChangegender(e) {
    this.setState({
      gender: e.target.value,
    });
  }
  onChangesymptoms(e) {
    this.setState({
      symptoms: e.target.value,
    });
  }
  onChangemedications(e) {
    this.setState({
      medications: e.target.value,
    });
  }
  onChangedatefrom(e) {
    this.setState({
      datefrom: e.target.value,
    });
  }
  onChangedateto(e) {
    this.setState({
      dateto: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const obj = {
      animalname: this.state.animalname,
      animalage: this.state.animalage,
      gender: this.state.gender,
      symptoms: this.state.symptoms,
      medications: this.state.medications,
      datefrom: this.state.datefrom,
      dateto: this.state.dateto,
    };

    axios
      .post("http://localhost:4000/MedicalRecords/addMedicalRecords", obj)
      .then((res) => {
        alert(" Medical Report Added Succesfully");
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
    window.location.replace("/ViewHandlingMedicalRecords");
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
              Handling Medical Report
            </h1>
          </center>

          <h4 style={{ color: "white", marginLeft: 300 }}>Add Animal</h4>
          <br />
          <div className="container" style={{ marginLeft: 300 }}>
            <form
              onSubmit={this.onSubmit}
              style={{ color: "white", width: "60%" }}
            >
              <div class="row g-3 align-items-center">
                <div class="col-auto">
                  <label class="col-form-label">Animal Name :</label>
                </div>
                <div class="col-auto">
                  <input
                    type="text"
                    class="form-control"
                    value={this.state.animalname}
                    onChange={this.onChangeranimalname}
                    required
                  />
                </div>
              </div>
              <br />
              <div class="row g-3 align-items-center">
                <div class="col-auto">
                  <label class="col-form-label">Animal Age :</label>
                </div>
                <div class="col-auto">
                  <input
                    type="text"
                    class="form-control"
                    value={this.state.animalage}
                    onChange={this.onChangeanimalage}
                    required
                  />
                </div>
              </div>
              <br />
              <div class="row g-3 align-items-center">
                <div class="col-auto">
                  <label class="col-form-label">Gender :</label>
                </div>
                <div class="col-auto">
                  <input
                    type="text"
                    class="form-control"
                    value={this.state.gender}
                    onChange={this.onChangegender}
                    required
                  />
                </div>
              </div>
              <br />
              <div class="row g-3 align-items-center">
                <div class="col-auto">
                  <label class="col-form-label">Symptoms :</label>
                </div>
                <div class="col-auto">
                  <input
                    type="text"
                    class="form-control"
                    value={this.state.symptoms}
                    onChange={this.onChangesymptoms}
                    required
                  />
                </div>
              </div>
              <br />
              <div class="row g-3 align-items-center">
                <div class="col-auto">
                  <label class="col-form-label">Medications :</label>
                </div>
                <div class="col-auto">
                  <input
                    type="text"
                    class="form-control"
                    value={this.state.medications}
                    onChange={this.onChangemedications}
                    required
                  />
                </div>
              </div>
              <br />
              <div class="row g-3 align-items-center">
                <div class="col-auto">
                  <label class="col-form-label">Date From :</label>
                </div>
                <div class="col-auto">
                  <input
                    type="date"
                    class="form-control"
                    value={this.state.datefrom}
                    onChange={this.onChangedatefrom}
                    required
                  />
                </div>
              </div>
              <br />
              <div class="row g-3 align-items-center">
                <div class="col-auto">
                  <label class="col-form-label">Date To :</label>
                </div>
                <div class="col-auto">
                  <input
                    type="date"
                    class="form-control"
                    value={this.state.dateto}
                    onChange={this.onChangedateto}
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
