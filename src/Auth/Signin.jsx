import React from "react";
import { Container, Row, Col } from "reactstrap";
import LoginTab from "./Tabs/LoginTab";

const Logins = () => {
  return (
    <Container fluid={true} className="p-0">
      <Row>
        <Col xs="12">
          <div className="login-card">
            <div className="login-main login-tab">
              <LoginTab />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Logins;