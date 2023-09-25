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
} from "reactstrap";
import { Breadcrumbs } from "../../../AbstractElements";
import Dropzone from "react-dropzone-uploader";
import "react-dropzone-uploader/dist/styles.css";
import { getOnBoardMetamaskVideo, updateOnBoardMetamaskVideo } from "../../../api/api";
import { toast } from "react-toastify";

const ReelMetamask = () => {
  const [imgFile, setImageFile] = useState("");
  const [idState, setIdState] = useState([]);

  useEffect(() => {
    getOnBoardMetamaskVideo()
      .then((res) => {
        setImageFile(res?.data[0]?.metamask_video);
        setIdState(res?.data[0]?.onboarding_id);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const updateData = async (e) => {
    e.preventDefault();
    if(imgFile === "") {
      toast.error("Please fill in all the required fields!");
      return;
    }
    const formData = new FormData();
    formData.append("metamask_video", imgFile);

    await updateOnBoardMetamaskVideo(idState, formData);
    alert(`Updated!`);
  };
  const handleChangeStatus = ({ meta, file }, status) => {
    setImageFile(file);
  };
  return (
    <>
      <Fragment>
        <Breadcrumbs
          parent="On Boarding"
          title="On Boarding"
          mainTitle="Meta Mask Proceeding"
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
                          <Dropzone
                            onChangeStatus={handleChangeStatus}
                            inputContent="Drop A Video"
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

export default ReelMetamask;
