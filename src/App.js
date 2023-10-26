import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import adminDashboard from "./components/adminDashboard";
import VisitorDashboard from "./components/VisitorDashboard";
import HandlingRecordsResearchDashboard from "./components/HandlingRecordsResearchDashboard";

import viewUserData from "./components/viewUserdata";
import viewOneUser from "./components/viewOneUser";
import editUserDetails from "./components/editUserDetails";
import viewBookingData from "./components/viewBookingdata";
import viewOneBooking from "./components/viewOneBooking";
import editBookingDetails from "./components/editBookingDetails";
import ViewFeedbackData from "./components/ViewFeedbackData";

import ViewHandlingMedicalRecords from "./components/ViewHandlingMedicalRecords";
import editMedicalRecords from "./components/editMedicalRecords";
import addmedicalRecord from "./components/addMecialRecord";
import viewResearch from "./components/viewResearch";

import financeDashboard from "./components/financeDashboard";
import reportDashboard from "./components/reportDashboard";

import nativeTicket from "./components/nativeTicket";
import addNativeTicket from "./components/addNativeTicket";
import viewNativeTicket from "./components/viewNativeTicket";
import editNativeTicket from "./components/editNativeTicket";
import viewOneNativeTicket from "./components/viewOneNativeTicket";

import foreignTicket from "./components/foreignTicket";
import addForeignTicket from "./components/addForeignTicket";
import viewForeignTicket from "./components/viewForeignTicket";
import editForeignTicket from "./components/editForeignTicket";
import viewOneForeignTicket from "./components/viewOneForeignTicket";

import manageTicketType from "./components/manageTicketType";
import editTicketType from "./components/editTicketType";

import addRevenue from "./components/addRevenue";
import addExpenses from "./components/addExpenses";
import searchReport from "./components/searchReport";

import addAnimal from "./components/addAnimal";
import animaltableView from "./components/animaltableView";
import editAnimal from "./components/editAnimal";
import seaechAnimal from "./components/seaechAnimal";
import AnimalDashbord from "./components/AnimalDashbord";

import adminHome from "./components/adminHome";

import addFood from "./components/addFood";
import viewFood from "./components/viewFood";
import editFood from "./components/editFood";
import searchFood from "./components/searchFood";

import addMedicine from "./components/addMedicine";
import viewMedicine from "./components/viewMedicine";
import editMedicine from "./components/editMedicine";
import searchMedicine from "./components/searchMedicine";

import addEquipment from "./components/addEquipment";
import viewEquipment from "./components/viewEquipment";
import editEquipment from "./components/editEquipment";
import searchEquipment from "./components/searchEquipment";

import Voldb from "./components/volunteerDashboard";
import Vollist from "./components/volunteerlist";
import Shedule from "./components/createshedule";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={adminDashboard} />
            <Route path="/VisitorDashboard" component={VisitorDashboard} />

            <Route path="/viewUserData" component={viewUserData} />
            <Route path="/viewOneUser/:id" component={viewOneUser} />
            <Route path="/editUserDetails/:id" component={editUserDetails} />

            <Route path="/viewBookingData" component={viewBookingData} />
            <Route path="/viewOneBooking/:id" component={viewOneBooking} />
            <Route
              path="/editBookingDetails/:id"
              component={editBookingDetails}
            />
            <Route path="/ViewFeedbackData" component={ViewFeedbackData} />

            <Route
              path="/HandlingRecordsResearchDashboard"
              component={HandlingRecordsResearchDashboard}
            />
            <Route
              path="/ViewHandlingMedicalRecords"
              component={ViewHandlingMedicalRecords}
            />
            <Route
              path="/editMedicalRecords/:id"
              component={editMedicalRecords}
            />
            <Route path="/addmedicalRecord" component={addmedicalRecord} />
            <Route path="/viewResearch" component={viewResearch} />

            <Route path="/financeDashboard" component={financeDashboard} />
            <Route path="/reportDashboard" component={reportDashboard} />

            <Route path="/nativeTicket" component={nativeTicket} />
            <Route path="/addNativeTicket" component={addNativeTicket} />
            <Route path="/viewNativeTicket" component={viewNativeTicket} />
            <Route path="/editNativeTicket/:id" component={editNativeTicket} />
            <Route
              path="/viewOneNativeTicket/:id"
              component={viewOneNativeTicket}
            />

            <Route path="/foreignTicket" component={foreignTicket} />
            <Route path="/addForeignTicket" component={addForeignTicket} />
            <Route path="/viewForeignTicket" component={viewForeignTicket} />
            <Route
              path="/editForeignTicket/:id"
              component={editForeignTicket}
            />
            <Route
              path="/viewOneForeignTicket/:id"
              component={viewOneForeignTicket}
            />

            <Route path="/manageTicketType" component={manageTicketType} />
            <Route path="/editTicketType/:id" component={editTicketType} />

            <Route path="/addRevenue" component={addRevenue} />
            <Route path="/addExpenses" component={addExpenses} />
            <Route path="/searchReport" component={searchReport} />

            <Route path="/seaechAnimal/:pathParam1?" component={seaechAnimal} />
            <Route path="/AnimalsDashbord" component={AnimalDashbord} />
            <Route path="/addAnimal" component={addAnimal} />
            <Route path="/editAnimal/:id" component={editAnimal} />
            <Route path="/animaltableView" component={animaltableView} />

            <Route path="/adminHome" component={adminHome} />
            <Route path="/addFood" component={addFood} />
            <Route path="/viewFood" component={viewFood} />
            <Route path="/editFood/:id" component={editFood} />
            <Route path="/searchFood/:id" component={searchFood} />

            <Route path="/addMedicine" component={addMedicine} />
            <Route path="/viewMedicine" component={viewMedicine} />
            <Route path="/editMedicine/:id" component={editMedicine} />
            <Route path="/searchMedicine/:id" component={searchMedicine} />

            <Route path="/addEquipment" component={addEquipment} />
            <Route path="/viewEquipment" component={viewEquipment} />
            <Route path="/editEquipment/:id" component={editEquipment} />
            <Route path="/searchEquipment/:id" component={searchEquipment} />

            <Route path="/voldb" component={Voldb} />
            <Route path="/createshedule/:id" component={Shedule} />
            <Route path="/vollist" component={Vollist}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
