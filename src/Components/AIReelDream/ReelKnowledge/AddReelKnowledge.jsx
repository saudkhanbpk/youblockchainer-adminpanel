import React, { Fragment, useEffect, useState } from 'react';
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
} from 'reactstrap';
import { Breadcrumbs } from '../../../AbstractElements';
import { useNavigate, useLocation } from 'react-router-dom';
import { insertKnowledge, updateKnowledge } from '../../../api/api';
import { toast } from 'react-toastify';

function AddReelKnowledge() {
  const navigate = useNavigate();
  const location = useLocation();
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');

  const saveCategory = async () => {
    if (!title) {
      toast.error('Please fill all the required fields.');
      return;
    }
    if (!link) {
      toast.error('Please fill all the required fields.');
      return;
    }
    // const dataObj = {
    //   knowledge_title: title,
    //   knowledge_link: link
    // };
    const res = await insertKnowledge({ title, link });
    if (res.status === 200) {
      navigate(`${process.env.PUBLIC_URL}/knowledge/knowledge_list`);
    } else {
      alert('Error');
    }
  };

  const updateUsefulLinkfunc = async (id) => {
    // const dataObj = {
    //   knowledge_title: title,
    //   knowledge_link: link,
    // };
    const res = await updateKnowledge(id, { title, link });
    if (res.status === 200) {
      navigate(`${process.env.PUBLIC_URL}/knowledge/knowledge_list`);
    } else {
      alert('Error occured.');
    }
  };

  const populateCategoryData = () => {
    if (location.state) {
      setTitle(location.state.dataObj.title);
      setLink(location.state.dataObj.link);
    }
  };

  useEffect(() => {
    populateCategoryData();
  }, []);

  return (
    <Fragment>
      <Breadcrumbs
        parent='knowledge'
        title='Add knowledge'
        mainTitle='Add knowledge'
      />
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
                          onChange={(e) => setTitle(e.target.value)}
                          value={title}
                          type='text'
                          placeholder='Enter Title'
                          className='form-control'
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Label>{'Link'}</Label>
                        <Input
                          onChange={(e) => setLink(e.target.value)}
                          value={link}
                          type='text'
                          placeholder='Enter Link'
                          className='form-control'
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup className='mb-0'>
                        {location.state ? (
                          <Button
                            onClick={() =>
                              updateUsefulLinkfunc(
                                location.state.dataObj._id
                              )
                            }
                            className='me-3'
                            color='success'
                          >
                            {'Update'}
                          </Button>
                        ) : (
                          <Button
                            onClick={saveCategory}
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

export default AddReelKnowledge;
