import React, { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { H6, P } from '../../../AbstractElements';

const SocialAuth = ({ linktext, text, link }) => {
  const navigate = useNavigate();
    return (
        <Fragment>
            <P attrPara={{ className: 'mt-4 mb-0' }}>{text}<span onClick={()=> navigate(`${link}`)} className="ms-2" style={{color: '#26695c', cursor: 'pointer'}}>{linktext}</span></P>
        </Fragment>
    );
};

export default SocialAuth;