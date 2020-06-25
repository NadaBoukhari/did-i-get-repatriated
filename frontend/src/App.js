import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import InputUpdates from "./components/InputUpdates";
import LandingPage from "./components/LandingPage";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <ProtectedRoute exact path="/complain" component={InputUpdates} />
        <Route path="*" component={() => "404 NOT FOUND"} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
