import React, { Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Footer, P } from '../../AbstractElements';
import { Link, useLocation } from 'react-router-dom';

const FooterClass = () => {
  const location = useLocation();
  
  return (
    <Fragment>
      <Footer attrFooter={{ className: `footer ${location.pathname === '/page-layout/footer-dark' ? 'footer-dark' : location.pathname === '/page-layout/footer-fixed' ? 'footer-fix' : ''}` }} >
        <Container fluid={true}>
          <Row>
            <Col md="6" className="footer-copyright">
              <P attrPara={{ className: 'mb-0' }} >{'Copyright © 2023, MYREELDREAM. All rights reserved.'}</P>
            </Col>
            {/* <Col md="6">
              <P attrPara={{ className: 'pull-right mb-0' }} >Developed By <Link to={`https://unialsolutions.com/`} target='_blank'>UNIAL</Link> <i className="fa fa-heart font-secondary"></i></P>
            </Col> */}
          </Row>
        </Container>
      </Footer>
    </Fragment>
  );
};

export default FooterClass;