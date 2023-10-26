import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./css/finance.css";
import heart from "./img/feed.png";

export default class volunteerDashboard extends Component {
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

        <div class="content3">
          <center>
            <br />
            <h1 style={{ fontSize: 40, color: "black", marginBottom: 30 }}>
              volunteerDashboard
            </h1>

            <div className="bigImage">
              <img src={heart} width="1100" style={{ marginLeft: 200 }} />
            </div>

            <br />
            <br />
            <div className="row volRow">
              <div className="col">
                <a className="btnvol" href="/vollist">Volunteer List</a>
              </div>
            </div>
            <br />
            <br />
          </center>
        </div>
      </div>
    );
  }
}
