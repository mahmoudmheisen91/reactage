import React, { useState } from "react";

import "./MySelect.scss";

const MyOption = ({ value, onSelect, selected }) => {
  const selectedStyle = {
    backgroundColor: "red",
    color: "#fff",
    cursor: "pointer",
  };
  const unSelectedStyle = { cursor: "pointer" };

  let style = selected === value ? selectedStyle : unSelectedStyle;

  return (
    <div style={style} onClick={onSelect}>
      {value}
    </div>
  );
};

const MySelect = () => {
  const [selected, setSelected] = useState("");

  const onSelect = (evt) => {
    if (evt.target.textContent !== selected)
      setSelected(evt.target.textContent);
    else setSelected("");
  };

  return (
    <div className="mystyle">
      <MyOption selected={selected} onSelect={onSelect} value="test1" />
      <MyOption selected={selected} onSelect={onSelect} value="test2" />
      <MyOption selected={selected} onSelect={onSelect} value="test3" />
    </div>
  );
};

export default MySelect;
