import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import { createContext } from 'react';
import Order from './components/Dashboard/Order/Order';
import PrivateRoute from './components/Home/Login/PrivateRoute/PrivateRoute';
import Login from './components/Home/Login/Login';
import Service from './components/Dashboard/Service/Service';
import Review from './components/Dashboard/Review/Review';
import ServiceDetails from './components/Dashboard/ServiceDetails/ServiceDetails';
import AddService from './components/Dashboard/AddService/AddService';
import MakeAdmin from './components/Dashboard/MakeAdmin/MakeAdmin';
import DeleteService from './components/Dashboard/DeleteService/DeleteService';
import AboutUs from './components/Home/AboutUs/AboutUs';
import ServiceKnow from './components/Home/ServiceKnow/ServiceKnow';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/about">
          <AboutUs></AboutUs>
        </Route>
        <Route path="/serviceKnow">
          <ServiceKnow/>
        </Route>
        <Route path="/service">
          <Service></Service>
        </Route>
        <Route path="/servicedetails">
          <ServiceDetails></ServiceDetails>
        </Route>
        <Route path="/addservice">
          <AddService></AddService>
        </Route>
        <Route path="/deleteService/:id">
          <DeleteService></DeleteService>
        </Route>
        <Route path="/makeadmin">
          <MakeAdmin></MakeAdmin>
        </Route>
        <Route path="/review">
          <Review></Review>
        </Route>
        <Route path="/dashboard">
        <Order></Order>
        </Route>
        <PrivateRoute path="/order/:name">
          <Order></Order>
        </PrivateRoute>
        <Route exact path="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
