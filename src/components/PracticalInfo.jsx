import React, { useState } from "react";
import "../styles/ComponentOfEdit.css";

const PracticalInfo = ({ practicalInfos, updatePractical, index }) => {
  const [isEditing, setEditing] = useState(true);

  return (
    <div className="group-edit">
      {isEditing ? (
        <>
          <label htmlFor="companyName">Company name:</label>
          <input
            type="text"
            id="companyName"
            value={practicalInfos[index].companyName}
            onChange={(e) => {
              const newObj = {
                ...practicalInfos[index],
                companyName: e.target.value,
              };
              updatePractical(index, newObj);
            }}
          />

          <label htmlFor="titlePoistion">Title of position:</label>
          <input
            type="text"
            id="titlePosition"
            value={practicalInfos[index].titlePosition}
            onChange={(e) => {
              const newObj = {
                ...practicalInfos[index],
                titlePosition: e.target.value,
              };
              updatePractical(index, newObj);
            }}
          />

          <label htmlFor="titleResponsibilities">Main responsibilities:</label>
          <input
            type="text"
            id="titleResponsibilities"
            value={practicalInfos[index].titleResponsibilities}
            onChange={(e) => {
              const newObj = {
                ...practicalInfos[index],
                titleResponsibilities: e.target.value,
              };
              updatePractical(index, newObj);
            }}
          />

          <label htmlFor="dateFrom">Date of start:</label>
          <input
            type="date"
            id="dateFrom"
            value={practicalInfos[index].dateFrom}
            onChange={(e) => {
              const newObj = {
                ...practicalInfos[index],
                dateFrom: e.target.value,
              };
              updatePractical(index, newObj);
            }}
          />

          <label htmlFor="dateUntil">Date of finish:</label>
          <input
            type="date"
            id="dateUntil"
            value={practicalInfos[index].dateUntil}
            onChange={(e) => {
              const newObj = {
                ...practicalInfos[index],
                dateUntil: e.target.value,
              };
              updatePractical(index, newObj);
            }}
          />
        </>
      ) : (
        <>
          <p>Company name: {practicalInfos[index].companyName}</p>
          <p>Title of position: {practicalInfos[index].titlePosition}</p>
          <p>
            Responsibilities of position:{" "}
            {practicalInfos[index].titleResponsibilities}
          </p>
          <p>Date of start: {practicalInfos[index].dateFrom}</p>
          <p>Date of finish: {practicalInfos[index].dateUntil}</p>
        </>
      )}
      <button onClick={() => setEditing((prevEdit) => !prevEdit)}>
        {isEditing ? "Submit" : "Edit"}
      </button>
    </div>
  );
};
export default PracticalInfo;
