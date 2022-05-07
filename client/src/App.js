import React, { Component } from 'react'
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import InventoryDashboard from './components/InventoryDashboard';
import CreateInventory from './components/CreateInventory';
import EditInventory from './components/EditInventory';
import InventoryDetails from './components/InventoryDetails';
import inventoryRep from './components/inventoryRep';
import ProductionCreate from './components/ProductionCreate';
import ProductionDash from './components/ProductionDash';
import ProductionEdit from './components/ProductionEdit';
import ProductionDetails from './components/ProductionDetails';
import ProductionRep from './components/ProductionRep';
import Home from './components/Home';
import Admin from './components/Admin';



export default class App extends Component {
  render() {
    return (
      <BrowserRouter>  
       

       {window.location.pathname !== "/"  && <NavBar/>}
        
        <Route path="/" exact component={Home}></Route>

        <div className="page-content-wrapper">

     
       <Route path="/intdash" exact component={InventoryDashboard}></Route>
       <Route path="/intadd" exact component={CreateInventory}></Route>
       <Route path="/intedit/:id" exact component={EditInventory}></Route>
       <Route path="/intpost/:id" exact component={InventoryDetails}></Route>
       <Route path="/intrep" exact component={inventoryRep}></Route>
       <Route path="/procreate" exact component={ProductionCreate}></Route>
       <Route path="/prodash" exact component={ProductionDash}></Route>
       <Route path="/proedit/:id" exact component={ProductionEdit}></Route>
       <Route path="/propost/:id" exact component={ProductionDetails}></Route>
       <Route path="/prorep" exact component={ProductionRep}></Route>
       <Route path="/admin" exact component={Admin}></Route>

       </div>
      </BrowserRouter>
    )
      
  }
}
