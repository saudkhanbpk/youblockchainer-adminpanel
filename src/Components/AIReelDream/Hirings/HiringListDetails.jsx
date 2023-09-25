import React, { Fragment, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
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
import { getHiringsMilestones, updateHirings, updateHiringsMilestones } from "../../../api/api";
import { toast } from 'react-toastify';
import Web3 from "web3";
import { ABI } from "../../../abi/abi";
import axios from "axios";

export const style = {
  width: 40,
  height: 40,
};
export const style2 = { width: 60, fontSize: 14, padding: 4 };

function HiringListDetails() {
  const navigate = useNavigate();
  const location = useLocation();
  const [list, setList] = useState([]);
  const [projectData, setProjectData] = useState(null);

  const getList = async () => {
    console.log(location.state)
    if (location.state) {
      setProjectData(location.state.dataObj)
      const res = await getHiringsMilestones();
      console.log("res", res)
      const filteredData = res.data.filter(item => item.hiring_id == location.state.dataObj.hiring_id)
      console.log("filteredData", filteredData)
      setList([...filteredData]);
    }

  };

  useEffect(() => {
    getList();
  }, []);

  async function releaseFund(hiring_id, price, talent_user_id, talent_user_wallet) {

    const web3 = new Web3(window.ethereum);
    await window.ethereum.enable();
    // Get the current account
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    let owner = account;
    // console.log("price", price);
    let weiValue = 0;
    weiValue = Web3.utils.toWei(price, "ether");
    let contract = new web3.eth.Contract(ABI, global.smartContractAddress);

    contract.methods
      .transferToTalent(talent_user_wallet, weiValue, talent_user_id)
      .send({
        from: owner,
        gas: 2000000,
        gasPrice: web3.utils.toWei('5', 'gwei'),
        value: 0,
      })
      .then(async function (result) {
        console.log(result)
        const formData = {
          hiring_status: "Paid",
        };
        const res = await updateHirings(hiring_id, formData);
        toast.success("Amount is sent to user!");
        getList();
      })
      .catch((error) => console.log(error));

  }
  async function releaseFundMilestone(hiring_milestones_id, hiring_milestones_price_ether, talent_user_id, talent_user_wallet) {

    const web3 = new Web3(window.ethereum);
    await window.ethereum.enable();
    // Get the current account
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    let owner = account;
    // console.log("price", price);
    let weiValue = 0;
    weiValue = Web3.utils.toWei(hiring_milestones_price_ether, "ether");
    let contract = new web3.eth.Contract(ABI, global.smartContractAddress);

    contract.methods
      .transferToTalent(talent_user_wallet, weiValue, talent_user_id)
      .send({
        from: owner,
        gas: 2000000,
        gasPrice: web3.utils.toWei('5', 'gwei'),
        value: 0,
      })
      .then(async function (result) {
        console.log(result)
        const formData = {
          hiring_milestones_status: "Paid",
        };
        const res = await updateHiringsMilestones(hiring_milestones_id, formData);
        toast.success("Amount is sent to user!");
        getList();
      })
      .catch((error) => console.log(error));

  }

  const listDataMilestone = list.map((elem) => {
    return {
      name: elem.hiring_milestones_name,
      price: elem.hiring_milestones_price,
      date: elem.hiring_milestones_date,
      status: elem.hiring_milestones_status,
      action: (
        <div>
          {elem.hiring_milestones_status == "Approved" ?
            <span>
              <Button
                onClick={() => {
                  releaseFundMilestone(elem.hiring_milestones_id, elem.hiring_milestones_price_ether, projectData?.talent_user_id, projectData?.talent_user_wallet)
                }}
                className="btn btn-success btn-sm"

              >
                Release Fund{" "}
              </Button>
            </span>
            : ""}
        </div>
      ),
    };
  });
  const listColumnsMilestone = [
    {
      name: "Milestone Name",
      selector: (row) => row.name,
      sortable: true,
      center: true,
      wrap: true,
    },
    {
      name: "Price",
      selector: (row) => row.price,
      sortable: true,
      center: true,
      wrap: true,
    },
    {
      name: "Date",
      selector: (row) => row.date,
      sortable: true,
      center: true,
      wrap: true,
    },
    {
      name: "Payment Status",
      selector: (row) => row.status,
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
  const listDataHourly = [{
    rate: projectData?.hiring_hourly_rate,
    hours: projectData?.hiring_total_hours,
    price: projectData?.hiring_total_price,
    status: projectData?.hiring_status,
    action: (
      <div>
        {projectData?.hiring_status == "Approved" ?
          <span>
            <Button
              onClick={() => {
                releaseFund(projectData?.hiring_id, projectData?.hiring_total_price_ether, projectData?.talent_user_id, projectData?.talent_user_wallet)
              }}
              className="btn btn-success btn-sm"

            >
              Release Fund{" "}
            </Button>
          </span>
          : ""}
      </div>
    ),
  }];
  const listColumnsHourly = [
    {
      name: "Hourly Rate",
      selector: (row) => row.rate,
      sortable: true,
      center: true,
      wrap: true,
    },
    {
      name: "Hours",
      selector: (row) => row.hours,
      sortable: true,
      center: true,
      wrap: true,
    },
    {
      name: "Total Price",
      selector: (row) => row.price,
      sortable: true,
      center: true,
      wrap: true,
    },
    {
      name: "Payment Status",
      selector: (row) => row.status,
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
        parent="Hirings"
        title="Hirings"
        mainTitle="Project Details"
      />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <div className="table-responsive product-table">
                  {projectData?.hiring_type == "fixed" ?
                    <DataTable
                      noHeader
                      pagination
                      paginationServer
                      columns={listColumnsMilestone}
                      data={listDataMilestone}
                    />
                    :
                    <DataTable
                      noHeader
                      pagination
                      paginationServer
                      columns={listColumnsHourly}
                      data={listDataHourly}
                    />
                  }
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default HiringListDetails;
