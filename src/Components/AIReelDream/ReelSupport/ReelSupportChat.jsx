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
import { getSupportChat, updateSupportStatus } from "../../../api/api";
import { toast } from "react-toastify";

export const style = {
  width: 40,
  height: 40,
};
export const style2 = { width: 60, fontSize: 14, padding: 4 };

function ReelSupportChat() {
  const navigate = useNavigate();

  const [dataApi, setDataAPI] = useState([]);

  const getData = async () => {
    const res = await getSupportChat();
    setDataAPI([...res.data]);
  };

  const handleApproveTickets = async (ticketId) => {
    const res = await updateSupportStatus(ticketId);
    if (res.status === 200) {
        getData();
        toast.success(`Ticket Closed`);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const RowsData = dataApi.map((elem) => {
    return {
      Name: elem.ticket_username,
      Email: elem.ticket_email,
      Subject: elem.ticket_subject,
      Description: elem.ticekt_description,
      Status: elem.tickets_status,
      action: (
        <div>
          <span>
            <Button
              onClick={() => handleApproveTickets(elem.tickets_id)}
              className="btn btn-success btn-xs"
              style={style2}
            >
              Close
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
      name: "Email",
      selector: (row) => row.Email,
      sortable: true,
      center: true,
      wrap: true,
    },
    {
      name: "Subject",
      selector: (row) => row.Subject,
      sortable: true,
      center: true,
      wrap: true,
    },
    {
      name: "Description",
      selector: (row) => row.Description,
      sortable: true,
      center: true,
      wrap: true,
    },
    {
      name: "Ticket Status",
      selector: (row) => row.Status,
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
        parent="Support Chat"
        title="Support Chat"
        mainTitle="Support Chat Tickets"
      />
      <Container fluid={true}>
        <Row>
          <Col>
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

export default ReelSupportChat;
