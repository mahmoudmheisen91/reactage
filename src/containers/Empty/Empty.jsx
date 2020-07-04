import React from "react";

import MySelect from "../../components/MySelect";

import "./Empty.scss";

const Empty = () => {
  return (
    <div className="empty">
      <div className="empty__header">Basic Container</div>

      <div className="empty__body">
        <MySelect />
      </div>
    </div>
  );
};

export default Empty;
