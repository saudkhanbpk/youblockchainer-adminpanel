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
import { getPackages, insertPackages, updatePackages } from '../../../api/api';
import { toast } from 'react-toastify';
import Web3 from 'web3';

function AddReelKnowledge() {
  const navigate = useNavigate();
  const location = useLocation();
  const [name1, setName1] = useState('');
  const [price1, setPrice1] = useState('0');
  const [scripts1, setScripts1] = useState('0');
  const [name2, setName2] = useState('');
  const [price2, setPrice2] = useState('0');
  const [scripts2, setScripts2] = useState('0');
  const [name3, setName3] = useState('');
  const [price3, setPrice3] = useState('0');
  const [scripts3, setScripts3] = useState('0');
  const [name4, setName4] = useState('');
  const [price4, setPrice4] = useState('0');
  const [scripts4, setScripts4] = useState('0');
  const web3 = new Web3();

  const onHandleSubmit = async () => {
    // if (name === "" || amount === "" || options === "") {
    //   toast.error("Please fill in all the required fields!");
    //   return;
    // }
    const dataObj = {
      package1: { name: name1, price: price1, numOfScripts: scripts1 },
      package2: { name: name2, price: price2, numOfScripts: scripts2 },
      package3: { name: name3, price: price3, numOfScripts: scripts3 },
      package4: { name: name4, price: price4, numOfScripts: scripts4 },
    };
    const res = await updatePackages(dataObj);
    if (res.status === 200) {
      // navigate(`${process.env.PUBLIC_URL}/subscription/packages_list`);
      toast.success('Successfully Updated')
    } else {
      alert('Error');
    }
  };

  // const onHandleUpdate = async (id) => {
  //   const dataObj = {
  //     package_name: name,
  //     package_amount: amount,
  //     package_options: options,
  //   };
  //   const res = await updatePackages(id, dataObj);
  //   if (res.status === 200) {
  //     navigate(`${process.env.PUBLIC_URL}/subscription/packages_list`);
  //   } else {
  //     alert("Error occured.");
  //   }
  // };

  // const populateCategoryData = () => {
  //   if (location.state) {
  //     setName(location.state.dataObj.package_name);
  //     setPrice(location.state.dataObj.package_amount);
  //     setScripts(location.state.dataObj.package_options);
  //   }
  // };

  const getPackagesData = async () => {
    const res = await getPackages();
    let packages = res.data;
    setName1(packages[0][0]);
    setPrice1(packages[0][1].hex);
    setScripts1(parseInt(packages[0][2].hex));
    setName2(packages[1][0]);
    setPrice2(packages[1][1].hex);
    setScripts2(parseInt(packages[1][2].hex));
    setName3(packages[2][0]);
    setPrice3(packages[2][1].hex);
    setScripts3(parseInt(packages[2][2].hex));
    setName4(packages[3][0]);
    setPrice4(packages[3][1].hex);
    setScripts4(parseInt(packages[3][2].hex));
  };

  useEffect(() => {
    // populateCategoryData();
    getPackagesData();
  }, []);

  return (
    <Fragment>
      <Breadcrumbs parent='Packages' name='Add Packages' mainTitle='Packages' />
      <Container fluid={true}>
        <Row>
          <Col sm='12'>
            <Card>
              <CardBody>
                <Form>
                  <h4>Package 1</h4>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Label>{'Name'}</Label>
                        <Input
                          onChange={(e) => setName1(e.target.value)}
                          value={name1}
                          type='text'
                          placeholder='Enter name'
                          className='form-control'
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Label>{'Price'}</Label>
                        <Input
                          onChange={(e) => {
                            if (e.target.value.trim() !== '') {
                              setPrice1(web3.utils.toWei(e.target.value));
                            }
                          }}
                          value={web3.utils.fromWei(price1)}
                          type='number'
                          placeholder='Enter amount'
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
                          {'Options(How much time script can be generate)*'}
                        </Label>
                        <Input
                          onChange={(e) => {
                            if (e.target.value.trim() !== '') {
                              setScripts1(e.target.value);
                            }
                          }}
                          value={scripts1}
                          type='number'
                          placeholder='Enter option'
                          className='form-control'
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <h4>Package 2</h4>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Label>{'Name'}</Label>
                        <Input
                          onChange={(e) => setName2(e.target.value)}
                          value={name2}
                          type='text'
                          placeholder='Enter name'
                          className='form-control'
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Label>{'Price'}</Label>
                        <Input
                          onChange={(e) => {
                            if (e.target.value.trim() !== '') {
                              setPrice2(web3.utils.toWei(e.target.value));
                            }
                          }}
                          value={web3.utils.fromWei(price2)}
                          type='number'
                          placeholder='Enter amount'
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
                          {'Options(How much time script can be generate)*'}
                        </Label>
                        <Input
                          onChange={(e) => {
                            if (e.target.value.trim() !== '') {
                              setScripts2(e.target.value);
                            }
                          }}
                          value={scripts2}
                          type='number'
                          placeholder='Enter option'
                          className='form-control'
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <h4>Package 3</h4>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Label>{'Name'}</Label>
                        <Input
                          onChange={(e) => setName3(e.target.value)}
                          value={name3}
                          type='text'
                          placeholder='Enter name'
                          className='form-control'
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Label>{'Price'}</Label>
                        <Input
                          onChange={(e) => {
                            if (e.target.value.trim() !== '') {
                              setPrice3(web3.utils.toWei(e.target.value));
                            }
                          }}
                          value={web3.utils.fromWei(price3)}
                          type='number'
                          placeholder='Enter amount'
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
                          {'Options(How much time script can be generate)*'}
                        </Label>
                        <Input
                          onChange={(e) => {
                            if (e.target.value.trim() !== '') {
                              setScripts3(e.target.value);
                            }
                          }}
                          value={scripts3}
                          type='number'
                          placeholder='Enter option'
                          className='form-control'
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <h4>Package 4</h4>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Label>{'Name'}</Label>
                        <Input
                          onChange={(e) => setName4(e.target.value)}
                          value={name4}
                          type='text'
                          placeholder='Enter name'
                          className='form-control'
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Label>{'Price'}</Label>
                        <Input
                          onChange={(e) => {
                            if (e.target.value.trim() !== '') {
                              setPrice4(web3.utils.toWei(e.target.value));
                            }
                          }}
                          value={web3.utils.fromWei(price4)}
                          type='number'
                          placeholder='Enter amount'
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
                          {'Options(How much time script can be generate)*'}
                        </Label>
                        <Input
                          onChange={(e) => {
                            if (e.target.value.trim() !== '') {
                              setScripts4(e.target.value);
                            }
                          }}
                          value={scripts4}
                          type='number'
                          placeholder='Enter option'
                          className='form-control'
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <FormGroup className='mb-0'>
                        {/* {location.state ? (
                          <Button
                            onClick={() =>
                              onHandleUpdate(location.state.dataObj.package_id)
                            }
                            className="me-3"
                            color="success"
                          >
                            {"Update"}
                          </Button>
                        ) : ( */}
                        <Button
                          onClick={onHandleSubmit}
                          className='me-3'
                          color='success'
                        >
                          {'Update'}
                        </Button>
                        {/* )} */}
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
