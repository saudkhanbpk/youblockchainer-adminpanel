import React, { Fragment } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { AUTH0 } from '../../../Constant';
import { Btn, H4, Image, P } from '../../../AbstractElements';
import authImg from '../../../assets/images/auth-img.svg';

const AuthTab = () => {
    const { loginWithRedirect } = useAuth0();
    return (
        <Fragment>
            <div className="auth-content">
                <Image attrImage={{ src: `${authImg}`, alt: '' }} />
                <H4>{'Welcome to login with Auth0'}</H4>
                <P>{'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy'}</P>
                <Btn attrBtn={{ color: 'info', onClick: loginWithRedirect }} >{AUTH0}</Btn>
            </div>
        </Fragment>
    );
};

export default AuthTab;