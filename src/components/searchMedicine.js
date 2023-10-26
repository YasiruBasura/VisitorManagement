import React, { Component } from "react";
import axios from "axios";
import MedicineTableRow from "./medicineTableRow";
import "./css/adminHome.css";

export default class searchMedicine extends Component {
  constructor(props) {
    super(props);

    this.state = { medicine: [] };
  }

  componentDidMount() {
    // alert('email is ' +this.props.match.params.id);
    axios
      .get(
        "http://localhost:4000/zooInventory/searchmedicine/" +
          this.props.match.params.id
      )
      .then((response) => {
        this.setState({ medicine: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  tabRow() {
    return this.state.medicine.map(function (object, i) {
      return <MedicineTableRow obj={object} key={i} />;
    });
  }

  render() {
    return (
      <div>
        <div class="sidebar2">
          <br />
          <center>
            <h5 style={{ fontWeight: "bold", color: "#edca2f" }}>
              INVENTORY DASHBOARD
            </h5>
          </center>
          <br />
          <a href="/">Admin Home Panel</a>
          <a href="/adminHome">Inventory Admin Home</a>
          <a href="/addFood">Add Foods</a>
          <a href="/addMedicine">Add Medicine</a>
          <a href="/addEquipment">Add Equipment</a>
          <a href="/addSuppliers">Suppliers</a>
        </div>

        <div class="content2">
          <div className="top-tittle-bar">
            <h2 className="tittle">Medicine</h2>
            <from
              style={{ display: "flex", gap: 110 }}
              onSubmit={this.onSubmit}
            >
              <div className="form-group">
                <input
                  type="text"
                  style={{ width: "150%" }}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <a href="" className="btn btn-info">
                  Search
                </a>
              </div>
            </from>
          </div>
          <br />
          <h6>Welcome to your medicine</h6>
          <a href="/viewMedicine" className="btn btn-dark">
            Go Back
          </a>
          <h3 align="center">Medicine History</h3>
          <hr />

          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Item No</th>
                <th>Date</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Expire Date</th>
                <th>Unit Price</th>
                <th>Vendor</th>
                <th>Re Order Level</th>
                <th colSpan="2">Action</th>
              </tr>
            </thead>
            <tbody>{this.tabRow()}</tbody>
          </table>

          <hr />
          <hr />
        </div>
      </div>
    );
  }
}
