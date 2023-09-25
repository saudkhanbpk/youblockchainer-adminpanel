import React, { Fragment, useState, useEffect } from "react";
import { Breadcrumbs, H5, Image } from "../../../AbstractElements";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";
import { getOrganizations, serverImageUrl } from "../../../api/api";

export const style = {
  width: 40,
  height: 40,
};
export const style2 = { width: 60, fontSize: 14, padding: 4 };

function ReelOrganizations() {
  const navigate = useNavigate();
  const [dataAPI, setDataAPI] = useState([]);

  const populateData = async () => {
    const res = await getOrganizations();
    setDataAPI(res.data);
  };

  useEffect(() => {
    populateData();
  }, []);

  const addDataAPI = dataAPI?.map((elem) => {
    console.log(elem)
    return {
      image: (
        <Image
          attrImage={{
            src: elem.img,
            style: style,
            alt: "Unavailable",
          }}
        />
      ),
      name: elem.name,
      description: elem.description,
    };
  });

  const addColumns = [
    {
      name: "Image",
      selector: (row) => row.image,
      sortable: true,
      center: true,
    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
      center: true,
    },
    {
      name: "Description",
      selector: (row) => row.description,
      sortable: true,
      center: true,
    },
  ];

  return (
    <Fragment>
      <Breadcrumbs parent="Organizations" title="Organization List" mainTitle="Organization" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <div className="table-responsive product-table">
                  <DataTable
                    noHeader
                    pagination
                    paginationServer
                    columns={addColumns}
                    data={addDataAPI}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default ReelOrganizations;
