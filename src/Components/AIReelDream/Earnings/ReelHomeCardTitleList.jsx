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
import { deleteHomeCardTitle, getHomeCardTitle, serverImageUrl } from "../../../api/api";

export const style = { width: 40, height: 40 };
export const style2 = { width: 60, fontSize: 14, padding: 4 };

function ReelHomeCardTitleList() {
  const navigate = useNavigate();
  const [blogListState, setblogListState] = useState([]);

  const getBlogLinks = async () => {
    const res = await getHomeCardTitle();
    setblogListState([...res.data]);
  };

  const deleteBlogElem = async (id) => {
    const res = await deleteHomeCardTitle(id);
    if (res.status === 200) {
      const freshArray = blogListState.filter((val) => val.homecardtitle_id !== id);
      setblogListState(freshArray);
    }
  };

  useEffect(() => {
    getBlogLinks();
  }, []);

  const Add_Blogs_Data = blogListState.map((elem) => {
    return {
      image: (
        <Image
          attrImage={{
            src: serverImageUrl + elem.homecard_img,
            style: style,
            alt: "Unavailable",
          }}
        />
      ),
      Title: `${elem.homecard_title}`,
      action: (
        <div>
          <span>
            <Button
              onClick={() => deleteBlogElem(elem.homecardtitle_id)}
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
                navigate(`${process.env.PUBLIC_URL}/home/add_homecardtitle`, {
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

  const Add_Blogs_Columns = [
    {
      name: "Image",
      selector: (row) => row.image,
      sortable: true,
      center: true,
    },
    {
      name: "Title",
      selector: (row) => row.Title,
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
      <Breadcrumbs parent="Home" title="Home" mainTitle="Home Card Title List" />
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
                    columns={Add_Blogs_Columns}
                    data={Add_Blogs_Data}
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

export default ReelHomeCardTitleList;
