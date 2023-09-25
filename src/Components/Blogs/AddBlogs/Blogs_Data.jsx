export const style = {
  width: 40,
  height: 40,
};
export const style2 = { width: 60, fontSize: 14, padding: 4 };
export const Add_Blogs_Columns = [
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
    name: "Category",
    selector: (row) => row.Category,
    sortable: true,
    center: true,
  },
  {
    name: "Serial Number",
    selector: (row) => row.Serialnumber,
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
