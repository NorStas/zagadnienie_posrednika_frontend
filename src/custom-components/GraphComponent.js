import React from "react";
import {Form} from "react-bootstrap";
import Col from "react-bootstrap/Col";

export default class GraphComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props);
        const {cost, paths} = this.props;
        return (
            <div style={{marginBottom: '20px'}}>
                <p style={{fontSize: '30px', color: 'black'}}> Result</p>
                <p style={{fontSize: '30px', color: 'black'}}> Cost: {cost}</p>
                <div>
                    <Form>
                        <Form.Row>
                            <Col>
                            </Col>
                            <Col>
                                <Form.Label>Recipient 1 </Form.Label>
                            </Col>
                            <Col>
                                <Form.Label>Recipient 2 </Form.Label>

                            </Col>
                        </Form.Row>
                        <Form.Row>
                            <Col>
                                <Form.Label>Supplier 1</Form.Label>
                            </Col>
                            <Col>
                                <Form.Control type='text' readOnly defaultValue={paths[0]}/>
                            </Col>
                            <Col>
                                <Form.Control type='text' readOnly defaultValue={paths[1]}/>

                            </Col>
                        </Form.Row>
                        <Form.Row>
                            <Col>
                                <Form.Label>Supplier 2</Form.Label>
                            </Col>
                            <Col>
                            <Form.Control type='text' readOnly defaultValue={paths[2]}/>
                            </Col>
                            <Col>
                            <Form.Control type='text' readOnly defaultValue={paths[3]}/>
                            </Col>
                        </Form.Row>
                        <Form.Row>
                            <Col>
                                <Form.Label>Supplier 3</Form.Label>
                            </Col>

                            <Col>
                                <Form.Control type='text' readOnly defaultValue={paths[4]}/>

                            </Col>
                            <Col>
                                <Form.Control type='text' readOnly defaultValue={paths[5]}/>

                            </Col>
                        </Form.Row>
                        <Form.Row>
                            <Col>
                                <Form.Label>Supplier 4</Form.Label>
                            </Col>
                            <Col>
                                <Form.Control type='text' readOnly defaultValue={paths[6]}/>

                            </Col>
                            <Col>
                                <Form.Control type='text' readOnly defaultValue={paths[7]}/>

                            </Col>
                        </Form.Row>
                    </Form>
                </div>
            </div>
        )
    }
};
