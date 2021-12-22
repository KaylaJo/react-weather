import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="searchBar">
      <form className="">
        <input type="search" className="Form" value="Search by city..." />
        <button className="Button">
          <img
            src="./icons/search.png"
            className="searchIcons"
            alt="search icon"
          />
        </button>
        <button className="Button">
          <img
            src="./icons/location.png"
            alt="location icon"
            className="searchIcons"
          />
        </button>
      </form>
    </div>
  );
}
