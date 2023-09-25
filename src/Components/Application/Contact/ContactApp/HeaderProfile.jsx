import React, { Fragment } from 'react';
import { MARKJENCO, MARKJENCOEMAIL } from '../../../../Constant';
import { H6, Image, P } from '../../../../AbstractElements';
import { Link } from 'react-router-dom';

const HeaderProfile = () => {
    return (
        <Fragment>
            <div className="media align-items-center">
                <div className="media-size-email">
                    <Image attrImage={{ className: 'me-3 rounded-circle', src: `${require('../../../../assets/images/user/user.png')}`, alt: '' }} /></div>
                <div className="media-body">
                <Link to={`${process.env.PUBLIC_URL}/app/users/userprofile`}>
                    <H6 attrH6={{ className: 'f-w-600' }} >{MARKJENCO}</H6>
                </Link>
                    <P>{MARKJENCOEMAIL}</P>
                </div>
            </div>
        </Fragment>
    );
};

export default HeaderProfile;