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
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import DataTable from "react-data-table-component";
import { deleteHomeCardItems, getHomeCardItems, getHomeCardTitle } from "../../../api/api";

export const style = {
  width: 40,
  height: 40,
};
export const style2 = { width: 60, fontSize: 14, padding: 4 };

function ReelCategoryList() {
  const navigate = useNavigate();

  const [categoriesList, setCategoriesList] = useState([]);
  const [categories, setCategories] = useState("");
  const [getCategories, setGetCategories] = useState([]);

  const getCategoryList = async () => {
    const res = await getHomeCardItems();
    setCategoriesList([...res.data]);
  };

  const deleteCategoryItem = async (id) => {
    const res = await deleteHomeCardItems(id);
    if (res.status === 200) {
      const freshArray = categoriesList.filter((val) => val.homecarditem_id !== id);
      setCategoriesList(freshArray);
    }
  };

  const fetchGetCategories = async () => {
    const res = await getHomeCardTitle(); // API Request
    setGetCategories(res?.data);
  };

  useEffect(() => {
    getCategoryList();
    fetchGetCategories();
  }, []);

  const Blog_Category_Data = categoriesList
    .filter((elem) => categories === "" || elem.homecardlist_id === parseInt(categories))
    .map((elem) => {
      return {
        Name: elem.homecardlist_text,
        action: (
          <div>
            <span>
              <Button
                onClick={() => deleteCategoryItem(elem.homecarditem_id)}
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
                  navigate(`${process.env.PUBLIC_URL}/home/add_homecarditem`, {
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
      name: "Text",
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
      <Breadcrumbs parent="Home" title="Home" mainTitle="Home Card Item List" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <Row>
                  <Col lg={6}>
                    <FormGroup>
                      <Label>{"Select Card Title"}</Label>
                      <Input
                        type="select"
                        value={categories}
                        onChange={(e) => setCategories(e.target.value)}
                        placeholder="Select Title"
                        className="form-select"
                        required
                      >
                        <option value={""}>All</option>
                        {getCategories?.map((val, i) => (
                          <option value={val.homecardtitle_id} key={i}>
                            {val.homecard_title}
                          </option>
                        ))}
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>
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