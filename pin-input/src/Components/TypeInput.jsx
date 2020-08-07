import React, { useState, useRef, useEffect } from "react";

const style = {
  input: {
    border: "1px solid black",
    height: "50px",
    width: "50px",
    margin: "5px",
  },
};
const TypeInput = () => {
  const [inputVal, setinput] = useState({
    1: "",
    2: "",
    3: "",
    4: "",
  });

  const [focus, setFocus] = useState({
    1: true,
    2: false,
    3: true,
    4: true,
  });

  //   useEffect(() => {
  //     effect;
  //     return () => {
  //       cleanup;
  //     };
  //   }, [input]);
  return (
    <div>
      <input
        type="text"
        name="1"
        // onChange={}
        autoFocus={focus[1]}
        style={style.input}
      />
      <input type="text" name="2" autoFocus={focus[2]} style={style.input} />
    </div>
  );
};

export default TypeInput;
