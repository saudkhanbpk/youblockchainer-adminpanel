import { Link } from "react-router-dom";
import { Btn, H6, Image } from "../../../AbstractElements";

export const style = {
  width: 40,
  height: 40,
};
export const style2 = { width: 60, fontSize: 14, padding: 4 };
// export const Job_Category_Data = [
//   {
//     Title: (
//       <div>
//         <span>Interchargebla lens Digital</span>
//       </div>
//     ),
//     Category: "Web Developer",
//     Vecancy: "10",
//     SerialNumber: "$10",

//     action: (
//       <div>
//         <span>
//           <Btn
//             attrBtn={{
//               style: style2,
//               className: "btn btn-danger btn-xs",
//               type: "button",
//             }}
//           >
//             Delete
//           </Btn>
//         </span>{" "}
//         {/* &nbsp;&nbsp; */}
//         <span>
//           <Link to={`${process.env.PUBLIC_URL}/hero_section/post_job`}>
//             <Btn
//               attrBtn={{
//                 style: style2,
//                 className: "btn btn-success btn-xs",
//                 type: "button",
//               }}
//             >
//               Edit
//             </Btn>
//           </Link>
//         </span>
//         {" "}
//         {/* &nbsp;&nbsp; */}
//         <span>
//           <Link to={`${process.env.PUBLIC_URL}/hero_section/post_job`}>
//             <Btn
//               attrBtn={{
//                 style: style2,
//                 className: "btn btn-warning btn-xs",
//                 type: "button",
//               }}
//             >
//               View
//             </Btn>
//           </Link>
//         </span>
//       </div>
//     ),
//   },
// ];
export const Job_Category_Columns = [
  {
    name: "Title ",
    selector: (row) => row.Title,
    sortable: true,
    center: true,
    wrap: true,
  },
  {
    name: "Category ",
    selector: (row) => row.Category,
    sortable: true,
    center: true,
    wrap: true,
  },
  {
    name: "Serial Number ",
    selector: (row) => row.SerialNumber,
    sortable: true,
    center: true,
  },
  {
    name: "Vecancy",
    selector: (row) => row.Vecancy,
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
