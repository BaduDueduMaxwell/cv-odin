import React, { useState } from "react";
import "../App.css";

const GeneralInfo = ({ setGeneralInfo }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
    const formData = { name, email, phone };
    setGeneralInfo(formData);
    localStorage.setItem("userFormData", JSON.stringify(formData));
  };

  return (
    <div>
      <h2>General</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
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
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>Phone: {phone}</p>
          <button onClick={handleEditClick}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default GeneralInfo;
