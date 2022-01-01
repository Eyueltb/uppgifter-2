import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { CreateCustomer } from "./components/customers/CreateCustomer";
import {ListCustomers} from './components/customers/ListCustomers'
import {LandingPage} from './components/customers/LandingPage'
import { NavBars } from "./components/navbar/NavBars";

function App() {
 
  return (

      <Router>
      <NavBars/>
      <Routes>
        <Route exact path="/home" element={<LandingPage/>}> </Route>
          <Route exact path="/list" element={<ListCustomers/>} >  </Route>
          <Route exact path="/createCustomer" element={<CreateCustomer/>} >  </Route>
        </Routes>
      </Router>

   );
}

export default App;
