import React, {useState} from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { CreateCustomer } from "./components/customers/CreateCustomer";
import {ListCustomers} from './components/customers/ListCustomers'
import {LandingPage} from './components/customers/LandingPage'
import { NavBars } from "./components/navbar/NavBars";
import CustomerInfo from "./components/mock-data/CustomerInfo";


function App() {
    const [customers, setCustomers] = useState(CustomerInfo)
  return (

      <Router>
      <NavBars/>
      <Routes>
        <Route exact path="/home" element={<LandingPage/>} />
        <Route exact path="/createCustomer" element={<CreateCustomer  customers = {customers} customerInfo={setCustomers}/>} />
        </Routes>
      </Router>

   );
}

export default App;
