import React from 'react';
import { Button, Modal } from 'react-bootstrap';

function Example(props) {
    return (
        <Modal show={props.show} onHide={props.close}>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">Logout</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Are you sure to Logout?</h4>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.close}>Cancel</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default Example;