import React from "react";
import axios from "axios";
import ApiCalendar from "react-google-calendar-api";

const config = {
  api_key: "AIzaSyB25WbUacN8LSY5QeLNbIuFo7-yP_aRC7w",
  calendars: [
    {
      name: "DEMO5",
      url: "l6r663jf1al5hh5soef1g7c4r4@group.calendar.google.com"
    }
  ]
};
const data = {
  creator: {
    displayName: "walidouuuuuuuuuu"
  },
  description: "apiiiiiiiiiiiiiii",

  end: {
    dateTime: "2019-10-13T11:16:35.000Z"
  },
  start: {
    dateTime: "2019-10-10T11:16:35.000Z"
  }
};
export default function CreateMeeting() {
  var token = localStorage.getItem("token");
  console.log("token", token);
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  const addMetting = () => {
    // axios
    //   .post(
    //     `https://www.googleapis.com/calendar/v3/calendars/${config.calendars.url}/events?sendUpdates=all&key=${config.api_key} HTTP/1.1`,
    //     data
    //   )
    //   .then(res => console.log("win", res.data))
    //   .catch(err => console.log("erroor"));

    // ApiCalendar.createEvent(data, config.calendars.url)
    //   .then(result => {
    //     console.log(result);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
    ApiCalendar.listUpcomingEvents(10, config.calendars[0].url).then(
      ({ result }) => {
        console.log(result.items);
      }
    );
  };
  const handleItemClick = (event, name) => {
    if (name === "sign-in") {
      ApiCalendar.handleAuthClick();
    } else if (name === "sign-out") {
      ApiCalendar.handleSignoutClick();
    }
  };

  return (
    <div className="insctuctor-dash">
      <button onClick={addMetting}>add meeting</button>
      <button onClick={e => handleItemClick(e, "sign-in")}>sign-in</button>
      <button onClick={e => handleItemClick(e, "sign-out")}>sign-out</button>
    </div>
  );
}
