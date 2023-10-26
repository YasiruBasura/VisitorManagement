import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

import "./css/animaltableview.css";
import SearchTableRow from "./animalTableRow";

import dashboardimg from "./img/dashboard.png";
import visior from "./img/visitor.png";
import project from "./img/project.png";
import finance from "./img/finance.png";
import inventory from "./img/inventory.png";
import handling from "./img/handling.png";
import animal from "./img/animal.png";
import volunteer from "./img/volunteer.png";
import employee from "./img/employee.png";

export default class searchanimaltable extends Component {
	constructor(props) {
		super(props);

		this.state = { animals: [] };
	}

	componentDidMount() {
		// alert('email is ' +this.props.match.params.id);
        axios.get('http://localhost:4000/animal/search/'+this.props.match.params.pathParam1)

			.then((response) => {
				// alert('Pass una')
				// alert('Data Tika :'+response.data)
				this.setState({ animals: response.data });
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	tabRow() {
		return this.state.animals.map(function (object, i) {
			return <SearchTableRow obj={object} key={i} />;
		});
		// return <OrderTableRow obj={this.state.orders}/>
	}

	render() {
		return (
      <div className="animaltableview">
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
            <h1 style={{ fontSize: 40, marginBottom: 30 }}>ANIMAL DASHBOARD</h1>
            <h4 style={{ color: "white", marginRight: 600 }}></h4>
          </center>

          <table
            className="table table-striped"
            style={{ marginTop: 20, width: "70%" }}
          >
            <thead>
              <tr>
                <th>Animal id</th>
                <th>Name</th>
                <th>Scpices</th>
                <th>DoB</th>
                <th>Gender</th>
                <th>F Time 1</th>
                <th>F Time 2</th>
                <th>Keeper Attend</th>
                <th>T Date</th>
                <th>T Time</th>
                <th>H LEvel</th>
              </tr>
            </thead>
            <tbody>{this.tabRow()}</tbody>
          </table>
        </div>
      </div>
    );
	}
}
