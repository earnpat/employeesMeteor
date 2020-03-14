import React, { Component } from "react";
import { withTracker } from "meteor/react-meteor-data";
import { Employees } from "../../imports/collections/employees";
import EmployeeDetail from "./employee_detail";
import "../style/style.css";

const PER_PAGE = 20;

class EmployeeList extends Component {
  componentWillMount = () => {
    this.page = 1;
  };

  handleButtonClick = () => {
    Meteor.subscribe("employees", PER_PAGE * this.page); // first clicked show 20 employees => second clicked show 20 * 2 = 40 employees
    this.page += 1;
  };

  render() {
    // props.employees => an array of employee objects

    return (
      <div>
        <div className="employee-list">
          {this.props.employees.map(employee => (
            <EmployeeDetail key={employee._id} employee={employee} />
          ))}
        </div>
        <button onClick={this.handleButtonClick} className="btn btn-primary">
          Load More...
        </button>
      </div>
    );
  }
}

export default withTracker(() => {
  // set up subscription
  Meteor.subscribe("employees", PER_PAGE);

  // return an object
  // whatever we return will be sent to EmployeeList as props
  return { employees: Employees.find({}).fetch() };
})(EmployeeList);
