import React from "react";

export default class GraphComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {cost, paths} = this.props;
        return (
            <div>
                <p style={{fontSize: '30px', color: 'black'}}> Result</p>
                <p style={{fontSize: '30px', color: 'black'}}> Cost: `${cost}`</p>
            </div>
        )
    }
};
