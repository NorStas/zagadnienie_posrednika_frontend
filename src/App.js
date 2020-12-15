import React from 'react';
import {Navbar} from "react-bootstrap";
import CustomAlert from "./custom-components/CustomAlert";
import GraphComponent from "./custom-components/GraphComponent";
import Button from "react-bootstrap/Button";
import SupplyAndDemandInput from "./custom-components/SupplyAndDemandInput";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            parametersFilled: false,
            supplyEqualToDemand: false,
            supplier1: "",
            supplier2: "",
            recipient1: "",
            recipient2: "",
            supplier3: "",
            supplier4: "",
            supplier1fee: "",
            supplier2fee: "",
            recipient1fee: "",
            recipient2fee: "",
            supplier3fee: "",
            supplier4fee: "",
            sup1rec1cost: "",
            sup1rec2cost: "",
            sup2rec1cost: "",
            sup2rec2cost: "",
            sup3rec1cost: "",
            sup3rec2cost: "",
            sup4rec1cost: "",
            sup4rec2cost: ""
        };
        this.InputRef = React.createRef();
        this.isSupplyEqualToDemand = this.isSupplyEqualToDemand.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }

    isSupplyEqualToDemand() {
        const suppliers = this.state.supplier1 + this.state.supplier2 + this.state.supplier3 + this.state.supplier4;
        const recipinets = this.state.recipient1 + this.state.recipient2;

        return suppliers === recipinets;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.onInputChange();
    }

    onInputChange() {
        const currentInput = this.InputRef.current;
        this.setState(currentInput.state);
        console.log(this.state);
    }

    calculate() {
        const selelrs = [this.state.supplier1, this.state.supplier2, this.state.supplier3, this.state.supplier4];
        const oneTimeFee = [this.state.supplier1fee, this.state.supplier2fee, this.state.supplier3fee, this.state.supplier4fee];
        const transportcost = [[this.state.sup1rec1cost, this.state.sup1rec2cost], [this.state.sup2rec1cost, this.state.sup2rec2cost], [this.state.sup3rec1cost, this.state.sup3rec2cost],
        [this.state.sup4rec1cost, this.state.sup4rec2cost]];
        const buyers = [this.state.recipient1, this.state.recipient2];
        const sellingPrice = [this.state.recipient1fee, this.state.recipient2fee];



    }

    render() {
        return(
            <div>
                <div>
                    <Navbar variant="dark" bg="dark">
                        <Navbar.Brand style={{fontSize: '40px'}}>Zagadnienie pośrednika</Navbar.Brand>
                        {this.state.parametersFilled && this.state.supplyEqualToDemand &&
                        <CustomAlert message='Supply is not equal to demand'/>
                        }
                    </Navbar>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', height: '100%'}}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                        height: '100%',
                        paddingLeft: '20px'
                    }}>
                        <p style={{fontSize: '30px', color: 'black'}}> Data</p>
                        <SupplyAndDemandInput style={{
                            display: 'flex',
                            flexDirection: 'row', float: 'left', width: '50%'
                        }} ref={this.InputRef}/>
                        {this.isSupplyEqualToDemand() && <Button variant="primary">Submit</Button>}
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', width: '100%'}}>
                        <GraphComponent/>
                    </div>
                </div>
            </div>
        );
    }
}
export default App
