import React from 'react'
import {BrowserRouter as Router, Route} from "react-router-dom";
import CartItems from './components/Cart';

import LoginPage from "./components/Login/Login";
import MedicineList from './components/MedicinesList/MedicinesList';

const App = () => (
  <Router>
    <Route exact name="login" path="/login" component={LoginPage}/>
    <Route exact path="/cart" component={CartItems}/>
    <Route exact path="/" component={MedicineList}/>
  </Router>
);

export default App;
