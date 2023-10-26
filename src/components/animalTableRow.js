import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from "axios";


class TableRow extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete(){
        axios.get('http://localhost:4000/animal/delete/'+this.props.obj._id)
            .then(this.setState({redirect: true}))
            .catch(err => console.log(err))
        alert(" Successfully Deleted....")
        window.location.replace('/animaltableView');
    }
    render() {
        return (
           <tr>
               <td>
                   {this.props.obj.aId}
               </td>
               <td>
                   {this.props.obj.aName}
               </td>
               <td>
                   {this.props.obj.aSpecies}
               </td>
               <td>
                   {this.props.obj.dob}
               </td>
               <td>
                   {this.props.obj.gender}
               </td>
               <td>
                   {this.props.obj.fTime}
               </td>
               <td>
                   {this.props.obj.zkeeper}
               </td>
               <td>
                   {this.props.obj.dateMedical}
               </td>
               <td>
                   {this.props.obj.timeTretement}
               </td>
               <td>
                   {this.props.obj.health}
               </td>
               <td>
                   {this.props.obj.fTime2}
               </td>

               <td>
                   {/* <Link to={"/viewOneNativeTicket/"+this.props.obj._id} className="btn btn-info">View</Link> */}
                    {/* &nbsp; */}
                   <Link to={"/editAnimal/"+this.props.obj._id} className="btn btn-success">Edit</Link>
                    &nbsp;
                   <button onClick={this.delete} className="btn btn-danger">Delete</button>
               </td>
           </tr>
        );
    }
}

export default TableRow;