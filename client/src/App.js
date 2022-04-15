import React, { Component } from 'react'
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import InventoryDashboard from './components/InventoryDashboard';
import CreateInventory from './components/CreateInventory';
import EditInventory from './components/EditInventory';
import InventoryDetails from './components/InventoryDetails';


export default class App extends Component {
  render() {
    return (
      <BrowserRouter>  
       <div className="container">
       <NavBar/>
       <Route path="/" exact component={InventoryDashboard}></Route>
       <Route path="/intadd" exact component={CreateInventory}></Route>
       <Route path="/intedit/:id" exact component={EditInventory}></Route>
       <Route path="/intpost/:id" exact component={InventoryDetails}></Route>

       </div>
      </BrowserRouter>
    )
      
  }
}
