import React from "react";

const Subtitle = ({ title, flag }) => {
  return (
    <>
      <div>
        {flag && <img src={flag} alt="" width="100" height="75" />}
        <h3 className="subtitle">{title}</h3>
      </div>
    </>
  );
};

export default Subtitle;
