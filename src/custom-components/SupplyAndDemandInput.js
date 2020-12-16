import React from "react";
import {Form} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default class SupplyAndDemandInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            supplier1: 0,
            supplier2: 0,
            recipient1: 0,
            recipient2: 0,
            supplier3: 0,
            supplier4: 0,
            sup1rec1cost: 0,
            sup1rec2cost: 0,
            sup2rec1cost: 0,
            sup2rec2cost: 0,
            sup3rec1cost: 0,
            sup3rec2cost: 0,
            sup4rec1cost: 0,
            sup4rec2cost: 0,
            supplier1fee: 0,
            supplier2fee: 0,
            recipient1fee: 0,
            recipient2fee: 0,
            supplier3fee: 0,
            supplier4fee: 0,
            response: {}
        };
        this.isSupplyEqualToDemand = this.isSupplyEqualToDemand.bind(this);
    }

    isSupplyEqualToDemand() {
        const suppliers = parseFloat(this.state.supplier1) + parseFloat(this.state.supplier2) +
            parseFloat(this.state.supplier3) + parseFloat(this.state.supplier4);
        const recipinets = parseFloat(this.state.recipient1) + parseFloat(this.state.recipient2);

        return suppliers === recipinets && suppliers > 0 && recipinets > 0;
    }
    INPUT_PLACEHOLDER = "Value";
    COST_PLACEHOLDER = "cost";

    render() {
        const {calculateFunction} = this.props;

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
                    <Col>
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
                    <Col>
                        <Form.Control type='text' style={{backgroundColor: 'lightSkyBlue', placeholder: 'white'}}
                                      placeholder={"fee"} onChange={event =>
                            this.setState({supplier1fee: event.target.value})}/>
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
                <Col>
                    <Form.Control type='text' style={{backgroundColor: 'lightSkyBlue'}}
                                  placeholder={"fee"} onChange={event =>
                        this.setState({supplier2fee: event.target.value})}/>
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
                    <Col>
                        <Form.Control type='text' placeholder={"fee"} style={{backgroundColor: 'lightSkyBlue'}} onChange={event =>
                            this.setState({supplier3fee: event.target.value})}/>
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
                        <Form.Control type='text' placeholder={this.COST_PLACEHOLDER}  onChange={event =>
                            this.setState({supp4rec2cost: event.target.value})}/>
                    </Col>
                    <Col>
                        <Form.Control type='text' placeholder={"fee"}
                                      style={{backgroundColor: 'lightSkyBlue'}} onChange={event =>
                            this.setState({supplier4fee: event.target.value})}/>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col>
                    </Col>
                    <Col>
                    </Col>
                    <Col>
                        <Form.Control type='text' style={{backgroundColor: 'lightSkyBlue'}}
                                      placeholder={"fee"} onChange={event =>
                            this.setState({recipient1fee: event.target.value})}/>
                    </Col>
                    <Col>
                        <Form.Control  type='text' style={{backgroundColor: 'lightSkyBlue'}}
                                      placeholder={"fee"} onChange={event =>
                            this.setState({recipient2fee: event.target.value})}/>
                    </Col>
                    <Col>
                    </Col>
                </Form.Row>
                {this.isSupplyEqualToDemand() &&
                <Button style={{backgroundColor: "red"}} onClick={() => calculateFunction({supplier1: this.state.supplier1,
                    supplier2: this.state.supplier2,
                    recipient1: this.state.recipient1,
                    recipient2: this.state.recipient2,
                    supplier3: this.state.supplier3,
                    supplier4: this.state.supplier4,
                    sup1rec1cost: this.state.sup1rec1cost,
                    sup1rec2cost: this.state.sup1rec2cost,
                    sup2rec1cost: this.state.sup2rec1cost,
                    sup2rec2cost: this.state.sup2rec2cost,
                    sup3rec1cost: this.state.sup3rec1cost,
                    sup3rec2cost: this.state.sup3rec2cost,
                    sup4rec1cost: this.state.sup4rec1cost,
                    sup4rec2cost: this.state.sup4rec2cost,
                    supplier1fee: this.state.supplier1fee,
                    supplier2fee: this.state.supplier2fee,
                    recipient1fee: this.state.recipient1fee,
                    recipient2fee: this.state.recipient2fee,
                    supplier3fee: this.state.supplier3fee,
                    supplier4fee: this.state.supplier4fee})}>Calculate</Button> }
            </Form>
        )
    };
}
