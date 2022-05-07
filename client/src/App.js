import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CreatePosted from "./components/CreatePosted";
import EditPosted from "./components/EditPosted";
import HomePosted from "./components/HomePosted";
import NavBar from "./components/NavBar";
import PostedDetails from "./components/PostedDetails";
// import './shared/styles.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/" exact component={HomePosted}></Route>
          <Route path="/add" component={CreatePosted}></Route>
          <Route path="/edit/:id" component={EditPosted}></Route>
          <Route path="/post/:id" component={PostedDetails}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
