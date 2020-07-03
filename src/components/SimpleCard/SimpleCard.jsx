import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "antd";
import { RightOutlined } from "@ant-design/icons";
import classnames from "classnames";

import "./SimpleCard.scss";

const { Text } = Typography;

const SimpleCard = ({
  className,
  withIcon,
  color,
  text,
  to,
  disabled,
  onClick,
  type = "line",
}) => {
  // const colors = ["red", "purple", "yellow", "green", "blue", "green-yellow"];

  return (
    <div
      className={classnames(
        className,
        "simple-card",
        {
          disabled: disabled,
          "simple-card__rect": type === "rect",
          "simple-card__line": type === "line",
        },
        `simple-card__color-${color}`
      )}
    >
      <Link className="simple-card__link" to={to || ""} onClick={onClick}>
        <Text
          className={classnames({
            "simple-card__text": type === "line",
          })}
        >
          {text}
        </Text>
        {withIcon && <RightOutlined className="simple-card__icon" />}
      </Link>
    </div>
  );
};

export default SimpleCard;
