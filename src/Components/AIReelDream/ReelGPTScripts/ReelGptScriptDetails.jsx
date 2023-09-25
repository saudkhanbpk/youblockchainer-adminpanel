import React, { Fragment, useEffect, useState } from "react";
import { Card, CardBody, Container } from "reactstrap";
import { Breadcrumbs } from "../../../AbstractElements";
import { getSingleScript } from "../../../api/api";
import { useParams } from "react-router-dom";

const ReelGptScriptDetails = () => {
  const { id } = useParams();
  const [dataApi, setDataAPI] = useState([]);

  const getData = async () => {
    const res = await getSingleScript(id);
    setDataAPI(res?.data);
  };

  useEffect(() => {
    getData();
  }, [id]);
  return (
    <>
      <Fragment>
        <Container fluid={true}>
          <Breadcrumbs
            parent="GPT Script"
            title="GPT Script"
            mainTitle="Script"
          />
          <Card>
            <CardBody>
              <div
                dangerouslySetInnerHTML={{
                  __html: dataApi[0]?.gptscript_text,
                }}
              ></div>
            </CardBody>
          </Card>
        </Container>
      </Fragment>
    </>
  );
};

export default ReelGptScriptDetails;
