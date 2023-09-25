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
import CKEditors from "react-ckeditor-component";
import { TagsInput } from "react-tag-input-component";
import { getBlogCategory, insertBlogs, updateBlogs } from "../../../api/api";
import { toast } from "react-toastify";

function AddReelBlogs() {
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const [titleState, settitleState] = useState("");
  const [metaKeywordState, setmetaKeywordState] = useState([]);
  const [metaDescriptionState, setmetaDescriptionState] = useState("");
  const [imgFile, setImageFile] = useState("");
  const [categories, setCategories] = useState("");
  const [getCategories, setGetCategories] = useState([]);

  const onChange = (evt) => {
    const newContent = evt.editor.getData();
    setContent(newContent);
  };

  const handleAddBlogs = async () => {
    if (titleState === "" || metaKeywordState === "" || metaDescriptionState === "" || imgFile === "") {
      toast.error("Please fill in all the required fields!");
      return;
    }
    const formData = new FormData();
    formData.append("blogs_title", titleState);
    formData.append("blog_category_id", categories);
    formData.append("blogs_metakeywords", JSON.stringify(metaKeywordState));
    formData.append("blogs_metadescription", metaDescriptionState);
    formData.append("blogs_image", imgFile);
    formData.append("blogs_content", content);

    const res = await insertBlogs(formData);
    if (res.status === 200) {
      navigate(`${process.env.PUBLIC_URL}/blogs/blogs_list`);
    } else {
      alert("Error");
    }
  };

  const updateAddBlogs = async (id) => {
    const formData = new FormData();
    formData.append("blogs_title", titleState);
    formData.append("blog_category_id", categories);
    formData.append("blogs_metakeywords", JSON.stringify(metaKeywordState));
    formData.append("blogs_metadescription", metaDescriptionState);
    formData.append("blogs_image", imgFile);
    formData.append("blogs_content", content);

    const res = await updateBlogs(id, formData);
    if (res.status === 200) {
      navigate(`${process.env.PUBLIC_URL}/blogs/blogs_list`);
    } else {
      alert("Error occured.");
    }
  };

  const handleChangeStatus = ({ meta, file }, status) => {
    setImageFile(file);
  };
  const populateCategoryData = () => {
    if (location.state) {
      settitleState(location.state.dataObj.blogs_title);
      setCategories(location.state.dataObj.blog_category_id);
      setmetaKeywordState(
        JSON.parse(location.state.dataObj.blogs_metakeywords)
      );
      setmetaDescriptionState(location.state.dataObj.blogs_metadescription);
      setContent(location.state.dataObj.blogs_content);
    }
  };

  const fetchGetCategories = async () => {
    const res = await getBlogCategory(); // API Request
    setGetCategories(res?.data);
  };

  useEffect(() => {
    fetchGetCategories();
    populateCategoryData();
  }, []);
  return (
    <Fragment>
      <Breadcrumbs parent="Blogs" title="Add Blog" mainTitle=" Add Blog" />
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
                        <Label>{"Category"}</Label>
                        <Input
                          type="select"
                          value={categories}
                          onChange={(e) => setCategories(e.target.value)}
                          placeholder="Select a Category "
                          className="form-control"
                          required
                        >
                          <option value={""}>Select Category</option>
                          {getCategories?.map((val, i) => (
                            <option value={val.category_id} key={i}>
                              {val.category_name}
                            </option>
                          ))}
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Label>{"Meta Keywords"}</Label>
                        <TagsInput
                          value={metaKeywordState}
                          onChange={setmetaKeywordState}
                          placeHolder="Enter Keywords"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Label>{"Meta Description"}</Label>
                        <Input
                          onChange={(e) =>
                            setmetaDescriptionState(e.target.value)
                          }
                          value={metaDescriptionState}
                          placeholder="Enter Meta Description"
                          className="form-control"
                          type="text"
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
                      <FormGroup>
                        <Label>{"Description"}</Label>
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
                        {location?.state ? (
                          <Button
                            onClick={() =>
                              updateAddBlogs(location.state.dataObj.blogs_id)
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

export default AddReelBlogs;
