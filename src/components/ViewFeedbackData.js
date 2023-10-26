import React, { Component } from "react";
import axios from "axios";
import FeedbackTable from "./feedbackTableRow";

export default class ViewFeedbackData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      natives: [],
      searchValue: "",
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/Feedback/ViewFeedback/")
      .then((response) => {
        this.setState({ natives: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  tabRow() {
    return this.state.natives
      .filter((object) => {
        // filter objects based on searchValue if not empty
        if (this.state.searchValue === "") {
          return true;
        } else {
          const searchString = this.state.searchValue.toLowerCase();
          const id = object.id.toLowerCase();
          const name = object.name.toLowerCase();
          const email = object.email.toLowerCase();
          return (
            name.includes(searchString) ||
            email.includes(searchString) ||
            id.includes(searchString)
          );
        }
      })
      .map((object, i) => {
        return <FeedbackTable obj={object} key={i} />;
      });
  }

  onSearchChange = (event) => {
    this.setState({ searchValue: event.target.value });
  };

  render() {
    return (
      <div>
        <div className="sidebar">
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

        <div className="content">
          <center>
            <br />
            <h1 style={{ fontSize: 40, color: "white", marginBottom: 30 }}>
              VISITOR DASHBOARD
            </h1>

            <h4 style={{ color: "white", marginRight: 600 }}>
              FEEDBACK HISTORY
            </h4>

            <input
              type="text"
              value={this.state.searchValue}
              onChange={this.onSearchChange}
            />
          </center>

          <table
            className="table table-striped"
            style={{
              marginTop: 20,
              marginLeft: 270,
              width: "80%",
              color: "white",
            }}
          >
            <thead>
              <tr>
                <th>Feedback Id</th>
                <th>Name</th>
                <th>Contact</th>
                <th>Email</th>
                <th>Message</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{this.tabRow()}</tbody>
          </table>

          <div>
            <a
              type="button"
              className="btn btn-warning"
              href="http://localhost:4000/Feedback/FeedbackReport"
              align="left"
              style={{ marginLeft: 1000, marginTop: 20 }}
            >
              Generate Feedback Report
            </a>
          </div>
        </div>
      </div>
    );
  }
}
