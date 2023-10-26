import  React, {Component} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import jsPDF from "jspdf";
import 'jspdf-autotable';

import './css/finance.css';
import ReportTable from './searchReportTableRow';


export default  class searchReport extends  Component{


    constructor(props) {
        super(props);

        

        this.onChangerId = this.onChangerId.bind(this);
        this.onChangeType = this.onChangeType.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            id: '',
            type:'',
            report: []
        }
    }
    onChangerId(e){
        this.setState( {
           id: e.target.value
        });
    }
    onChangeType(e){
        this.setState( {
           type: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();
        if (this.state.type == "Revenue") {

            axios.get('http://localhost:4000/finance/revenuereport/'+this.state.id)
            .then(response => {
                // alert('Pass una')
                // alert('Data Tika :'+response.data)
                this.setState({report : response.data});

            })
            .catch(function (error){
                console.log(error);
            })

        } 
        else {

            axios.get('http://localhost:4000/finance/expensesreport/'+this.state.id)
            .then(response => {
                // alert('Pass una')
                // alert('Data Tika :'+response.data)
                this.setState({report : response.data});

            })
            .catch(function (error){
                console.log(error);
            })
        }
    }

    tabRow() {
        return this.state.report.map(function (object, i){
            return <ReportTable obj = {object} key = {i}/>;
        });
        // return <OrderTableRow obj={this.state.orders}/>
    }

    exportPDF = () => {
        const unit = "pt";
        const size = "A4"; // Use A1, A2, A3 or A4
        const orientation = "portrait"; // portrait or landscape
    
        const marginLeft = 40;
        const doc = new jsPDF(orientation, unit, size);
    
        doc.setFontSize(15);
    
        const title = "My  Report";
        const headers = [["Id", "Type","Date", "Amount"]];
    
        const data = this.state.report.map(elt=> [elt.id, elt.type, elt.date, elt.amount]);
    
        let content = {
          startY: 50,
          head: headers,
          body: data
        };
    
        doc.text(title, marginLeft, 40);
        doc.autoTable(content);
        doc.save("Report.pdf")
      }

    render() {
        return (
          <div>
            <div class="sidebar">
              <center>
                <h2>Animal Haven</h2>
                <h6>Admin Dashboard</h6>
              </center>
              <br />
              <a href="/">Dashboard</a>
              <a href="/VisitorDashboard">Visitor Management</a>
              <a href="/">Project Management</a>
              <a href="/financeDashboard">Finance Management</a>
              <a href="/adminHome">Inventory Management</a>
              <a href="/HandlingRecordsResearchDashboard">
                Handing Medical Records & Research
              </a>
              <a href="/AnimalsDashbord">Animal Management</a>
              <a href="/voldb">Volunteer Management</a>
              <a href="">Employee Management</a>
            </div>

            <div class="content">
              <center>
                <br />
                <h1 style={{ fontSize: 70, color: "white", marginBottom: 30 }}>
                  FINANCE DASHBOARD
                </h1>
              </center>

              <h4 style={{ color: "white", marginLeft: 300 }}>SEARCH REPORT</h4>
              <br />
              <div className="container" style={{ marginLeft: 300 }}>
                <form
                  onSubmit={this.onSubmit}
                  style={{ color: "white", width: "60%" }}
                >
                  <div class="row g-3 align-items-center">
                    <div class="col-auto">
                      <label class="col-form-label">Report Id :</label>
                    </div>
                    <div class="col-auto">
                      <input
                        type="number"
                        on
                        class="form-control"
                        value={this.state.id}
                        onChange={this.onChangerId}
                        required
                      />
                    </div>
                  </div>
                  <br />
                  <div class="row g-3 align-items-center">
                    <div class="col-auto">
                      <label class="col-form-label">Report Type :</label>
                    </div>
                    <div class="col-auto" style={{ width: "51%" }}>
                      {/* <input type="number"  class="form-control" min = "1" value={this.state.adult} onChange = {this.onChangeAdult} required/> */}
                      <select
                        class="form-control"
                        value={this.state.adult}
                        onChange={this.onChangeType}
                        required
                      >
                        <option>Select Type..</option>
                        <option value="Revenue">Revenue</option>
                        <option value="Expenses">Expenses</option>
                      </select>
                    </div>
                  </div>
                  <br />
                  <br />
                  <button
                    type="submit"
                    class="btn btn-info"
                    style={{ marginLeft: 210 }}
                  >
                    Search
                  </button>
                </form>
              </div>

              <center>
                <table
                  className="table table-striped"
                  style={{
                    marginTop: 20,
                    marginLeft: 270,
                    width: "70%",
                    color: "white",
                  }}
                >
                  <thead>
                    <tr>
                      {/* <th>id</th> */}
                      <th>Report Id</th>
                      <th>Type</th>
                      <th>Date</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>{this.tabRow()}</tbody>
                </table>

                <button
                  onClick={() => this.exportPDF()}
                  className="btn btn-warning"
                >
                  Export
                </button>
              </center>
            </div>
          </div>
        );
    }
}