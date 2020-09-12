import React from "react";
import { Slider, Row, Col, Typography } from "antd";

import "./Container2.scss";

const Container2 = () => {
  return (
    <div>
      <Row className="tt">
        <Col span={12}>
          <div>test</div>
          <Typography.Text strong>testww</Typography.Text>
          <Slider min={5} max={90} defaultValue={25} tipFormatter={null} />
        </Col>
      </Row>
    </div>
  );
};

export default Container2;
