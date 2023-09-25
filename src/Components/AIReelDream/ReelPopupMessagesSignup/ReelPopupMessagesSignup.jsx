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
import { getPopupMessage, updatePopupMessage } from "../../../api/api";

const ReelPopupMessagesSignup = () => {
  const [description, setDescription] = useState("");
  const [idState, setIdState] = useState([]);

  useEffect(() => {
    getPopupMessage()
      .then((res) => {
        setDescription(res?.data[0]?.popup_text);
        setIdState(res?.data[0]?.popup_id);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const updateData = async (e) => {
    e.preventDefault();
    const formData = {
      popup_text: description,
    };

    await updatePopupMessage(idState, formData);
    alert(`Updated!`);
  };

  return (
    <>
      <Fragment>
        <Breadcrumbs
          parent="Message"
          title="Popup Message"
          mainTitle="Popup Message"
        />
        <Container fluid={true}>
          <Row>
            <Col sm="12">
              <Card>
                <CardBody>
                  <Form method="post">
                    <Row>
                      <Col>
                        <FormGroup>
                          <Label>{"Page Description"}</Label>
                          <Input
                            placeholder="Enter Message"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            name="description"
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

export default ReelPopupMessagesSignup;
