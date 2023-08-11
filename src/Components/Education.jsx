import React, { useState } from "react";
import "../App.css";

const Education = ({ setEducation }) => {
  const [schoolName, setSchoolName] = useState("");
  const [studyTitle, setStudyTitle] = useState("");
  const [dateOfStudy, setDateOfStudy] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
    const formData = { schoolName, studyTitle, dateOfStudy };
    setEducation(formData);
    localStorage.setItem("userFormData", JSON.stringify(formData));
  };

  return (
    <div>
      <h2>Education</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <h3>Education</h3>
          <label htmlFor="school-name">School: </label>
          <input
            type="text"
            value={schoolName}
            onChange={(e) => setSchoolName(e.target.value)}
            placeholder="School Name"
          />
          <label htmlFor="study-title">Study Title:</label>
          <input
            type="text"
            value={studyTitle}
            onChange={(e) => setStudyTitle(e.target.value)}
            placeholder="Study Title"
          />
          <label htmlFor="date-of-study">Date of Study:</label>
          <input
            type="date"
            value={dateOfStudy}
            onChange={(e) => setDateOfStudy(e.target.value)}
            placeholder="Date of Study"
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>School Name: {schoolName}</p>
          <p>Study Title: {studyTitle}</p>
          <p>Date of Study: {dateOfStudy}</p>
          <button onClick={handleEditClick}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default Education;
