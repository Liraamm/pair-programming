import React, { useState } from "react";

const Paragraph = ({ addParagraph, paragraph }) => {
  const [inputVal, setInputVal] = useState("");
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return (
    <div style={{ marginTop: "20px" }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!inputVal.trim()) {
            return;
          }
          const newData = {
            id: Date.now(),
            text: inputVal,
          };
          addParagraph(newData);
          setInputVal("");
        }}
      >
        <input
          style={{ width: "250px", height: "35px" }}
          value={inputVal}
          onChange={(e) => {
            // ? Изменяем состояние когда печатаем
            setInputVal(e.target.value);
          }}
          type="text"
        />
        <button
          style={{ height: "35px", backgroundColor: "#313432", color: "white" }}
        >
          Submit
        </button>
      </form>
      <div
        style={{
          marginTop: "20px",

          border: "white dotted 6px",
        }}
      >
        {paragraph.map((item) => (
          <p style={{ fontSize: "40px", color: "#" + randomColor }}>
            {item.text}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Paragraph;
