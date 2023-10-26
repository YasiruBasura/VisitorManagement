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
        "http://localhost:4000/Feedback/deleteFeedback/" + this.props.obj._id
      )
      .then(this.setState({ redirect: true }))
      .catch((err) => console.log(err));
    alert("Feedback Successfully Deleted....");
    window.location.replace("/ViewFeedbackData");
  }
  render() {
    return (
      <tr>
        <td>{this.props.obj.id}</td>
        <td>{this.props.obj.name}</td>
        <td>{this.props.obj.contact}</td>
        <td>{this.props.obj.email}</td>
        <td>{this.props.obj.message}</td>
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
