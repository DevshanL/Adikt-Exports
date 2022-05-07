import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import NavBar from './components/NavBar';
import InventoryDashboard from './components/InventoryDashboard';
import CreateInventory from './components/CreateInventory';
import EditInventory from './components/EditInventory';
import InventoryDetails from './components/InventoryDetails';
import inventoryRep from './components/inventoryRep';

import CreateRequest from './components/CreateRequest';
import EditRequest from './components/EditRequest';
import RequestDetails from './components/RequestDetails';
import RequestList from './components/RequestList.js';
import RequestNavbar from './components/RequestNavbar';


export default class App extends Component {
  render() {
    return (
      <BrowserRouter>  
       <div className="page-content-wrapper">
       <NavBar/>
       <Route path="/" exact component={InventoryDashboard}></Route>
       <Route path="/intadd" exact component={CreateInventory}></Route>
       <Route path="/intedit/:id" exact component={EditInventory}></Route>
       <Route path="/intpost/:id" exact component={InventoryDetails}></Route>
       <Route path="/intrep" exact component={inventoryRep}></Route>

       <RequestNavbar/>
       <Route path="/" exact component={RequestList}></Route>
       <Route path="/add" component={CreateRequest}></Route>
       <Route path="/edit/:id" component={EditRequest}></Route>
       <Route path="/request/:id" component={RequestDetails}></Route>

       </div>
      </BrowserRouter>
    )
      
  }
}
