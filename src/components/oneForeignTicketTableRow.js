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
        <td>{this.props.obj.rnumber}</td>
        <td>
          <h6>No of Adult</h6> <br />
          <h6>No of Adult</h6>
        </td>
        <td>
          <br />
          {this.props.obj.adult} <br />
          <br />
          <br />
          {this.props.obj.child}
        </td>
        <td>
          <h6>1000/=</h6> <br />
          <h6>500/=</h6> <br />
          <h6>Total Price</h6>
        </td>
        <td>
          <br />
          {this.props.obj.aprice}
          <br />
          <br />
          <br />
          {this.props.obj.cprice} <br />
          <br />
          <br />
          {this.props.obj.total}
        </td>
        <td>{this.props.obj.date}</td>
      </tr>
    );
  }
}

export default TableRow;
