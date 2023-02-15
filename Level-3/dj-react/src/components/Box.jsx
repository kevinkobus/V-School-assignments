import React from "react";

function Box(props) {
  const [on, setOn] = React.useState(props.on)

  const styles = {
    backgroundColor: on ? "#000000" : "transparent"
  }

  function toggle() {
    setOn(prevOn => !prevOn)
  }

  return <div style={styles} className="box">
          <button onClick={toggle}>Small time DJ</button>
        </div>;
}

export default Box;
