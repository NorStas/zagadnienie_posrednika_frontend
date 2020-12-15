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
        this.calculate = this.calculate.bind(this);
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

    // calculate() {
    //     // const sellers = [this.state.supplier1, this.state.supplier2, this.state.supplier3, this.state.supplier4];
    //     // const oneTimeFee = [this.state.supplier1fee, this.state.supplier2fee, this.state.supplier3fee, this.state.supplier4fee];
    //     // const transportcost = [[this.state.sup1rec1cost, this.state.sup1rec2cost], [this.state.sup2rec1cost, this.state.sup2rec2cost], [this.state.sup3rec1cost, this.state.sup3rec2cost],
    //     // [this.state.sup4rec1cost, this.state.sup4rec2cost]];
    //     // const buyers = [this.state.recipient1, this.state.recipient2];
    //     // const sellingPrice = [this.state.recipient1fee, this.state.recipient2fee];
    //     const sellers = [15,12,13,20];
    //     //jednorazowe koszty zakupu
    //     const oneTimeFee = [12,12,12,12];
    //     //koszty transportu
    //     const transportcost = [[3,5],[12,6],[10,5],[4,13]];
    //     // popyt
    //     const  buyers = [30,30];
    //     //ceny sprzedazy
    //     const sellingPrice = [30,30];
    //     const income = [];
    //     const map = new Map();
    //
    //     for(let i = 0; i < 4; i++) {
    //         income[i] = [0, 0];
    //     }
    //
    //     for(let i=0; i<4; i++) {
    //        for(let j = 0; j < 2; j++) {
    //            income[i][j] = sellingPrice[j] - oneTimeFee[i] - transportcost[i][j];
    //
    //            if(j === 0) {
    //                map.set(((i + j) *2), income[i][j]);
    //            }
    //            if(j === 1) {
    //                map.set((i*2 + 1), income[i][j]);
    //            }
    //        }
    //     }
    //
    //     const reverseSortMap = new Map([...map.entries()].sort((a, b) => (a[1] > b[1] && 1)));
    //
    //     const grandFinale = [];
    //
    //     for(let i = 0; i < 4; i++) {
    //         grandFinale[i] = [0,0];
    //     }
    //
    //     for(let i = 0; buyers.length * sellers.length; i++) {
    //
    //         const k = Array.from(reverseSortMap)[0][0];
    //         reverseSortMap.delete(k);
    //         if (buyers[k%2] >= sellers[k/2]) {
    //             if(sellers[k/2]>0)
    //             {
    //                 grandFinale[k/2][k%2] =  sellers[k/2];
    //                 buyers[k%2] -= sellers[k/2];
    //                 sellers[k/2] = 0;
    //             }
    //         }
    //         else
    //         {
    //             if(buyers[k%2]>0)
    //             {
    //                 grandFinale[k/2][k%2] = buyers[k%2];
    //                 sellers[k/2] -= buyers[k%2];
    //                 buyers[k%2] = 0;
    //             }
    //         }
    //     }
    //     let sum = 0;
    //
    //     for(let i = 0; i < 4; i++) {
    //         for(let j = 0; j<2; j++) {
    //             sum = sum + income[i][j] * grandFinale[i][j];
    //         }
    //     }
    //     console.log(grandFinale[0][0] +"\t" + grandFinale[0][1] +"\t" );
    //     console.log(grandFinale[1][0] +"\t" + grandFinale[1][1] +"\t" );
    //     console.log(grandFinale[2][0] +"\t" + grandFinale[2][1] +"\t" );
    //     console.log(grandFinale[3][0] +"\t" + grandFinale[3][1] +"\t" );
    //     console.log("INCOME");
    //     console.log(income[0][0] +"\t" + income[0][1] +"\t" );
    //     console.log(income[1][0] +"\t" + income[1][1] +"\t" );
    //     console.log(income[2][0] +"\t" + income[2][1] +"\t" );
    //     console.log(income[3][0] +"\t" + income[3][1] +"\t" );
    //     console.log("suma rowna sie: "+sum);
    // }

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
                        {this.isSupplyEqualToDemand() && <Button variant="primary" onClick={() => this.calculate()}>
                            Submit</Button>}
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
