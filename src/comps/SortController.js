import React from "react";

const SortController = () => {
  return (
    <div
      style={{
        gridRowStart: 1,
        gridRowEnd: 2,
      }}
    >
      <button>Generate new array</button>
      Choose array Size
      <input type="range" min={10} max={window.innerWidth / 35} />
      Choose speed
      <input type="range" min={10} max={100} />
      <p>
        Choose sort method
        <input
          type="radio"
          id="bubble"
          name="sort-method"
          value="bubble"
        />
        <label for="bubble">Bubble sort</label>
        <input
          type="radio"
          id="bubble"
          name="sort-method"
          value="bubble"
        />
        <label for="bubble">Bubble sort</label>
        <input
          type="radio"
          id="merge"
          name="sort-method"
          value="merge"
        />
        <label for="merge">Merge sort</label>
        <input
          type="radio"
          id="quick"
          name="sort-method"
          value="quick"
        />
        <label for="quick">Quick sort</label>
      </p>
      <button>Sort</button>
    </div>
  );
};

export default SortController;
