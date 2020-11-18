import React from 'react';
import {Navbar} from "react-bootstrap";
import CustomAlert from "./custom-components/CustomAlert";
import SupplyAndDemandInput from "./custom-components/SupplyAndDemandInput";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            parametersFilled: false,
            supplyEqualToDemand: false
        }
    }

    isSupplyEqualToDemand(supply, demand) {
        return supply === demand;
    }

    getSuppliers() {

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
                <div style={{display: 'flex', flexDirection: 'row', width: '50%', marginLeft:'20px'}}>
                    <SupplyAndDemandInput style={{display: 'flex',
                        flexDirection:'row', float:'left', width:'50%'}}
                                          onClick={() => this.isSupplyEqualToDemand()}/>
                </div>
            </div>
    );
    }
}
export default App
