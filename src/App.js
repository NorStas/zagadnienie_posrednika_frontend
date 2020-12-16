import React from 'react';
import {Navbar} from "react-bootstrap";
import CustomAlert from "./custom-components/CustomAlert";
import GraphComponent from "./custom-components/GraphComponent";
import Button from "react-bootstrap/Button";
import SupplyAndDemandInput from "./custom-components/SupplyAndDemandInput";
import axios from "axios";


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            parametersFilled: false,
            supplyEqualToDemand: false,
            supplier1: "",
            middlemanResponse: {},
            linearResponse: {}
        };
        this.calculateMiddleman = this.calculateMiddleman.bind(this);
        this.calculateLinear = this.calculateLinear.bind(this);

    }

    calculateMiddleman(data) {
        const header = {  'crossdomain': true};
        const json = JSON.stringify(data);
        axios.post(`http://localhost:3030/middleman`,{json}, {header})
            .then(res => {
                const responseData = res.data;
                this.setState({middlemanResponse: responseData});
                console.log(this.state);
            })
    }

    calculateLinear(data) {
        const header = {  'crossdomain': true};
        const json = JSON.stringify(data);
        axios.post(`http://localhost:3030/linear`,{json}, {header})
            .then(res => {
                const responseData = res.data;
                this.setState({linearResponse: responseData});
                console.log(this.state);
            })
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
                        <p style={{fontSize: '30px', color: 'black'}}> Middleman data</p>
                        <SupplyAndDemandInput style={{
                            display: 'flex',
                            flexDirection: 'row', float: 'left', width: '50%'
                        }} calculateFunction={(e) => this.calculateMiddleman(e)}/>
                        <p style={{fontSize: '30px', color: 'black'}}> Linear data</p>
                        <SupplyAndDemandInput style={{
                            display: 'flex',
                            flexDirection: 'row', float: 'left', width: '50%'
                        }} calculateFunction={(e) => this.calculateLinear(e)}/>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', width: '100%'}}>
                        <GraphComponent cost={this.state.middlemanResponse.value}
                        paths={this.state.middlemanResponse.key}/>
                    </div>
                </div>
            </div>
        );
    }
}
export default App
