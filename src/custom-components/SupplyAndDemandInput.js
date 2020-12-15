import React from "react";
import {Form} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export default class SupplyAndDemandInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            supplier1: "",
            supplier2: "",
            recipient1: "",
            recipient2: "",
            supplier3: "",
            supplier4: "",
            sup1rec1cost: "",
            sup1rec2cost: "",
            sup2rec1cost: "",
            sup2rec2cost: "",
            sup3rec1cost: "",
            sup3rec2cost: "",
            sup4rec1cost: "",
            sup4rec2cost: ""
        }
    }

    INPUT_PLACEHOLDER = "Value";
    COST_PLACEHOLDER = "cost";


    render() {
        return (
            <Form>
                <Form.Row>
                    <Col>
                    </Col>
                    <Col>
                    </Col>
                    <Col>
                        <Form.Label>Recipient 1 </Form.Label>
                        <Form.Control placeholder={this.INPUT_PLACEHOLDER} onChange={event =>
                            this.setState({recipient1: event.target.value})}/>
                    </Col>
                    <Col>
                        <Form.Label>Recipient 2 </Form.Label>
                        <Form.Control placeholder={this.INPUT_PLACEHOLDER} onChange={event =>
                            this.setState({recipient2: event.target.value})}/>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col>
                        <Form.Label>Supplier 1</Form.Label>
                    </Col>
                    <Col style={{width: '20%'}}>
                        <Form.Control type='text' placeholder={this.INPUT_PLACEHOLDER} onChange={event =>
                            this.setState({supplier1: event.target.value})}/>
                    </Col>
                    <Col>
                        <Form.Control type='text' placeholder={this.COST_PLACEHOLDER} onChange={event =>
                            this.setState({sup1rec1cost: event.target.value})}/>
                    </Col>
                    <Col>
                        <Form.Control type='text' placeholder={this.COST_PLACEHOLDER} onChange={event =>
                            this.setState({supp1rec2cost: event.target.value})}/>
                    </Col>
                </Form.Row>
            <Form.Row>
                <Col>
                    <Form.Label>Supplier 2</Form.Label>
                </Col>
                    <Col style={{width: '20%'}}>
                        <Form.Control placeholder={this.INPUT_PLACEHOLDER} onChange={event =>
                            this.setState({supplier2: event.target.value})}/>
                    </Col>
                <Col>
                    <Form.Control type='text' placeholder={this.COST_PLACEHOLDER} onChange={event =>
                        this.setState({supp2rec1cost: event.target.value})}/>
                </Col>
                <Col>
                    <Form.Control type='text' placeholder={this.COST_PLACEHOLDER} onChange={event =>
                        this.setState({supp2rec2cost: event.target.value})}/>
                </Col>
                </Form.Row>
                <Form.Row>
                    <Col>
                        <Form.Label>Supplier 3</Form.Label>
                    </Col>
                    <Col style={{width: '20%'}}>
                        <Form.Control placeholder={this.INPUT_PLACEHOLDER} onChange={event =>
                            this.setState({supplier3: event.target.value})}/>
                    </Col>
                    <Col>
                        <Form.Control type='text' placeholder={this.COST_PLACEHOLDER} onChange={event =>
                            this.setState({supp3rec1cost: event.target.value})}/>
                    </Col>
                    <Col>
                        <Form.Control type='text' placeholder={this.COST_PLACEHOLDER} onChange={event =>
                            this.setState({supp3rec2cost: event.target.value})}/>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col>
                        <Form.Label>Supplier 4</Form.Label>
                    </Col>
                    <Col style={{width: '20%'}}>
                        <Form.Control placeholder={this.INPUT_PLACEHOLDER} onChange={event =>
                            this.setState({supplier4: event.target.value})}/>
                    </Col>
                    <Col>
                        <Form.Control type='text' placeholder={this.COST_PLACEHOLDER} onChange={event =>
                            this.setState({supp4rec1cost: event.target.value})}/>
                    </Col>
                    <Col>
                        <Form.Control type='text' placeholder={this.COST_PLACEHOLDER} onChange={event =>
                            this.setState({supp4rec2cost: event.target.value})}/>
                    </Col>
                </Form.Row>
            </Form>
        )
    };
}
