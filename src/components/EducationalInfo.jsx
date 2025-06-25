import React, { useState } from "react";
import "../styles/ComponentOfEdit.css";

const EducationalInfo = ({ educationalInfos, index, updateEducation }) => {
  const [isEditing, setEditing] = useState(true);

  return (
    <div className="group-edit">
      {isEditing ? (
        <>
          <label htmlFor="name">School name</label>
          <input
            type="text"
            id="name"
            value={educationalInfos[index].schoolName}
            onChange={(e) => {
              const newObj = {
                ...educationalInfos[index],
                schoolName: e.target.value,
              };
              updateEducation(index, newObj);
            }}
          />

          <label htmlFor="titleStudy">Title of study:</label>
          <input
            type="text"
            id="titleStudy"
            value={educationalInfos[index].titleStudy}
            onChange={(e) => {
              const newObj = {
                ...educationalInfos[index],
                titleStudy: e.target.value,
              };
              updateEducation(index, newObj);
            }}
          />

          <label htmlFor="dateOfStudy">Date of study:</label>
          <input
            type="date"
            id="dateOfStudy"
            value={educationalInfos[index].dateOfStudy}
            onChange={(e) => {
              const newObj = {
                ...educationalInfos[index],
                dateOfStudy: e.target.value,
              };
              updateEducation(index, newObj);
            }}
          />
        </>
      ) : (
        <>
          <p>School name: {educationalInfos[index].schoolName}</p>
          <p>Title of study: {educationalInfos[index].titleStudy}</p>
          <p>Date of study: {educationalInfos[index].dateOfStudy}</p>
        </>
      )}
      <button onClick={() => setEditing((prevEdit) => !prevEdit)}>
        {isEditing ? "Submit" : "Edit"}
      </button>
    </div>
  );
};
export default EducationalInfo;
