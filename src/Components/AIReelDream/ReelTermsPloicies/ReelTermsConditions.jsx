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
} from "reactstrap";
import { Breadcrumbs } from "../../../AbstractElements";
import { getTermsConditons, updateTermsConditons } from "../../../api/api";
import CKEditors from "react-ckeditor-component";

const ReelTermsConditions = () => {
  const [description, setDescription] = useState("");
  const [idState, setIdState] = useState([]);

  useEffect(() => {
    getTermsConditons()
      .then((res) => {
        setDescription(res?.data[0].terms_text);
        setIdState(res?.data[0].terms_id);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const updateData = async (e) => {
    e.preventDefault();
    const formData = {
      terms_text: description,
    };

    await updateTermsConditons(idState, formData);
    alert(`Updated!`);
  };

  const onChange = (evt) => {
    const newContent = evt.editor.getData();
    setDescription(newContent);
  };
  return (
    <>
      <Fragment>
        <Breadcrumbs
          parent="Terms & Conditions"
          title="Terms & Conditions"
          mainTitle="Terms & Conditions"
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
                          <CKEditors
                            activeclassName="p10"
                            content={description}
                            events={{
                              change: onChange,
                            }}
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

export default ReelTermsConditions;
