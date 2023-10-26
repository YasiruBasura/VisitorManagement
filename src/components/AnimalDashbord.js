import  React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import "./css/AddAnimal.css";
import heart from "../components/img/heart.png";

import dashboardimg from "./img/dashboard.png";
import visior from "./img/visitor.png";
import project from "./img/project.png";
import finance from "./img/finance.png";
import inventory from "./img/inventory.png";
import handling from "./img/handling.png";
import animal from "./img/animal.png";
import volunteer from "./img/volunteer.png";
import employee from "./img/employee.png";

import animalimage1 from './img/animal-dashboard (1).png'
import animalimage2 from './img/animal-dashboard (2).png'
import animalimage3 from './img/animal-dashboard (3).png'
import animalimage4 from './img/animal-dashboard (4).png'

export default  class financeDashboard extends  Component{


    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div className="animaldashboard">
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
                  ANIMAL DASHBOARD
                </h1>
                <br />
                <br />
                <div className="row">
                  <div className="animal-image">
                    <img src={animalimage1} alt="" />
                  </div>
                  <div className="animal-image">
                    <img src={animalimage2} alt="" />
                  </div>
                  <div className="animal-image">
                    <img src={animalimage3} alt="" />
                  </div>
                </div>
                <br />
                <br />
                <div className="row btndashboard">
                  <div className="col">
                    <a href="/addAnimal">Add Animal</a>
                  </div>
                  <div className="col">
                    <a href="/animaltableView">Search</a>
                  </div>
                </div>
                <br />
                <br />
                <div className="row btndashboard">
                  <div className="col">
                    <a href="/animaltableView">View</a>
                  </div>
                  {/* <div className='col'>
                                    <a href='/reportDashboard'>REPORT</a>
                                </div> */}
                </div>
              </center>
            </div>
          </div>
        );
    }
}