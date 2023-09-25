import React, { Fragment, useState, useEffect } from "react";
import { Breadcrumbs, H5, Image } from "../../../AbstractElements";
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
import { useNavigate } from "react-router-dom";
import { getAllUsers, serverImageUrl } from "../../../api/api";

export const style = {
  width: 40,
  height: 40,
};
export const style2 = { width: 60, fontSize: 14, padding: 4 };

function AntsBenefitsList() {
  const navigate = useNavigate();
  const [dataAPI, setDataAPI] = useState([]);

  const populateData = async () => {
    const res = await getAllUsers();
    setDataAPI([...res.data]);
  };

  useEffect(() => {
    populateData();
  }, []);

  const addDataAPI = dataAPI?.map((elem) => {
    return {
      // userprofile: elem.user_profileimg,
      userprofile: (
        <Image
          attrImage={{
            src: elem.profileImage,
            style: style,
            alt: "Unavailable",
          }}
        />
      ),
      userwalletaddress: elem.walletAddress,
      username: elem.username,
      useremail: elem.email,
      usercountry: elem.country,
      // userskills: elem.user_skills,
      userdescription: elem.descriptorTitle,
      userbio: elem.bio,
      // userfacebook: elem.user_facebook,
      // userinstagram: elem.user_instagram,
      // usertwitter: elem.user_twitter,
      // usertiktok: elem.user_tiktok,
    };
  });

  const addColumns = [
    {
      name: "Profile Image",
      selector: (row) => row.userprofile,
      sortable: true,
      center: true,
    },
    {
      name: "Wallet Address",
      selector: (row) => row.userwalletaddress,
      sortable: true,
      center: true,
    },
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
      name: "Country",
      selector: (row) => row.usercountry,
      sortable: true,
      center: true,
    },
    // {
    //   name: "Facebook",
    //   selector: (row) => row.userfacebook,
    //   sortable: true,
    //   center: true,
    // },
    // {
    //   name: "Instagram",
    //   selector: (row) => row.userinstagram,
    //   sortable: true,
    //   center: true,
    // },
    // {
    //   name: "Twitter",
    //   selector: (row) => row.usertwitter,
    //   sortable: true,
    //   center: true,
    // },
    // {
    //   name: "Tik Tok",
    //   selector: (row) => row.usertiktok,
    //   sortable: true,
    //   center: true,
    // },
    {
      name: "Description",
      selector: (row) => row.userdescription,
      sortable: true,
      center: true,
    },
    {
      name: "Bio",
      selector: (row) => row.userbio,
      sortable: true,
      center: true,
    },
  ];

  return (
    <Fragment>
      <Breadcrumbs
        parent="Users"
        title="Users List"
        mainTitle="Users"
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

export default AntsBenefitsList;
