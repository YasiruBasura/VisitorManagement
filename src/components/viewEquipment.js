import React, { Component } from "react";
import axios from "axios";
import EquipmentTableRow from "./equipmentTableRow";
import "./css/adminHome.css";
import jsPDF from "jspdf";
import "jspdf-autotable";

export default class viewEquipment extends Component {
  constructor(props) {
    super(props);

    this.state = { equipment: [], searchkey: "" };

    this.onChangeSearchFood = this.onChangeSearchFood.bind(this);
  }

  onChangeSearchFood(e) {
    this.setState({
      searchkey: e.target.value,
    });
  }

  componentDidMount() {
    // alert('email is ' +this.props.match.params.id);
    axios
      .get("http://localhost:4000/zooInventory/equipment/")
      .then((response) => {
        this.setState({ equipment: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  tabRow() {
    return this.state.equipment.map(function (object, i) {
      return <EquipmentTableRow obj={object} key={i} />;
    });
  }

  exportPDF = () => {
    const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "portrait"; // portrait or landscape

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);

    const title = "My Equipments";
    const headers = [
      [
        "Item No",
        "Date",
        "Category",
        "Name",
        "Qty",
        "Last Check Date",
        "Next Check Date",
        "Vendor",
        "Maintaner",
      ],
    ];

    const data = this.state.equipment.map((elt) => [
      elt.itemno,
      elt.date,
      elt.name,
      elt.qty,
      elt.lastcheckdate,
      elt.nextcheckdate,
      elt.vendor,
      elt.maintaner,
    ]);

    let content = {
      startY: 50,
      head: headers,
      body: data,
    };

    doc.text(title, marginLeft, 40);
    doc.autoTable(content);
    doc.save("Equipments_Report.pdf");
  };

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
            <h2 className="tittle">Equipment</h2>
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
          <h6>Welcome to your equipment</h6>
          <a href="/addEquipment" className="btn btn-dark">
            Go Back
          </a>
          <from
            style={{ float: "right", display: "flex", gap: 5 }}
            onSubmit={this.onSubmit}
          >
            <div className="form-group">
              <input
                type="text"
                required
                value={this.state.searchkey}
                onChange={this.onChangeSearchFood}
                className="form-control"
              />
            </div>
            <div className="form-group" style={{ float: "right" }}>
              <a
                href={"/searchEquipment/" + this.state.searchkey}
                style={{
                  float: "right",
                  background: "#313332",
                  padding: 7,
                  borderRadius: 5,
                  color: "white",
                  textDecoration: "none",
                }}
              >
                Search
              </a>
            </div>
          </from>
          <h3 align="center">Equipment History</h3>
          <hr />

          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Item No</th>
                <th>Date</th>
                <th>Category</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Last Check Date</th>
                <th>Next Check Date</th>
                <th>Vendor</th>
                <th>Maintaner</th>
                <th colSpan="2">Action</th>
              </tr>
            </thead>
            <tbody>{this.tabRow()}</tbody>
          </table>

          <hr />
          <center>
            <button
              className="btn btn-primary"
              onClick={() => this.exportPDF()}
            >
              Export Medicines
            </button>
          </center>
          <hr />
        </div>
      </div>
    );
  }
}
