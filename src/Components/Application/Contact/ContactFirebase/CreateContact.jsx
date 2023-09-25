import React, { Fragment, useState } from 'react';
import { Users } from 'react-feather';
import { Row, Col, Modal, ModalHeader, ModalBody, Label, Input, FormGroup, Form } from 'reactstrap';
import { NewContacts, AddContacts, Name, Age, Mobile, Save, Cancel } from '../../../../Constant';
import { useForm } from 'react-hook-form';
import { createUser } from '../../../../Services/Contact.service';
import defaultuser from '../../../../assets/images/user/user.png';
import { Btn, Image } from '../../../../AbstractElements';

const CreateContact = ({ empty }) => {
    const [modal, setModal] = useState(false);
    const [addurl, setAddurl] = useState(defaultuser);
    const toggle = () => setModal(!modal);
    const { register, handleSubmit, formState: { errors } } = useForm(); // initialise the hook

    const AddContact = data => {
        if (data !== '') {
            createUser(data, addurl);
            setModal(false);
        } else {
            errors.showMessages();
        }
    };

    const HandleAddUrl = (event) => {
        if (event.target.files.length === 0)
            return;
        //Image upload validation
        var mimeType = event.target.files[0].type;

        if (mimeType.match(/image\/*/) == null) {
            return;
        }
        // Image upload
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = (_event) => {
            setAddurl(reader.result);
        };
    };

    return (
        <Fragment>
            <Btn attrBtn={{ className: `badge-light btn-block btn-mail w-100 ${empty ? '' : 'emptyContact'}`, color: 'primery', onClick: toggle }} >
                <Users className="me-2" />
                {NewContacts}
            </Btn>
            <Modal isOpen={modal} toggle={toggle} size="lg">
                <ModalHeader toggle={toggle}>{AddContacts}</ModalHeader>
                <ModalBody>
                    <Form className="form-bookmark needs-validation" onSubmit={handleSubmit(AddContact)}>
                        <div className="form-row">
                            <div className="contact-profile">
                                <Image attrImage={{ className: 'rounded-circle img-100', src: `${addurl}`, alt: '' }} />
                                <div className="icon-wrapper">
                                    <i className="icofont icofont-pencil-alt-5">
                                        <Input className="upload" type="file" onChange={(e) => HandleAddUrl(e)} />
                                    </i>
                                </div>
                            </div>
                            <FormGroup className="col-md-12">
                                <Label>{Name}</Label>
                                <Row>
                                    <Col sm="6">
                                        <input className="form-control" name="name" type="text" {...register('name', { required: true })} />
                                        <span style={{ color: 'red' }}>{errors.name && 'First name is required'}</span>
                                    </Col>
                                    <Col sm="6">
                                        <input className="form-control" name="surname" type="text" {...register('surname', { required: true })} />
                                        <span style={{ color: 'red' }}>{errors.surname && 'Last name is required'}</span>
                                    </Col>
                                </Row>
                            </FormGroup>
                            <FormGroup className="col-md-12">
                                <Label>{Age}</Label>
                                <input className="form-control" name="age" type="number" {...register('age', { required: true, pattern: /\d+/, min: 18, max: 70 })} />
                                <span style={{ color: 'red' }}>{errors.age && 'Please enter age between 18 to 70 year.'}</span>
                            </FormGroup>
                            <FormGroup className="col-md-12">
                                <Label>{Mobile}</Label>
                                <input className="form-control" name="mobile" type="number" {...register('mobile', { pattern: /\d+/, minlength: 0, maxlength: 9 })} />
                                <span style={{ color: 'red' }}>{errors.mobile && 'Please enter number max 9 digit'}</span>
                            </FormGroup>
                        </div>
                        <Btn attrBtn={{ color: 'secondary', className: 'me-2' }} >{Save}</Btn>
                        <Btn attrBtn={{ color: 'primary', onClick: toggle }} >{Cancel}</Btn>
                    </Form>
                </ModalBody>
            </Modal>
        </Fragment>
    );
};

export default CreateContact;