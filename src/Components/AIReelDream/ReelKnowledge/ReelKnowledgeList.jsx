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
import { deleteKnowledge, getKnowledge } from "../../../api/api";

export const style = {
  width: 40,
  height: 40,
};
export const style2 = { width: 60, fontSize: 14, padding: 4 };

function ReelKnowledgeList() {
  const navigate = useNavigate();

  const [dataApi, setDataAPI] = useState([]);

  const getData = async () => {
    const res = await getKnowledge();
    setDataAPI([...res.data]);
  };

  const deleteCategoryItem = async (id) => {
    const res = await deleteKnowledge(id);
    if (res.status === 200) {
      const freshArray = dataApi.filter((val) => val._id !== id);
      setDataAPI(freshArray);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const RowsData = dataApi.map((elem) => {
    return {
      Name: elem.title,
      Link: elem.link,
      action: (
        <div>
          <span>
            <Button
              onClick={() => deleteCategoryItem(elem._id)}
              className="btn btn-danger btn-xs"
              style={style2}
            >
              Delete
            </Button>
          </span>{" "}
          &nbsp;&nbsp;
          <span>
            <Button
              onClick={() => {
                navigate(`${process.env.PUBLIC_URL}/knowledge/add_knowledge`, {
                  state: { dataObj: elem },
                });
              }}
              className="btn btn-success btn-xs"
              style={style2}
            >
              Edit{" "}
            </Button>
          </span>
        </div>
      ),
    };
  });
  const ColumnsData = [
    {
      name: "Name",
      selector: (row) => row.Name,
      sortable: true,
      center: true,
      wrap: true,
    },
    {
      name: "Link",
      selector: (row) => row.Link,
      sortable: true,
      center: true,
      wrap: true,
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
        parent="Knowledge"
        title="knowledge List"
        mainTitle="knowledge List"
      />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader className="pb-0">
                <H5>{"knowledge List"}</H5>
              </CardHeader>
              <CardBody>
                <div className="table-responsive product-table">
                  <DataTable
                    noHeader
                    pagination
                    paginationServer
                    columns={ColumnsData}
                    data={RowsData}
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

export default ReelKnowledgeList;
