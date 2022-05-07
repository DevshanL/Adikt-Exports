import React, { Component } from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import CreateRequest from './components/CreateRequest';
import EditRequest from './components/EditRequest';
import RequestDetails from './components/RequestDetails';
import RequestList from './components/RequestList.js';
import RequestNavbar from './components/RequestNavbar';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='container'>
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
