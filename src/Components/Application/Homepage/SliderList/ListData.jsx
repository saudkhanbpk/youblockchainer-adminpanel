import { Link } from "react-router-dom";
import { Btn, H6, Image } from "../../../../AbstractElements";
import product1 from "../../../../assets/images/ecommerce/product-table-1.png";

const style = {
  width: 40,
  height: 40,
};
const style2 = { width: 60, fontSize: 14, padding: 4 };
export const sliderData = [
  {
    image: <Image attrImage={{ src: product1, style: style, alt: "" }} />,
    Details: (
      <div>
        <H6>Red Lipstick</H6>
        <span>
          Interchargebla lens Digital Camera with APS-C-X Trans CMOS Sens
        </span>
      </div>
    ),
    amount: "$10",
    stock: <div className="font-success">In Stock</div>,
    start_date: "2011/4/19",
    action: (
      <div>
        <span>
          <Btn
            attrBtn={{
              style: style2,
              className: "btn btn-danger btn-xs",
              type: "button",
            }}
          >
            Delete
          </Btn>
        </span>{" "}
        &nbsp;&nbsp;
        <span>
          <Link to={"/dashboard/slider"}>
            <Btn
              attrBtn={{
                style: style2,
                className: "btn btn-success btn-xs",
                type: "button",
              }}
            >
              Edit{" "}
            </Btn>
          </Link>
        </span>
      </div>
    ),
  },
];
export const sliderColumns = [
  {
    name: "Image",
    selector: (row) => row.image,
    sortable: true,
    center: true,
  },
  {
    name: "Details",
    selector: (row) => row.Details,
    sortable: true,
    center: true,
    wrap: true,
  },
  {
    name: "Amount",
    selector: (row) => row.amount,
    sortable: true,
    center: true,
  },
  {
    name: "Stock",
    selector: (row) => row.stock,
    sortable: true,
    center: true,
  },
  {
    name: "Start_date",
    selector: (row) => row.start_date,
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
