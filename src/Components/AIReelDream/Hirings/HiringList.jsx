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
import { getAllHiringsWithUsers, updateHirings } from "../../../api/api";
import { toast } from 'react-toastify';
import Web3 from "web3";
import { ABI } from "../../../abi/abi";
import axios from "axios";

export const style = {
  width: 40,
  height: 40,
};
export const style2 = { width: 60, fontSize: 14, padding: 4 };

function HiringList() {
  const navigate = useNavigate();

  const [list, setList] = useState([]);
  const [etherPrice, setEtherPrice] = useState(0);

  const getList = async () => {
    const res = await getAllHiringsWithUsers();
    setList([...res.data]);
  };

  useEffect(() => {
    getList();
    getDollarValues();
  }, []);
  function getDollarValues() {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2Cethereum&order=market_cap_desc  &per_page=100&page=1&sparkline=false`
      )
      .then((response) => {
        setEtherPrice(response.data[1].current_price);
      })
      .catch((error) => console.log(error));
  }

  async function releaseFund(hiring_id, price, talent_user_id, talent_user_wallet) {
    // console.log("hiring_id", hiring_id)
    // console.log("totalPrice", totalPrice)
    // const price = (parseFloat(totalPrice) / etherPrice).toFixed(16).toString();
    const web3 = new Web3(window.ethereum);
    await window.ethereum.enable();
    // Get the current account
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    let owner = account;
    // console.log("price", price);
    let weiValue = 0;
    weiValue = Web3.utils.toWei(price, "ether");
    // console.log("weiValue", weiValue);
    // return
    // console.log("smartContractAddress", global.smartContractAddress)
    let contract = new web3.eth.Contract(ABI, global.smartContractAddress);
    // console.log("contract", contract)
    // console.log("ABI", ABI)
    // console.log("talent_user_wallet", talent_user_wallet)
    // console.log("weiValue", weiValue)
    // console.log("talent_user_id", talent_user_id)
    // return
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

  const listData = list.map((elem) => {
    return {
      hiringType: elem.hiring_type,
      hourlyRate: elem.hiring_hourly_rate,
      totalHours: elem.hiring_total_hours,
      totalPrice: elem.hiring_total_price,
      paymentStatus: elem.hiring_status,
      action: (
        <div>
          {/* {elem.hiring_status == "Approved" ?
            <span>
              <Button
                onClick={() => {
                  releaseFund(elem.hiring_id, elem.hiring_total_price_ether, elem.talent_user_id, elem.talent_user_wallet)
                }}
                className="btn btn-success btn-sm"

              >
                Release Fund{" "}
              </Button>
            </span>
            : ""} */}
          <span>
            <Button
              onClick={() => {
                navigate(`${process.env.PUBLIC_URL}/hirings/projects_list_details`, {
                  state: { dataObj: elem },
                });
              }}
              className="btn btn-success btn-sm"

            >
              Project Details{" "}
            </Button>
          </span>
        </div>
      ),
    };
  });
  const listColumns = [
    {
      name: "Hiring Type",
      selector: (row) => row.hiringType,
      sortable: true,
      center: true,
      wrap: true,
    },
    {
      name: "Hourly Rate",
      selector: (row) => row.hourlyRate,
      sortable: true,
      center: true,
      wrap: true,
    },
    {
      name: "Total Hours",
      selector: (row) => row.totalHours,
      sortable: true,
      center: true,
      wrap: true,
    },
    {
      name: "Total Price",
      selector: (row) => row.totalPrice,
      sortable: true,
      center: true,
      wrap: true,
    },
    {
      name: "Payment Status",
      selector: (row) => row.paymentStatus,
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
        mainTitle="Payment Requests"
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

export default HiringList;
