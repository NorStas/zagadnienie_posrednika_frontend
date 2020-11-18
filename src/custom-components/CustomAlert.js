import React from "react";
import Alert from "react-bootstrap/Alert";

const CustomAlert = (props) => {
    const {message} = props;
    return (
        <Alert key="alert_id" variant="danger">
            {message}
        </Alert>
    )};

export default CustomAlert;
