import React, { Fragment } from "react";
import { Container, Card } from "reactstrap";

const ReelAnalytics = () => {
  return (
    <>
      <Fragment>
        <Container fluid={true}>
          <Card>
            <iframe
              src={"https://google.com/analytics/about"}
              title="My Reel Dreams Analytics"
              // frameBorder="0"
              // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ width: "100%", objectFit: "cover", height: "80vh" }}
            />
          </Card>
        </Container>
      </Fragment>
    </>
  );
};

export default ReelAnalytics;
