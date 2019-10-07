import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  filterByYear,
  filterByMonth,
  filterByDay
} from "../helper/antCalendarTransformerfun";
import { Calendar, Badge } from "antd";
import googleAPI from "../helper/googleApi";

const calendar_configuration = {
  api_key: "AIzaSyB25WbUacN8LSY5QeLNbIuFo7-yP_aRC7w",
  calendars: [
    {
      name: "DEMO5",
      url: "l6r663jf1al5hh5soef1g7c4r4@group.calendar.google.com"
    }
  ]
  // dailyRecurrence: 700,
  // weeklyRecurrence: 500,
  // monthlyRecurrence: 20
};

export default function StudentCalendar() {
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    getMeeting();
  }, []);

  const getMeeting = () => {
    googleAPI
      .getAllCalendars(calendar_configuration)
      .then(events => {
        setMeetings(events);
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  const dateCellRender = value => {
    const filteredDataByYear = filterByYear(value.year(), meetings);

    const filteredDataByMonth = filterByMonth(
      value.month(),
      filteredDataByYear
    );
    const filteredDataByDay = filterByDay(value.date(), filteredDataByMonth);
    return (
      <ul className="events">
        {filteredDataByDay.map(item => {
          return (
            <li key={item.eventType}>
              <a href={item.glink} target="_blank">
                <Badge status="success" text={item.eventType} />
                <div key={item.eventType} style={{ margin: "15px" }}>
                  <div>event type : {item.eventType} </div>
                  <div> location : {item.location}</div>
                  <div>desc : {item.description} </div>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    );
  };
  return (
    <>
      <div className="calendar-data">
        Calendar for Student
        <span style={{ fontSize: "13px", marginLeft: "30px" }}>
          <Link to="/">go to instructor</Link>
        </span>
      </div>
      <div className="calendar-container">
        <Calendar dateCellRender={dateCellRender} />
      </div>
    </>
  );
}
