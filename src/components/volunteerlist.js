import React, { Component, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./css/volunteer.css";

const urlvollist = "http://localhost:4000/volunteer/readvol";

function Volunteerlist() {
  const [vollist, setvollist] = useState([]);

  useEffect(() => {
    axios.get(urlvollist).then((response) => {
      setvollist(response.data);
    });
  }, []);

  const volDelete = (id) => {
    axios
      .delete(`http://localhost:4000/volunteer/voldelete/${id}`)
      .then((response) => {
        console.log("Deleted");
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="wrapper">
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
      <div className="content3">
        <center>
          <h1>Volunteer List</h1>
        </center>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Volunteer NIC</th>
              <th>Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Skills</th>
              <th>Availability</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {vollist.map((val, key) => (
              <tr key={key}>
                <td>{val.id}</td>
                <td>{val.name}</td>
                <td>{val.email}</td>
                <td>{val.contactNumber}</td>
                <td>{val.skills}</td>
                <td>{val.availability}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => volDelete(val._id)}
                  >
                    Delete
                  </button>
                  <a href={`/createshedule/${val.id}`}>
                    <button className="btn btn-warning">Add Shedule</button>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Volunteerlist;
