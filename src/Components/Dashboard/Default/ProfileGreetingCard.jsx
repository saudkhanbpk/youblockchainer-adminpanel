import { Btn, H3, P } from "../../../AbstractElements";
import React, { Fragment } from "react";
import { Card, CardBody, CardHeader } from "reactstrap";
import { Link } from "react-router-dom";

const ProfileGreeting = () => {
  return (
    <Fragment>
      <Card className="profile-greeting">
        <CardHeader className="pb-0"></CardHeader>
        <CardBody className="text-center p-t-0">
          <H3 attrH3={{ className: "font-dark" }}>
            Welcome Back, MY Reel Dream AI!
          </H3>
          <p className="text-dark">
            Get Started with your own movie production studio for Free.
          </p>
          {/* <Link to={`${process.env.PUBLIC_URL}/app/users/userProfile`}> */}
          {/* <Link to={`#`}>
            <Btn
              attrBtn={{
                as: Card.Header,
                className: "btn btn-light",
                color: "default",
              }}
            >
              Update
            </Btn>
          </Link> */}
        </CardBody>
        <div className="confetti">
          <div className="confetti-piece"></div>
          <div className="confetti-piece"></div>
          <div className="confetti-piece"></div>
          <div className="confetti-piece"></div>
          <div className="confetti-piece"></div>
          <div className="confetti-piece"></div>
          <div className="confetti-piece"></div>
          <div className="confetti-piece"></div>
          <div className="confetti-piece"></div>
          <div className="confetti-piece"></div>
          <div className="confetti-piece"></div>
          <div className="confetti-piece"></div>
          <div className="confetti-piece"></div>
        </div>
      </Card>
    </Fragment>
  );
};

export default ProfileGreeting;
