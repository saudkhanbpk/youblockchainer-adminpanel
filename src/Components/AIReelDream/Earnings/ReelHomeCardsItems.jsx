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
import { getHomeCardTitle, insertHomeCardItems, updateHomeCardItems } from "../../../api/api";

function ReelHomeCardsItems() {
  const navigate = useNavigate();
  const location = useLocation();
  const [categories, setCategories] = useState("");
  const [getCategories, setGetCategories] = useState([]);

  const [namecat, setName] = useState("");

  const saveCategory = async () => {
    const dataObj = {
      homecardlist_text: namecat,
      homecardlist_id: categories,
    };
    const res = await insertHomeCardItems(dataObj);
    if (res.status === 200) {
      navigate(`${process.env.PUBLIC_URL}/home/homecarditem_list`);
    } else {
      alert("Error");
    }
  };

  const updateUsefulLinkfunc = async (id) => {
    const dataObj = {
      homecardlist_text: namecat,
      homecardlist_id: categories,
    };
    const res = await updateHomeCardItems(id, dataObj);
    if (res.status === 200) {
      navigate(`${process.env.PUBLIC_URL}/home/homecarditem_list`);
    } else {
      alert("Error occured.");
    }
  };

  const populateCategoryData = () => {
    if (location.state) {
      setName(location.state.dataObj.homecardlist_text);
    }
  };

  const fetchGetCategories = async () => {
    const res = await getHomeCardTitle(); // API Request
    setGetCategories(res?.data);
  };

  useEffect(() => {
    fetchGetCategories();
    populateCategoryData();
  }, []);

  return (
    <Fragment>
      <Breadcrumbs
        parent="Home"
        title="Home"
        mainTitle="Home Card Items"
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
                        <Label>{"Select Card Title"}</Label>
                        <Input
                          type="select"
                          value={categories}
                          onChange={(e) => setCategories(e.target.value)}
                          placeholder="Select Title"
                          className="form-control"
                          required
                        >
                          <option value={""}>Select Title</option>
                          {getCategories?.map((val, i) => (
                            <option value={val.homecardtitle_id} key={i}>
                              {val.homecard_title}
                            </option>
                          ))}
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Label>{"List Text"}</Label>
                        <Input
                          onChange={(e) => setName(e.target.value)}
                          value={namecat}
                          type="text"
                          placeholder="Enter Text"
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
                              updateUsefulLinkfunc(
                                location.state.dataObj.homecarditem_id
                              )
                            }
                            className="me-3"
                            color="success"
                          >
                            {"Update"}
                          </Button>
                        ) : (
                          <Button
                            onClick={saveCategory}
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

export default ReelHomeCardsItems;
