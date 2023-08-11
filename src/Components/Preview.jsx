import React from "react";

const Preview = ({ generalInfo, education, experience }) => {
  return (
    <div>
      <h2>General Info</h2>
      <div className="resume-section">
        <strong>Name:</strong> {generalInfo.name}
      </div>
      <div className="resume-section">
        <strong>Email:</strong> {generalInfo.email}
      </div>
      <div className="resume-section">
        <strong>Phone:</strong> {generalInfo.phone}
      </div>
      <h2>Education</h2>
      <div className="resume-section">
        <strong>School:</strong> {education.school}
      </div>
      <div className="resume-section">
        <strong>Degree:</strong> {education.degree}
      </div>
      <div className="resume-section">
        <strong>Study Date:</strong> {education.studyDate}
      </div>
      <h2>Experience</h2>
      <div className="resume-section">
        <strong>Company:</strong> {experience.companyName}
      </div>
      <div className="resume-section">
        <strong>Position:</strong> {experience.position}
      </div>
      <div className="resume-section">
        <strong>Responsibilities:</strong> {experience.responsibilities}
      </div>
    </div>
  );
};

export default Preview;
