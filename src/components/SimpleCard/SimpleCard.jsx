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
  return (
    <Link
      className={classnames(
        className,
        "simple-card",
        `simple-card__${type}__color-${color}`,
        {
          disabled: disabled,
        }
      )}
      to={to || ""}
      onClick={onClick}
    >
      <Text className="simple-card__text">{text}</Text>
      {withIcon && <RightOutlined className="simple-card__icon" />}
    </Link>
  );
};

export default SimpleCard;
