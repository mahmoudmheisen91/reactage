import React, { useState } from "react";

import "./MySelect.scss";

const MyOption = ({ value, onSelect, selected, id }) => {
  const selectedStyle = {
    backgroundColor: "red",
    color: "#fff",
    cursor: "pointer",
  };
  const unSelectedStyle = { cursor: "pointer", };

  let style = selected === id ? selectedStyle : unSelectedStyle;

  return (
    <div className="mystyle2" style={style} onClick={()=>onSelect(id)}>
      {value}
    </div>
  );
};

const MySelect = () => {
  const [selected, setSelected] = useState("0");

  const onSelect = (id) => {
    if (id !== selected)
      setSelected(id);
    // else setSelected("");
  };

  return (
    <div className="mystyle">
      <MyOption selected={selected} onSelect={onSelect} value="test1" id="0"/>
      <MyOption selected={selected} onSelect={onSelect} value="test2" id="1"/>
      <MyOption selected={selected} onSelect={onSelect} value="test3" id="2"/>
    </div>
  );
};

export default MySelect;
