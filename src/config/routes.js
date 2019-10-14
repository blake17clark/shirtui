import React from "react";
import { Route, Switch } from "react-router-dom";
import Orderform from "../components/Orderform";
import Orders from "../components/display";
import Update from "../components/Update"
import Home from "../components/Home"



const Routes = () => {
    return(
        <Switch>
        <Route exact path="/" component={() =>  <Home/>}/>
        <Route path="/orders" component={() => <Orders/>}/>
        <Route path="/orderform" component={() => <Orderform/>}/>
        <Route
         path="/update" render={(props) => <Update {...props} isAuthed={true}/>}/>
        
        </Switch>
    )
}

export default Routes;