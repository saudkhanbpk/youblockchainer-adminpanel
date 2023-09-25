import React, { Fragment, useEffect, useState } from "react";
import {
  Card,
  CardBody,
  Col,
  Container,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { Breadcrumbs } from "../../../AbstractElements";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { getWelcomMail, updateWelcomMail } from "../../../api/api";
import { toast } from "react-toastify";

const ReelPrivacyPolicy = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [idState, setIdState] = useState([]);

  useEffect(() => {
    getWelcomMail()
      .then((res) => {
        setTitle(res?.data[0]?.email_title);
        setDescription(res?.data[0]?.email_body);
        setIdState(res?.data[0]?.email_id);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const updateData = async (e) => {
    if(title === "" || description) {
      toast.error("Please fill in all the required fields!");
      return;
    }
    e.preventDefault();
    const formData = {
      email_title: title,
      email_body: description,
    };

    await updateWelcomMail(idState, formData);
    alert(`Updated!`);
  };
  function handleChange(value) {
    setDescription(value);
  }
  return (
    <>
      <Fragment>
        <Breadcrumbs
          parent="Welcome Email"
          title="Welcome Email"
          mainTitle="Welcome Email"
        />
        <Container fluid={true}>
          <Row>
            <Col>
              <Card>
                <CardBody>
                  <Form>
                    <Row>
                      <Col>
                        <FormGroup>
                          <Label>{"Email Title"}</Label>
                          <Input
                            type="text"
                            required
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Enter Your Email"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row className="mb-5">
                      <Col>
                        <FormGroup>
                          <Label>{"Email Body"}</Label>
                          <ReactQuill
                            value={description}
                            onChange={handleChange}
                            placeholder="Type something here..."
                            modules={{
                              toolbar: [
                                [{ header: [1, 2, 3, 4, 5, 6, false] }],
                                ["bold", "italic", "underline", "strike"],
                                [{ color: [] }, { background: [] }],
                                [{ align: [] }],
                                [{ list: "ordered" }, { list: "bullet" }],
                                ["link", "image", "video"],
                                ["clean"],
                              ],
                            }}
                            formats={[
                              "header",
                              "bold",
                              "italic",
                              "underline",
                              "strike",
                              "color",
                              "background",
                              "align",
                              "list",
                              "bullet",
                              "link",
                              "image",
                              "video",
                            ]}
                            style={{height: '35vh'}}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <FormGroup className="mb-0">
                          <Button
                            type="submit"
                            onClick={updateData}
                            color="success"
                          >
                            Update
                          </Button>
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
    </>
  );
};

export default ReelPrivacyPolicy;
