import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from "axios";


class TableRow extends Component {
    constructor(props) {
        super(props);
        this.deletesss = this.deletesss.bind(this);
    }
    deletesss(){
        axios
          .get("http://localhost:4000/User/deleteUser/" + this.props.obj._id)
          .then(this.setState({ redirect: true }))
          .catch((err) => console.log(err));
        alert("User Successfully Deleted....")
        window.location.replace("/viewUserdata");
    }
    render() {
        return (
          <tr>
            <td>{this.props.obj.id}</td>
            <td>{this.props.obj.name}</td>
            <td>{this.props.obj.email}</td>
            <td>{this.props.obj.password}</td>
            <td>
              <Link
                to={"/viewOneUser/" + this.props.obj._id}
                className="btn btn-info"
              >
                View
              </Link>
              &nbsp;
              <Link
                to={"/editUserDetails/" + this.props.obj._id}
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