import React from "react";
import "./App.css";
import { Route } from "react-router";
import UsersListContainer from "./components/UsersListContainer";
import ProfileContainer from "./components/ProfileContainer";
import Homepage from "./components/Homepage";
import EditFormContainer from "./components/EditFormContainer";

function App() {
  return (
    <div>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/users" component={UsersListContainer} />
      <Route path="/users/:id" component={ProfileContainer} />
    </div>
  );
}

export default App;
