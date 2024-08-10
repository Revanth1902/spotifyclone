import React from "react";
import "./sidebaroptions.css";

const Options = ({ title, imageUrl, id }) => {
  return (
    <div className="sidebaroptions" id={id}>
      {imageUrl && (
        <img src={imageUrl} alt={title} className="siderbaroptionicon" />
      )}
      <h4>{title}</h4>
    </div>
  );
};

export default Options;
