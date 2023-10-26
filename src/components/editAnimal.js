import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import dashboardimg from "./img/dashboard.png";

// import './css/finance.css';
import "./css/AddAnimal.css";

import dashboard from "./img/dashboard.png";
import visior from "./img/visitor.png";
import project from "./img/project.png";
import finance from "./img/finance.png";
import inventory from "./img/inventory.png";
import handling from "./img/handling.png";
import animal from "./img/animal.png";
import volunteer from "./img/volunteer.png";
import employee from "./img/employee.png";
export default class addAnimal extends Component {
	constructor(props) {
		super(props);

		this.onChangeaId = this.onChangeaId.bind(this);
		this.onChangeaName = this.onChangeaName.bind(this);
		this.onChangeaSpecies = this.onChangeaSpecies.bind(this);
		this.onChangedob = this.onChangedob.bind(this);
		this.onChangegender = this.onChangegender.bind(this);
		this.onChangefTime = this.onChangefTime.bind(this);
		this.onChangezkeeper = this.onChangezkeeper.bind(this);
		this.onChangedateMedical = this.onChangedateMedical.bind(this);
		this.onChangetimeTretement = this.onChangetimeTretement.bind(this);
		this.onChangehealth = this.onChangehealth.bind(this);
		this.onChangefTime2 = this.onChangefTime2.bind(this);

		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			aId: "",
			aName: "",
			aSpecies: "",
			dob: "",
			gender: "",
			fTime: "",
			zkeeper: "",
			dateMedical: "",
			timeTretement: "",
			health: "",
			fTime2: "",
		};
	}

    componentDidMount() {
        // alert('edit id ' +this.props.match.params.id);
        axios.get('http://localhost:4000/animal/edit/'+this.props.match.params.id)
            .then(res => {
                this.setState({
                    aId: res.data.aId,
                    aName: res.data.aName,
                    aSpecies: res.data.aSpecies,
                    dob: res.data.dob,
					gender: res.data.gender,
					fTime: res.data.fTime,
					zkeeper: res.data.zkeeper,
					dateMedical: res.data.dateMedical,
                    timeTretement: res.data.timeTretement,
                    health: res.data.health,
					fTime2: res.data.fTime2,
                });
            })
            .catch(function (error){
                console.log("Can't Get Data");
            })
    }

	onChangefTime2(e) {
		this.setState({
			fTime2: e.target.value,
		});
	}

	onChangeaId(e) {
		this.setState({
			aId: e.target.value,
		});
	}
	onChangeaName(e) {
		this.setState({
			aName: e.target.value,
		});
	}
	onChangeaSpecies(e) {
		this.setState({
			aSpecies: e.target.value,
		});
	}
	onChangedob(e) {
		this.setState({
			dob: e.target.value,
		});
	}

	onChangegender(e) {
		this.setState({
			gender: e.target.value,
		});
	}
	onChangefTime(e) {
		this.setState({
			fTime: e.target.value,
		});
	}
	onChangezkeeper(e) {
		this.setState({
			zkeeper: e.target.value,
		});
	}
	onChangedateMedical(e) {
		this.setState({
			dateMedical: e.target.value,
		});
	}
	onChangetimeTretement(e) {
		this.setState({
			timeTretement: e.target.value,
		});
	}
	onChangehealth(e) {
		this.setState({
			health: e.target.value,
		});
	}

	onSubmit(e) {
		e.preventDefault();

			
	const dobDate = new Date(this.state.dob); // convert dob string to a Date object
	const currentDate = new Date(); // get the current date

	if (dobDate > currentDate) { // check if dob is after current date
		alert('Invalid date of birth. Please enter a valid date.');
		return;
	}


		const obj = {
			aId: this.state.aId,
			aName: this.state.aName,
			aSpecies: this.state.aSpecies,
			dob: this.state.dob,
			gender: this.state.gender,
			fTime: this.state.fTime,
			zkeeper: this.state.zkeeper,
			dateMedical: this.state.dateMedical,
			timeTretement: this.state.timeTretement,
			health: this.state.health,
			fTime2: this.state.fTime2,
		};

        axios.post('http://localhost:4000/animal/update/'+this.props.match.params.id,obj)
        .then((res) => {
			alert(" Successfully added");
			this.setState({
				aId: "",
				aName: "",
				aSpecies: "",
				dob: "",
				gender: "",
				fTime: "",
				zkeeper: "",
				dateMedical: "",
				timeTretement: "",
				health: "",
				fTime2: "",
			});
			console.log(res.data);
		});
		//this.props.history.push('/viewpayment/'+this.props.match.params.id);
		window.location.replace('/animaltableView');
	}

	render() {
		return (
      <div className="addanimal">
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
          <img src={dashboard} alt="" />
          <center>
            <br />
            <h1 style={{ fontSize: 70, color: "white" }}>Animal Portfolio</h1>
          </center>

          <br />
          <div className="container" style={{}}>
            <form
              onSubmit={this.onSubmit}
              style={{ color: "white", width: "100%" }}
            >
              <div class="">
                <div class="col-auto">
                  <label class="col-form-label">Animal Number :</label>
                </div>
                <div class="col-auto">
                  <input
                    type="text"
                    on
                    class="form-control"
                    value={this.state.aId}
                    onChange={this.onChangeaId}
                    required
                  />
                </div>
              </div>
              <br />
              <div class="">
                <div class="col-auto">
                  <label class="col-form-label">Animal Name :</label>
                </div>
                <div class="col-auto">
                  <input
                    type="text"
                    class="form-control"
                    min="1"
                    value={this.state.aName}
                    onChange={this.onChangeaName}
                    required
                  />
                </div>
              </div>{" "}
              <br />
              <div class="">
                <div class="col-auto">
                  <label class="col-form-label">Animal Species :</label>
                </div>
                <div class="col-auto">
                  <input
                    type="text"
                    class="form-control"
                    min="1"
                    value={this.state.aSpecies}
                    onChange={this.onChangeaSpecies}
                    required
                  />
                </div>
              </div>{" "}
              <br />
              <div class="">
                <div class="col-auto">
                  <label class="col-form-label">Date of Birth :</label>
                </div>
                <div class="col-auto">
                  <input
                    type="date"
                    class="form-control"
                    min="1"
                    value={this.state.dob}
                    onChange={this.onChangedob}
                    required
                  />
                </div>
              </div>{" "}
              <br />
              <div class="">
                <div class="col-auto">
                  <label class="col-form-label">Gender :</label>
                </div>
                <div class="col-auto">
                  <input
                    type="text"
                    class="form-control"
                    min="1"
                    value={this.state.gender}
                    onChange={this.onChangegender}
                    required
                  />
                </div>
              </div>{" "}
              <br />
              <br />
              <div class="">
                <div class="col-auto">
                  <label class="col-form-label">Feeding Time :</label>
                </div>
                <div class="col-auto">
                  <input
                    type="time"
                    class="form-control"
                    min="1"
                    value={this.state.fTime}
                    onChange={this.onChangefTime}
                    required
                  />
                </div>
              </div>{" "}
              <br />
              <br />
              <div class="">
                <div class="col-auto">
                  <label class="col-form-label">Atended Zoo keeper :</label>
                </div>
                <div class="col-auto">
                  <input
                    type="text"
                    class="form-control"
                    min="1"
                    value={this.state.zkeeper}
                    onChange={this.onChangezkeeper}
                    required
                  />
                </div>
              </div>{" "}
              <br />
              <div className="right-side">
                <div class="">
                  <div class="col-auto">
                    <label class="col-form-label">
                      Date of tretement & medical care :
                    </label>
                  </div>
                  <div class="col-auto">
                    <input
                      type="date"
                      class="form-control"
                      min="1"
                      value={this.state.dateMedical}
                      onChange={this.onChangedateMedical}
                      required
                    />
                  </div>
                </div>
                <br />
                <div class="">
                  <div class="col-auto">
                    <label class="col-form-label">
                      Time of treatement & medical care :
                    </label>
                  </div>
                  <div class="col-auto" style={{ width: "51%" }}>
                    <input
                      type="time"
                      class="form-control"
                      min="1"
                      value={this.state.timeTretement}
                      onChange={this.onChangetimeTretement}
                      required
                    />
                  </div>
                </div>
                <br />
                <div class="">
                  <div class="col-auto">
                    <label class="col-form-label">Health Level :</label>
                  </div>
                  <div class="col-auto">
                    <input
                      type="text"
                      class="form-control"
                      min="1"
                      value={this.state.health}
                      onChange={this.onChangehealth}
                      required
                    />
                  </div>
                </div>
                <div class="">
                  <div class="col-auto">
                    <label class="col-form-label">Feeding Time 2:</label>
                  </div>
                  <div class="col-auto">
                    <input
                      type="time"
                      class="form-control"
                      min="1"
                      value={this.state.fTime2}
                      onChange={this.onChangefTime2}
                      required
                    />
                  </div>
                </div>{" "}
                <br />
                <br />
              </div>
              <button
                type="submit"
                class="btn btn-info"
                style={{ marginLeft: 550 }}
              >
                Edit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
	}
}
