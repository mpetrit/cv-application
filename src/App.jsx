import { useState } from "react";
import "./App.css";
import PersonalInfo from "./components/PersonalInfo";
import EducationalInfo from "./components/EducationalInfo";
import PracticalInfo from "./components/PracticalInfo";
import CVHolder from "./components/CVHolder";
import Navbar from "./components/Navbar";

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const [educationalInfos, setEducationalInfos] = useState([]);
  const [practicalInfos, setPracticalInfos] = useState([]);

  const [colorHeader, setColorHeader] = useState("#000000");
  const [colorTitle, setColorTitle] = useState("#FFFFFF");

  return (
    <>
      <Navbar
        colorHeader={colorHeader}
        setColorHeader={setColorHeader}
        colorTitle={colorTitle}
        setColorTitle={setColorTitle}
      />
      <main className="app-container">
        <aside className="edit-section">
          <h3>Personal</h3>
          <PersonalInfo
            personalInfo={personalInfo}
            setPersonalInfo={setPersonalInfo}
          />
          <h3>Educational</h3>
          {educationalInfos.map((_, index) => (
            <>
              <EducationalInfo
                educationalInfos={educationalInfos}
                index={index}
                updateEducation={(index, newObj) => {
                  setEducationalInfos((prevInfo) => {
                    const tempArr = [...prevInfo];
                    tempArr.splice(index, 1, newObj);
                    return tempArr;
                  });
                }}
              />
              <button
                onClick={() =>
                  setEducationalInfos((prevInfo) => {
                    const tempArr = [...prevInfo];
                    tempArr.splice(index, 1);
                    return tempArr;
                  })
                }
              >
                Remove this education
              </button>
            </>
          ))}
          <button
            onClick={() =>
              setEducationalInfos((prevArr) => [
                ...prevArr,
                {
                  id: prevArr.length,
                  name: "",
                  email: "",
                  phoneNumber: "",
                },
              ])
            }
          >
            Add education
          </button>
          <h3>Practical</h3>

          {practicalInfos.map((_, index) => (
            <>
              <PracticalInfo
                practicalInfos={practicalInfos}
                index={index}
                updatePractical={(index, newObj) => {
                  setPracticalInfos((prevInfo) => {
                    const tempArr = [...prevInfo];
                    tempArr.splice(index, 1, newObj);
                    return tempArr;
                  });
                }}
              />
              <button
                onClick={() =>
                  setPracticalInfos((prevInfo) => {
                    const tempArr = [...prevInfo];
                    tempArr.splice(index, 1);
                    return tempArr;
                  })
                }
              >
                Remove this experience
              </button>
            </>
          ))}
          <button
            onClick={() =>
              setPracticalInfos((prevArr) => [
                ...prevArr,
                {
                  id: prevArr.length,
                  companyName: "",
                  titlePosition: "",
                  titleResponsibilities: "",
                  dateFrom: "",
                  dateUntil: "",
                },
              ])
            }
          >
            Add experience
          </button>
        </aside>

        <section>
          <CVHolder
            personalInfo={personalInfo}
            educationalInfos={educationalInfos}
            practicalInfos={practicalInfos}
            colorHeader={colorHeader}
            colorTitle={colorTitle}
          />
        </section>
      </main>
      <footer style={{ backgroundColor: colorHeader }}>
        <p style={{ color: colorTitle }}>
          Made by{" "}
          <a
            style={{ color: colorTitle }}
            target="_blank"
            href="http://github.com/mpetrit"
          >
            mpetrit
          </a>
        </p>
      </footer>
    </>
  );
}

export default App;
