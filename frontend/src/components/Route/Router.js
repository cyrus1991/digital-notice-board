import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ModulesSideBar from '../modules-side-bar/ModulesSideBar';
import App from '../../App'
import Login from '../login/Login';
import Register from '../Register/Register';
import ForgotPassword from '../forgot/ForgotPassword';


const Router = () => (
  <BrowserRouter>
    <Switch>
     <Route exact path='/' component={App} />
     <Route exact path='/admin/login' component={Login} />
     <Route exact path='/admin/Register' component={Register} />
     <Route exact path='/admin/reset' component={ForgotPassword} />
    </Switch>
  </BrowserRouter>

  );

export default Router;
