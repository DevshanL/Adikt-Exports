import {Route, Switch } from "react-router-dom"
// import CreatePosted from "./components/CreatePosted";
// import EditPosted from "./components/EditPosted";
import HomePosted from "./components/HomePosted";
// import NavBar from "./components/NavBar";
// import PostedDetails from "./components/PostedDetails";
const AppRoutes = () => {
    <Switch>
         <Route path="/h" exact ><HomePosted/></Route>
         {/* <Route path="/add" Component={CreatePosted}></Route>
         <Route path="/edit/:id" Component={EditPosted}></Route>
         <Route path="/post/:id" Component={PostedDetails}></Route> */}
    </Switch>
}

export default AppRoutes;