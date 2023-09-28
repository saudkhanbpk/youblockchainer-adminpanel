import React, { Fragment, useState, useEffect } from 'react';
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
} from 'reactstrap';
import { Breadcrumbs } from '../../../AbstractElements';
import { useNavigate, useLocation } from 'react-router-dom';
import Dropzone from 'react-dropzone-uploader';
import 'react-dropzone-uploader/dist/styles.css';
import CKEditors from 'react-ckeditor-component';
import { TagsInput } from 'react-tag-input-component';
import {
  getBlogCategory,
  insertBlogs,
  updateBlogs,
  uploadToIpfs,
} from '../../../api/api';
import { toast } from 'react-toastify';

function AddReelBlogs() {
  const [content, setContent] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const [titleState, settitleState] = useState('');
  const [metaKeywordState, setmetaKeywordState] = useState('');
  const [metaDescriptionState, setmetaDescriptionState] = useState('');
  const [imgFile, setImageFile] = useState('');
  const [categories, setCategories] = useState('');
  const [getCategories, setGetCategories] = useState([]);

  const onChange = (evt) => {
    const newContent = evt.editor.getData();
    setContent(newContent);
  };

  const handleAddBlogs = async () => {
    console.log(titleState, metaDescriptionState, metaKeywordState, imgFile);
    if (
      titleState === '' ||
      metaKeywordState === '' ||
      metaDescriptionState === '' ||
      imgFile === ''
    ) {
      toast.error('Please fill in all the required fields!');
      return;
    }
    const formData = new FormData();
    formData.append('files', imgFile);

    const resp = await uploadToIpfs(formData);
    const data = {
      title: titleState,
      category: categories,
      content,
      metaKeywords: metaKeywordState,
      metaDescription: metaDescriptionState,
      image: resp.data.urls[0],
    };

    const res = await insertBlogs(data);
    if (res.status === 200) {
      navigate(`${process.env.PUBLIC_URL}/blogs/blogs_list`);
    } else {
      alert('Error');
    }
  };

  const updateAddBlogs = async (id) => {
    const formData = new FormData();
    formData.append('files', imgFile);

    const resp = await uploadToIpfs(formData);
    const data = {
      title: titleState,
      category: categories,
      content,
      metaKeywords: metaKeywordState,
      metaDescription: metaDescriptionState,
      image: resp.data.urls[0],
    };

    const res = await updateBlogs(id, data);
    if (res.status === 200) {
      navigate(`${process.env.PUBLIC_URL}/blogs/blogs_list`);
    } else {
      alert('Error occured.');
    }
  };

  const handleChangeStatus = ({ meta, file }, status) => {
    setImageFile(file);
  };
  const populateCategoryData = () => {
    if (location.state) {
      settitleState(location.state.dataObj.title);
      setCategories(location.state.dataObj.category);
      setmetaKeywordState(location.state.dataObj.metaKeywords);
      setmetaDescriptionState(location.state.dataObj.metaDescription);
      setContent(location.state.dataObj.content);
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
      <Breadcrumbs parent='Blogs' title='Add Blog' mainTitle=' Add Blog' />
      <Container fluid={true}>
        <Row>
          <Col sm='12'>
            <Card>
              <CardBody>
                <Form>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Label>{'Title'}</Label>
                        <Input
                          onChange={(e) => settitleState(e.target.value)}
                          className='form-control digits'
                          placeholder='Enter Title'
                          value={titleState}
                          type='text'
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Label>{'Category'}</Label>
                        <Input
                          type='select'
                          value={categories}
                          onChange={(e) => setCategories(e.target.value)}
                          placeholder='Select a Category '
                          className='form-control'
                          required
                        >
                          <option value={''}>Select Category</option>
                          {getCategories?.map((val, i) => (
                            <option value={val._id} key={i}>
                              {val.name}
                            </option>
                          ))}
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Label>{'Meta Keywords'}</Label>
                        <Input
                          value={metaKeywordState}
                          onChange={(e) => setmetaKeywordState(e.target.value)}
                          placeHolder='Enter Keywords'
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Label>{'Meta Description'}</Label>
                        <Input
                          onChange={(e) =>
                            setmetaDescriptionState(e.target.value)
                          }
                          value={metaDescriptionState}
                          placeholder='Enter Meta Description'
                          className='form-control'
                          type='text'
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Label>{'Image'}</Label>
                        <Dropzone
                          onChangeStatus={handleChangeStatus}
                          inputContent='Drop An Image'
                          multiple={false}
                          canCancel={false}
                          maxFiles={1}
                          styles={{
                            dropzone: { width: '100%', minHeight: 50 },
                            dropzoneActive: { borderColor: 'green' },
                          }}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Label>{'Description'}</Label>
                        <CKEditors
                          activeclassName='p10'
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
                      <FormGroup className='mb-0'>
                        {location?.state ? (
                          <Button
                            onClick={() =>
                              updateAddBlogs(location.state.dataObj._id)
                            }
                            className='me-3'
                            color='success'
                          >
                            {'Update'}
                          </Button>
                        ) : (
                          <Button
                            onClick={handleAddBlogs}
                            className='me-3'
                            color='success'
                          >
                            {'Submit'}
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
