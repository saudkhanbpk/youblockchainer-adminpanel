import React, { Fragment, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getGPTScript } from "../../../api/api";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import { Breadcrumbs, H5 } from "../../../AbstractElements";
import { truncate } from "lodash";

const ReelGptScritpView = () => {
  const { id } = useParams();
  const [dataApi, setDataAPI] = useState([]);

  const getData = async () => {
    const res = await getGPTScript(id);
    setDataAPI(res?.data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Fragment>
        <Container fluid={true}>
          <Breadcrumbs
            parent="GPT Script"
            title="GPT Script"
            mainTitle="Scripts"
          />
          <Row>
          {dataApi?.length > 0 ? (
            dataApi?.map((d, i) => (
              <Col lg={4} md={6} sm={12} key={i}>
              <Card>
                <CardBody>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: truncate(d?.gptscript_text, { length: 30 }),
                    }}
                  ></div>
                  <Link
                    // to={`/dashboard/script/${d?.gptscript_id}`}
                    to={`${process.env.PUBLIC_URL}/gptscript/${d?.gptscript_id}`}
                    className="btn btn-outline-primary btn-sm mt-3"
                  >
                    Read More
                  </Link>
                </CardBody>
              </Card>
              </Col>
            ))
          ) : (
            <CardHeader>
              <H5>No Script Available Of That User</H5>
            </CardHeader>
          )}
          </Row>
        </Container>
      </Fragment>
    </>
  );
};

export default ReelGptScritpView;
