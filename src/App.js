import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Learners from "./components/Learners";
import LearnerProfile from "./components/LearnersProfile";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/" component={Learners} />
        <Route exact path="/:id/profile" component={LearnerProfile} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={LogIn} />
      </Switch>
    </div>
  );
}

export default App;
