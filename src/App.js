import React from "react";
import InstructorCalendar from "./comopnents/InstructorCalendar";
import StudentCalendar from "./comopnents/studentCalendar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={InstructorCalendar} />
        <Route exact path="/student1" component={StudentCalendar} />
      </div>
    </Router>
  );
}

export default App;
