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
        "http://localhost:4000/MedicalRecords/deleteMedicalRecords/" +
          this.props.obj._id
      )
      .then(this.setState({ redirect: true }))
      .catch((err) => console.log(err));
    alert("Medical Record Successfully Deleted....");
    window.location.replace("/ViewHandlingMedicalRecords");
  }
  render() {
    return (
      <tr>
        <td>{this.props.obj._id}</td>
        <td>{this.props.obj.animalname}</td>
        <td>{this.props.obj.animalage}</td>
        <td>{this.props.obj.gender}</td>
        <td>{this.props.obj.symptoms}</td>
        <td>{this.props.obj.medications}</td>
        <td>{this.props.obj.datefrom}</td>
        <td>{this.props.obj.dateto}</td>
        <td>
          <Link
            to={"/editMedicalRecords/" + this.props.obj._id}
            className="btn btn-success"
          >
            Edit
          </Link>
          &nbsp;
          <button onClick={this.deletesss} className="btn btn-danger">
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default TableRow;
