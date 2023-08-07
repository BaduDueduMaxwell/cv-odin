import React, { useState, useEffect } from "react";
import "../App.css";

const Education = ({ setEducation }) => {
  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");
  const [studyDate, setStudyDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // Update parent component (App) state with education info
  useEffect(() => {
    setEducation({ school, degree, studyDate });
  }, [school, degree, studyDate, setEducation]);

  return (
    <div>
      <form>
        <h3>Education</h3>
        <label htmlFor="school">School: </label>
        <input
          type="text"
          value={school}
          onChange={(e) => setSchool(e.target.value)}
          placeholder="School"
        />
        <label htmlFor="Degree">Degree: </label>
        <input
          type="text"
          value={degree}
          onChange={(e) => setDegree(e.target.value)}
          placeholder="Degree"
        />
        <label htmlFor="study-date">Study Date: </label>
        <input
          type="date"
          value={studyDate}
          onChange={(e) => setStudyDate(e.target.value)}
          placeholder="Start Date"
        />
          <label htmlFor="end-date">End Date: </label>
         <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          placeholder="End Date"
        />
      </form>
    </div>
  );
};

export default Education;
