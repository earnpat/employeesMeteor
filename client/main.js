import React from "react";
import ReactDOM from "react-dom";

import EmployeeList from "./components/employee_list";

import "./main.html";

const App = () => {
  return (
    <div>
      <EmployeeList />
    </div>
  );
};

// after meteor loads in the browser, reander my app to the DOM
Meteor.startup(() => {
  // react render call
  ReactDOM.render(<App />, document.querySelector(".container"));
});
