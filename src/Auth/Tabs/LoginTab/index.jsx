import React, { Fragment, useState, useEffect } from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";
import { Btn, H4, P } from "../../../AbstractElements";
import { EmailAddress, Password } from "../../../Constant";
import { useNavigate } from "react-router-dom";
import { Jwt_token } from "../../../Config/Config";
import man from "../../../assets/images/dashboard/1.png";
import axios from "axios";
import { baseUrl } from "../../../api/api";

const LoginTab = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [togglePassword, setTogglePassword] = useState(false);
  const navigate = useNavigate();

  const [value, setValue] = useState(localStorage.getItem("profileURL" || man));
  const [name, setName] = useState(localStorage.getItem("Name"));

  useEffect(() => {
    localStorage.setItem("profileURL", value);
    localStorage.setItem("Name", name);
  }, [value, name]);

  const validateEmail = (email) => {
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
  };

  const loginWithJwt = (e) => {
    e.preventDefault(); // Prevent the form from submitting

    if (email.length === 0) {
      setEmailError("Email is required.");
      return;
    } else if (!validateEmail(email)) {
      setEmailError("Email is not valid.");
      alert("Email is not valid.");
      return false; // Prevent form submission
    } else if (password.length === 0) {
      setPasswordError("Password is required");
      return;
    }

    setLoading(true);
    const formData = {
      email,
      password,
    };
    axios
      .post(`${baseUrl}/api/v1/admin/login`, formData)
      .then((res) => {
        console.log(res.data);
        if (res.data.user) {
          // console.log('myChecking',res.data.data[0].user_id)
          setValue(man);
          setName("Jacques");
          localStorage.setItem("ybToken", res.data.token);
          localStorage.setItem("role", "admin");
          localStorage.setItem("user_id", res.data.user._id);
          setLoading(false);
          navigate(`${process.env.PUBLIC_URL}/dashboard/default`);
        } else {
          setPasswordError("Wrong Email or Password");
        }
      })
      .catch((error) => console.log(error));
    setEmail("");
    setPassword("");
  };

  return (
    <Fragment>
      <Form className="theme-form">
        <H4>Sign In</H4>
        <P>{"Enter your email & password to login"}</P>
        <FormGroup>
          <Label className="col-form-label">{EmailAddress}</Label>
          <Input
            className="form-control"
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Enter Email"
          />
          {emailError && (
            <div className="mt-1">
              <p style={{ color: "#f23023" }}>{emailError}</p>
            </div>
          )}
        </FormGroup>
        <FormGroup className="position-relative">
          <Label className="col-form-label">{Password}</Label>
          <Input
            className="form-control"
            type={togglePassword ? "text" : "password"}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Enter Password"
            required
          />
          {passwordError && (
            <div className="mt-1">
              <p style={{ color: "#f23023" }}>{passwordError}</p>
            </div>
          )}
          <div
            className="show-hide"
            onClick={() => setTogglePassword(!togglePassword)}
          >
            <span className={togglePassword ? "" : "show"}></span>
          </div>
        </FormGroup>
        <div className="form-group mb-0 mt-5">
          <Btn
            attrBtn={{
              color: "primary",
              className: "btn-block w-100",
              disabled: loading ? loading : loading,
              onClick: (e) => loginWithJwt(e),
            }}
          >
            {loading ? "LOADING..." : "Sign In"}
          </Btn>
        </div>
      </Form>
    </Fragment>
  );
};

export default LoginTab;
