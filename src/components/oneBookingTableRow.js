import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class TableRow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr>
        <td>{this.props.obj._id}</td>
        <td>{this.props.obj.name}</td>
        <td>{this.props.obj.email}</td>
        <td>{this.props.obj.regular}</td>
        <td>{this.props.obj.student}</td>
        <td>{this.props.obj.child}</td>
        <td>{this.props.obj.date}</td>
        <td>{this.props.obj.total_price}</td>
      </tr>
    );
  }
}

export default TableRow;
