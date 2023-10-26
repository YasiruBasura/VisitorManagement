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
                   {this.props.obj.tno}
               </td>
               <td>
                   {this.props.obj.type}
               </td>
               <td>
                   {this.props.obj.price}
               </td>
               <td>
                   <Link to={"/editTicketType/"+this.props.obj._id} className="btn btn-success">Edit</Link>
               </td>
           </tr>
        );
    }
}

export default TableRow;