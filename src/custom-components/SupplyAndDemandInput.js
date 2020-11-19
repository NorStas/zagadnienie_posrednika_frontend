import React from "react";
import {Form} from "react-bootstrap";
import Col from "react-bootstrap/Col";

const SupplyAndDemandInput = (props) => {
    const {onClick} = props;
    const INPUT_PLACEHOLDER = "Value";

    return (
        <Form>
            <Form.Label style={{fontSize: '30px', color: 'black'}}>Suppliers</Form.Label>
            <Form.Row>
                <Form.Group as={Col} controlId="supplier1">
                    <Form.Label>Supplier 1 </Form.Label>
                    <Form.Control placeHolder={INPUT_PLACEHOLDER}/>
                </Form.Group>
                <Form.Group as={Col} controlId="supplier2">
                    <Form.Label>Supplier 2 </Form.Label>
                    <Form.Control placeHolder={INPUT_PLACEHOLDER}/>
                </Form.Group>
            </Form.Row>
            <Form.Label style={{fontSize: '30px', color: 'black'}}>Recipients</Form.Label>
            <Form.Row>
                <Form.Group as={Col} controlId="recipient1">
                    <Form.Label>Recipient 1 </Form.Label>
                    <Form.Control placeHolder={INPUT_PLACEHOLDER}/>
                </Form.Group>
                <Form.Group as={Col} controlId="recipient2">
                    <Form.Label>Recipient 2 </Form.Label>
                    <Form.Control placeHolder={INPUT_PLACEHOLDER}/>
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} controlId="recipient3">
                    <Form.Label>Recipient 3 </Form.Label>
                    <Form.Control placeHolder={INPUT_PLACEHOLDER}/>
                </Form.Group>
                <Form.Group as={Col} controlId="recipient4">
                    <Form.Label>Recipient 4 </Form.Label>
                    <Form.Control placeHolder={INPUT_PLACEHOLDER}/>
                </Form.Group>
            </Form.Row>
        </Form>
    )};

export default SupplyAndDemandInput;
