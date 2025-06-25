import "../styles/CVHolder.css";

const CVHolder = ({
  personalInfo,
  educationalInfos,
  practicalInfos,
  colorHeader,
  colorTitle,
}) => {
  return (
    <div className="cv-container">
      <div
        className="header-cv"
        style={{ backgroundColor: colorHeader, color: colorTitle }}
      >
        <h1>{personalInfo.name}</h1>
        <div className="header-contact">
          <p>Email: {personalInfo.email}</p>
          <p>Phone number: {personalInfo.phoneNumber}</p>
        </div>
      </div>

      <div className="main-cv">
        <div>
          {educationalInfos.length !== 0 && (
            <h2
              className="title"
              style={{ backgroundColor: colorHeader, color: colorTitle }}
            >
              Education
            </h2>
          )}

          {educationalInfos.length !== 0 &&
            educationalInfos.map((educationalInfo) => (
              <div className="group-experiences">
                <div>
                  <p>Date of study: {educationalInfo.dateOfStudy}</p>
                </div>
                <div className="group-experiences-info">
                  <p className="important-info">{educationalInfo.schoolName}</p>
                  <p>{educationalInfo.titleStudy}</p>
                </div>
              </div>
            ))}
        </div>
        <div>
          {practicalInfos.length !== 0 && (
            <h2
              className="title"
              style={{ backgroundColor: colorHeader, color: colorTitle }}
            >
              Experience
            </h2>
          )}

          {practicalInfos.length !== 0 &&
            practicalInfos.map((practicalInfo) => (
              <div className="group-experiences">
                <div>
                  <p>
                    {practicalInfo.dateFrom} - {practicalInfo.dateUntil}
                  </p>
                </div>
                <div className="group-experiences-info">
                  <p className="important-info">{practicalInfo.companyName}</p>
                  <p>{practicalInfo.titlePosition}</p>
                  <p>{practicalInfo.titleResponsibilities}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CVHolder;
