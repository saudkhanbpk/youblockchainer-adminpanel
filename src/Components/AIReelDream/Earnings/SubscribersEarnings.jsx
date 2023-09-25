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
import { getSubscribersEarnings } from "../../../api/api";
import { toast } from 'react-toastify';
import Web3 from "web3";
import { ABI } from "../../../abi/abi";
import axios from "axios";

export const style = {
  width: 40,
  height: 40,
};
export const style2 = { width: 60, fontSize: 14, padding: 4 };

function SubscribersEarnings() {
  const navigate = useNavigate();

  const [list, setList] = useState([]);
  const [etherPrice, setEtherPrice] = useState(0);

  const getList = async () => {
    const res = await getSubscribersEarnings();
    setList([...res.data]);
  };

  useEffect(() => {
    getList();
  }, []);


  const listData = list.map((elem) => {
    return {
      packageName: elem.package_name,
      packageAmount: elem.package_amount+" USD",
      subscriberName: elem.user_name,
      
    };
  });
  const listColumns = [
    {
      name: "Package Name",
      selector: (row) => row.packageName,
      sortable: true,
      center: true,
      wrap: true,
    },
    {
      name: "Package Amount",
      selector: (row) => row.packageAmount,
      sortable: true,
      center: true,
      wrap: true,
    },
    {
      name: "Subscriber Name",
      selector: (row) => row.subscriberName,
      sortable: true,
      center: true,
      wrap: true,
    },
  ];

  return (
    <Fragment>
      <Breadcrumbs
        parent="Earnings"
        title="Earnings"
        mainTitle="Subscribers Earnings"
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
                    columns={listColumns}
                    data={listData}
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

export default SubscribersEarnings;
