import React, { Fragment, useState, useEffect } from 'react';
import { Btn } from '../../../AbstractElements';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { firebase_app, googleProvider, Jwt_token } from '../../../Config/Config';
import man from '../../../assets/images/dashboard/1.png';

const GoogleCus = () => {
    const history = useNavigate();

    const [value, setValue] = useState(
        localStorage.getItem('profileURL' || man)
    );
    const [name, setName] = useState(
        localStorage.getItem('Name')
    );

    useEffect(() => {
        localStorage.setItem('profileURL', value);
        localStorage.setItem('Name', name);
    }, [value, name]);

    const googleAuth = async () => {
        try {
            firebase_app.auth().signInWithPopup(googleProvider).then(function (result) {
                setName(result.user.displayName);
                setValue(result.user.photoURL);
                // localStorage.setItem('token', Jwt_token);
                setTimeout(() => {
                    history(`${process.env.PUBLIC_URL}/dashboard/default`);
                }, 200);

            });
        } catch (error) {
            setTimeout(() => {
                toast.error('Oppss.. The password is invalid or the user does not have a password.');
            }, 200);
        }
    };

    return (
        <Fragment>
            <Btn attrBtn={{ color: 'light', onClick: googleAuth }} >
                <i className="fa fa-google txt-googleplus"></i>
            </Btn>
        </Fragment>
    );
};

export default GoogleCus;