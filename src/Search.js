import React, { useState } from "react";
import "./Search.css";
import { Button } from "@material-ui/core";
import PeopleIcon from "@material-ui/icons/People";

// main style file
import "react-date-range/dist/styles.css";
// theme css file
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { useNavigate } from "react-router-dom";

// DATE PICKER COMPONENT (npm i react-date-range ... npm i date-fns)
function Search() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const navigate = useNavigate();

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  return (
    <div className="search">
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      <h2>
        Number of guests
        <PeopleIcon />
      </h2>
      <input min={1} defaultValue={2} type="number" />
      <Button onClick={() => navigate('/search')}>Search Airbnb</Button>
    </div>
  );
}

export default Search;
