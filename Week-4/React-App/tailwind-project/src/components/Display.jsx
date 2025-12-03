import React from "react";

function Display({ value }) {
  console.log("Display rendered");
  return <h3>Score: {value}</h3>;
}

export default React.memo(Display);
