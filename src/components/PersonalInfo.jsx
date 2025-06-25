import React, { useState } from "react";
import "../styles/ComponentOfEdit.css";

const PersonalInfo = ({ personalInfo, setPersonalInfo }) => {
  console.log(personalInfo, setPersonalInfo);
  const [isEditing, setEditing] = useState(true);

  return (
    <div className="group-edit">
      {isEditing ? (
        <>
          <label htmlFor="name">Full name</label>
          <input
            type="text"
            id="name"
            value={personalInfo.name}
            onChange={(e) =>
              setPersonalInfo((prevInfo) => ({
                ...prevInfo,
                name: e.target.value,
              }))
            }
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={personalInfo.email}
            onChange={(e) =>
              setPersonalInfo((prevInfo) => ({
                ...prevInfo,
                email: e.target.value,
              }))
            }
          />

          <label htmlFor="phone">Phone number:</label>
          <input
            type="tel"
            id="phone"
            value={personalInfo.phoneNumber}
            onChange={(e) =>
              setPersonalInfo((prevInfo) => ({
                ...prevInfo,
                phoneNumber: e.target.value,
              }))
            }
          />
        </>
      ) : (
        <>
          <p>Name: {personalInfo.name}</p>
          <p>Email: {personalInfo.email}</p>
          <p>Phone number: {personalInfo.phoneNumber}</p>
        </>
      )}
      <button onClick={() => setEditing((prevEdit) => !prevEdit)}>
        {isEditing ? "Submit" : "Edit"}
      </button>
    </div>
  );
};

export default PersonalInfo;
