// App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Schedules from "./pages/Schedules";
import Form from "./pages/Form";
import CustomisedSchdule from "./pages/CustomisedSchdule";
import Profile from "./pages/Profile";
import Transfer from "./pages/Transfer";
import SSC from "./pages/SSC";
import Login from "./pages/Login";
import RRB from "./pages/RRB";
import Banking from "./pages/Banking";
import ProtectedRoute from "./pages/ProtectedRoute";

const App = () => {
  return (
    <Router>
      <>
        {/* Routes */}
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/schedules" element={<Schedules />} />
          <Route path="/form" element={<Form />} />
          <Route path="/customised-schedule" element={<CustomisedSchdule />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/transfers" element={<Transfer />} /> 
          <Route path="/transfers/ssc" element={<SSC />} /> 
          <Route path="/transfers/rrb" element={<RRB />} /> 
          <Route path="/transfers/banking" element={<Banking />} /> 
          <Route path="/login" element={<Login />} /> 
        </Routes>
      </>
    </Router>
  );
};

export default App;
