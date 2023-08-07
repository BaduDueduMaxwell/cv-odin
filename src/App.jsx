import React, { useState } from "react";
import Header from "./Components/Header";
import GeneralInfo from "./Components/GeneralInfo";
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import Preview from "./Components/Preview";
import "./App.css"; // Import your custom CSS file

function App() {
  // State variables to store form data
  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  const [educationalData, setEducationalData] = useState({
    school: "",
    degree: "",
    studyDate: "",
  });

  const [experienceData, setExperienceData] = useState({
    companyName: "",
    position: "",
    responsibilities: "",
  });

  return (
    <div>
      <Header />
      <div className="grid-container">
       
        <div className="item-1">
        <div >
           {/* General Info Component */}
          <GeneralInfo setGeneralInfo={setFormData} />
        </div>

        {/* Education Component */}
        <div>
          <Education setEducation={setEducationalData} />
        </div>

        {/* Experience Component */}
        <div>
          <Experience setExperience={setExperienceData} />
        </div>
        </div>

        {/* Preview Component */}
        <div className="item-2">
          <Preview
            generalInfo={formData}
            education={educationalData}
            experience={experienceData}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
