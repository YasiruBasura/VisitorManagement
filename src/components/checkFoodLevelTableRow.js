import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class TableRow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: "",
    };
  }

  render() {
    if (parseInt(this.props.obj.qty) <= parseInt(this.props.obj.reorderlevel)) {
      this.state.result = "Stock Level Low";
    }

    return (
      <tr>
        <td>{this.props.obj.itemno}</td>
        <td>{this.props.obj.category}</td>
        <td>{this.props.obj.name}</td>
        <td>{this.props.obj.qty}</td>
        <td>{this.props.obj.reorderlevel}</td>
        <td>
          <h6 style={{ color: "red" }}>{this.state.result}</h6>
        </td>
      </tr>
    );
  }
}

export default TableRow;
