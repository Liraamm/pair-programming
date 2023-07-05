import React, { useState } from "react";

const Counter = ({ increment, decrement }) => {
  const [counter, setCounter] = useState(0);
  return (
    <div style={{ marginTop: "50px" }}>
      <p style={{ color: "white", fontSize: "30px", fontWeight: "800" }}>
        Counter :
      </p>
      <h2 style={{ marginBottom: "20px", color: "white", fontWeight: "300" }}>
        {counter}
      </h2>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          width: "30%",
          margin: "0 auto",
        }}
      >
        <button
          id="bottone5"
          onClick={() => {
            setCounter(decrement(counter));
          }}
        >
          -
        </button>
        <button
          id="bottone5"
          onClick={() => {
            setCounter(increment(counter));
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
