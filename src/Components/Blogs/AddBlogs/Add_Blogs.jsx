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
import CKEditors from "react-ckeditor-component";
import { insertAddBlogSection, updateAddBlogSection } from "../../../api/api";

function Add_Blogs() {
  const [content, setContent] = useState("content");
  const onChange = (evt) => {
    const newContent = evt.editor.getData();
    setContent(newContent);
  };
  const navigate = useNavigate();
  const location = useLocation();

  const [titleState, settitleState] = useState("");
  const [categoryState, setcategoryState] = useState("");
  const [serialNumberState, setserialNumberState] = useState('');
  const [metaKeywordState, setmetaKeywordState] = useState("");
  const [metadescription, setmetadescription] = useState("");
  const [imageState, setimageState] = useState('');

  const handleAddBlogs = async () => {
    console.log(`button-cloimeds`)
    const formData = new FormData();
    formData.append("blogsection_title", titleState);
    formData.append("blogsection_category", categoryState);
    formData.append("blogsection_serialnumber", serialNumberState);
    formData.append("blogsection_metakeywords", metaKeywordState);
    formData.append("blogsection_metadescription", metadescription);
    formData.append("blogsection_image", imageState);
    formData.append("Blogsection_content", content);

    const res = await insertAddBlogSection(formData);
    if (res.status === 200) {
      navigate(`${process.env.PUBLIC_URL}/hero_section/blogs_list`);
    } else {
      alert("Error");
    }
  };

  const updateAddBlogs = async (id) => {
    const formData = new FormData();
    formData.append("blogsection_title", titleState);
    formData.append("blogsection_category", categoryState);
    formData.append("blogsection_serialnumber", serialNumberState);
    formData.append("blogsection_metakeywords", metaKeywordState);
    formData.append("blogsection_metadescription", metadescription);
    formData.append("blogsection_image", imageState);
    formData.append("Blogsection_content", content);

    const res = await updateAddBlogSection(id, formData);
    if (res.status === 200) {
      navigate(`${process.env.PUBLIC_URL}/hero_section/blogs_list`);
    } else {
      alert("Error occured.");
    }
  };

  const populateCategoryData = () => {
    if (location.state) {
      settitleState(location.state.dataObj.blogsection_title);
      setcategoryState(location.state.dataObj.blogsection_category);
      setserialNumberState(location.state.dataObj.blogsection_serialnumber);
      setmetaKeywordState(location.state.dataObj.blogsection_metakeywords);
      setmetadescription(location.state.dataObj.blogsection_metadescription);
      setContent(location.state.dataObj.Blogsection_content);
    }
  };

  useEffect(() => {
    populateCategoryData();
  }, []);

  const handleChangeStatus = ({ meta, file }, status) => {
    setimageState(file);
  };

  return (
    <Fragment>
      <Breadcrumbs parent="Blogs" title=" Add Blogs" mainTitle=" Add Blogs" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <Form className="theme-form">
                  <Row>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"Title  "}</Label>
                        <Input
                          onChange={(e) => settitleState(e.target.value)}
                          value={titleState}
                          type="text"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"Category "}</Label>
                        <Input
                          onChange={(e) => setcategoryState(e.target.value)}
                          value={categoryState}
                          type="select"
                          placeholder=" Select a Category "
                          className="form-control digits"
                          required
                        >
                          {" "}
                          <option>Select a Category</option>
                          <option>Web design</option>
                          <option>Web development</option>
                          <option>Graphic design</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <Label>{"Serial Number"}</Label>
                        <input
                          onChange={(e) => setserialNumberState(e.target.value)}
                          value={serialNumberState}
                          className="form-control"
                          type="number"
                          placeholder="Serial Number"
                        />
                      </FormGroup>
                    </Col>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"Meta Keywords"}</Label>
                        <input
                          onChange={(e) => setmetaKeywordState(e.target.value)}
                          value={metaKeywordState}
                          className="form-control"
                          type="Text"
                          placeholder="Enter meta keywords"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup className="mb-0">
                        <Label>{"Meta Description"}</Label>
                        <Input
                          onChange={(e) => setmetadescription(e.target.value)}
                          value={metadescription}
                          type="textarea"
                          className="form-control"
                          placeholder="Enter meta discription"
                          rows="3"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Label>{"Image "}</Label>
                        <Dropzone
                          onChangeStatus={handleChangeStatus}
                          maxFiles={1}
                          multiple={false}
                          canCancel={false}
                          inputContent="Drop A File"
                          styles={{
                            dropzone: { width: "100%", height: 50 },
                            dropzoneActive: { borderColor: "green" },
                          }}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Label>{"Content"}</Label>
                        <CKEditors
                          activeclassName="p10"
                          content={content}
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
                        {location.state ? (
                          <Button
                            onClick={() =>
                              updateAddBlogs(
                                location.state.dataObj.blogsection_id
                              )
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

export default Add_Blogs;
