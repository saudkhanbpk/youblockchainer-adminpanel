import React, { Fragment, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Breadcrumbs, H5 } from "../../../AbstractElements";
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Row,
} from "reactstrap";
import DataTable from "react-data-table-component";
import { deletePackages, getPackages } from "../../../api/api";

export const style = {
  width: 40,
  height: 40,
};
export const style2 = { width: 60, fontSize: 14, padding: 4 };

function ReelPacakgesList() {
  const navigate = useNavigate();

  const [dataApi, setDataAPI] = useState([]);

  const onHandleGetData = async () => {
    const res = await getPackages();
    setDataAPI([...res.data]);
  };

  const onHandleDelete = async (id) => {
    const res = await deletePackages(id);
    if (res.status === 200) {
      const freshArray = dataApi.filter((val) => val.package_id !== id);
      setDataAPI(freshArray);
    }
  };

  useEffect(() => {
    onHandleGetData();
  }, []);

  const RowsData = dataApi.map((elem) => {
    return {
      Name: elem.package_name,
      Amount: elem.package_amount,
      Options: elem.package_options,
      action: (
        <div>
          <span>
            <Button
              onClick={() => onHandleDelete(elem.package_id)}
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
                navigate(`${process.env.PUBLIC_URL}/subscription/add_packages`, {
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
      name: "Amount",
      selector: (row) => row.Amount,
      sortable: true,
      center: true,
      wrap: true,
    },
    {
      name: "Options",
      selector: (row) => row.Options,
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
        parent="Pacakges"
        title="Pacakges List"
        mainTitle="Pacakges List"
      />
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

export default ReelPacakgesList;
