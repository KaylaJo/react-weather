import React from "react";

export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "Jan.",
    "Feb.",
    "Mar.",
    "Apr.",
    "May",
    "Jun.",
    "Jul.",
    "Aug.",
    "Sep.",
    "Nov.",
    "Dec.",
  ];

  let date = props.time.getDate();
  let day = days[props.time.getDay()];
  let hours = props.time.getHours();
  let month = months[props.time.getMonth()];
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = props.time.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <div>
      {day}, {month} {date},<br />
      {hours}:{minutes}
    </div>
  );
}
