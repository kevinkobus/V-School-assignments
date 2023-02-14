import React from "react";

function Box(props) {
  const styles = {
    backgroundColor: props.on ? "#000000" : "transparent"
  }
  return <div style={styles} className="box"></div>;
}

export default Box;
