import React, { Fragment } from "react";
import { Col, Container, Row } from "reactstrap";
import RegisterFrom from "./RegisterFrom";
import { Image } from '../../../AbstractElements';

const RegisterBgImg = () => {
    return (
        <Fragment>
            <section>
                <Container fluid={true} className="p-0">
                    <Row className='m-0'>
                        <Col xl='5'><Image attrImage={{ className: "bg-img-cover bg-center", src: `${require("../../../assets/images/login/3.jpg")}`, alt: "looginpage" }} /></Col>
                        <Col xl="7 p-0" >
                            <RegisterFrom />
                        </Col>
                    </Row>
                </Container>
            </section>
        </Fragment>
    )
}

export default RegisterBgImg;