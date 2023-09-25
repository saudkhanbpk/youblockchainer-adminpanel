import React, { Fragment, useEffect, useState } from "react";
import { Breadcrumbs } from "../../../AbstractElements";
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Form,
  FormGroup,
  Label,
  Row,
} from "reactstrap";
import { TagsInput } from "react-tag-input-component";
import { getPolicyPageSEO, updatePolicyPageSEO } from "../../../api/api";

const ReelSeoPolicypage = () => {
  const [metaTitle, setMetaTitle] = useState("");
  const [metaKeywords, setMetaKeywords] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [idState, setIdState] = useState([]);

  useEffect(() => {
    getPolicyPageSEO()
      .then((res) => {
        setMetaTitle(res?.data[0]?.meta_title);
        setMetaKeywords(JSON.parse(res?.data[0]?.meta_keywords));
        setMetaDescription(res?.data[0]?.meta_description);
        setIdState(res?.data[0].page_id);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onUpdatePage = async (e) => {
    e.preventDefault();

    const formdata = {
      meta_title: metaTitle,
      meta_keywords: JSON.stringify(metaKeywords),
      meta_description: metaDescription,
    };

    await updatePolicyPageSEO(idState, formdata);
    alert(`Updated!`);
  };

  return (
    <>
      <Fragment>
        <Breadcrumbs
          parent="Privacy & Policy Page"
          title="Privacy & Policy Page"
          mainTitle="Privacy & Policy Page"
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
                          <Label>{"Meta Title"}</Label>
                          <input
                            placeholder="Enter Meta Title"
                            className="form-control"
                            name="meta_title"
                            value={metaTitle}
                            onChange={(e) => setMetaTitle(e.target.value)}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <FormGroup>
                          <Label>{"Meta Keywords"}</Label>
                          <TagsInput
                            value={metaKeywords}
                            onChange={setMetaKeywords}
                            placeHolder="Enter Meta Keywords"
                            classNames={"form-control"}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <FormGroup>
                          <Label>{"Meta Description"}</Label>
                          <input
                            placeholder="Enter Meta Description"
                            className="form-control"
                            name="meta_description"
                            value={metaDescription}
                            onChange={(e) => setMetaDescription(e.target.value)}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <FormGroup className="mb-0">
                          <Button
                            type="submit"
                            onClick={onUpdatePage}
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

export default ReelSeoPolicypage;
