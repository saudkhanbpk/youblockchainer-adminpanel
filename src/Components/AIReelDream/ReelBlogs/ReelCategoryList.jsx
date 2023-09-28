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
import { deleteBlogCategory, getBlogCategory } from "../../../api/api";
export const style = {
  width: 40,
  height: 40,
};
export const style2 = { width: 60, fontSize: 14, padding: 4 };

function ReelCategoryList() {
  const navigate = useNavigate();

  const [categoriesList, setcategoriesList] = useState([]);

  const getCategoryList = async () => {
    const res = await getBlogCategory();
    setcategoriesList([...res.data]);
  };

  const deleteCategoryItem = async (id) => {
    const res = await deleteBlogCategory(id);
    if (res.status === 200) {
      const freshArray = categoriesList.filter((val) => val._id !== id);
      setcategoriesList(freshArray);
    }
  };

  useEffect(() => {
    getCategoryList();
  }, []);

  const Blog_Category_Data = categoriesList.map((elem) => {
    return {
      Name: elem.name,
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
                navigate(`${process.env.PUBLIC_URL}/blogs/add_category`, {
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
  const Blog_Category_Columns = [
    {
      name: "Name",
      selector: (row) => row.Name,
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
        parent="Blogs"
        title="Categories List"
        mainTitle="Categories List"
      />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader className="pb-0">
                <H5>{"Categories List"}</H5>
              </CardHeader>
              <CardBody>
                <div className="table-responsive product-table">
                  <DataTable
                    noHeader
                    pagination
                    paginationServer
                    columns={Blog_Category_Columns}
                    data={Blog_Category_Data}
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

export default ReelCategoryList;
