import React from "react";

function Heading() {
  let name = "Rayyan";
  let time = new Date().getHours();
  let headingText = "";

  var style = {
    color: "green",
    fontSize: "50px",
    border: "1px dotted black",
    backgroundColor: "black",
  };

  if (time > 5 && time < 12) {
    headingText = "Good Morning";
    style.color = "yellow";
  } else if (time >= 12 && time < 15) {
    headingText = "Good Afternoon";
    style.color = "orange";
  } else if (time >= 15 && time < 19) {
    headingText = "Good Evening";
    style.color = "blue";
  } else {
    headingText = "Good Night";
    style.color = "purple";
  }

  return (
    <h1
      className="heading"
      contentEditable="true"
      spellCheck="false"
      style={style}
    >
      {`${headingText}, ${name}!`}{" "}
    </h1>
  );
}

export default Heading;
