import React, { Fragment, useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Button,
  Input,
} from "reactstrap";
import { Breadcrumbs } from "../../../AbstractElements";
import { useNavigate, useLocation } from "react-router-dom";
import { insertPackages, updatePackages } from "../../../api/api";
import { toast } from "react-toastify";

function AddReelKnowledge() {
  const navigate = useNavigate();
  const location = useLocation();
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [options, setOptions] = useState("");

  const onHandleSubmit = async () => {
    if (name === "" || amount === "" || options === "") {
      toast.error("Please fill in all the required fields!");
      return;
    }
    const dataObj = {
      package_name: name,
      package_amount: amount,
      package_options: options,
    };
    const res = await insertPackages(dataObj);
    if (res.status === 200) {
      navigate(`${process.env.PUBLIC_URL}/subscription/packages_list`);
    } else {
      alert("Error");
    }
  };

  const onHandleUpdate = async (id) => {
    const dataObj = {
      package_name: name,
      package_amount: amount,
      package_options: options,
    };
    const res = await updatePackages(id, dataObj);
    if (res.status === 200) {
      navigate(`${process.env.PUBLIC_URL}/subscription/packages_list`);
    } else {
      alert("Error occured.");
    }
  };

  const populateCategoryData = () => {
    if (location.state) {
      setName(location.state.dataObj.package_name);
      setAmount(location.state.dataObj.package_amount);
      setOptions(location.state.dataObj.package_options);
    }
  };

  useEffect(() => {
    populateCategoryData();
  }, []);

  return (
    <Fragment>
      <Breadcrumbs
        parent="Packages"
        name="Add Packages"
        mainTitle="Add Packages"
      />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <Form>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Label>{"Name"}</Label>
                        <Input
                          onChange={(e) => setName(e.target.value)}
                          value={name}
                          type="text"
                          placeholder="Enter name"
                          className="form-control"
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Label>{"Amount"}</Label>
                        <Input
                          onChange={(e) => setAmount(e.target.value)}
                          value={amount}
                          type="number"
                          placeholder="Enter amount"
                          className="form-control"
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Label>
                          {"Options(How much time script can be generate)*"}
                        </Label>
                        <Input
                          onChange={(e) => setOptions(e.target.value)}
                          value={options}
                          type="number"
                          placeholder="Enter option"
                          className="form-control"
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup className="mb-0">
                        {location.state ? (
                          <Button
                            onClick={() =>
                              onHandleUpdate(location.state.dataObj.package_id)
                            }
                            className="me-3"
                            color="success"
                          >
                            {"Update"}
                          </Button>
                        ) : (
                          <Button
                            onClick={onHandleSubmit}
                            className="me-3"
                            color="success"
                          >
                            {"Submit"}
                          </Button>
                        )}
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default AddReelKnowledge;
