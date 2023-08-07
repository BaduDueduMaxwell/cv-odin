import React, { useState ,useEffect} from 'react';
import '../App.css'

const GeneralInfo = ({ setGeneralInfo }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  // Update parent component (App) state with general info
  useEffect(() => {
    setGeneralInfo({ name, email, phone });
  }, [name, email, phone, setGeneralInfo]);

  return (
  
    <div>
      <form >
        <h3>General</h3>
        <label htmlFor="name">Name: </label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <label htmlFor="email">Email: </label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <label htmlFor="phone">Phone: </label>
      <input
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone"
      />
      </form>
      
    </div>
  );
};

export default GeneralInfo;
