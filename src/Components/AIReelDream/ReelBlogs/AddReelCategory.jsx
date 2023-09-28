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
import { insertBlogCategory, updateBlogCategory } from "../../../api/api";
import { toast } from "react-toastify";

function AddReelCategory() {
  const navigate = useNavigate();
  const location = useLocation();

  const [namecat, setName] = useState("");

  const saveCategory = async () => {
    if (!namecat) {
      toast.error("Please fill all the required fields.");
      return;
    }
    const dataObj = {
      name: namecat,
    };
    const res = await insertBlogCategory(dataObj);
    if (res.status === 200) {
      navigate(`${process.env.PUBLIC_URL}/blogs/category_list`);
    } else {
      alert("Error");
    }
  };

  const updateUsefulLinkfunc = async (id) => {
    const dataObj = {
      name: namecat,
    };
    const res = await updateBlogCategory(id, dataObj);
    if (res.status === 200) {
      navigate(`${process.env.PUBLIC_URL}/blogs/category_list`);
    } else {
      alert("Error occured.");
    }
  };

  const populateCategoryData = () => {
    if (location.state) {
      setName(location.state.dataObj.name);
    }
  };

  useEffect(() => {
    populateCategoryData();
  }, []);

  return (
    <Fragment>
      <Breadcrumbs
        parent="Blogs"
        title="Add Category"
        mainTitle="Add Category"
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
                          value={namecat}
                          type="text"
                          placeholder="Enter Name"
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
                                location.state.dataObj._id
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

export default AddReelCategory;
