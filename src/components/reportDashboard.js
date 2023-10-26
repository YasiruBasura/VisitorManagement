import  React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './css/finance.css';


export default  class reportDashboard extends  Component{


    constructor(props) {
        super(props);
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
                <h1 style={{ fontSize: 40, color: "white", marginBottom: 30 }}>
                  FINANCE DASHBOARD
                </h1>

                <div>
                  <img
                    src="https://english.eagetutor.com/images/Report.jpg"
                    width="800"
                    style={{ marginLeft: 200 }}
                  />
                </div>

                <br />
                <br />
                <div className="row">
                  <div className="col">
                    <a href="/addRevenue">TOTAL REVENUE</a>
                  </div>
                  <div className="col">
                    <a href="/addExpenses">TOTAL EXPENSES</a>
                  </div>
                </div>
                <br />
                <br />
                <center>
                  <div className="row">
                    <div className="col">
                      <a href="/searchReport">SEARCH</a>
                    </div>
                  </div>
                </center>
              </center>
            </div>
          </div>
        );
    }
}