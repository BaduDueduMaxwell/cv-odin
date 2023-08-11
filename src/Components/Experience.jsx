import React, { useState } from "react";
import "../App.css";

const Experience = ({ setExperience }) => {
  const [companyName, setCompanyName] = useState("");
  const [position, setPosition] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
    const formData = { companyName, position, responsibilities };
    setExperience(formData);
    localStorage.setItem("userFormData", JSON.stringify(formData));
  };

  return (
    <div>
      <h2>Experience</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <h3>Experience</h3>
          <label htmlFor="company-name">Company: </label>
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            placeholder="Company Name"
          />
          <label htmlFor="position">Position:</label>
          <input
            type="text"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            placeholder="Position"
          />
          <label htmlFor="responsibility">Responsibility:</label>
          <input
            type="text"
            value={responsibilities}
            onChange={(e) => setResponsibilities(e.target.value)}
            placeholder="Responsibilities"
          />
          <button onSubmit={handleSubmit}>Submit</button>
        </form>
      ) : (
        <div>
          <p>Company Name: {companyName}</p>
          <p>Position: {position}</p>
          <p>Responsibility: {responsibilities}</p>
          <button onClick={handleEditClick}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default Experience;
