import React from "react";
import { Route, NavLink, BrowserRouter } from "react-router-dom";
import Component from "./component";
import Stuff from "./stuff";
import Contact from "./contact";
 
class Main extends React.Component {
  render() {
    console.log(process.env.PUBLIC_URL);
    return (
      <BrowserRouter>
        <div>
          <h1>Simple SPA</h1>
          <ul className="header">
            <li><NavLink to="/">Component</NavLink></li>
            <li><NavLink to="/stuff">Stuff</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Component}/>
            <Route path="/stuff" component={Stuff}/>
            <Route path="/contact" component={Contact}/>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
 
export default Main;