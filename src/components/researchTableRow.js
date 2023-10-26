import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class TableRow extends Component {
  constructor(props) {
    super(props);
    this.deletesss = this.deletesss.bind(this);
  }
  deletesss() {
    axios
      .get(
        "http://localhost:4000/Research/deleteResearch/" + this.props.obj._id
      )
      .then(this.setState({ redirect: true }))
      .catch((err) => console.log(err));
    alert("Research Successfully Deleted....");
    window.location.replace("/viewResearch");
  }
  render() {
    return (
      <tr>
        <td>{this.props.obj.id}</td>
        <td>{this.props.obj.fullname}</td>
        <td>{this.props.obj.contact}</td>
        <td>{this.props.obj.email}</td>
        <td>{this.props.obj.address}</td>
        <td>{this.props.obj.researchingfield}</td>
        <td>{this.props.obj.researchperiod}</td>
        <td>{this.props.obj.qualifications}</td>
        <td>
          <button onClick={this.deletesss} className="btn btn-danger">
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default TableRow;
