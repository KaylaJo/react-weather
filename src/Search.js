import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="searchBar">
      <form className="row">
        <input
          type="search"
          className="Form col-12"
          value="Search by city..."
        />
        <button className="Button col">
          <img
            src="./icons/search.png"
            className="searchIcons"
            alt="search icon"
          />
        </button>
        <button className="Button col">
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
