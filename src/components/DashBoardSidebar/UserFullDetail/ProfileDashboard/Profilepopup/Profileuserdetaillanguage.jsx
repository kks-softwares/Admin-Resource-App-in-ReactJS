import React from "react";

export default function Profileuserdetaillanguage({ language, width }) {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "21vw",
        }}
      >
        <div className="profileuserfirstonedata">
          {language?.language} , {language?.proficiencyLevel}
        </div>
      </div>
    </>
  );
}
