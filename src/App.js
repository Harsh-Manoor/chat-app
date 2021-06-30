import React from "react";
import 'rsuite/dist/styles/rsuite-default.css';
import './styles/main.scss';
import {Switch} from 'react-router-dom'
import Signin from "./pages/Signin";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/Home";
import PublicRoute from "./components/PublicRoute";

function App() {
  return (
    <Switch>
      <PublicRoute exact path="/signin">
        <Signin />
      </PublicRoute>

      <PrivateRoute exact path="/">
        <Home />
      </PrivateRoute>
      
    </Switch>
  );
}

export default App;
