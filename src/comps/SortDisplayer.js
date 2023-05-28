import React from "react";
import Element from "./Element";

const SortDisplayer = () => {
  let arr = new Array(30)
    .fill(0)
    .map(() => Math.floor(Math.random() * 100 + 10));

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "flex-end",
        gridRowStart: 2,
        gridRowEnd: 6,
      }}
    >
      {arr.map((ele) => (
        <Element height={ele} />
      ))}
    </div>
  );
};

export default SortDisplayer;
