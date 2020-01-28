import React from 'react';
import { Card, CardHeader, CardBody, CardText } from 'reactstrap';

function CustomErrorBox (props){
    return (
        <Card>
            <CardHeader>Error</CardHeader>
            <CardBody>
                <CardText>
                    {props.err}
                </CardText>
            </CardBody>
        </Card>
    )};//end;

    export default CustomErrorBox;