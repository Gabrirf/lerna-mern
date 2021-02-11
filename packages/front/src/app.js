import React from "react";
import { Route, NavLink, BrowserRouter } from "react-router-dom";
import Component from "./component";
import UserForm from "./user-form";
import Search from "./search";
 
class Main extends React.Component {
  render() {
    console.log(process.env.PUBLIC_URL);
    return (
      <BrowserRouter>
        <div>
          <h1>Simple SPA</h1>
          <ul className="header">
            <li><NavLink to="/">Component</NavLink></li>
            <li><NavLink to="/form">User form</NavLink></li>
            <li><NavLink to="/search">Search</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Component}/>
            <Route path="/form" component={UserForm}/>
            <Route path="/search" component={Search}/>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
 
export default Main;