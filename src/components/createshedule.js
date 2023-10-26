import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import "./css/finance.css";

const urlcreate = "http://localhost:4000/volunteer_shedule/addshedule";

function Volunteer() {
  const id = useParams().id;
  console.log(id);
  const [inputs, setInput] = useState({});

  const [mongoId, setMongoId] = useState(null);

  const [Volunteeractivity, setactivity] = useState("");
  const [Volunteerdate, setdate] = useState("");
  const [Volunteerstart, setstarttime] = useState("");
  const [Volunteerend, setendtime] = useState("");
  const [Volunteernote, setnote] = useState("");

  const [msg, setMsg] = useState("");
  let [user, setUser] = useState({
    to: "",
    subject: "",
    description: "",
  });

  useEffect(() => {
    const fetchVolunteer = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/volunteer/readvol/${id}`
        );
        setInput(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchVolunteer();
  }, [id]);

  /*var { to, subject, description } = user;
    const onInputChange = e => {
      const { name, value } = e.target;
      setUser({ ...user, [name]: value });
    };*/

  /*const handleSubmit = () => {
      
      onSubmit();
      CreatePost();
    };*/

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/mail/", user);
      if (response.data.respMesg) {
        setMsg(response.data.respMesg);
        console.log("Email sent...");

        axios.post(urlcreate, {
          activity: Volunteeractivity,
          date: Volunteerdate,
          start: Volunteerstart,
          end: Volunteerend,
          note: Volunteernote,
        });

        console.log("Vol Created");
      }
    } catch (error) {
      console.log(error);
    }
  };

  user = {
    to: inputs.email,
    subject: "Your Schedule",
    description: `${inputs.name}, This is Your Schedule. Activity - ${Volunteeractivity}, Date - ${Volunteerdate}, Start Time - ${Volunteerstart}, End Time - ${Volunteerend} `,
  };

  const CreatePost = async () => {
    try {
      const response = await axios.post(urlcreate, {
        activity: Volunteeractivity,
        date: Volunteerdate,
        start: Volunteerstart,
        end: Volunteerend,
        note: Volunteernote,
      });

      setMongoId(response.data._id);
      console.log("Vol Created");

      /* const res = await axios.post("http://localhost:8000/mail/", user);
          if (res.data.respMesg) {
            setMsg(res.data.respMesg);
          }*/
    } catch (error) {
      console.log(error);
      setMongoId(null);
    }
  };

  return (
    <div>
      <center>
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

        <div className="content3">
          <h1>Volunteer Schedule</h1>
          <h1>Name - {inputs.name}</h1>

          <form>
            <lable>Activity</lable>
            <textarea
              type="text"
              onChange={(event) => {
                setactivity(event.target.value);
              }}
            ></textarea>
            <br />

            <label>Date</label>
            <input
              type="date"
              onChange={(event) => {
                setdate(event.target.value);
              }}
            ></input>
            <br />

            <label>Start Time</label>
            <input
              type="time"
              onChange={(event) => {
                setstarttime(event.target.value);
              }}
            ></input>
            <br />

            <label>End Time</label>
            <input
              type="time"
              onChange={(event) => {
                setendtime(event.target.value);
              }}
            ></input>
            <br />

            <label>Note</label>
            <textarea
              onChange={(event) => {
                setnote(event.target.value);
              }}
            ></textarea>
            <br />

            <button onClick={onSubmit}>Schedule</button>
          </form>
        </div>
      </center>
    </div>
  );
}
export default Volunteer;
