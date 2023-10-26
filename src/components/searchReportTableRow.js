import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from "axios";


class TableRow extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
           <tr>
               <td>
                   {this.props.obj.id}
               </td>
               <td>
                   {this.props.obj.type}
               </td>
               <td>
                   {this.props.obj.date}
               </td>
               <td>
                   {this.props.obj.amount}
               </td>
           </tr>
        );
    }
}

export default TableRow;