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
        "http://localhost:4000/zooInventory/deletefood/" + this.props.obj._id
      )
      .then(this.setState({ redirect: true }))
      .catch((err) => console.log(err));
    alert("Your Food Successfully Deleted....");
    window.location.replace("/viewFood");
  }
  render() {
    return (
      <tr>
        <td>{this.props.obj.itemno}</td>
        <td>{this.props.obj.date}</td>
        <td>{this.props.obj.category}</td>
        <td>{this.props.obj.name}</td>
        <td>{this.props.obj.qty}</td>
        <td>{this.props.obj.edate}</td>
        <td>{this.props.obj.uprice}</td>
        <td>{this.props.obj.vender}</td>
        <td>{this.props.obj.reorderlevel}</td>
        <td>
          <Link
            to={"/editFood/" + this.props.obj._id}
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
