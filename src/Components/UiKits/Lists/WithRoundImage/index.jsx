import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { Image, LI, UL } from '../../../../AbstractElements';
import { WithImageRounded } from '../../../../Constant';
import HeaderCard from '../../../Common/Component/HeaderCard';

const WithImageRound = () => {
  return (
    <Col sm="12" xl="12">
      <Card>
        <HeaderCard title={WithImageRounded} />
        <CardBody>
          <UL>
            <LI attrLI={{ className: 'list-group-item-action', tag: 'a', href: '#javascript' }}>
              <Image attrImage={{ body: true, className: 'rounded-circle', src: `${require('../../../../assets/images/user/1.jpg')}`, alt: '' }} />
              {'Cras justo odio'}
            </LI>
            <LI attrLI={{ className: 'list-group-item-action', tag: 'a', href: '#javascript' }}>
              <Image attrImage={{ body: true, className: 'rounded-circle', src: `${require('../../../../assets/images/user/1.jpg')}`, alt: '' }} />
              {'Dapibus ac facilisis in'}
            </LI>
            <LI attrLI={{ className: 'list-group-item-action', tag: 'a', href: '#javascript' }}>
              <Image attrImage={{ body: true, className: 'rounded-circle', src: `${require('../../../../assets/images/user/1.jpg')}`, alt: '' }} />
              {'Dapibus ac facilisis in'}
            </LI>
            <LI attrLI={{ className: 'list-group-item-action disabled' }}>
              <Image attrImage={{ body: true, className: 'rounded-circle', src: `${require('../../../../assets/images/user/1.jpg')}`, alt: '' }} />
              {'Dapibus ac facilisis in'}
            </LI>
          </UL>
        </CardBody>
      </Card>
    </Col>
  );
};

export default WithImageRound;
