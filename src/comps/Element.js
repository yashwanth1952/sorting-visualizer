import React from "react";

const getBackgroundColor = (type) => {
  if (type === 1) return "blue";
  if (type === 2) return "red";
  return "green";
};

const Element = (props) => {
  return (
    <div
      style={{
        width: "30px",
        backgroundColor: "blue",
        height: `${props.height}%`,
      }}
    ></div>
  );
};

export default Element;
