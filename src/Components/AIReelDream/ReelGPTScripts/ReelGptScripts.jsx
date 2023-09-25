import React, { Fragment, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Breadcrumbs, H5 } from "../../../AbstractElements";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Row,
} from "reactstrap";
import DataTable from "react-data-table-component";
import { getAllUsers } from "../../../api/api";

export const style = {
  width: 40,
  height: 40,
};
export const style2 = { width: 60, fontSize: 14, padding: 4 };

function ReelGptScripts() {
  const navigate = useNavigate();

  const [dataApi, setDataAPI] = useState([]);

  const getData = async () => {
    const res = await getAllUsers();
    setDataAPI([...res.data]);
  };

  useEffect(() => {
    getData();
  }, []);
  const addDataAPI = dataApi?.map((elem) => {
    return {
      username: elem.user_name,
      useremail: elem.user_email,
      action: (
        <div>
          <span>
            <Button
              onClick={() => {
                navigate(`${process.env.PUBLIC_URL}/scripts/${elem?.user_id}`);
              }}
              className="btn btn-success btn-xs"
              style={style2}
            >
              View{" "}
            </Button>
          </span>
        </div>
      ),
    };
  });

  const addColumns = [
    {
      name: "Username",
      selector: (row) => row.username,
      sortable: true,
      center: true,
    },
    {
      name: "Email",
      selector: (row) => row.useremail,
      sortable: true,
      center: true,
    },
    {
      name: "Action",
      selector: (row) => row.action,
      sortable: true,
      center: true,
    },
  ];

  return (
    <Fragment>
      <Breadcrumbs
        parent="GPT Users Script"
        title="GPT Users Script"
        mainTitle="Uers"
      />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader className="pb-0">
                <H5>{"Users List"}</H5>
              </CardHeader>
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

export default ReelGptScripts;
