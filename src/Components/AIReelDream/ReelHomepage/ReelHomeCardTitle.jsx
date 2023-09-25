import React, { Fragment, useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import { Breadcrumbs } from "../../../AbstractElements";
import { useNavigate, useLocation } from "react-router-dom";
import Dropzone from "react-dropzone-uploader";
import "react-dropzone-uploader/dist/styles.css";
import { insertHomeCardTitle, updateHomeCardTitle } from "../../../api/api";
import { toast } from "react-toastify";

function ReelHomeCardTitle() {
  const navigate = useNavigate();
  const location = useLocation();

  const [titleState, settitleState] = useState("");
  const [imgFile, setImageFile] = useState("");

  const handleAddBlogs = async () => {
    if (!titleState) {
      toast.error("Please fill all the required fields.");
      return;
    }
    if (!imgFile) {
      toast.error("Please fill all the required fields.");
      return;
    }
    const formData = new FormData();
    formData.append("homecard_title", titleState);
    formData.append("homecard_img", imgFile);

    const res = await insertHomeCardTitle(formData);
    if (res.status === 200) {
      navigate(`${process.env.PUBLIC_URL}/home/homecardtitle_list`);
    } else {
      alert("Error");
    }
  };

  const updateAddBlogs = async (id) => {
    const formData = new FormData();
    formData.append("homecard_title", titleState);
    formData.append("homecard_img", imgFile);

    const res = await updateHomeCardTitle(id, formData);
    if (res.status === 200) {
      navigate(`${process.env.PUBLIC_URL}/home/homecardtitle_list`);
    } else {
      alert("Error occured.");
    }
  };

  const handleChangeStatus = ({ meta, file }, status) => {
    setImageFile(file);
  };
  const populateCategoryData = () => {
    if (location.state) {
      settitleState(location.state.dataObj.homecard_title);
    }
  };

  useEffect(() => {
    populateCategoryData();
  }, []);
  return (
    <Fragment>
      <Breadcrumbs parent="Home" title="Home" mainTitle="Home Cards Title" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <Form>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Label>{"Title"}</Label>
                        <Input
                          onChange={(e) => settitleState(e.target.value)}
                          className="form-control digits"
                          placeholder="Enter Title"
                          value={titleState}
                          type="text"
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Label>{"Image"}</Label>
                        <Dropzone
                          onChangeStatus={handleChangeStatus}
                          inputContent="Drop An Image"
                          multiple={false}
                          canCancel={false}
                          maxFiles={1}
                          styles={{
                            dropzone: { width: "100%", minHeight: 50 },
                            dropzoneActive: { borderColor: "green" },
                          }}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup className="mb-0">
                        {location?.state ? (
                          <Button
                            onClick={() =>
                              updateAddBlogs(location.state.dataObj.homecardtitle_id)
                            }
                            className="me-3"
                            color="success"
                          >
                            {"Update"}
                          </Button>
                        ) : (
                          <Button
                            onClick={handleAddBlogs}
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

export default ReelHomeCardTitle;
