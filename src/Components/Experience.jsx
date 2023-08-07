// Experience.js
import React, { useState , useEffect} from 'react';

const Experience = ({ setExperience }) => {
  const [companyName, setCompanyName] = useState('');
  const [position, setPosition] = useState('');
  const [responsibilities, setResponsibilities] = useState('');

  // Update parent component (App) state with experience info
  useEffect(() => {
    setExperience({ companyName, position, responsibilities });
  }, [companyName, position, responsibilities, setExperience]);

  return (
    <div>
      <form>
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
      </form>
      
    </div>
  );
};

export default Experience;
