import React from "react";

import SimpleCard from "../../components/SimpleCard";

import "./BasicContainer.scss";

const BasicContainer = () => {
  return (
    <div className="basic-container">
      <div className="basic-container__header">Basic Container</div>

      <div className="basic-container__body">
        <SimpleCard
          className="basic-container__card"
          withIcon
          color="purple"
          to="/simple-card"
          text="Train App"
          type="rect"
        />
        <SimpleCard
          className="basic-container__card"
          withIcon
          color="red"
          to="/simple-card"
          text="Create App"
          type="rect"
        />
        <SimpleCard
          className="basic-container__card"
          withIcon
          color="yellow"
          to="/simple-card"
          text="Find App"
          type="rect"
        />
        <SimpleCard
          className="basic-container__card"
          withIcon
          color="green"
          to="/simple-card"
          text="Create Node"
          type="rect"
        />
        <SimpleCard
          className="basic-container__card"
          withIcon
          color="blue"
          to="/simple-card"
          text="Find Node"
          type="rect"
        />
        <SimpleCard
          className="basic-container__card"
          withIcon
          color="green-yellow"
          to="/simple-card"
          text="Create Node"
          type="rect"
        />
      </div>
      <div className="basic-container__body">
        <SimpleCard
          className="basic-container__card"
          withIcon
          color="purple"
          to="/simple-card"
          text="Train App"
        />
        <SimpleCard
          className="basic-container__card"
          withIcon
          color="red"
          to="/simple-card"
          text="Create App"
        />
        <SimpleCard
          className="basic-container__card"
          withIcon
          color="yellow"
          to="/simple-card"
          text="Find App"
        />
        <SimpleCard
          className="basic-container__card"
          withIcon
          color="green"
          to="/simple-card"
          text="Create Node"
        />
        <SimpleCard
          className="basic-container__card"
          withIcon
          color="blue"
          to="/simple-card"
          text="Find Node"
        />
        <SimpleCard
          className="basic-container__card"
          withIcon
          color="green-yellow"
          to="/simple-card"
          text="Create Node"
        />
      </div>
    </div>
  );
};

export default BasicContainer;
