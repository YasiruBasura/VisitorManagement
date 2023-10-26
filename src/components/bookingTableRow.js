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
      .get("http://localhost:4000/Bookings/deleteBooking/" + this.props.obj._id)
      .then(this.setState({ redirect: true }))
      .catch((err) => console.log(err));
    alert("Booking Successfully Deleted....");
    window.location.replace("/viewBookingData");
  }
  render() {
    return (
      <tr>
        <td>{this.props.obj.id}</td>
        <td>{this.props.obj.name}</td>
        <td>{this.props.obj.email}</td>
        <td>{this.props.obj.regular}</td>
        <td>{this.props.obj.student}</td>
        <td>{this.props.obj.child}</td>
        <td>{this.props.obj.date}</td>
        <td>{this.props.obj.total_price}</td>
        <td>
          <Link
            to={"/viewOneBooking/" + this.props.obj._id}
            className="btn btn-info"
          >
            View
          </Link>
          &nbsp;
          <Link
            to={"/editBookingDetails/" + this.props.obj._id}
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
