import React, { Component } from 'react';
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


import CreateRequest from './components/CreateRequest';
import EditRequest from './components/EditRequest';
import RequestDetails from './components/RequestDetails';
import RequestList from './components/RequestList.js';
import RequestReports from './components/RequestReports';
import InquiryList from './components/InquiryList';
import CreateInquiry from './components/CreateInquiry';
import EditInquiry from './components/EditInquiry';
import InquiryDetails from './components/InquiryDetails';
import InquiryReports from './components/InquiryReports';
//import RequestNavbar from './components/RequestNavbar';


export default class App extends Component {
  render() {
    return (
      <BrowserRouter>  
       

       {window.location.pathname !== "/home"  && <NavBar/>}
        
        <Route path="/home" exact component={Home}></Route>

        <div className="page-content-wrapper">

     
       <Route path="/" exact component={InventoryDashboard}></Route>
       <Route path="/intadd" exact component={CreateInventory}></Route>
       <Route path="/intedit/:id" exact component={EditInventory}></Route>
       <Route path="/intpost/:id" exact component={InventoryDetails}></Route>
       <Route path="/intrep" exact component={inventoryRep}></Route>
       <Route path="/procreate" exact component={ProductionCreate}></Route>
       <Route path="/prodash" exact component={ProductionDash}></Route>
       <Route path="/proedit/:id" exact component={ProductionEdit}></Route>
       <Route path="/propost/:id" exact component={ProductionDetails}></Route>
       <Route path="/prorep" exact component={ProductionRep}></Route>
       

       <Route path="/requests" exact component={RequestList}></Route>
       <Route path="/reqadd" component={CreateRequest}></Route>
       <Route path="/edit/:id" component={EditRequest}></Route>
       <Route path="/request/:id" component={RequestDetails}></Route>
       <Route path="/reqrep" component={RequestReports}></Route>

       <Route path="/inquiries" component={InquiryList}></Route>
       <Route path="/inqadd" component={CreateInquiry}></Route>
       <Route path="/inqedit/:id" component={EditInquiry}></Route>
       <Route path="/inquiry/:id" component={InquiryDetails}></Route>
       <Route path="/inqrep" component={InquiryReports}></Route>

       </div>
      </BrowserRouter>
    )
      
  }
}
