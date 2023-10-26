import React, { Component } from "react";
import axios from "axios";
import MedicineTableRow from "./checkMedicineLevelTableRow";
import VegetableTableRow from "./checkFoodLevelTableRow";

import "./css/adminHome.css";

export default class adminHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // vqty:'',
      // vreorderlevel:'',
      // vresult:'',

      // fqty:'',
      // freorderlevel:'',
      // fresult:'',

      // mqty:'',
      // mreorderlevel:'',
      // mresult:'',

      // fiqty:'',
      // fireorderlevel:'',
      // firesult:'',

      // miqty:'',
      // mireorderlevel:'',
      // miresult:'',

      medicine: [],
      vegetable: [],
      fruit: [],
      meat: [],
      fish: [],
      milk: [],
    };
  }

  componentDidMount() {
    const v = "Vegetables";
    axios
      .get("http://localhost:4000/zooInventory/vegetable/" + v)
      .then((response) => {
        this.setState({ vegetable: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });

    const f = "Fruits";
    axios
      .get("http://localhost:4000/zooInventory/fruits/" + f)
      .then((response) => {
        this.setState({ fruit: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });

    const m = "Meats";
    axios
      .get("http://localhost:4000/zooInventory/meats/" + m)
      .then((response) => {
        this.setState({ meat: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });

    const fi = "Fish";
    axios
      .get("http://localhost:4000/zooInventory/fish/" + fi)
      .then((response) => {
        this.setState({ fish: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });

    const mi = "Milk";
    axios
      .get("http://localhost:4000/zooInventory/milk/" + mi)
      .then((response) => {
        this.setState({ milk: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get("http://localhost:4000/zooInventory/medicine/")
      .then((response) => {
        this.setState({ medicine: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  vtabRow() {
    return this.state.vegetable.map(function (object, i) {
      return <VegetableTableRow obj={object} key={i} />;
    });
  }

  ftabRow() {
    return this.state.fruit.map(function (object, i) {
      return <VegetableTableRow obj={object} key={i} />;
    });
  }

  mtabRow() {
    return this.state.meat.map(function (object, i) {
      return <VegetableTableRow obj={object} key={i} />;
    });
  }

  fitabRow() {
    return this.state.fish.map(function (object, i) {
      return <VegetableTableRow obj={object} key={i} />;
    });
  }

  mitabRow() {
    return this.state.milk.map(function (object, i) {
      return <VegetableTableRow obj={object} key={i} />;
    });
  }

  meditabRow() {
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
            <h2 className="tittle">DASHBOARD</h2>
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
          <h6>Welcome to your dashboard</h6>
          <hr />

          <h4>-- Foods --</h4>
          <hr />
          <br />
          <div className="food">
            <div className="food-inner">
              <h5 style={{ color: "green" }}>-- Vegetables --</h5>
              <br />
              <img
                src="https://5.imimg.com/data5/SELLER/Default/2021/6/RF/KV/MA/47444804/fresh-vegitables-moq-5-kg--1000x1000.jpeg"
                width="200"
              />
              <br />
              <table className="table table-striped" style={{ marginTop: 20 }}>
                <thead>
                  <tr>
                    <th>Item No</th>
                    <th>Category</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Re Order Level</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>{this.vtabRow()}</tbody>
              </table>
            </div>
            <hr />
            <div className="food-inner">
              <h5 style={{ color: "#e03d0b" }}>-- Fruits --</h5>
              <br />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuFxOV0WxXwzMmlCDR3QiHhEGT-K8KlvJXtg&usqp=CAU"
                width="200"
              />
              <br />
              <table className="table table-striped" style={{ marginTop: 20 }}>
                <thead>
                  <tr>
                    <th>Item No</th>
                    <th>Category</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Re Order Level</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>{this.ftabRow()}</tbody>
              </table>
            </div>
            <hr />
            <div className="food-inner">
              <h5 style={{ color: "#f00572" }}>-- Meats --</h5>
              <br />
              <img
                src="https://www.thehealthy.com/wp-content/uploads/2018/12/The-5-Best-Meats-to-Eat%E2%80%94and-2-to-Avoid-6.jpg"
                width="200"
              />
              <br />
              <table className="table table-striped" style={{ marginTop: 20 }}>
                <thead>
                  <tr>
                    <th>Item No</th>
                    <th>Category</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Re Order Level</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>{this.mtabRow()}</tbody>
              </table>
            </div>
            <hr />
            <div className="food-inner">
              <h5 style={{ color: "#0509f0" }}>-- Fish --</h5>
              <br />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIg9UfYO2NM7d0sEzL274GCBsuWPY5eZP_gxqf_Y7jP1_ueyDEqbviwH_HhSp986wPleY&usqp=CAU"
                width="215"
              />

              <br />
              <table className="table table-striped" style={{ marginTop: 20 }}>
                <thead>
                  <tr>
                    <th>Item No</th>
                    <th>Category</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Re Order Level</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>{this.fitabRow()}</tbody>
              </table>
            </div>
            <hr />
            <div className="food-inner">
              <h5 style={{ color: "#f0c905" }}>-- Milk --</h5>
              <br />
              <img
                src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/newscms/2021_27/1744465/notmilk-mc-main-210706.jpg"
                width="230"
              />

              <br />
              <table className="table table-striped" style={{ marginTop: 20 }}>
                <thead>
                  <tr>
                    <th>Item No</th>
                    <th>Category</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Re Order Level</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>{this.mitabRow()}</tbody>
              </table>
            </div>
          </div>

          <hr />

          <br />
          <h4>-- Medicine --</h4>
          <img
            src="https://assets.nst.com.my/images/articles/ondontmiss1_1589162412.jpg"
            width="200"
          />
          <div>
            <table className="table table-striped" style={{ marginTop: 20 }}>
              <thead>
                <tr>
                  <th>Item No</th>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Re Order Level</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>{this.meditabRow()}</tbody>
            </table>
          </div>
          <hr />
        </div>
      </div>
    );
  }
}
