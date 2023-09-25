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
import {
  getHomeCardList,
  getHomeCardTitle,
  insertHomeCardItems,
  updateHomeCardItems,
  updateHomeCardList,
} from '../../../api/api';
import { toast } from 'react-toastify';

const arrayToString = (arr) => arr.join(',');
const stringToArray = (str) => str.split(',').map((item) => item.trim());

function ReelHomeCardsItems() {
  const navigate = useNavigate();
  const location = useLocation();
  const [categories, setCategories] = useState('');
  const [getCategories, setGetCategories] = useState([]);

  const [namecat, setName] = useState('');
  const [ideation, setIdea] = useState('');
  const [pre, setPre] = useState('');
  const [post, setPost] = useState('');

  const saveCategory = async () => {
    if (!namecat) {
      toast.error('Please fill all the required fields.');
      return;
    }
    const dataObj = {
      homecardlist_text: namecat,
      homecardlist_id: categories,
    };
    const res = await insertHomeCardItems(dataObj);
    if (res.status === 200) {
      navigate(`${process.env.PUBLIC_URL}/home/homecarditem_list`);
    } else {
      alert('Error');
    }
  };

  const updateUsefulLinkfunc = async (id) => {
    const dataObj = {
      homecardlist_text: namecat,
      homecardlist_id: categories,
    };
    const res = await updateHomeCardItems(id, dataObj);
    if (res.status === 200) {
      navigate(`${process.env.PUBLIC_URL}/home/homecarditem_list`);
    } else {
      alert('Error occured.');
    }
  };

  const populateCategoryData = () => {
    if (location.state) {
      setName(location.state.dataObj.homecardlist_text);
    }
  };

  const fetchGetCategories = async () => {
    const res = await getHomeCardTitle(); // API Request
    setGetCategories(res?.data);
  };

  const fetchHomeList = async () => {
    const res = await getHomeCardList(); // API Request
    if (res && res.data && res.data.ideation) {
      const { ideation, pre, post } = res.data;
      setIdea(arrayToString(ideation));
      setPre(arrayToString(pre));
      setPost(arrayToString(post));
    }
  };

  const handleUpdate = async () => {
    const res = await updateHomeCardList({
      ideation: stringToArray(ideation),
      pre: stringToArray(pre),
      post: stringToArray(post),
    }); // API Request
    toast.success('Successfully Updated')
  };

  useEffect(() => {
    fetchHomeList();
    // fetchGetCategories();
    // populateCategoryData();
  }, []);

  return (
    <Fragment>
      <Breadcrumbs parent='Home' title='Home' mainTitle='Home Card Items' />
      <Container fluid={true}>
        <Row>
          <Col sm='12'>
            <Card>
              <CardBody>
                <Form>
                  {/* <Row>
                    <Col>
                      <FormGroup>
                        <Label>{"Select Card Title"}</Label>
                        <Input
                          type="select"
                          value={categories}
                          onChange={(e) => setCategories(e.target.value)}
                          placeholder="Select Title"
                          className="form-control"
                          required
                        >
                          <option value={""}>Select Title</option>
                          {getCategories?.map((val, i) => (
                            <option value={val.homecardtitle_id} key={i}>
                              {val.homecard_title}
                            </option>
                          ))}
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row> */}
                  <Row>
                    <Col>
                      <FormGroup>
                        <Label>{'Idetaion (Comma separated)'}</Label>
                        <Input
                          onChange={(e) => setIdea(e.target.value)}
                          value={ideation}
                          type='text'
                          placeholder='Enter Text'
                          className='form-control'
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Label>{'Pre-Production (Comma separated)'}</Label>
                        <Input
                          onChange={(e) => setPre(e.target.value)}
                          value={pre}
                          type='text'
                          placeholder='Enter Text'
                          className='form-control'
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Label>
                          {'Post-Production & Distribution (Comma separated)'}
                        </Label>
                        <Input
                          onChange={(e) => setPost(e.target.value)}
                          value={post}
                          type='text'
                          placeholder='Enter Text'
                          className='form-control'
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup className='mb-0'>
                        {/* {location.state ? ( */}
                        <Button
                          onClick={() => handleUpdate()}
                          className='me-3'
                          color='success'
                        >
                          {'Update'}
                        </Button>
                        {/* ) : (
                          <Button
                            onClick={saveCategory}
                            className="me-3"
                            color="success"
                          >
                            {"Submit"}
                          </Button>
                        )} */}
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

export default ReelHomeCardsItems;
