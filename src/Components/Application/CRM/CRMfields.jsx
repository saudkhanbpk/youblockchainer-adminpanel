import React, { Fragment ,useState} from "react";
import { Col, FormGroup, Label, Row } from "reactstrap";
import { CrmName, CrmMessage } from "../../../Constant";
import CKEditors from "react-ckeditor-component";
function CRMfields({ register, errors }) {
    const [content, setContent] = useState("content");
    const onChange = (evt) => {
      const newContent = evt.editor.getData();
      setContent(newContent);
    };
  return (
    <Fragment>
      <Row>
        <Col>
          <FormGroup>
            <Label>{CrmName}</Label>
            <input
              className="form-control"
              type="text"
              name="title"
              placeholder="Add heading *"
              {...register("title", { required: true })}
            />
            <span style={{ color: "red" }}>
              {errors.title && "Title is required"}
            </span>
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <FormGroup>
            <Label>{CrmMessage}</Label>
            <CKEditors
              activeclassName="p10"
              content={content}
              events={{
                change: onChange,
              }}
            />
            <span style={{ color: "red" }}>
              {errors.title && "Title is required"}
            </span>
          </FormGroup>
        </Col>
      </Row>
    </Fragment>
  );
}

export default CRMfields;
