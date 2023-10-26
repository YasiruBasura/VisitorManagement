import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from "axios";


class TableRow extends Component {
    constructor(props) {
        super(props);
        this.deletesss = this.deletesss.bind(this);
    }
    deletesss(){
        axios.get('http://localhost:4000/finance/deleteforeignticket/'+this.props.obj._id)
            .then(this.setState({redirect: true}))
            .catch(err => console.log(err))
        alert("Your Foreign Ticket Successfully Deleted....")
        window.location.replace('/viewforeignticket');
    }
    render() {
        return (
           <tr>
               <td>
                   {this.props.obj.rnumber}
               </td>
               <td>
                   {this.props.obj.adult}
               </td>
               <td>
                   {this.props.obj.child}
               </td>
               <td>
                   {this.props.obj.aprice}
               </td>
               <td>
                   {this.props.obj.cprice}
               </td>
               <td>
                   {this.props.obj.total}
               </td>
               <td>
                   {this.props.obj.date}
               </td>
               <td>
                   <Link to={"/viewOneForeignTicket/"+this.props.obj._id} className="btn btn-info">View</Link>
                    &nbsp;
                   <Link to={"/editForeignTicket/"+this.props.obj._id} className="btn btn-success">Edit</Link>
                    &nbsp;
                   <button onClick={this.deletesss} className="btn btn-danger">Delete</button>
               </td>
           </tr>
        );
    }
}

export default TableRow;